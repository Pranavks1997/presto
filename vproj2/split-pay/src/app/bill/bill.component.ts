import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  title = new FormControl('', Validators.required);
  billId = new FormControl('', Validators.required);
  amount = new FormControl('');
  uid = new FormControl('');
  description =  new FormControl('');
  users = new FormControl('');

   groupId = +this.route.snapshot.paramMap.get('id');
   flag: boolean;
   updateUsers: any;
   groupData: any;
   payee: any;
   gid: any;
   userData: any;
  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }

  getGroupId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupId = id;
  }
  getGroup(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getGroupById(id).subscribe(groupData => this.groupData = groupData);
    console.log(this.groupData);
  }
  getGroupUsers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gid = id;
    this.splitServiceService.getGroupUsers(id).subscribe(userData => this.userData = userData);
  }

  createdBill()
  {
    console.log(this.users);

    const formData = {
      'billId': this.billId.value,
      'amount': this.amount.value,
      'title': this.title.value,
      'date': '22-02-3019',
      'description': this.description.value,
      'group': this.groupId,
      'participants': this.users.value,
      'userId': this.uid.value
        };
    this.updateUsers = this.splitServiceService.postSplit(formData);
  }

  ngOnInit() {
    this.getGroup();
    // this.getUser();
    this.getGroupUsers();
  }

}


