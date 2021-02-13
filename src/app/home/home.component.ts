import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Array<any>=[
    {id: 1, channelName: 'Channel Name 1', title: 'Video Title 1', views: '45k views', publishedDate: '1 week ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center' },
    {id: 2, channelName: 'Channel Name 2', title: 'Video Title 2', views: '105k views', publishedDate: '4 day ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'},
    {id: 3, channelName: 'Channel Name 3', title: 'Video Title 3', views: '806k views', publishedDate: '2 week ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'},
    {id: 4, channelName: 'Channel Name 4', title: 'Video Title 4', views: '1.1M views', publishedDate: '1 day ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'},
    {id: 5, channelName: 'Channel Name 5', title: 'Video Title 5', views: '365k views', publishedDate: '2 week ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'},
    {id: 6, channelName: 'Channel Name 6', title: 'Video Title 6', views: '10.4M views', publishedDate:' 1 month ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'},
    {id: 7, channelName: 'Channel Name 7', title: 'Video Title 7', views: '4.4M views', publishedDate: '2 week ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'},
    {id: 8, channelName: 'Channel Name 8', title: 'Video Title 8', views: '79K views', publishedDate: '3 week ago', thumbnail: 'http://unsplash.it/250/150?gravity=center', channelIcon: 'http://unsplash.it/36/36?gravity=center'}
  ];

  breakpoint: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.breakpoint = ( window.innerWidth <= 1279) ? ((window.innerWidth >= 960) ? 3 : (window.innerWidth >= 600) ? 2 : 1 ) : 4;
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 1279) ? ((event.target.innerWidth >= 960) ? 3 : (event.target.innerWidth >= 600) ? 2 : 1 ) : 4;
  }

}

