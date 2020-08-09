import { Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Subscription} from 'rxjs';
import {detail_interface} from '../interface1';
 @Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public userService:UserService) { }
  posts:any;
  postsub:Subscription;
  onDelete(p_id: any)
  {
    this.userService.deletePost(p_id);
    //console.log(id1);
  }
  ngOnInit() {
    this.userService.getdetails();
    this.postsub = this.userService.getPostUpdateListener()
    .subscribe((posts)=>{
      this.posts = posts;
      console.log(posts);
    });
    
  
  }

}
