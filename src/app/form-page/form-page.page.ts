import { Component, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BmListComponent } from '../components/bm-list/bm-list.component';
import { AuditdetailsService } from '../services/AuditDetails/auditdetails.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.page.html',
  styleUrls: ['./form-page.page.scss'],
})
export class FormPagePage {

  observation:string;
  currentDate = new Date();

  @ViewChild('createBMhere', {static: false, read : ViewContainerRef}) target:
  ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  addNewComponent() {
    let childComponent = this.resolver.resolveComponentFactory(BmListComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }

}
