declare var $: any;
import {Component, OnInit, Renderer2} from '@angular/core';
import {AppService} from '@services/app.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public darkMode: any;
    constructor(private renderer: Renderer2, private appService: AppService) {
        this.appService.darkModeObservable.subscribe(r=> this.darkMode = r);
    }

    ngOnInit() {
        $('#main-body').Layout();
        this.darkMode = this.appService.darkMode;
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
