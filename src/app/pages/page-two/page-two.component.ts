import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-two',
    templateUrl: './page-two.component.html',
    styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
    constructor(private router: Router){

    }
    goToThird(){
        this.router.navigate(['/level1/leve2-2/leve3/inner-page']);
    }
}