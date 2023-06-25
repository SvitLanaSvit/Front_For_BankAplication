import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Account } from '../account';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})

export class ListAccountsComponent implements OnInit{
  accounts: Account[] = [];
  client: Client = new Client('','','','','','','','','','');
  constructor(private http: HttpService, private router: Router){}

  ngOnInit(): void {
    this.http.getAccounts().subscribe((data: any)=>{
      this.accounts = data.accountDTOList;
    });
  }

  editAccount(id: string){
    this.router.navigate(['/editAccount'], {queryParams: {id: id}});
  }

  // getClientFullname(clientId: string): string{
  //   this.http.getClientById(clientId).subscribe((data: any)=>{
  //     this.client = data;
  //   })
  //   return this.client.firstName+' '+this.client.lastName;
  // }

  deleteAccount(account: Account){
    if (!account) {
      console.error('Cannot delete null object');
      return;
    }
    const confirmDelete = confirm(`Are you sure you want to delete account with ID ${account.id}?`);
    if(confirmDelete){
      this.http.deleteAccount(account).subscribe((data: any)=>{
        let deleteIndex: number = this.accounts.findIndex(elem=>elem.id === account.id);
        if (deleteIndex !== -1){
          this.accounts.splice(deleteIndex, 1);
        }
      })
    }
  }
}
