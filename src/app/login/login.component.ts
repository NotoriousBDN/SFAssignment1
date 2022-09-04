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
        sessionStorage.setItem('group', data.group);
        sessionStorage.setItem('rooms', data.rooms);
        sessionStorage.setItem('userList', data.userList)

        this.router.navigateByUrl("/account");
      }
      else { alert("email or password incorrect");}


    })



    
  }

}
