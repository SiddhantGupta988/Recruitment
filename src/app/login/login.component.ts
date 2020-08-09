import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from "@angular/forms";
import { UserService } from '../user.service';
import {FormControl, FormGroupDirective,Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute,ParamMap}from '@angular/router';

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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private mode='detail';
  hide=true;
  usn:string="";
  public p_id:any;
  public pp:any;
  dateOfBirth=" ";address;highSchoolMarks;seniorSchoolMarks;bTechCgpa;noOfBacks;
  id:String="";branchList;semester;
  images;file:File;emailId;

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
  
  
  constructor(private router:Router,public userService:UserService,public route:ActivatedRoute) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>
    {
        if(paramMap.has('detailsid'))
        {
            this.mode ='edit';
            this.p_id = paramMap.get('detailsid');
            this.pp = this.userService.getPost(this.p_id);
        }

        else
        {
            this.mode='detail';
            this.p_id=null;
        }
    });
  }

  selectImage(event)
  {
    console.log(event);
      if(event.target.files.length>0)
      {
       
          var file = event.target.files[0];
         
          this.images = file;
      
          localStorage.setItem('fileName',this.images);
      }
      
  }

  on_login(form:NgForm){    
    localStorage.setItem('studentUsn',this.usn);
    this.userService.storeUsn(this.usn);
    this.router.navigate(['student']);
  }
  loginRecruiterPortal()
  {
    this.router.navigate(['recruiterDashboard']);
  }



  on_submit(form: NgForm)
  {
    if(form.invalid)
    {
        return;
    }
    if(this.mode==='detail')
    {
        console.log(form.value.collegeName);
          const formData = new FormData();
          formData.append('f1',this.images);
          formData.append("firstName1",form.value.firstName);
          formData.append("lastName1",form.value.lastName);
          formData.append("emailId1",this.emailId);
          formData.append("collegeName1",form.value.collegeName);
          formData.append("usn1",form.value.usnIn);
          formData.append("age1",form.value.ageIn);
          formData.append("phoneNo1",form.value.PhoneNo);
          formData.append("dateOfBirth1",this.dateOfBirth);
          formData.append("address1",this.address);
          formData.append("highSchoolMarks1",this.highSchoolMarks);
          formData.append("seniorSchoolMarks1",this.seniorSchoolMarks);  
          formData.append("bTechCgpa1",this.bTechCgpa);
          formData.append("noOfBacks1",this.noOfBacks);
          formData.append("branchList1",this.branchList);
          formData.append("semester1",this.semester);

  
      this.userService.storing_detail(formData);
      this.router.navigate(['student']);
     
    }
    else
    {
      const updated_name_age=
      {
            id:this.p_id,
            firstName1:form.value.firstName,
            lastName1:form.value.lastName,
            usn1:form.value.usn,
            age1:form.value.age,
            phoneNo1:form.value.phoneNo,
            dateOfBirth1:this.dateOfBirth,
            address1:this.address,
            highSchoolMarks1:this.highSchoolMarks,
            seniorSchoolMarks1:this.seniorSchoolMarks,
            bTechCgpa1:this.bTechCgpa,
            noOfBacks1:this.noOfBacks,
            branchList1:this.branchList,
            semester1:this.semester
      };
    }
    form.resetForm();
  }
  
  
  
  
  /*
  loginUser(e)
  {
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username,password);
  
    if(username =='admin'&& password =='admin')
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
*/
  }




