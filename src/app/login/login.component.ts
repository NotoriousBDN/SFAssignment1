import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  submit(){
    
  let user = {username:this.username};
 this.httpClient.post(BACKEND_URL + '/login', user,  httpOptions)
// this.httpClient.post(BACKEND_URL + '/login', user)
    .subscribe((data:any)=>{
      alert("posting: " +JSON.stringify(user));

      //alert(data);
      alert("postRes: " +JSON.stringify(data));

      if (data.ok){
        alert("correct");
        //sessionStorage.setItem('userid', data.userid.toString());
        //sessionStorage.setItem('userlogin', data.ok.toString());
        //sessionStorage.setItem('username', data.username);
        //sessionStorage.setItem('userbirthdate', data.userbirthdate);
        //sessionStorage.setItem('userage', data.userage.toString());
        sessionStorage.setItem('user', data.username);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('groups', JSON.stringify(data.groups));
        alert(data.groups.length);
        
        //var testing = [];
        for (let i = 0; i < data.groups.length; i++) {
          alert(data.groups[i].group);
          sessionStorage.setItem('group', (data.groups[i].group));
        }

        let group1Name = JSON.stringify(data.groups[0].group);
        let group1Rooms = JSON.stringify(data.groups[0].rooms);
        let group2Name = JSON.stringify(data.groups[1].group);
        let group2Rooms = JSON.stringify(data.groups[1].rooms);
        sessionStorage.setItem('group1Name', group1Name);
        sessionStorage.setItem('group1Rooms', group1Rooms);
        alert(group1Name);
        alert(group1Rooms);
        let rooms = JSON.stringify(data.groups);
        //sessionStorage.setItem('rooms', data.group[0].rooms[0]);
        //let rooms = sessionStorage.getItem('rooms');
        //sessionStorage.setItem('userList', JSON.stringify(data.userList))

        this.router.navigateByUrl("/account");
      }
      else { alert("email or password incorrect");}


    })



    
  }

}
