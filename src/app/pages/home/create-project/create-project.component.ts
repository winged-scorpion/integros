import { Component, OnInit } from '@angular/core';
import {LocalProjectService } from "../local.Project.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})

export class CreateProjectComponent implements OnInit {
  public projectList = [];
  public projectListDelete = [];
  public status = {addProject: false}
  private newProject: FormGroup
  items:string[] = []
  constructor(
    private itemProject: LocalProjectService,
    private formBuilder: FormBuilder,
  ) {}
  addProjectListDelete(item){
    let id = item.target.id*1
    if(item.detail.checked){
      this.projectListDelete.push(id)
    }else{
      this.projectListDelete = this.projectListDelete.filter((n)=> {return n != id})
    }
  }

  removeProject(){
    for (const projectListDeleteElement of this.projectListDelete) {
      this.projectList = this.projectList.filter((n) =>{ return n.id != projectListDeleteElement})
    }
    this.itemProject.createProject(this.projectList)
  }
  createProjectShow(){
    this.status.addProject = true;
  }
  newProjectCancel(){
    this.status.addProject = false;
  }
  addProject(form){
    let test = {
      address: form.value.projectAddress,
      belongs: form.value.belongsObject,
      description: form.value.projectDescription,
      id: Math.floor(Math.random() * 100),
      name: form.value.projectName,
      status: form.value.object
    }
    this.projectList.push(test);
    this.itemProject.createProject(this.projectList)
  }
  ngOnInit() {
    this.itemProject.userDataSource.subscribe(value=>{
      this.projectList = value
    })

    this.newProject = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectAddress: ['', Validators.required],
      object: [],
      belongsObject: []
    })
  }
}
