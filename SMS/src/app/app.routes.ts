import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StddetailsComponent } from './pages/stddetails/stddetails.component';
import { OthersComponent } from './pages/others/others.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'student/details', component: StddetailsComponent },
  { path: 'others', component: OthersComponent },

];
