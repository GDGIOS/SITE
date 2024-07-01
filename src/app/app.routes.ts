import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
