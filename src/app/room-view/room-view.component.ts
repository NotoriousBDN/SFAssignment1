import { Component, OnInit } from '@angular/core';

import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {

  constructor(
    private accountComponent: AccountComponent
  ) { }

  ngOnInit(): void {
  }

  apple = this.accountComponent.rooms;


}
