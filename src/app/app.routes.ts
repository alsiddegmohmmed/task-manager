import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AboutComponent } from './about/about.component'
import { TaskDetailsComponent } from './task-detail/task-detail.component';


export const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'task/:id', component: TaskDetailsComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}

];
