import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditdetailsService {

  counter:number = 1;

  date:Date = new Date();
  name:string;
  location:string;
  workSite:string;
  comment:string;
  email:string;
  


  getAuditData() {
    return {
      date:this.date, name:this.name
    }
  }

  setLogin(name, email) {
    this.name = name;
    this.email = email;
  }

  bmListCounter() {
    return this.counter++;
  }
  
}
