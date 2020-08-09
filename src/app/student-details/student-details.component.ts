import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Subscription} from 'rxjs';
import {UserService} from '../user.service';

interface Branch{
	value:String,
	viewBranch:String
}
interface allSem
{
	value:String,
	getSemester:any
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit
 {
 	lastName:String="";
	usn;firstName:String="";phoneNo:String="";
	age:String="";emailId;collegeName;
  dateOfBirth=" ";address;highSchoolMarks;seniorSchoolMarks;bTechCgpa;noOfBacks;
  id:String="";branchList;semester;

	branch:Branch[]=
	[
		{value:'v1',viewBranch:'CSE'},
		{value:'v2',viewBranch:'ISE'},
		{value:'v3',viewBranch:'ECE'},
		{value:'v4',viewBranch:'MECH'},
		{value:'v5',viewBranch:'CIV'},
		{value:'v6',viewBranch:'EEE'}
	];

	AllSemester:allSem[]=
	[
		{value:'s1',getSemester:'1'},
		{value:'s2',getSemester:'2'},
		{value:'s3',getSemester:'3'},
		{value:'s4',getSemester:'4'},
		{value:'s5',getSemester:'5'},
		{value:'s6',getSemester:'6'},
		{value:'s7',getSemester:'7'},
		{value:'s8',getSemester:'8'},
	];

	emailFormControl = new FormControl
	('', [
    		Validators.required,
   		 	Validators.email,
  	]);

 	matcher = new MyErrorStateMatcher();
  	constructor(public userService:UserService) { }
  
  	
  	ngOnInit() 
  	{
  		//this.usn = localStorage.getItem('studentUsn');
 		  this.usn = this.userService.getUsn();
      console.log("USN value ", this.usn);
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
          this.dateOfBirth = student.dateOfBirth1;
          this.address = student.address1;
          this.semester =student.semester1;
          this.phoneNo=student.phoneNo1;
          this.branchList=student.branchList1;
          this.highSchoolMarks=student.highSchoolMarks1;
          this.seniorSchoolMarks=student.seniorSchoolMarks1;
          this.bTechCgpa =student.bTechCgpa1;
          this.noOfBacks = student.noOfBacks1;
    });
     
	}
	onUpdateDetails()
	{
    const  updated_name_age=
    {
        
         firstName1:          this.firstName,
         lastName1:           this.lastName,
         usn1:                this.usn,
         phoneNo1:            this.phoneNo,
         age1:                this.age,
         dateOfBirth1:        this.dateOfBirth,
         address1:            this.address,
         semester1:           this.semester,
         branchList1:         this.branchList,
         highSchoolMarks1:    this.highSchoolMarks,
         seniorSchoolMarks1:  this.seniorSchoolMarks,
         bTechCgpa1:          this.bTechCgpa,
         noOfBacks1:          this.noOfBacks
    }
		this.userService.updatePost(updated_name_age, this.id);
	}
}
