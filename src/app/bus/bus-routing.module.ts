import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus.component';
import { TrackerComponent } from './tracker/tracker.component';

const busRoutes: Routes = [
    {path: '',
    component: BusComponent,
    children: [
        {
            path: ':matricula',
            component: TrackerComponent
        }
    ]}
];

@NgModule({
    imports: [
      RouterModule.forChild(busRoutes)
    ],
    exports: [
      RouterModule
    ]
})
export class BusRoutingModule { }
