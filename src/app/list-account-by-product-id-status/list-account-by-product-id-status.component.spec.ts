import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccountByProductIdStatusComponent } from './list-account-by-product-id-status.component';

describe('ListAccountByProductIdStatusComponent', () => {
  let component: ListAccountByProductIdStatusComponent;
  let fixture: ComponentFixture<ListAccountByProductIdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccountByProductIdStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAccountByProductIdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
