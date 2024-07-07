import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {
        path: '',
        component: DashboardComponent,

    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path:'**',
        redirectTo : ''

    }
];
