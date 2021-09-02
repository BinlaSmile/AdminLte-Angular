import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = {
        code:"admin",
        name:"管理员",
        pic:""
    };
    public darkMode: boolean;
    private darkModeSubject = new Subject();
    public darkModeObservable = this.darkModeSubject.asObservable();

    constructor(private router: Router, private toastr: ToastrService,private apiService:ApiService) {
        this.darkMode = localStorage.getItem("dark-mode") ==="true";
    }
    

    loginByAuth({userSymbol, password}) {
        if(userSymbol==="admin" && password ==="admin"){
            localStorage.setItem("token","admin-test-token");
            this.router.navigate(['/home']);
        }
        else{
            this.toastr.error("用户名或密码错误");
        }
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    changeTheme(){
        this.darkMode = !this.darkMode;
        this.darkModeSubject.next(this.darkMode);
        localStorage.setItem("dark-mode",this.darkMode?"true":"false");
    }
}
