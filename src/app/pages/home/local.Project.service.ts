import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetProjectService } from "./get.Project.service";

@Injectable({
  providedIn: 'root'
})

export class LocalProjectService {
  public projectList;
  userDataSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  constructor(
    private getProjectService: GetProjectService
  ) { }
  getProject(){
    this.getProjectService.getP(0).subscribe(value=>{
      this.userDataSource.next(value.projectList);
        this.safeProject(value.projectList)
      },
      error => {
        alert('не удалось загрузить проекты, обновите страницу')
      }
    )
  }
  createProject(dataObj) {
    const updatedValue = new Array(...dataObj);
    this.userDataSource.next(updatedValue);
    this.safeProject(updatedValue)
  }
  safeProject(projectList){
    localStorage.setItem('projectList', JSON.stringify(projectList));
  }
  getProjectOffline(){
    this.projectList = JSON.parse(localStorage.getItem("projectList"));
    return this.projectList.projectList
  }
}
