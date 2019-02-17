import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { LoginComponent } from './login/login.component';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataService } from './data/data.service';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AppConfig } from './config/config';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserBlogsComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule    
  ],
  entryComponents: [
    CreateBlogComponent
  ],
  providers: [DataService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
