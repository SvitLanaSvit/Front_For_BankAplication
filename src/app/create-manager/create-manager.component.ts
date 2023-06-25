import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Manager } from '../manager';
import { ManagerStatus } from '../manager-status';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent {
  manager: Manager = new Manager('', '', '', '', '');
  managerStatusOptions: string[] = Object.values(ManagerStatus);
  done: boolean = false;

  submitted: boolean = false;

  constructor(private http: HttpService){}

  submit(){
    this.submitted = true;

    this.http.postManager(this.manager).subscribe((data: any)=>{
      console.log(data);
      console.log(this.managerStatusOptions);
      this.manager = data;
      this.done = true;
    })
  }

  clear(){
    this.manager = new Manager('', '', '', '', '');
    this.done = false;
  }
}
