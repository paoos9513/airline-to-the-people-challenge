import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'src/app/shared/component/card/card.module';
import { BannerModule } from "src/app/shared/component/banner/banner.module";
import { BannerWithActionModule } from "../../shared/component/banner-with-action/banner-with-action.module";
import { FooterModule } from "../../core/footer/footer.module";
import { HeaderModule } from "../../core/header/header.module";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    BannerModule,
    BannerWithActionModule,
    FooterModule,
    HeaderModule
  ]
})
export class HomeModule { }
