import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './tracker/tracker.component';
import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';

@NgModule({
  imports: [
    CommonModule,
    BusRoutingModule
  ],
  declarations: [
    BusComponent,
    TrackerComponent]
})
export class BusModule { }
