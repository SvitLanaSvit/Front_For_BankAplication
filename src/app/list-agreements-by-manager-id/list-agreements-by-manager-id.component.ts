import { Component, OnInit } from '@angular/core';
import { AgreementId } from '../agreement-id';
import { Manager } from '../manager';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-agreements-by-manager-id',
  templateUrl: './list-agreements-by-manager-id.component.html',
  styleUrls: ['./list-agreements-by-manager-id.component.css']
})
export class ListAgreementsByManagerIdComponent implements OnInit{
  agreements: AgreementId[] = [];
  managers: Manager[] = [];
  managersId: string[] = [];

  submitted: boolean = false;
  done: boolean = false;

  managerId: string = '';

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getManagers().subscribe((data: any)=>{
      this.managers = data.managerDTOList;
      if(this.managers.length > 0){
        this.managersId = this.getManagersId();
      }
    });
  }

  getManagersId(): string[]{
    return this.managers.map(elem=>elem.id);
  }

  submit(){
    this.submitted = true;
    if(this.managerId != ''){
      this.done = true;
      this.getAgreementsByManagerIdJPA(this.managerId);
    }
    else{
      alert('Manager id is empty!');
    }
  }

  clear(){
    this.done = false;
    this.managerId = '';
  }

  getAgreementsByManagerIdJPA(managerId: string){
    this.http.getAgreementsByManagerId(managerId).subscribe((data: any)=>{
      this.agreements = data;
    });
  }
}
