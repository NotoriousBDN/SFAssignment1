import { Component, OnInit } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';

import { Userobj } from '../userobj';

import { LoginComponent } from '../login/login.component';

import {CheckUserService} from '../services/check-user.service';
import {GetGroupsService} from '../services/get-groups.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})


export class AccountComponent implements OnInit {


  constructor(
    private loginComponent: LoginComponent,
    private checkUserService: CheckUserService,
    private getGroupsService: GetGroupsService

  ) {  }


  userInfo = JSON.stringify(this.checkUserService.userValue);

  groupInfo = JSON.stringify(this.getGroupsService.groupList);

  ngOnInit(): void {
    //this.iterateRooms();
    (this.loginComponent.userInfo);
    console.log(this.checkUserService.userValue);
  }

  //userInfo = JSON.stringify(this.loginComponent.userInfo);

  
  //username = sessionStorage.getItem('username');
  //birthdate = sessionStorage.getItem('userbirthdate');
  //age = sessionStorage.getItem('userage');
  user = sessionStorage.getItem('user');
  role = sessionStorage.getItem('role');
  group = sessionStorage.getItem('group1Name');
  test = sessionStorage.getItem('group');
  rooms = sessionStorage.getItem('group1Rooms');
  userList = sessionStorage.getItem('group1Users');

  groups = sessionStorage.getItem('groups');

  //this.groups = find(x => x.id === '45').foo;

  //test100 = rooms.slice[0];

  roomList: string[] = ["1", "2", "3"];

  roomList2: string = this.rooms!;




  iterateRooms() {
    //alert(this.rooms);
    //alert(this.roomList2[20]);
    //alert(this.roomList2.split(",", 2));
    this.roomList2 = (this.roomList2.replace("[", ""));
    this.roomList2 = (this.roomList2.replace("]", ""));
    this.roomList2 = (this.roomList2.replace(",", ""));
    this.roomList2 = (this.roomList2.replace("", ""));
    //alert(this.roomList2);
    //this.test1 = JSON.parse(sessionStorage.getItem('group1Rooms'));
    for (let i = 0; i < 4; i++) {
      //alert(i);
      //alert(this.rooms[1]);
    }






  }

}



