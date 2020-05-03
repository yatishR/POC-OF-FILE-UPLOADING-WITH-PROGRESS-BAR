import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { GridComponent } from './grid/grid.component';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  declarations: [DashboardComponent, GridComponent, FileUploadComponent],
  imports: [CommonModule,ProgressBarModule
    
  ]
})
export class DashboardModule { }
