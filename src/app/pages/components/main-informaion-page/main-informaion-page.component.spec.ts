import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInformaionPageComponent } from './main-informaion-page.component';

describe('MainInformaionPageComponent', () => {
  let component: MainInformaionPageComponent;
  let fixture: ComponentFixture<MainInformaionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInformaionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInformaionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
