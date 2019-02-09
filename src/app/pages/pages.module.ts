
import { NgModule } from '@angular/core';

import { SharedModules } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PAGE_ROUTES } from './page.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent

    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent

    ],
    imports: [
        SharedModules,
        PAGE_ROUTES
    ]
})

export class PagesModules { }
