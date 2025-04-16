import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorchenegarouachiStagesIngComponent } from './norchenegarouachi-stages-ing/norchenegarouachi-stages-ing.component';
import { NorchenegarouachiAddStageIngComponent } from './norchenegarouachi-add-stage-ing/norchenegarouachi-add-stage-ing.component';
import { NorchenegarouachiNotFoundComponent } from './norchenegarouachi-not-found/norchenegarouachi-not-found.component';
import { NorchenegarouachiStageDetailsComponent } from './norchenegarouachi-stage-details/norchenegarouachi-stage-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/norchenegarouachi-stages', pathMatch: 'full' },
  { path: 'norchenegarouachi-stages', component: NorchenegarouachiStagesIngComponent },
  { path: 'norchenegarouachi-add-stage', component: NorchenegarouachiAddStageIngComponent },
  { path: 'norchenegarouachi-stage-details/:id', component: NorchenegarouachiStageDetailsComponent },
  { path: '**', component: NorchenegarouachiNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }