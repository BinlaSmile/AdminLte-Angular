import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule,
        HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {ToastrModule} from 'ngx-toastr';
import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';

import {AppButtonComponent} from './components/app-button/app-button.component';
import {LoginComponent} from '@modules/login/login.component';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import { AppConfig } from './app-config';

registerLocaleData(localeEn, 'zn-CH');

@NgModule({
  declarations: [
    AppComponent,
    AppButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
