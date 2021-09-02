import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse
  } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { mergeMap, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,
        private toastr: ToastrService) {};

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            mergeMap((event: any) => {
                if (event instanceof HttpResponse){
                    //一些操作...
                }
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => {
                switch (err.status) {
                    case 401:
                        this.toastr.error("用户身份校验失效!请重新登录!");
                        this.router.navigate(['/login']);
                        break;
                    case 403:
                        this.toastr.error("访问权限不足!");
                        this.router.navigate(['/home']);
                        break;
                    case 404:
                        this.router.navigate(['/404']);
                        break;
                }
                return throwError(err);
            })
        );
    }
    
}