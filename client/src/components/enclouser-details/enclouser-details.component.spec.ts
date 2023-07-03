import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclouserDetailsComponent } from './enclouser-details.component';

describe('EnclouserDetailsComponent', () => {
  let component: EnclouserDetailsComponent;
  let fixture: ComponentFixture<EnclouserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnclouserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnclouserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
