import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgreementsByManagerIdComponent } from './list-agreements-by-manager-id.component';

describe('ListAgreementsByManagerIdComponent', () => {
  let component: ListAgreementsByManagerIdComponent;
  let fixture: ComponentFixture<ListAgreementsByManagerIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgreementsByManagerIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAgreementsByManagerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
