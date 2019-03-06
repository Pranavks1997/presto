import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uname = new FormControl('', Validators.required);
  passwd = new FormControl('');
  mail = new FormControl('');

  constructor(private login: LoginServiceService , private router: Router) { }
  signupsubmit() {
    console.log('meth');
    this.login.postUserSignupData({'user': this.uname.value , 'password': this.passwd.value , 'mail': this.mail.value });
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
