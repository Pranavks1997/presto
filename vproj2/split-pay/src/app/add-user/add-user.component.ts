import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { analyzeAndValidateNgModules, unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userName = new FormControl('', Validators.required);
  userId = new FormControl('', Validators.required);
  userEmail = new FormControl('');
  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }

  createdUser()
  {
    const formData = {
      'userId': this.userId.value,
      'name': this.userName.value,
      'emailId': this.userEmail.value,
    };
    this.splitServiceService.postUser(formData);
    // this.updateUsers = this.splitServiceService.postSplit(formData);
  }

  ngOnInit() {
  }

}
