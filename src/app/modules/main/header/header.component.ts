import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public darkMode: any;

    constructor(private appService: AppService) {
        this.appService.darkModeObservable.subscribe(r=>this.darkMode = r);
    }

    ngOnInit() {
        this.darkMode = this.appService.darkMode;
    }

    changeTheme(){
        this.appService.changeTheme();
    }
}
