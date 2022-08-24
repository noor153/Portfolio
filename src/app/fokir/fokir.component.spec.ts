import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FokirComponent } from './fokir.component';

describe('FokirComponent', () => {
  let component: FokirComponent;
  let fixture: ComponentFixture<FokirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FokirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FokirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
