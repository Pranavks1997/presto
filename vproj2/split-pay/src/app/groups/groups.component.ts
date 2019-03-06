import { Component, OnInit } from '@angular/core';
import { SplitServiceService } from '../split-service.service';
// import { Issue } from '../issues-class';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }

  groupData: any;

  getGroups(): void {
    this.splitServiceService.getGroups().subscribe(groupData => this.groupData = groupData);
  }
  ngOnInit() {
    this.getGroups();
  }

}
