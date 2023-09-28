import { Component } from '@angular/core';
import { Card } from 'src/app/interface/card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public cardList: Card[] = [
    {
      title: 'Chicago',
      price: 600,
      imgURL: '../../../../assets/image/chicago2.png'
    },
    {
      title: 'Porto',
      price: 600,
      imgURL: '../../../../assets/image/porto1.jpg'
    },
    {
      title: 'Chicago',
      price: 600,
      imgURL: '../../../../assets/image/mire1.png'
    }
  ];


}
