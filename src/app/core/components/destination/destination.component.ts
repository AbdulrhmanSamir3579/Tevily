import { Destination } from './../../interfaces/destiation';
import { Component } from '@angular/core';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent {
destinations:any[] = [
  {
    name:"Hungary",
    imgUrl:"./../../../../assets/destination/destination-1-1-f32b89c3.png"
  },
  {
    name:"Tailland",
    imgUrl:"./../../../../assets/destination/destination-1-2-6b007ca8.png"
  },
  {
    name:"France",
    imgUrl:"./../../../../assets/destination/destination-1-3-d37d50e6.png"
  },
  {
    name:"United Kingdom",
    imgUrl:"./../../../../assets/destination/image-4.jpg"
  },
  {
    name:"Italy",
    imgUrl:"./../../../../assets/destination/image-5.jpg"
  },
  {
    name:"Japan",
    imgUrl:"./../../../../assets/destination/destination-1-6-e758720a.png"
  },
  {
    name:"China",
    imgUrl:"./../../../../assets/destination/destination-1-10-129d305c.png"
  },
  {
    name:"Morocco",
    imgUrl:"./../../../../assets/destination/destination-1-8-6a866770.png"
  },
  {
    name:"Singapore",
    imgUrl:"./../../../../assets/destination/destination-1-1-f32b89c3.png"
  },
  
  {
    name:"Egypt",
    imgUrl:"./../../../../assets/destination/526205_de263a8418a1ac64e0b7ad4673eeb0f7.webp"
  },
  
]
}
