import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConfig} from '@/app-config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private appConfig:AppConfig,
        private http: HttpClient) {}
        
    get(url:string, urlParams?:HttpParams):Observable<any>{
        return this.http.get(this.appConfig.baseApiPath + url, {params:urlParams});
    }
    
    post(url:string, body:Object):Observable<any>{
        return this.http.post(this.appConfig.baseApiPath + url, body);
    }

    patch(url:string, body:Object):Observable<any>{
        return this.http.patch(this.appConfig.baseApiPath + url, body);
    }

    put(url:string, body:Object):Observable<any>{
        return this.http.put(this.appConfig.baseApiPath + url, body);
    }
    
    delete(url:string, urlParams?:HttpParams):Observable<any>{
        return this.http.delete(this.appConfig.baseApiPath + url, {params:urlParams});
    }
}
