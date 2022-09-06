import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  jsonItems = {};

  setItem(key, item) {
    this.jsonItems[key] = item;
  }

  getItem(key) {
    return this.jsonItems[key];
  }

  getUser(username: string) {
    let a = {username};
    return a;
  }

  userValue;

}
