import { Component, OnInit } from '@angular/core';
import { AuditdetailsService } from 'src/app/services/AuditDetails/auditdetails.service';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.scss'],
})
export class GeneralDataComponent implements OnInit {

  name:string;
  role:string;
  location:string;
  workSite:string;
  comment:string;

  constructor(private auditdetailsservice:AuditdetailsService) { 
  }

  ngOnInit() {
      const data = this.auditdetailsservice.getAuditData();
      this.name = data.name
  }

}
