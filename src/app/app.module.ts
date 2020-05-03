import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataShareService } from './shared/common/services/data-share-service';
import {ProgressBarModule} from "angular-progress-bar";
import { CommonDirective } from './common.directive';
import { ParentColorComponent } from './parent-color/parent-color.component'




@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    CommonDirective,
    ParentColorComponent,
   // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    
  ],
  providers: [DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
