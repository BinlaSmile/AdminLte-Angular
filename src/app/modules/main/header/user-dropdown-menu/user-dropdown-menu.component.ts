import {
    Component,
    OnInit,
    ViewChild,
    HostListener,
    ElementRef,
    Renderer2
} from '@angular/core';
import {AppService} from '@services/app.service';
import {DateTime} from 'luxon';

@Component({
    selector: 'app-user-dropdown-menu',
    templateUrl: './user-dropdown-menu.component.html',
    styleUrls: ['./user-dropdown-menu.component.scss','../header.component.scss']
})
export class UserDropdownMenuComponent implements OnInit {
    public user;
    
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private appService: AppService
    ) {}

    ngOnInit(): void {
        this.user = this.appService.user;
    }

    logout() {
        this.appService.logout();
    }

    formatDate(date) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
