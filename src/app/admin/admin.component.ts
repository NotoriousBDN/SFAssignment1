import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const BACKEND_URL = 'http://localhost:3000';
const BACKEND_URL = 'https://s5217904.elf.ict.griffith.edu.au:3001';

import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { Userobj } from '../userobj';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userid = 0;
  username = "";
  useremail = "";
  userrole = 0;
  groupname = "";
  roomname = "";

  constructor(
    private router: Router, 
    private httpClient: HttpClient) 
    { }

  ngOnInit(): void {
  }

  createUser() {
    let userobj = {
      'userid': this.userid,
      'username': this.username, 
      'useremail': this.useremail, 
      'userrole': this.userrole
    }
    console.log(userobj);
    this.httpClient.post<Userobj[]>(BACKEND_URL + '/createUser', userobj,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});
  }

  editUser() {
    let userobj = {
      'userid': this.userid,
      'username': this.username, 
      'useremail': this.useremail, 
      'userrole': this.userrole
    }
    console.log(userobj);
    this.httpClient.post<Userobj[]>(BACKEND_URL + '/editUser', userobj,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});
  }

  deleteUser() {
    let username = {'username': this.username};
    console.log(username);
    this.httpClient.post<Userobj[]>(BACKEND_URL + '/deleteUser', username,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});
  }

  createGroup() {
    let groupname = {'groupname': this.groupname};
    console.log(groupname);
    this.httpClient.post<Userobj[]>(BACKEND_URL + '/createGroup', groupname,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});
  }

}
