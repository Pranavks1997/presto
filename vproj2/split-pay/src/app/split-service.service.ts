import { Injectable } from '@angular/core';
// import { User } from './user-class';
// import { Group } from './group-class';
// import { Bill } from './bill-class';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import Group from './group-class';

@Injectable({
  providedIn: 'root'
})
export class SplitServiceService {

private url = 'http://localhost:8080';
public postReturn: any;

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get<any>(this.url + '/groups/All/' );
  }

  getGroupUsers(id: number):  Observable<any> {
    return this.http.get<any>(this.url + '/groups/users/' + id );
  }

  postBill(formData: any) {
    this.postReturn = this.http.post(this.url + '/bills/add', formData).subscribe((data: any) => console.log(data));
  }
  postGroup(formData: any) {
    this.postReturn = this.http.post(this.url + '/groups/add', formData).subscribe((data: any) => console.log(data));
  }
  postUser(formData: any) {
    this.postReturn = this.http.post(this.url + '/users/add', formData).subscribe((data: any) => console.log(data));
  }

  postSplit(formData: any) {
    this.postReturn = this.http.post(this.url + '/manager/split/', formData).subscribe((data: any) => console.log(data));
  }
  getGroupById(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/groups/' + id);
  }
  getUserById(uid: number): Observable<any> {
    return this.http.get<any>(this.url + '/users/' + uid );
  }
  getAllUser(): Observable<any> {
    return this.http.get<any>(this.url + '/users/All');
  }
  getAllBills(): Observable<any> {
    return this.http.get<any>(this.url + '/bills/All');
  }
  getUpdatedBalance(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/manager/' + id);
  }
  getTotalBalance(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/users/total/' + id);
  }

  getBalanceData(): Observable<any> {
    return this.http.get<any>(this.url + '/balance/All');
  }

  getGroupIdFromBill(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/bills/group/' + id);
}

editBill(formData: any, id: number) {
  this.postReturn = this.http.put(this.url + '/bills/update/' + id, formData).subscribe((data: any) => console.log(data));
}
getBillById(id: number): Observable<any> {
  return this.http.get<any>(this.url + '/bills/' + id);
}

deleteBill(id: number): Observable<any> {
  return this.http.delete<any>(this.url + '/bills/' + id);
}
getGroupBills(id:number): Observable<any> {
  return this.http.get<any>(this.url + '/bills/groupBills/' + id);
}
}
