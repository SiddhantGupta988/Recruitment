 import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import {UserService } from '../user.service';
import {Subscription} from 'rxjs';
export interface totalJobs{
	job:string;
	companyName:string;
	companyId:string;
	skills:string;
	salary:string;
}
@Component({
  selector: 'app-student-company',
  templateUrl: './student-company.component.html',
  styleUrls: ['./student-company.component.scss']
})
export class StudentCompanyComponent implements OnInit {

displayedColumns: string[] = ['_id','job','companyName','companyId','skills','salary','action','status'];
collegeName:string;
dataSource;
companyName;
companyId;
age:String="";
emailId;
abc;
usn;
studentDetails;
id:String="";
branchList;
semester;
firstName:String="";
lastName:String="";
phoneNo:String="";
companyName1;
dateOfBirth=" ";address;highSchoolMarks;seniorSchoolMarks;bTechCgpa;noOfBacks;
constructor(public userService:UserService) { }
sendInfo(element)
{
	  
    this.userService.getAllDetailsThroughUsn(this.usn).subscribe
    ((student)=>
    {
          
          this.id = student._id;
          this.age =student.age1;
          this.firstName=student.firstName1;
          this.lastName=student.lastName1;
          this.emailId =  student.emailId1;
          this.phoneNo=student.phoneNo1;
          this.collegeName = student.collegeName1;
          this.address = student.address1;
          this.semester =student.semester1;
          this.phoneNo=student.phoneNo1;
          this.branchList=student.branchList1;
          this.highSchoolMarks=student.highSchoolMarks1;
          this.seniorSchoolMarks=student.seniorSchoolMarks1;
          this.bTechCgpa =student.bTechCgpa1;
          this.noOfBacks = student.noOfBacks1;

          const sendStudentDetailsToCompany =
          {
              studentId:this.id,
              jobId:element._id,
              firstName:this.firstName,
              emailId:this.emailId,
              phoneNo:this.phoneNo,
              collegeName:this.collegeName,
              bTechCgpa :this.bTechCgpa,
              companyName:element.companyName,
              companyId:element.companyId
          }
          console.log(sendStudentDetailsToCompany);
          this.userService.applyforCompany(sendStudentDetailsToCompany);
          const n1 ={
              job        :element.job, 
              companyName:element.companyName, 
              companyId : element.companyId, 
              college   : this.collegeName, 
              skills    : element.skills, 
              salary    : element.salary, 
              status    : element.status,
              studentId : this.id
          }
           this.userService.addingStudentIdToStudentCompanyPortal(element._id,n1);
            
    });


   
}

 

  ngOnInit() 
  {
          this.usn = localStorage.getItem('studentUsn');
           this.userService.getAllDetailsThroughUsn(this.usn).subscribe
           ((student)=>
            {
             
              this.collegeName = student.collegeName1;
             

             this.userService.getCompanyUsingCollegeName(this.collegeName )
            .subscribe((response)=>
            {
              this.dataSource = new MatTableDataSource(response);
            });
            });

         
            
  }
}
