import { Component, OnInit } from '@angular/core';
import { ClientInfo } from '../client-info';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-client-with-balance-more',
  templateUrl: './list-client-with-balance-more.component.html',
  styleUrls: ['./list-client-with-balance-more.component.css']
})
export class ListClientWithBalanceMoreComponent{
  clients: ClientInfo[] = [];
  balance: string = '';

  submitted: boolean = false;
  done: boolean = false;

  constructor(private http: HttpService){}

  submit(){
    this.submitted = true;
    if(this.balance != ''){
      this.done = true;
      this.getAllClientsWhereBalanceMoreThan(this.balance);
    }
    else{
      alert('Balance is empty!');
    }
  }

  clear(){
    this.done = false;
    this.balance = '';
  }

  getAllClientsWhereBalanceMoreThan(balance: string){
    this.http.getAllClientsWhereBalanceMoreThan(balance).subscribe((data: any)=>{
      this.clients = data;
    });
  }
}
