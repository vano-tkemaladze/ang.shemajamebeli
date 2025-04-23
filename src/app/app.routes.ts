import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},

     {
        path: "main",
        loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
     },
];
 