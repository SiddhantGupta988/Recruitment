import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';

import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { StudentCompanyComponent } from './student-company/student-company.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'recruiterDashboard',
    component: RecruiterDashboardComponent,
    children:[{
                path:'addJobs',
                component:AddJobsComponent,
            },
            {
              path:'availableJobs',
              component:PostedJobsComponent,

            },
            {
              path:'listOfApplication',
              component:ViewStudentComponent,
            }]
  },
  {
    path:'detail',
    component:DetailsComponent
  },
  {
    path:'student',
    component:StudentDashboardComponent,
    children:[{
                path:'studentdetail',
                component:StudentDetailsComponent,
            },
            {
                path:'studenthome',
                component:StudentHomeComponent,
            },
            {
                path:'studentCompany',
                component:StudentCompanyComponent           
            }]
  },
  {
    path:'edit/:detailsid',
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
  LoginComponent,RecruiterDashboardComponent,DetailsComponent,StudentDashboardComponent,StudentDetailsComponent,AddJobsComponent,StudentHomeComponent,PostedJobsComponent,StudentCompanyComponent, ViewStudentComponent];













