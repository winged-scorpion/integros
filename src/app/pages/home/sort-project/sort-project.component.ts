import { Component, OnInit } from '@angular/core';
import {LocalProjectService } from "../local.Project.service";

@Component({
  selector: 'app-sort-project',
  templateUrl: './sort-project.component.html',
  styleUrls: ['./sort-project.component.scss']
})
export class SortProjectComponent implements OnInit {
  public projectListNew = [];
  public projectList = [];
  constructor(
    private itemProject: LocalProjectService
  ) {}
  ngOnInit() {
    this.itemProject.userDataSource.subscribe(value=>{
      this.projectList = value;
      this.projectList = this.projectList.map(function (task) {
        return task.name;
      });
      this.projectListNew = this.projectList.slice()
    })
  }

  searchProject(event){
    this.projectListNew.length = 0;
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.projectList.forEach(item => {
        const shouldShow = item.toLowerCase().indexOf(query) > -1;
        if (shouldShow){
          this.projectListNew.push(item)
        }
      });
    });
  }
}
