import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

import {FormsModule} from "@angular/forms";

import {AuthenticationService} from "./services/authentication.service";
import {UserService} from "./services/user.service";
import {AuthInterceptor} from "../interceptors/auth.interceptor";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {NotificationModule} from "./notification.module";
import {NotificationService} from "./services/notification.service";
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NotificationModule,

    ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, UserService,UserComponent,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}], // on creer plusieurs instance dans l'injector , pour pouvoir repandre plusieurs mini instance dans les diff classes
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
