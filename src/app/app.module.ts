import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NorchenegarouachiNavBarComponent } from './norchenegarouachi-nav-bar/norchenegarouachi-nav-bar.component';
import { NorchenegarouachiStagesIngComponent } from './norchenegarouachi-stages-ing/norchenegarouachi-stages-ing.component';
import { NorchenegarouachiAddStageIngComponent } from './norchenegarouachi-add-stage-ing/norchenegarouachi-add-stage-ing.component';
import { NorchenegarouachiNotFoundComponent } from './norchenegarouachi-not-found/norchenegarouachi-not-found.component';
import { NorchenegarouachiStageDetailsComponent } from './norchenegarouachi-stage-details/norchenegarouachi-stage-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NorchenegarouachiNavBarComponent,
    NorchenegarouachiStagesIngComponent,
    NorchenegarouachiAddStageIngComponent,
    NorchenegarouachiNotFoundComponent,
    NorchenegarouachiStageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }