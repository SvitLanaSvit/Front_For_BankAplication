import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Manager } from '../manager';
import { ProductStatus } from '../product-status';
import { CurrencyCode } from '../currency-code';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: string = '';
  product: Product = new Product('','','','','','','','');
  managers: Manager[] = [];
  managersId: string[] = [];
  done: boolean = false;
  productStatusOptions: string[] = Object.values(ProductStatus);
  productCurrencyCodeOptions: string[] = Object.values(CurrencyCode);

  submitted: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.id = params["id"]);
    console.log(this.id);
    this.http.getProductById(this.id).subscribe((data: any)=>{
      this.product = data;
    });

    this.http.getManagers().subscribe((data: any)=>{
      this.managers = data.managerDTOList;
      console.log(data);
      this.managersId = this.getManagersId();
      console.log(this.managersId);
    });
  }

  getManagersId(): string[]{
    return this.managers.map(manager=>manager.id);
  }

  submit(){
    this.submitted = true;

    this.http.putProduct(this.product).subscribe((data: any)=>{
      this.product = data;
      this.done = true;
    })
  }

  clear(){
    this.product = new Product('','','','','','','','');
    this.done = false;
  }
}
