import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  jsonItems = {};


  getUser(username: string) {
    let a = {username};
    return a;
  }

  userValue = {};

}
