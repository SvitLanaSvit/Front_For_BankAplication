import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankAplication';
  isShowLists: boolean = false;
  isShowCreate: boolean = false;
  isShowHardRequest: boolean = false;

  showList(){
    this.isShowLists = !this.isShowLists;
    this.isShowCreate = false;
    this.isShowHardRequest = false;
  }

  showCreate(){
    this.isShowCreate = !this.isShowCreate;
    this.isShowLists = false;
    this.isShowHardRequest = false;
  }

  showHardRequest(){
    this.isShowHardRequest = !this.isShowHardRequest;
    this.isShowCreate = false;
    this.isShowLists = false;
  }
}
