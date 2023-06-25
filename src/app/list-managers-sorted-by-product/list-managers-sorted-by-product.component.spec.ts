import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagersSortedByProductComponent } from './list-managers-sorted-by-product.component';

describe('ListManagersSortedByProductComponent', () => {
  let component: ListManagersSortedByProductComponent;
  let fixture: ComponentFixture<ListManagersSortedByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManagersSortedByProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListManagersSortedByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
