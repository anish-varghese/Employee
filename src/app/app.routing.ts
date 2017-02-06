import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component'
import { HomeComponent } from './home/home.component'

const APP_ROUTES: Routes = [
     { path: '', component: HomeComponent },
    { path: 'SearchEmployee', component: SearchComponent },
    { path: 'ViewAll', component: ViewAllComponent },
    { path: 'AddNew', component: AddNewEmployeeComponent }, 
];

export const routing = RouterModule.forRoot(APP_ROUTES);