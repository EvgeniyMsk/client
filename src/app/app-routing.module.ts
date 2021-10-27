import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {PersonComponent} from "./person/person.component";
import {AuthGuardService} from "./helper/auth-guard.service";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'profile', component: PersonComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
