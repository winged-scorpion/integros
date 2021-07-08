import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { SortProjectComponent } from "./sort-project/sort-project.component";
import { CreateProjectComponent } from "./create-project/create-project.component"
import { HelpComponent } from "./help/help.component";
import { ReportsComponent } from "./reports/reports.component";
import { GetProjectService } from "./get.Project.service";
import { ProjectArr } from "../../projectArr";
import { LocalProjectService } from "./local.Project.service";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GetProjectService,ProjectArr,LocalProjectService],
  declarations: [HomePage,SortProjectComponent,CreateProjectComponent,HelpComponent,ReportsComponent]
})
export class HomePageModule {}
