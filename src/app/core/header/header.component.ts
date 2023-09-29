import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input() iconAirline: string = "assets/logo/logo1.svg"
  @Input() iconLanguage: string = "assets/icons/language.svg"
}
