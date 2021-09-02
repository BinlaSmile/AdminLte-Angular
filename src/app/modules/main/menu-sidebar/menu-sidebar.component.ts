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
        .subscribe(() => {
            this.removeNavAllActive();
            this.setNavActive();
        });
    }

    ngOnInit(): void {
    }
    
    removeNavAllActive(){
        let activeLinkList = document.querySelector('nav.mt-2').querySelectorAll('a.nav-link.active');
        activeLinkList.forEach(r=>{
            this.render.removeClass(r,'active');
        });
    }
    setNavActive() {
        let currentUrl = this.router.url;
        let currentNode = document.querySelector('nav.mt-2').querySelector('[ng-reflect-router-link="'+currentUrl+'"]');
        while(!currentNode && !(currentUrl==="" || currentUrl == null)){
            currentUrl = currentUrl.replace(/(.*)\/{1}.*/,"$1");
            currentNode = document.querySelector('nav.mt-2').querySelector('[ng-reflect-router-link="'+currentUrl+'"]');
        }

        if(currentNode){
            while(!(currentNode.nodeName === "NAV" && currentNode.className ==="mt-2")){
                if(currentNode.nodeName === "LI" && currentNode.className.indexOf("nav-item")!=-1){
                    let activeLink = currentNode.querySelector('a.nav-link');
                    this.render.addClass(activeLink,'active');
                }
                currentNode = this.render.parentNode(currentNode)
            }
        }
    }
}
