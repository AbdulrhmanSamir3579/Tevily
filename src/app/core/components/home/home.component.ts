import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 100,
      autoplay:true,
      autoplayTimeout:5000,
      autoplaySpeed:1000,
      navText: ['', ''],
      items: 1,
    }
  
}
