import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';
import {detail_interface} from './interface1';
import {Router} from '@angular/router';
//var FormData = require('form-data');
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;
  public username;
  usn;zx; posts:any;
  postUpdated=new Subject();
  a;images;allJobs:any;getCollege;xyz;
  public passDetailsOfSignUpToStudentDetails:any;
  constructor(private http: HttpClient,private router:Router) { 
    this.isUserLoggedIn=false;
  }
  storeUsn(usn)
  {
    this.usn = usn;
  }
  getUsn()
  {
    return this.usn;
  }
  setUserLoggedIn()
  {
    this.isUserLoggedIn=true;
    this.username='admin';

  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
 
  setCollegeName(collegeName:string)
  {
  console.log(collegeName);
    this.getCollege = collegeName;
    console.log(this.getCollege );  
  }

  getCollegeName()
  {
    return this.getCollege;
  }

  getdetails()
  {
    this.http.get(' http://localhost:3000/api/posts')
    .subscribe((a)=>{
        this.posts=a;

        this.postUpdated.next([...this.posts]);
        
    });
  }
  getListOfStudent()
  {
    return this.http.get('http://localhost:3000/api/posts2');
  }
  getDetailsOfJobsPosted()
  {
        return this.http.get('http://localhost:3000/api/posts1');
  }

  getAllDetailsThroughUsn(usn:string):Observable<any>
  {
    this.a = this.http.get('http://localhost:3000/api/posts/'+usn);
    
    return this.a;
  }


  getCompanyUsingCollegeName(college:string):Observable<any>
  {
     
      this.zx =  this.http.get('http://localhost:3000/api/posts3/'+college);
      console.log(this.zx);
      return this.zx;
  }
  

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }


  getPost(_id :any)
  {
    return {...this.posts.find(p=>p._id === _id)};
      
  }


  updatePost(updated_name_age,id)
  {
    this.http.put("http://localhost:3000/api/posts/"+id,updated_name_age)
    .subscribe((responseData:any)=>
    {
      console.log(responseData.message);
      this.posts.push(updated_name_age);
      this.postUpdated.next([...this.posts]);
      this.router.navigate(['detail']);
    })
  };

  
  deletePost(id:any)
  {
    this.http.delete("http://localhost:3000/api/posts/"+id)
    .subscribe(()=>{
     const updatingInPost=this.posts.filter(post=> post._id!=id);  
     this.posts=updatingInPost; 
     this.postUpdated.next([...this.posts]);
    });
  }

  addNewJobToCompany(jobDetails) 
  {
   
    this.http.post('http://localhost:3000/api/posts1',jobDetails)
     .subscribe((responseData:any)=>{
      console.log(responseData.message);
      });
  }  
  addNewJobToStudentCompanyPortal(jobDetails)
  {
    this.http.post('http://localhost:3000/api/posts3',jobDetails)
    .subscribe((responseData:any)=>{
    console.log(responseData.message);
    });
  }
  sendStatusToStudent(jobId,s)
  {
     this.http.put("http://localhost:3000/api/posts3/"+jobId,s)
     .subscribe((responseData:any)=>{
    console.log(responseData.message);
    });
  }

  applyforCompany(sendStudentDetailsToCompany)
  {
    this.http.post('http://localhost:3000/api/posts2/',sendStudentDetailsToCompany)
    .subscribe((response)=>
    {
      console.log(response);
    });

  }
  addingStudentIdToStudentCompanyPortal(id,n1)
  {
    this.http.put('http://localhost:3000/api/posts3/'+id,n1)
    .subscribe((responseData:any)=>{
    console.log(responseData.message);
    });
  }
 
  storing_detail(formData)
  {
    this.http.post('http://localhost:3000/api/posts/',formData)
    .subscribe((responseData:any)=>{
      console.log(responseData.message);
      this.postUpdated.next([...this.posts]);
      this.router.navigate(['detail']);
    });
  }
  sendMailToStudent(user)
  {
    return this.http.post('http://localhost:3000/sendmail',user);
    
  }
}

