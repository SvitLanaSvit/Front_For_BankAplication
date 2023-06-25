import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit{
  transactions: Transaction[] = [];

  constructor(private http: HttpService){}
  ngOnInit(): void {
    this.http.getTransactions().subscribe((data: any)=>{
      console.log(data);
      this.transactions = data.transactionDTOList;
    });
  }

  deleteTransaction(transaction: Transaction){
    if(!transaction){
      console.error('Cannot delete null object');
      return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete manager with ID ${transaction.id}?`);
    if(confirmDelete){
      this.http.deleteTransaction(transaction).subscribe((data: any)=>{
        let deleteIndex: number = this.transactions.findIndex(elem=>elem.id === transaction.id);
        if(deleteIndex != -1){
          this.transactions.splice(deleteIndex, 1);
        }
      });
    }
  }
}
