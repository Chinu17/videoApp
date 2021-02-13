import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import { MainVideoComponent } from './main-video/main-video.component';
import { CreateComponent } from './create/create.component';
import { AllAppComponent } from './all-app/all-app.component';
import { TestComponent } from './test/test.component';
import { ViewComponent } from './view/view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TrendingComponent } from './trending/trending.component';
import { LikedVideoComponent } from './liked-video/liked-video.component';
import { SubcriptionsComponent } from './subcriptions/subcriptions.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { HistoryComponent } from './history/history.component';
import { YourVideosComponent } from './your-videos/your-videos.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationComponent,
    SignupComponent,
    SearchBarComponent,
    MainVideoComponent,
    CreateComponent,
    AllAppComponent,
    TestComponent,
    ViewComponent,
    TrendingComponent,
    LikedVideoComponent,
    SubcriptionsComponent,
    HomeComponent,
    LibraryComponent,
    HistoryComponent,
    YourVideosComponent,
    WatchLaterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
