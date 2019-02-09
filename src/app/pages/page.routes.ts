import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';


const pageRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];
// tslint:disable-next-line:semicolon
export const PAGE_ROUTES = RouterModule.forChild(pageRoutes);
