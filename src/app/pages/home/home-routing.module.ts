import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SortProjectComponent } from './sort-project/sort-project.component'
import { HelpComponent } from "./help/help.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { ReportsComponent } from "./reports/reports.component";

const routes: Routes = [
  {path: '',component: HomePage},
  {path: 'home/sort',component: SortProjectComponent},
  {path: 'home/help',component: HelpComponent},
  {path: 'home/create',component: CreateProjectComponent},
  {path: 'home/reports',component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
