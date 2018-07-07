import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './bus/tracker/tracker.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { BusComponent } from './bus/bus.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [
    CompanyComponent,
    BusComponent,
    TrackerComponent]
})
export class CompanyModule { }
