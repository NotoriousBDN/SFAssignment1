import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoomViewComponent } from './room-view/room-view.component';
import { AdminComponent } from './admin/admin.component';
import { GroupsComponent } from './groups/groups.component';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomViewComponent,
    AdminComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // for http method
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
