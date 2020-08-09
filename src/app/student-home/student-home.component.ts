import { Component, OnInit } from '@angular/core';
interface list1{
	no:number;
	companyName:String;
	position:String;
	skills:String;
	salary:String;
}

const listOfCompany:list1[]=
[
    {no:1,companyName:"Tcs",position:"FP",skills:"MEAN stack",salary:"3,40,000"},
    {no:2,companyName:"Just pay",position:"Full ",skills:"Full Stack",salary:"8,40,000"},
]

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  displayedColumn:String[]=['no','companyName','position','skills','salary'];
  dataSource = listOfCompany;
  constructor() { }

  ngOnInit() {
  }

}
