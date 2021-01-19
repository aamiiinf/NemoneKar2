import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatingPageComponent } from './informating-page.component';

describe('InformatingPageComponent', () => {
  let component: InformatingPageComponent;
  let fixture: ComponentFixture<InformatingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformatingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
