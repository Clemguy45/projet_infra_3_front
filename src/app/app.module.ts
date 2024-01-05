import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { CardService } from './component/card/service/card.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
