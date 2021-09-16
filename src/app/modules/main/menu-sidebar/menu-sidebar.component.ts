import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    public menuList = [
        {
            title:"首页",
            icon:"fa-tachometer-alt",
            router:'/home',
            children:null
        },
        {
            title:"一级菜单",
            icon:"fa-th-large",
            router:'/level1',
            children:[
                {
                    title:"二级菜单",
                    router:'/leve2',
                    children:null
                },
                {
                    title:"二级菜单",
                    router:'/leve2-2',
                    children:[
                        {
                            title:"三级菜单",
                            router:'/leve3'
                        },
                    ]
                },
            ]
        }
    ];
    
    constructor(private router: Router, private render: Renderer2, private activatedRoute: ActivatedRoute){
        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .pipe(map(() => this.activatedRoute))
        .subscribe((res) => {
            const routers = res?.snapshot['_routerState']?.url?.split('/').map(o=> {
                return o ? '/'+o : o;
            }) ??[];
            this.menuList.forEach(element => {
                this.changeCss(element,routers);
            });
            
        });
    }

    ngOnInit(): void {
    }

    changeCss(element:any,routers :string[]){
        element.currentCss = routers.includes(element.router)?'active':'';
        if(element.children){   
            element.children.forEach(e => {
                this.changeCss(e,routers);
            });
        }
    }
}
