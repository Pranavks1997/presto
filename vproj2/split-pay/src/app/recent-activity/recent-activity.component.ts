import { Component, OnInit } from '@angular/core';
import { SplitServiceService } from '../split-service.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.css']
})
export class RecentActivityComponent implements OnInit {

  groupData: any;
  constructor(private splitServiceService: SplitServiceService) { }

  getAllBills(): void {
    this.splitServiceService.getAllBills().subscribe( groupData => this.groupData = groupData );
    console.log(this.groupData);
  }

  ngOnInit() {
      this.getAllBills();
  }

}
