import { Component, OnInit } from '@angular/core';

import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
  
  //username = sessionStorage.getItem('username');
  //birthdate = sessionStorage.getItem('userbirthdate');
  //age = sessionStorage.getItem('userage');
  user = sessionStorage.getItem('user');
  role = sessionStorage.getItem('role');
  group = sessionStorage.getItem('group');
  rooms = sessionStorage.getItem('rooms');
  userList = sessionStorage.getItem('userList');

}



