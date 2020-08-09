import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from '../user.service';
import {Router} from '@angular/router';
interface jobType
{
	value:String,type:String
}
interface skillsNeeded
{
	value:String,type:String
}
interface viewcollege
{
	value:String,type:String
}
@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.scss']
})
export class AddJobsComponent implements OnInit {
job;companyName;companyId;college;skills;salary;
status:string="no";
jobs:jobType[]=
	[
		{value:"id1",type:"Permanent"	},
		{value:"id2",type:"Contract"	},
		{value:"id3",type:"Intern"}	
	];
colleges:viewcollege[]=
		[
			{value:"id1",type:"Rjg"},
			{value:"id2",type:"Svit"},
			{value:"id3",type:"Bmsit"}
		];
requiredSkills:skillsNeeded[]=
		[
			{value:"id1",type:"Java"},
			{value:"id2",type:"Angular"},
			{value:"id3",type:"Javascript"},
			{value:"id4",type:"Node js"},
			{value:"id5",type:"Python"}
		];
  constructor(public userService:UserService,private router:Router) { }
class1(form:NgForm)
{
	if(form.invalid)
	{
	return; 
	}
	
	console.log(this.job);
	 const jobDetails = {
         job:this.job,companyName:this.companyName,companyId:this.companyId,college:this.college,skills:this.skills,salary:this.salary,status:this.status};
         
    this.userService.addNewJobToStudentCompanyPortal(jobDetails);
	this.userService.addNewJobToCompany(jobDetails);
	form.resetForm();

}
  ngOnInit() {
  }

}
