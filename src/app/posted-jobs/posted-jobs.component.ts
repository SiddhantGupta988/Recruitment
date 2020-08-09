import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import {UserService } from '../user.service';
import {Subscription} from 'rxjs';
export interface totalJobs{
	job:string;
	companyName:string;
	companyId:string;
	college:string;
	skills:string;
	salary:string;
}

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.scss']
})
export class PostedJobsComponent implements OnInit {
	displayedColumns: string[] = ['job','companyName','companyId','college','skills','salary'];
 
dataSource:any;
  constructor(public userService:UserService) { }

  ngOnInit() {
  		this.userService.getDetailsOfJobsPosted()
  			.subscribe((response:any)=>{
  		 	this.dataSource = new MatTableDataSource(response);
  	});
  
  }

}
