import { Component, OnInit } from '@angular/core';
import { Manager } from '../manager';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-managers',
  templateUrl: './list-managers.component.html',
  styleUrls: ['./list-managers.component.css']
})
export class ListManagersComponent implements OnInit {
  managers: Manager[] = [];
  constructor(private http: HttpService, private router: Router){}
  ngOnInit(): void {
    this.http.getManagers().subscribe((data: any) =>{
      console.log(data);
      this.managers = data.managerDTOList;
    })
  }

  editManager(id: string){
    //this.router.navigateByUrl("editManager/?id="+id);
    this.router.navigate(['/editManager'], { queryParams: { id: id } });
  }
  deleteManager(manager: Manager){
    if (!manager) {
      console.error('Cannot delete null object');
      return;
    }
    const confirmDelete = confirm(`Are you sure you want to delete manager with ID ${manager.id}?`);
    if(confirmDelete){
      this.http.deleteManager(manager).subscribe((data: any)=>{
        let deleteIndex: number = this.managers.findIndex(elem=>elem.id === manager.id);
        if (deleteIndex !== -1){
          this.managers.splice(deleteIndex, 1);
        }
      });
    }
  }
}
