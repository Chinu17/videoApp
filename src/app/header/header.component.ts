import { Component, EventEmitter, Output} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<boolean>();
  feature: boolean = false;
  public showSearchPane: boolean = false;

  onSelect(){
    //this.featureSelected.emit(feature);
    if(this.feature==false){
      this.feature=true;
      console.log(this.feature);
      this.featureSelected.emit(this.feature);
    }
    else{
      this.feature=false;
      console.log(this.feature);
      this.featureSelected.emit(this.feature);
    }
    
  }

  searchItems(styleDisplay: string): void {
    console.log(styleDisplay);
    if (styleDisplay === 'none') {
      this.showSearchPane = !this.showSearchPane;
    } else {
      this.doSearch();
    }
  }

  doSearch(): void {
    console.log('Do actual search');
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
