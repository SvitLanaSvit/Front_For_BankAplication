import { Component, OnInit } from '@angular/core';
import { ManagerInfo } from '../manager-info';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-managers-sorted-by-product',
  templateUrl: './list-managers-sorted-by-product.component.html',
  styleUrls: ['./list-managers-sorted-by-product.component.css']
})
export class ListManagersSortedByProductComponent implements OnInit{
  managers: ManagerInfo[] = [];

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getAllManagersSortedByProduct().subscribe((data: any)=>{
      this.managers = data;
    })
  }
}
