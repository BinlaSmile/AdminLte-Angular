import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[menu-sidebar]'
})
export class MenuSidebarDirective{
    constructor(private el:ElementRef, private render: Renderer2){
    }

    @HostListener('click',['$event']) onClick(event: MouseEvent){
    }

}