import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLisComponent } from './Students/Students-List/student-lis/student-lis.component';

const routes: Routes = [
  {
    path:'',component:StudentLisComponent
  },
  {
    path:'Students',component:StudentLisComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
