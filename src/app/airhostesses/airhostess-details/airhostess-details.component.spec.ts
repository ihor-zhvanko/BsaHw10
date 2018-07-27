import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirhostessDetailsComponent } from './airhostess-details.component';

describe('AirhostessDetailsComponent', () => {
  let component: AirhostessDetailsComponent;
  let fixture: ComponentFixture<AirhostessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirhostessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirhostessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
