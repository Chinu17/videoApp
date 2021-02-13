import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { LikedVideoComponent } from './liked-video/liked-video.component';
import { SubcriptionsComponent } from './subcriptions/subcriptions.component';
import { TrendingComponent } from './trending/trending.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'trending', component: TrendingComponent},
  { path: 'likedvideos', component: LikedVideoComponent},
  { path: 'subcriptions', component: SubcriptionsComponent},
  { path: 'library', component: LibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }