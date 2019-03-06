import { Component, OnInit } from '@angular/core';
import { SplitServiceService } from '../split-service.service';
import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  constructor(private splitServiceService: SplitServiceService) { }
  id: number;
  groupData: any;
  userBalance: Float32Array;
  getUsers(){
    this.splitServiceService.getAllUser().subscribe(groupData => this.groupData = groupData);
    console.log(this.groupData);
  }
  getTotalBalance(id:number){
    this.splitServiceService.getTotalBalance(id).subscribe(userBalance => this.userBalance = userBalance);
    console.log(this.userBalance);
  }
  ngOnInit() {
    this.getUsers();
  }

}
