import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';

const routes: Routes = [
  {path: 'user-blogs', component: UserBlogsComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
