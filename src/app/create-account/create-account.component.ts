import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountStatus } from '../account-status';
import { AccountType } from '../account-type';
import { HttpService } from '../http.service';
import { Client } from '../client';
import { CurrencyCode } from '../currency-code';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account: Account = new Account('','','','','','','','');
  clients: Client[] = [];
  clientsId: string[] = [];
  accountStatusOptions: string[] = Object.values(AccountStatus);
  accountTypeOptions: string[] = Object.values(AccountType);
  currencyCodeOptions: string[] = Object.values(CurrencyCode);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getClients().subscribe((data: any)=>{
      this.clients = data.clientDTOList;
      console.log(this.clients);
      this.clientsId = this.getClientsId();
      console.log(this.clientsId);
    })
  }

  getClientsId(): string[]{
    return this.clients.map(client => client.id);
  }

  submit(){
    this.submitted = true;

    if (parseFloat(this.account.balance) < 0) {
      alert(`Negative balance alert: Your account\`s balance ${this.account.balance} is negative.`);
      this.account.balance = '';
      return; // Stop execution if balance is negative
    }

    this.http.postAccount(this.account).subscribe((data: any)=>{
      this.account = data;
      this.done = true;
    })
  }

  clear(){
    this.account = new Account('','','','','','','','');
    this.done = false;
  }
}
