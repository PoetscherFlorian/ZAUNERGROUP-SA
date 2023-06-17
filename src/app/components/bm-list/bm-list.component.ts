import { Component, OnInit } from '@angular/core';
import { AuditdetailsService } from 'src/app/services/AuditDetails/auditdetails.service';

@Component({
  selector: 'app-bm-list',
  templateUrl: './bm-list.component.html',
  styleUrls: ['./bm-list.component.scss'],
})
export class BmListComponent implements OnInit {

  observation:string;
  componentID: number;

  constructor(private auditDetailsservice: AuditdetailsService) { }

  ngOnInit(): void {
    this.componentID = this.auditDetailsservice.bmListCounter() ;
  }

}
