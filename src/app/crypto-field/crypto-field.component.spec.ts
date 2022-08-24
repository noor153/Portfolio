import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFieldComponent } from './crypto-field.component';

describe('CryptoFieldComponent', () => {
  let component: CryptoFieldComponent;
  let fixture: ComponentFixture<CryptoFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
