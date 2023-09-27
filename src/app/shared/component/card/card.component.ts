import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

@Input() card!: Card ;

}
