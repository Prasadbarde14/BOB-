import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsBricksComponent } from './workflows-bricks.component';

describe('WorkflowsBricksComponent', () => {
  let component: WorkflowsBricksComponent;
  let fixture: ComponentFixture<WorkflowsBricksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowsBricksComponent]
    });
    fixture = TestBed.createComponent(WorkflowsBricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
