import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  {
    path: '',
    component: TaskViewComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
