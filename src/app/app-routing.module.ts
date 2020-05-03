import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FileUploadComponent } from './dashboard/file-upload/file-upload.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
     component:DashboardComponent
  },
  {
    path: 'user-details',
     component:UserDetailsComponent
  },
  {
    path: 'dashboard/file-upload',
     component:FileUploadComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
