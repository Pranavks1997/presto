import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SplitServiceService } from '../split-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { analyzeAndValidateNgModules, unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  billData: any;
  constructor(private splitServiceService: SplitServiceService, private route: ActivatedRoute, private location: Location) { }

  getBillDetails(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.splitServiceService.getBillById(id).subscribe(billData => this.billData = billData);
    console.log(this.billData);
  }
  deleteBill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (window.confirm( 'Confirm Deletion?' ) === true) {
      this.splitServiceService.deleteBill(id).subscribe((data) => { console.log('success'); });
    }
  }
  ngOnInit() {
    this.getBillDetails();
  }

}
