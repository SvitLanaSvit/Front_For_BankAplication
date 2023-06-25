import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Manager } from '../manager';
import { ClientStatus } from '../client-status';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit{
  id: string = '';
  client: Client = new Client('','','','','','','','','','');
  managers: Manager[] = [];
  managersId: string[] = [];
  clientStatusOptions: string[] = Object.values(ClientStatus);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.id = params["id"]);
    console.log(this.id);
    this.http.getClientById(this.id).subscribe((data: any)=>{
      this.client = data;
    });

    this.http.getManagers().subscribe((data: any)=>{
      this.managers = data.managerDTOList;
      console.log(data);
      this.managersId = this.getManagersId();
    });
  }

  getManagersId(): string[]{
    return this.managers.map(elem=>elem.id);
  }

  submit(){
    this.submitted = true;

    this.http.putClient(this.client).subscribe((data: any)=>{
      this.client = data;
      this.done = true;
    })

  }

  clear(){
    this.client = new Client('','','','','','','','','','');
    this.done = false;
  }
}
