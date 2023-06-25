import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllChangedProductsComponent } from './list-all-changed-products.component';

describe('ListAllChangedProductsComponent', () => {
  let component: ListAllChangedProductsComponent;
  let fixture: ComponentFixture<ListAllChangedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllChangedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllChangedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
