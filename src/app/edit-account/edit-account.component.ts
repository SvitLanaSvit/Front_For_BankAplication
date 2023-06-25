import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountType } from '../account-type';
import { AccountStatus } from '../account-status';
import { CurrencyCode } from '../currency-code';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit{
  id: string = '';
  account: Account = new Account('','','','','','','','');
  // clients: Clients[] = [];
  done: boolean = false;
  accountTypeOptions: string[] = Object.values(AccountType);
  accountStatusOptions: string[] = Object.values(AccountStatus);
  accountCurrencyOptions: string[] = Object.values(CurrencyCode);
  //clientsId: string[] = [];

  submitted: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.id = params["id"]);
    console.log(this.id);
    this.http.getAccountById(this.id).subscribe((data: any)=>{
      this.account = data;
    });

    // this.http.getClients().subscribe((data: any)=>{
    //   this.clients = data.clientDTOList;
    //   console.log(this.clients);
    //   this.clientsId = this.getClientsId();
    //   console.log(this.clientsId);
    // })
  }

  // getClientsId(): string[]{
  //   return this.clients.map(client => client.id);
  // }

  submit(){
    this.submitted = true;

    this.http.putAccount(this.account).subscribe((data: any)=>{
      this.account = data;
      this.done = true;
    })
  }

  clear(){
    this.account = new Account('','','','','','','','');
    this.done = false;
  }
}
