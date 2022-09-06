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

  isLoggedIn = false;

  a = sessionStorage.getItem('user');

  b = {};

  c = {};

  d = {};

  userInfo = {};

  userGroup = {};

  groupName = "";

  

  constructor(private router:Router, 
    private httpClient: HttpClient,
    private checkUserService: CheckUserService,
    private getGroupsService: GetGroupsService,
    private getRoomsService: GetRoomsService,
    private getUsersService: GetUsersService) { }

  ngOnInit(): void {
    if (this.a != null) {
      this.isLoggedIn = true;
      this.userLogin = this.a;
    }
  }

  getUser() {
    this.b = this.checkUserService.getUser(this.username);
    console.log(this.b);
    this.httpClient.post(BACKEND_URL + '/getUser', this.b,  httpOptions)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(this.b));
      alert("User Info: " +JSON.stringify(data));
      this.userInfo = data; //USERINFO HOLDS THE RELATED INFO FROM JSON FILE FOR USER
      console.log(this.userInfo);
      console.log(JSON.stringify(this.userInfo));
      //this.userInfo = JSON.stringify(this.userInfo);
      this.checkUserService.userValue = this.userInfo;

      //THIS MAKES LOGIN WORK WITHOUT CHECKING DATA = OK
      sessionStorage.setItem('user', data.username);
      console.log(sessionStorage.getItem('user'));
      //IMPLEMENT DATA = OK TO ENSURE EVERYTHING WORKS
      


    });
  }

  getGroup() {
  this.c = this.getGroupsService.getGroup(this.username);
  this.httpClient.post(BACKEND_URL + '/getGroup', this.c,  httpOptions)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(this.c));
      alert("postRes: " +JSON.stringify(data));
      this.getGroupsService.groupList = data;
    });
  }

  getUsers() {
    this.d = this.getUsersService.getUsers(this.username);
    console.log(this.d);
    //NEED TO PASS GROUP NAME THROUGH
    //WORKS IF GROUP NAME IS IN JS FILE
    //NEED TO FIND HOW TO PASS VARIABLE
    this.httpClient.post(BACKEND_URL + '/getUsers', this.d,  httpOptions)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(this.d));
      alert("postRes: " +JSON.stringify(data));
      //alert("postRes: " +JSON.stringify(data));
      this.getUsersService.userList = data;
    });
  }

  submit(){
    
  
  
  let user = {username:this.username};


 //this.httpClient.post(BACKEND_URL + '/login', user,  httpOptions)
 this.httpClient.post(BACKEND_URL + '/login', user,  httpOptions)
// this.httpClient.post(BACKEND_URL + '/login', user)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(user));

      //alert(data);
      alert("postRes: " +JSON.stringify(data));

      if (data.ok){
        //alert("correct");
        this.isLoggedIn = true;
        if (this.a == null) {
          this.isLoggedIn = true;
         // alert("is null");
        }
        //sessionStorage.setItem('userid', data.userid.toString());
        //sessionStorage.setItem('userlogin', data.ok.toString());
        //sessionStorage.setItem('username', data.username);
        //sessionStorage.setItem('userbirthdate', data.userbirthdate);
        //sessionStorage.setItem('userage', data.userage.toString());
        this.username = data.username;
        this.role = data.role;
        sessionStorage.setItem('user', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('groups', (data.groups));
        sessionStorage.setItem('loggedIn', "True");
       // alert(JSON.stringify(data.groups));
        //alert(data.groups.length);
        //this.setItem();
        //var testing = [];
        for (let i = 0; i < data.groups.length; i++) {
         // alert(data.groups[i].group);
          sessionStorage.setItem('group', (data.groups[i].group));
        }

        let group1Name = JSON.stringify(data.groups[0].group);
        let group1Rooms = JSON.stringify(data.groups[0].rooms);
        let group1Users = JSON.stringify(data.groups[0].userList);
        let group2Name = JSON.stringify(data.groups[1].group);
        let group2Rooms = JSON.stringify(data.groups[1].rooms);
        sessionStorage.setItem('group1Name', group1Name);
        sessionStorage.setItem('group1Rooms', group1Rooms);
        sessionStorage.setItem('group1Users', group1Users);
       // alert(group1Name);
        //alert(group1Rooms);
        //alert(group1Users);
        let rooms = JSON.stringify(data.groups);
        //sessionStorage.setItem('rooms', data.group[0].rooms[0]);
        //let rooms = sessionStorage.getItem('rooms');
        //sessionStorage.setItem('userList', JSON.stringify(data.userList))

        this.router.navigateByUrl("/account");
      }
      else { 
        alert("This username does not exist");
        this.isLoggedIn = false;
      }
  


    });



    
  }


  /*

  setItem() {
    this.checkUserService.setItem(this.username, this.role)
    console.log(JSON.stringify(this.checkUserService.jsonItems));
  }

  */

  
  
}
