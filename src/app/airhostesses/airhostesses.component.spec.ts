import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirhostessesComponent } from './airhostesses.component';

describe('AirhostessesComponent', () => {
  let component: AirhostessesComponent;
  let fixture: ComponentFixture<AirhostessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirhostessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirhostessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
