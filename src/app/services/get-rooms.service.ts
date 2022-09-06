import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetRoomsService {

  constructor() { }
  //Get Groups returns both Groups + their channels
  

  getRooms(username: string, group: string) {
    let a = {username};
    let b = {group};
    return [a, b];
  }
}
