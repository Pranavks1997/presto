import { Component, OnInit } from '@angular/core';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Group from '../group-class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private splitServiceService: SplitServiceService) { }
  allBalanceData: any;
  getBalanceData(): void {
    this.splitServiceService.getBalanceData().subscribe( allBalanceData => this.allBalanceData = allBalanceData );
    console.log(this.allBalanceData);
  }

  ngOnInit() {
    this.getBalanceData();
  }

}
