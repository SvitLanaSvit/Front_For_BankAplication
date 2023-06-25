import { Component, OnInit } from '@angular/core';
import { AccountId } from '../account-id';
import { HttpService } from '../http.service';
import { Product } from '../product';
import { ProductStatus } from '../product-status';

@Component({
  selector: 'app-list-account-by-product-id-status',
  templateUrl: './list-account-by-product-id-status.component.html',
  styleUrls: ['./list-account-by-product-id-status.component.css']
})
export class ListAccountByProductIdStatusComponent implements OnInit{
  products: Product[] = [];
  productsId: string[] = [];
  productStatusOptions: string[] = Object.values(ProductStatus);

  accountsId: AccountId[] = [];

  productId: string = '';
  productStatus: string = '';

  done: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getProducts().subscribe((data: any)=>{
      this.products = data.productDTOList;
      this.productsId = this.getProductsId();
    });
  }

  getProductsId(): string[]{
    return this.products.map(elem=>elem.id);
  }

  submit(){
    this.submitted = true;
    if(this.productId != '' && this.productStatus != '')
      this.getAccounts(this.productId, this.productStatus);
  }

  clear(){
    this.done = false;
    this.productId = '';
    this.productStatus = '';
  }

  getAccounts(id: string, status: string){
    this.done = true;

    this.http.getAccountIdsByProductIdAndStatusQuery(id, status).subscribe((data: any)=>{
      this.accountsId = data;
    });
  }
}
