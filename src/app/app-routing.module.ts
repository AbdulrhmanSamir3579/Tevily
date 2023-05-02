import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { DestinationComponent } from './core/components/destination/destination.component';
import { DestinationDetailsComponent } from './core/components/destination-details/destination-details.component';
import { ToursDetailsComponent } from './core/components/tours-details/tours-details.component';
import { AboutComponent } from './core/components/about/about.component';
import { NewsComponent } from './core/components/news/news.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { NewsDetailsComponent } from './core/components/news-details/news-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'destination/:dist', component: DestinationDetailsComponent },
  { path: 'tours', component: ToursDetailsComponent },
  { path: 'tours/:id', component: ToursDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-details', component: NewsDetailsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./shared/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
