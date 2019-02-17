import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../config/config';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private config: AppConfig) { }
  private apiPath = this.config.setting['APIPath'];
  private url = this.apiPath + "UserBlogs";

  categories = [
    {value: 'Technology', viewValue: 'Technology'},
    {value: 'Travel', viewValue: 'Travel'},
    {value: 'Cooking', viewValue: 'Cooking'}
  ];

  public getBlogs(): Observable<any>{
    return this.http.get(this.url);
  }

  public deleteBlog(id): Observable<any>{
    const deleteUrl = this.url + "/" + id;
    return this.http.delete(deleteUrl);    
  }

  public getCategories() {
    return this.categories;
  }

  public createBlog(data): Observable<any> {
    return this.http.post(this.url, data);
  }
}
