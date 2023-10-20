import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIbricksComponent } from './apibricks.component';

describe('APIbricksComponent', () => {
  let component: APIbricksComponent;
  let fixture: ComponentFixture<APIbricksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIbricksComponent]
    });
    fixture = TestBed.createComponent(APIbricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
