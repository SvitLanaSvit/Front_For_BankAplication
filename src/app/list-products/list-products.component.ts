import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private http: HttpService, private router: Router){}
  ngOnInit(): void {
    this.http.getProducts().subscribe((data: any)=>{
      this.products = data.productDTOList;
    })
  }

  editProduct(id: string){
    this.router.navigate(['/editProduct'], {queryParams: {id: id}});
    console.log(id);
  }

  deleteProduct(product: Product){
    if(!product){
      console.error('Cannot delete null object');
      return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete manager with ID ${product.id}?`);
    if(confirmDelete){
      this.http.deleteProduct(product).subscribe((data: any)=>{
        let deleteIndex: number = this.products.findIndex(elem=>elem.id === product.id);
        if(deleteIndex !== -1){
          this.products.splice(deleteIndex, 1);
        }
      });
    }
  }
}
