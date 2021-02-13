import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  homeStatus: boolean = true;
  trendingStatus: boolean = false;
  subcriptionStatus: boolean = false;
  libraryStatus: boolean = false;
  notificationStatus: boolean = false;

  onHome(){
    this.homeStatus = true;
    this.trendingStatus = false;
    this.subcriptionStatus = false;
    this.libraryStatus = false;
    this.notificationStatus = false;
  }

  onTrending(){
    this.homeStatus = false;
    this.trendingStatus = true;
    this.subcriptionStatus = false;
    this.libraryStatus = false;
    this.notificationStatus = false;
  }

  onSubcription(){
    this.homeStatus = false;
    this.trendingStatus = false;
    this.subcriptionStatus = true;
    this.libraryStatus = false;
    this.notificationStatus = false;
  }

  onLibrary(){
    this.homeStatus = false;
    this.trendingStatus = false;
    this.subcriptionStatus = false;
    this.libraryStatus = true;
    this.notificationStatus = false;
  }

  onNotifications(){
    this.homeStatus = false;
    this.trendingStatus = false;
    this.subcriptionStatus = false;
    this.libraryStatus = false;
    this.notificationStatus = true;
  }

}
