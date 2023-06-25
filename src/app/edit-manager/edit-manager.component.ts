import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Manager } from '../manager';
import { ManagerStatus } from '../manager-status';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {
  id: string = '';
  manager: Manager = new Manager('','','','','');
  managerStatusOptions: string[] = Object.values(ManagerStatus);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.id = params["id"]);
    console.log(this.id);
    this.http.getManagerById(this.id).subscribe((data:any)=>{
      this.manager = data;
    });
  }

  submit(){
    this.submitted = true;
    this.http.putManager(this.manager).subscribe((data: any)=>{
      this.manager = data;
      this.done = true;
    })
  }
  clear(){
    this.manager = new Manager('','','','','');
    this.done = false;
  }
}
