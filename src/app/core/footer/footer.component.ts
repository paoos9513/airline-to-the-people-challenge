import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  @Input() iconTwitterURL: string = "../../../assets/icons/twitter.svg"
  @Input() iconFacebookURL: string = "../../../assets/icons/facebook.svg"
  @Input() iconYoutubeURL: string = "../../../assets/icons/youtube_icon.svg"
  @Input() iconAirline: string = "../../../assets/logo/logo1.svg"

}
