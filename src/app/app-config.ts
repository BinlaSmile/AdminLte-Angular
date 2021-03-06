import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

    // API Related configs
    public apiPort:string = "8080";
    public apiProtocol:string;
    public apiHostName:string;
    public baseApiPath:string;

    constructor(){
        if (this.apiProtocol===undefined){
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName===undefined){
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort===undefined){
            this.apiPort = window.location.port;
        }
        this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort +"/";
    }
}