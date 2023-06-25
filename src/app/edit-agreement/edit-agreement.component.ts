import { Component, OnInit } from '@angular/core';
import { Agreement } from '../agreement';
import { Account } from '../account';
import { Product } from '../product';
import { AgreementStatus } from '../agreement-status';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-agreement',
  templateUrl: './edit-agreement.component.html',
  styleUrls: ['./edit-agreement.component.css']
})
export class EditAgreementComponent implements OnInit {
  id: string = '';
  agreement: Agreement = new Agreement('','','','','','','');
  accounts: Account[] = [];
  products: Product[] = [];
  done: boolean = false;
  agreementStatusOptions: string[] = Object.values(AgreementStatus);
  accountsId: string[] = [];
  productsId: string[] = [];

  submitted: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.id = params["id"]);
    console.log(this.id);
    this.http.getAgreementById(this.id).subscribe((data: any)=>{
      this.agreement = data;
      console.log(data);
    });

    this.http.getAccounts().subscribe((data: any)=>{
      console.log(data);
      this.accounts = data.accountDTOList;
      this.accountsId = this.getAccountsId();
      console.log(this.accountsId);
    });

    this.http.getProducts().subscribe((data: any)=>{
      console.log(data);
      this.products = data.productDTOList;
      this.productsId = this.getProductsId();
      console.log(this.accountsId);
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

    this.http.putAgreement(this.agreement).subscribe((data: any)=>{
      console.log(data);
      this.agreement = data;
      this.done = true;
    });
  }

  clear(){
    this.agreement = new Agreement('','','','','','','');
    this.done = false;
  }
}
