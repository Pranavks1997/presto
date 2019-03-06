import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private url = 'http://localhost:8080';
  public postReturn: any;
  constructor(private http: HttpClient) { }
  postUserLoginData(formData: any) {
    console.log(formData);
    this.postReturn = this.http.post(this.url + '/login', formData).subscribe((data: any) => console.log(data));
  }
  postUserSignupData(formData: any) {
    console.log(formData);
    this.postReturn = this.http.post(this.url + '/signup', formData).subscribe((data: any) => console.log(data));
  }
}
