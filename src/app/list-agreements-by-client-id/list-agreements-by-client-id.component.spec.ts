import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgreementsByClientIdComponent } from './list-agreements-by-client-id.component';

describe('ListAgreementsByClientIdComponent', () => {
  let component: ListAgreementsByClientIdComponent;
  let fixture: ComponentFixture<ListAgreementsByClientIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgreementsByClientIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAgreementsByClientIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
