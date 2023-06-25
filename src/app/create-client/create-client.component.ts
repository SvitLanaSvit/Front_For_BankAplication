import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Manager } from '../manager';
import { ClientStatus } from '../client-status';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit{
  client: Client = new Client('','','','','','','','','','');
  managers: Manager[] = [];
  managersId: string[] = [];
  managersFullname: string[] = [];
  clientStatusOptions: string[] = Object.values(ClientStatus);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService){}

  ngOnInit(): void {
    this.http.getManagers().subscribe((data: any)=>{
      this.managers = data.managerDTOList;
      console.log(data);
      this.managersId = this.getManagersId();
      this.managersFullname = this.getManagersFullname();
    })
  }

  getManagersId(): string[]{
    return this.managers.map(manager=>manager.id)
  }

  getManagersFullname(): string[]{
    return this.managers.map(manager=>`${manager.firstName} ${manager.lastName}`);
  }

  submit(){
    this.submitted = true;

    if(parseInt(this.client.taxCode) < 1000000000 || parseInt(this.client.taxCode) > 9999999999) {
      alert("The tax code is not right!");
      this.client.taxCode = '';
      return;
    }

    this.http.postClient(this.client).subscribe((data: any)=>{
      this.client = data;
      this.done = true;
    });
  }

  clear(){
    this.client = new Client('','','','','','','','','','');
    this.done = false;
  }
}
