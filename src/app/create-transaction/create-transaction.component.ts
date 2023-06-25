import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { HttpService } from '../http.service';
import { Account } from '../account';
import { TransactionType } from '../transaction-type';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  transaction: Transaction = new Transaction('','','','','','');
  debitAccounts: Account[] = [];
  creditAccounts: Account[] = [];

  debitAccountsId: string[] = [];
  creditAccountsId: string[] = [];

  transactionTypeOptions: string[] = Object.values(TransactionType);

  done: boolean = false;

  debitAccount: Account = new Account('','','','','','','','');
  creditAccount: Account = new Account('','','','','','','','');

  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getAccounts().subscribe((data: any)=>{
      this.debitAccounts = this.creditAccounts = data.accountDTOList;
      console.log(data);
      this.debitAccountsId = this.creditAccountsId = this.getDebitAccounts();
      console.log(this.debitAccountsId);
    })
  }

  private getDebitAccounts(): string[]{
    return this.debitAccounts.map(elem => elem.id);
  }

  submit() {
    this.submitted = true;

    this.http.getAccountById(this.transaction.debitAccountId).subscribe((debitData: any) => {
      this.debitAccount = debitData;

      this.http.getAccountById(this.transaction.creditAccountId).subscribe((creditData: any) => {
        this.creditAccount = creditData;

        if (parseFloat(this.transaction.amount) <= parseFloat(this.debitAccount.balance) && this.debitAccount.currencyCode !== this.creditAccount.currencyCode) {
          alert("The currency code of the balance is not equal to the sending account. Conversion is not available at this time!");
        } else if (parseFloat(this.transaction.amount) <= parseFloat(this.debitAccount.balance) && this.debitAccount.currencyCode === this.creditAccount.currencyCode) {
          alert("The transaction was successful!");
        } else if (parseFloat(this.transaction.amount) > parseFloat(this.debitAccount.balance)) {
          alert("There are insufficient funds in the account!");
        }

        this.http.postTransaction(this.transaction).subscribe((data: any) => {
          this.transaction = data;
          this.done = true;
        });
      });
    });
  }

  clear(){
    this.transaction = new Transaction('','','','','','');
    this.done = false;
  }
}
