import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  clients: Client[] = [];

  constructor(private http: HttpService, private router: Router){}
  ngOnInit(): void {
    this.http.getClients().subscribe((data: any)=>{
      this.clients = data.clientDTOList;
    })
  }

  editClient(id: string){
    this.router.navigate(["/editClient"], {queryParams: {id: id}});
  }

  deleteClient(client: Client){
    if(!client){
      console.error('Cannot delete null object');
      return;
    }

    const confirmDelete = confirm(`Are you sure you want to delete client with ID ${client.id}`);
    if(confirmDelete){
      this.http.deleteClient(client).subscribe((data: any)=>{
        let deleteIndex: number = this.clients.findIndex(elem => elem.id === client.id);
        if(deleteIndex !== - 1){
          this.clients.splice(deleteIndex, 1);
        }
      });
    }
  }
}
