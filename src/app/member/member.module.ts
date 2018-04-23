import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MemberRoutingModule} from './member-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import { MemberListComponent } from './member-list/member-list.component';
import { ContactComponent } from './contact/contact.component';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MemberRoutingModule,
    NgPipesModule
  ],
  exports: [],
  declarations: [LoginComponent, MemberListComponent, ContactComponent]
})
export class MemberModule {
}
