import { Component, OnInit } from '@angular/core';
import { AgreementId } from '../agreement-id';
import { Client } from '../client';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-agreements-by-client-id',
  templateUrl: './list-agreements-by-client-id.component.html',
  styleUrls: ['./list-agreements-by-client-id.component.css']
})
export class ListAgreementsByClientIdComponent implements OnInit{
  agreements: AgreementId[] = [];
  clients: Client[] = [];
  clientsId: string[] = [];
  clientId: string ='';

  done: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getClients().subscribe((data: any)=>{
      this.clients = data.clientDTOList;
      if(this.clients.length > 0){
        this.clientsId = this.getClientsId();
      }
    });
  }

  getClientsId(): string[]{
    return this.clients.map(elem=>elem.id);
  }

  submit(){
    this.submitted = true;
    if(this.clientId != ''){
      this.done = true;
      this.getAgreementsByClientId(this.clientId);
    }
    else{
      alert('Client id is empty!');
    }
  }

  clear(){
    this.done = false;
    this.clientId = '';
  }

  getAgreementsByClientId(clientId: string){
    this.http.getAgreementsByClientId(clientId).subscribe((data: any)=>{
      this.agreements = data;
      console.log(data);
    });
  }
}
