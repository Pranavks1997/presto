import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname = new FormControl('', Validators.required);
  passwd = new FormControl('');
  constructor(private login: LoginServiceService) { }
loginsubmit() {
  this.login.postUserLoginData({'user': this.uname.value , 'password': this.passwd.value });
}
  ngOnInit() {
  }

}
