import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {CheckUserService} from '../services/check-user.service';
import {GetGroupsService} from '../services/get-groups.service';
import {GetRoomsService} from '../services/get-rooms.service';
import {GetUsersService} from '../services/get-users.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'https://s5217904.elf.ict.griffith.edu.au:3001';
// for angular http methods

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';

  role = '';
  
  userLogin = "";

  b = {};

  c = {};

  d = {};

  userInfo = {};

  userGroup = {};

  groupName = "";

  loggedIn = false;

  

  constructor(private router:Router, 
    private httpClient: HttpClient,
    private checkUserService: CheckUserService,
    private getGroupsService: GetGroupsService,
    private getRoomsService: GetRoomsService,
    private getUsersService: GetUsersService) { }

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') == 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    localStorage.clear();
  }

  getUser() {
    this.b = this.checkUserService.getUser(this.username);
    console.log(this.b);
    this.httpClient.post(BACKEND_URL + '/getUser', this.b,  httpOptions)
    .subscribe((data:any)=>{
      this.checkUserService.userValue = (data);
      console.log(data);
      console.log(this.checkUserService.userValue);
      localStorage.setItem('user', data.username);
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('role', data.role);
      console.log(localStorage.getItem('loggedIn'));
      console.log(localStorage.getItem('user'));
      console.log(localStorage.getItem('role'));
    });
    this.getGroup();
  }

  getGroup() {
  this.c = this.getGroupsService.getGroup(this.username);
  this.httpClient.post(BACKEND_URL + '/getGroup', this.c,  httpOptions)
    .subscribe((data:any)=>{
      this.getGroupsService.groupList = data;
      console.log(data);
    });
  }

  getUsers() {
    this.d = this.getUsersService.getUsers(this.username);
    console.log(this.d);
    this.httpClient.post(BACKEND_URL + '/getUsers', this.d,  httpOptions)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(this.d));
      alert("postRes: " +JSON.stringify(data));
      //alert("postRes: " +JSON.stringify(data));
      this.getUsersService.userList = data;
    });
  }

}
