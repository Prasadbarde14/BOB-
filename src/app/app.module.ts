import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { UtilityServiceComponent } from './utility-service/utility-service.component';
import { AddApiComponent } from './add-api/add-api.component';
import {MiddlePartModule} from './middle-part/middle-part.module'
@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    MiddleSectionComponent,
    UtilityServiceComponent,
    AddApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MiddlePartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
