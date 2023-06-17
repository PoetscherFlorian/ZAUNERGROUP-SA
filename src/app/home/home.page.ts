import { Component } from '@angular/core';
import { AuditdetailsService } from '../services/AuditDetails/auditdetails.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string;
  email:string;

  constructor(private auditdetailsservice: AuditdetailsService) {}

  onSubmit() {
    this.auditdetailsservice.setLogin(this.name, this.email)
  }
}
