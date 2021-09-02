import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public titleBase:string = "Adminlte-Angular";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.routerTitle();
  }

  routerTitle(){
    this.router.events
          .pipe(filter(event => event instanceof NavigationEnd))
          .pipe(map(() => this.activatedRoute))
          .pipe(
            map(route => {
              while (route.firstChild) {
                route = route.firstChild;
              }
              return route;
            }))
          .pipe(filter(route => 
            route.outlet === 'primary'
            ))
          .pipe(mergeMap(route => route.data))
          .subscribe(event => {
            let title = this.titleBase;
            if(event['title'] && event['title']!=undefined)
              title = event['title'] + " - " + this.titleBase
            this.titleService.setTitle(title);
          });
  }
}
