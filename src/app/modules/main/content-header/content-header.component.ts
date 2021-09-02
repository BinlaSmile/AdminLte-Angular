import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { IBreadCrumb } from './breadcrumb.interface';
@Component({
    selector: 'app-content-header',
    templateUrl: './content-header.component.html',
    styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {
  
    public breadcrumbs: IBreadCrumb[];
    public pageTitle: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute);
      });
    }
    
    buildBreadCrumb(route: ActivatedRoute,url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
      let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.title : '';
      let path = route.routeConfig ? route.routeConfig.path : '';
      const nextUrl = path ? `${url}/${path}` : url;

      const breadcrumb: IBreadCrumb = {
          title: label,
          path: nextUrl,
      };
      const newBreadcrumbs = breadcrumb.title && route.outlet === 'primary' ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];

      if (route.firstChild) {
          return this.buildBreadCrumb(route.firstChild,nextUrl, newBreadcrumbs);
      }else{
        this.pageTitle = label;
      }
      return newBreadcrumbs;
  }
}