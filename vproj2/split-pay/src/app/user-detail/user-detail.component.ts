import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { analyzeAndValidateNgModules, unescapeIdentifier } from '@angular/compiler';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userBalance: any;
  userData: any;

  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }

  getTotalBalance(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getTotalBalance(id).subscribe(userBalance => this.userBalance = userBalance);
    console.log(this.userBalance);
  }
  getUser(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getUserById(id).subscribe(userData => this.userData = userData);
  }
  ngOnInit() {
    this.getTotalBalance();
    this.getUser();
  }

}
