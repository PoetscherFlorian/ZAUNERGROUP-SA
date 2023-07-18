import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPagePageRoutingModule } from './form-page-routing.module';

import { FormPagePage } from './form-page.page';

import { BmListComponent } from '../components/bm-list/bm-list.component';
import { GeneralDataComponent } from '../components/general-data/general-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPagePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormPagePage, BmListComponent, GeneralDataComponent]
})
export class FormPagePageModule {}
