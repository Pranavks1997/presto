import { Component, OnInit } from '@angular/core';
import { SplitServiceService } from '../split-service.service';
// import { Issue } from '../issues-class';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Group from '../group-class';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})

export class GroupDetailComponent implements OnInit {

  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }

  groupData: any;
  updatedBalance: any;
  groupBills: any;
  // const id = +this.route.snapshot.paramMap.get('id');
  gid: number;

  getGroupUsers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gid = id;
    this.splitServiceService.getGroupUsers(id).subscribe(groupData => this.groupData = groupData);
    // this.groupData=data['Group']
    // console.log(this.groupData);
  }
  getUpdatedGroupBalance(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getUpdatedBalance(id).subscribe(updatedBalance => this.updatedBalance = updatedBalance);
    console.log(this.updatedBalance);
  }

  getGroupBills(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getGroupBills(id).subscribe(groupBills => this.groupBills = groupBills);
    console.log(this.updatedBalance);
  }
  ngOnInit() {
    this.getGroupUsers();
    this.getUpdatedGroupBalance();
    this.getGroupBills();
  }

}
