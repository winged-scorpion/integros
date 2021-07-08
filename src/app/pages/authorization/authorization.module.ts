import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizationPageRoutingModule } from './authorization-routing.module';

import { AuthorizationPage } from './authorization.page';

import { AuthorizationService } from "./authorization.service";

import { GetProjectService } from "../home/get.Project.service";

import { ProjectArr } from "../../projectArr";

import { LocalProjectService } from "../home/local.Project.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthorizationPageRoutingModule
  ],
  providers: [AuthorizationService,GetProjectService,ProjectArr,LocalProjectService],
  declarations: [AuthorizationPage]
})
export class AuthorizationPageModule {}
