import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-all-changed-products',
  templateUrl: './list-all-changed-products.component.html',
  styleUrls: ['./list-all-changed-products.component.css']
})
export class ListAllChangedProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getAllChangedProducts().subscribe((data: any)=>{
      this.products = data.productDTOList;
    });
  }
}
