import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importez vos composants, services, gardes et modules ici
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './component/services/authentication.service';
import { UserService } from './component/services/user.service';
import { DataService } from './component/services/data.service';
import { AuthGuard } from './guard/authentication.guard';
import { CardService } from './component/card/service/card.service';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    DataService,
    AuthGuard,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
