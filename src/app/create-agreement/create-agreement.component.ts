import { Component, OnInit } from '@angular/core';
import { Agreement } from '../agreement';
import { Account } from '../account';
import { Product } from '../product';
import { AgreementStatus } from '../agreement-status';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-agreement',
  templateUrl: './create-agreement.component.html',
  styleUrls: ['./create-agreement.component.css']
})
export class CreateAgreementComponent implements OnInit{
  agreement: Agreement = new Agreement('','','','','','','');
  accounts: Account[] = [];
  products: Product[] = [];
  accountsId: string[] = [];
  productsId: string[] = [];
  agreementStatusOptions: string [] = Object.values(AgreementStatus);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getAccounts().subscribe((data: any)=>{
      this.accounts = data.accountDTOList;
      console.log(data);
      this.accountsId = this.getAccountsId();
      console.log(this.accountsId);
    });

    this.http.getProducts().subscribe((data: any)=>{
      this.products = data.productDTOList;
      console.log(data);
      this.productsId = this.getProductsId();
      console.log(this.productsId);
    })
  }

  getAccountsId(): string[]{
    return this.accounts.map(account=>account.id);
  }

  getProductsId(): string[]{
    return this.products.map(product=>product.id);
  }

  submit(){
    this.submitted = true;

    if(parseFloat(this.agreement.interestRate) < 0){
      alert(`Negative interest rate alert: Your agreement\`s interest rate ${this.agreement.interestRate} is negative.`);
      this.agreement.interestRate = '';
      return; // Stop execution if interest rate is negative
    }

    if(parseFloat(this.agreement.sum) < 0){
      alert(`Negative summe alert: Your agreement\`s summe ${this.agreement.sum} is negative.`);
      this.agreement.sum = '';
      return; // Stop execution if sum is negative
    }

    this.http.postAgreement(this.agreement).subscribe((data: any)=>{
      this.agreement = data;
      this.done = true;
    })
  }

  clear(){
    this.agreement = new Agreement('','','','','','','');
    this.done = false;
  }
}
