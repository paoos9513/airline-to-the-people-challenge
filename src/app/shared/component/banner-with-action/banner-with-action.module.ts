import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerWithActionComponent } from './banner-with-action.component';
import { BannerComponent } from "../banner/banner.component";



@NgModule({
  declarations: [
    BannerWithActionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerWithActionComponent
  ]
})
export class BannerWithActionModule { }
