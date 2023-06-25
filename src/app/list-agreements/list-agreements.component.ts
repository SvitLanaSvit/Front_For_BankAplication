import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Agreement } from '../agreement';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-list-agreements',
  templateUrl: './list-agreements.component.html',
  styleUrls: ['./list-agreements.component.css']
})
export class ListAgreementsComponent implements OnInit{
  agreements: Agreement[] = [];
  constructor(private http: HttpService, private router: Router){}
  ngOnInit(): void {
    this.http.getAgreements().subscribe((data: any)=>{
      this.agreements = data.agreementDTOList;
    });
  }

  editAgreement(id: string){
    this.router.navigate(["/editAgreement"], {queryParams: {id: id}});
  }

  deleteAgreement(agreement: Agreement){
    if(!agreement){
      console.error('Cannot delete null object');
      return;
    }
    const confirmDelete = confirm(`Are you sure you want to delete account with ID ${agreement.id}?`);
    if(confirmDelete){
      this.http.deleteAgreement(agreement).subscribe((data: any)=>{
        let deleteIndex: number = this.agreements.findIndex(elem=>elem.id === agreement.id)
        if(deleteIndex !== -1){
          this.agreements.splice(deleteIndex, 1);
        }
      });
    }
  }
}
