import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ItemUser } from "../../item.User";
import { SafeLocalUser } from "../../safe.Local.User";
import { Router} from '@angular/router';
import { GetProjectService } from "./get.Project.service";
import { LocalProjectService } from "./local.Project.service";


let version: number = 0;
let loadStatus = false;
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: any;
  projectList:any

  constructor(
    public menu: MenuController,
    private user: ItemUser,
    private removeUser: SafeLocalUser,
    private router: Router,
    private projectListGet: GetProjectService,
    private safeProject: LocalProjectService,

  ) {
    this.menu.enable(false);
  }

  itemPage = 'Строительный контроль';
  pageItemComponent;
  logOut(){
    this.removeUser.logout()
    this.router.navigate(['/authorization']);
  }

  ngOnInit() {
    this.safeProject.getProject()
    this.userName = localStorage.getItem('userName');
    this.pageItemComponent = ''
  }
  pageItem(item){
    this.pageItemComponent = item;
    switch (item){
      case 'create': this.itemPage = 'Создать проект';
        break;
      case 'reports': this.itemPage = 'Отчёты';
        break;
      case 'help': this.itemPage = 'Справочная';
        break;
      case '': this.itemPage = 'Строительный контроль';
        break;
    }
  }
}
