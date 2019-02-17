import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { UserBlog } from '../models/user-blog';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { MatDialog } from '@angular/material';
import { CreateBlogComponent } from '../create-blog/create-blog.component';

@Component({
  selector: 'app-user-blogs',
  templateUrl: './user-blogs.component.html',
  styleUrls: ['./user-blogs.component.css']
})
export class UserBlogsComponent implements OnInit {

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
  }

  dataSource = new UserBlogDataSource(this.dataService);
  displayedColumns = ["title", "category","date_created",  "delete"];

  deleteBlog(id){
    this.dataService.deleteBlog(id).subscribe(
      res => {
        this.dataSource = new UserBlogDataSource(this.dataService);
      },
      error => {
        console.log("Unable to delete blog " + error);
      }
    );    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateBlogComponent, {
      width: '600px',
      data: 'Create Blog'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.createBlog(result.data)
                      .subscribe( 
                        res => {
                          this.dataSource = new UserBlogDataSource(this.dataService);
                        },
                        error => {
                          console.log("Unable to create blog. " + error);
                        });          
    });
  }

}

export class UserBlogDataSource extends DataSource<any> {  

  constructor(private dataService: DataService) {
    super();
  }

  connect():Observable<UserBlog[]>{
    return this.dataService.getBlogs();
  }

  disconnect(){}  
}
