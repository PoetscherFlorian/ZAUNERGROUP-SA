import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

    private apiUrl = 'https://maturaprojekt.zaunergroup.com/';

    constructor(private http: HttpClient) {}

    onSubmit(formData: any) {
    console.log(formData);
  }
}
