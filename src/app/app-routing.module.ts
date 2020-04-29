import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SkillPageComponent} from './skill-page/skill-page.component';

const routes: Routes = [
  {path: '', component: SkillPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
