import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/components/nav/nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';
import { DestinationComponent } from './core/components/destination/destination.component';
import { DestinationDetailsComponent } from './core/components/destination-details/destination-details.component';
import { ToursComponent } from './core/components/tours/tours.component';
import { ToursDetailsComponent } from './core/components/tours-details/tours-details.component';
import { AboutComponent } from './core/components/about/about.component';
import { NewsComponent } from './core/components/news/news.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { SearchPipe } from './core/pipes/search.pipe';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { RouterModule  } from "@angular/router";
import { CarouselModule } from 'ngx-owl-carousel-o'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NewsDetailsComponent } from './core/components/news-details/news-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    DestinationComponent,
    DestinationDetailsComponent,
    ToursComponent,
    ToursDetailsComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    SearchPipe,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
