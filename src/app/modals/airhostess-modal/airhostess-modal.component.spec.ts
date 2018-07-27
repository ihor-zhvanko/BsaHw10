import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirhostessModalComponent } from './airhostess-modal.component';

describe('AirhostessModalComponent', () => {
  let component: AirhostessModalComponent;
  let fixture: ComponentFixture<AirhostessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirhostessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirhostessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
