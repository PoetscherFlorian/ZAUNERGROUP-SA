import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BmListComponent } from '../components/bm-list/bm-list.component';
import { AuditdetailsService } from '../services/AuditDetails/auditdetails.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.page.html',
  styleUrls: ['./form-page.page.scss'],
})
export class FormPagePage {

  private formData: FormGroup;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.formData = new FormGroup({
      role: new FormControl(),
      location: new FormControl(),
      workSite: new FormControl(),
      comment: new FormControl()
    });
  }

  onSubmit() {
    this.dataSharingService.onSubmit(this.formData.value);
  }
}
