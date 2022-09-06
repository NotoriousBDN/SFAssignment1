import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {ProfileComponent} from './profile/profile.component';
import {RoomViewComponent} from './room-view/room-view.component';
import {AdminComponent} from './admin/admin.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path:'account', component: AccountComponent},
  {path:'profile', component:ProfileComponent},
  {path:'roomView', component:RoomViewComponent},
  {path:'admin', component:AdminComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
