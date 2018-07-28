import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypeDetailsComponent } from './plane-type-details.component';

describe('PlaneTypeDetailsComponent', () => {
  let component: PlaneTypeDetailsComponent;
  let fixture: ComponentFixture<PlaneTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
