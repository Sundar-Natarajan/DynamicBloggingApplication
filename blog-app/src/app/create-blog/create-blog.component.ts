import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DataService } from '../data/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserBlog } from '../models/user-blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})

export class CreateBlogComponent {
  createBlogForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createBlogForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  public event: EventEmitter<any> = new EventEmitter();

  categories = this.dataService.getCategories();

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    let userBlog: UserBlog = {
      Id: 0,
      Title: '',
      Category: '',
      Content: '',
      Date_Created: new Date()
    }
    userBlog.Title = this.createBlogForm.get('title').value;
    userBlog.Content = this.createBlogForm.get('content').value;
    userBlog.Category = this.createBlogForm.get('category').value;
    this.event.emit({ data: userBlog });
    this.dialogRef.close();
  }
}
