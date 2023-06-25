import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientWithBalanceMoreComponent } from './list-client-with-balance-more.component';

describe('ListClientWithBalanceMoreComponent', () => {
  let component: ListClientWithBalanceMoreComponent;
  let fixture: ComponentFixture<ListClientWithBalanceMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClientWithBalanceMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClientWithBalanceMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
