import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";
import {MemberListComponent} from "./member-list/member-list.component";
import {AuthGuardService} from "../shared/auth/auth-guard.service";

const routes: Routes = [
  {
    path: 'members',
    children: [
      {path: '', component: MemberListComponent, canActivate: [AuthGuardService]},
      {path: 'login', component: LoginComponent},
      {path: 'contact', component: ContactComponent, canActivate: [AuthGuardService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {
}
