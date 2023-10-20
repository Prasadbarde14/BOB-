import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { APIbricksComponent } from './apibricks/apibricks.component';
import { WorkflowsBricksComponent } from './workflows-bricks/workflows-bricks.component';



@NgModule({
  declarations: [
    HeaderSectionComponent,
    APIbricksComponent,
    WorkflowsBricksComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderSectionComponent,
    APIbricksComponent,
    WorkflowsBricksComponent
  ]
})
export class MiddlePartModule { }
