import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: 'company',
    loadChildren: './company/company.module#CompanyModule'
    },
    {path: '', redirectTo: '/company', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
