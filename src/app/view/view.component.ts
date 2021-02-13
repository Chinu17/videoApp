import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  loadedFeature: boolean = false;
  homeStatus: boolean = true;
  trendingStatus: boolean = false;
  subcriptionStatus: boolean = false;
  libraryStatus: boolean = false;

  onNavigate(feature: boolean){
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }

  onHome(){
    this.homeStatus = true;
    this.trendingStatus = false;
    this.subcriptionStatus = false;
    this.libraryStatus = false;
  }

  onTrending(){
    this.homeStatus = false;
    this.trendingStatus = true;
    this.subcriptionStatus = false;
    this.libraryStatus = false;
  }

  onSubcription(){
    this.homeStatus = false;
    this.trendingStatus = false;
    this.subcriptionStatus = true;
    this.libraryStatus = false;
  }

  onLibrary(){
    this.homeStatus = false;
    this.trendingStatus = false;
    this.subcriptionStatus = false;
    this.libraryStatus = true;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
