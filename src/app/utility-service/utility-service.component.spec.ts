import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityServiceComponent } from './utility-service.component';

describe('UtilityServiceComponent', () => {
  let component: UtilityServiceComponent;
  let fixture: ComponentFixture<UtilityServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityServiceComponent]
    });
    fixture = TestBed.createComponent(UtilityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
