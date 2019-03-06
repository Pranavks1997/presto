import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GroupDetailComponent } from '../group-detail/group-detail.component';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent implements OnInit {

  title = new FormControl('', Validators.required);
  billId: any;
  amount = new FormControl('');
  uid = new FormControl('');
  description =  new FormControl('');
  users = new FormControl('');
  groupId: any;
  updatedUsers: any;
  userData: any;
 

  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }
  getBillId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.billId = id;
  }

  getGroupIdFromBill()
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getGroupIdFromBill(id).subscribe(groupId => {
      this.groupId = groupId;
      this.splitServiceService.getGroupUsers(this.groupId).subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      });
    });
  }
  // gid = this.groupId;

  // getGroupUsers(gid: number): void {
  //   this.splitServiceService.getGroupUsers(gid).subscribe(userData => this.userData = userData);
  // }

  createdBill()
  {
    console.log(this.users);

    const formData = {
      'billId': this.billId,
      'amount': this.amount.value,
      'title': this.title.value,
      'date': '22-02-3019',
      'description': this.description.value,
      'groupId': this.groupId,
      'participants': this.users.value,
      'userId': this.uid.value,
      'group': this.groupId
        };
    this.updatedUsers = this.splitServiceService.editBill(formData, this.billId);
  }
  ngOnInit() {
    this.getGroupIdFromBill();
    this.getBillId();
    // setTimeout( this.getGroupUsers, 3000);
  }

}
