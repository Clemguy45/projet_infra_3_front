import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { AuthGuard } from './guard/authentication.guard';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'user/:username', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
