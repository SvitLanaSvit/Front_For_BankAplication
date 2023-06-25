import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Manager } from '../manager';
import { ProductStatus } from '../product-status';
import { CurrencyCode } from '../currency-code';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = new Product('','','','','','','','');
  managers: Manager[] = [];
  managersId: string[] = [];
  productStatusOptions: string[] = Object.values(ProductStatus);
  productCurrencyCodeOptions: string[] = Object.values(CurrencyCode);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getManagers().subscribe((data: any)=>{
      this.managers = data.managerDTOList;
      console.log(data);
      this.managersId = this.getManagersId();
      console.log(this.managersId);
    })
  }

  getManagersId(): string[]{
    return this.managers.map(manager => manager.id);
  }

  submit(){

    this.submitted = true;
    this.http.postProduct(this.product).subscribe((data: any)=>{
      this.product = data;
      this.done = true;
    })
  }

  clear(){
    this.product = new Product('','','','','','','','');
    this.done = false;
  }
}
