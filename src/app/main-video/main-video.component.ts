import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})
export class MainVideoComponent implements OnInit {

  title = "VideoList";
  VideoList = [
    {
      name : "item 1",
      embed : `wJ4qczJwdU8`
    },
    {
      name : "item 2",
      embed : `wJ4qczJwdU8`
    }
  ]
  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getEmbededUrl(item:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item.embed);
  }

}
