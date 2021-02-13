import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications = 5;
  constructor() { }

  ngOnInit(): void {
  }

  onCheck(){
    this.notifications = 0;
  }

}
