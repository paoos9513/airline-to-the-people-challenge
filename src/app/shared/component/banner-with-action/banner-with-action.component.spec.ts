import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWithActionComponent } from './banner-with-action.component';

describe('BannerWithActionComponent', () => {
  let component: BannerWithActionComponent;
  let fixture: ComponentFixture<BannerWithActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerWithActionComponent]
    });
    fixture = TestBed.createComponent(BannerWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
