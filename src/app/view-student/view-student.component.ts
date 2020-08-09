import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { MatSort, MatTableDataSource } from '@angular/material';
export interface interface1{
	firstName:string;
	emailId:string;
	phoneNo:string;
	collegeName:string;
	bTechCgpa:string;
	
}
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})

export class ViewStudentComponent implements OnInit {
dataSource:any;xyz;
	displayedColumns: string[] = ['id','studentId','jobId','firstName','emailId','phoneNo','collegeName','bTechCgpa','action'];
	
  constructor(public userService:UserService) { }

sendInfo(element,j)
{
  let user={
  name:element.firstName,
  email:element.emailId
  }
  const s={
    status:"true"
  }
  this.userService.sendStatusToStudent(element.jobId,s);

/*
  this.userService.sendMailToStudent(user)
   .subscribe(data=>{
        let res:any = data;
        console.log("mail is sent");
    });
   const index = this.dataSource.data.indexOf(j);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription(); */  
}
  ngOnInit() {
  		this.userService.getListOfStudent()
  		.subscribe((response)=>{
  					this.xyz = response;
  					
  				 this.dataSource = new MatTableDataSource(response);
  		});
  }

}
