import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowpdownMenuComponent } from './dowpdown-menu.component';

describe('DowpdownMenuComponent', () => {
  let component: DowpdownMenuComponent;
  let fixture: ComponentFixture<DowpdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowpdownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowpdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
