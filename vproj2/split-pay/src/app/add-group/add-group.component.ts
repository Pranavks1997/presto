import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { analyzeAndValidateNgModules, unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  groupName = new FormControl('', Validators.required);
  groupId = new FormControl('', Validators.required);
  users = new FormControl('');
  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }
  userData: any;
  getUsers(){
    this.splitServiceService.getAllUser().subscribe(userData => this.userData = userData);
  }
  createdGroup()
  {
    const formData = {
      'groupId': this.groupId.value,
      'groupName': this.groupName.value,
      'user': this.users.value,
    };
    this.splitServiceService.postGroup(formData);
    // this.updateUsers = this.splitServiceService.postSplit(formData);
  }

  ngOnInit(){
    this.getUsers();
  }


}
