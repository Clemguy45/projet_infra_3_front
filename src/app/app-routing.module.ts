import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {AuthenticationGuard} from "./guard/authentication.guard";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user/management', component: UserComponent , canActivate:[AuthenticationGuard]},
  {path: '', redirectTo: '/login', pathMatch:'full' },
  {path: '**', redirectTo: 'user/management' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
