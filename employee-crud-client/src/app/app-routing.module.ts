import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { UpdateComponent } from './update/update.component';
import { ActionsComponent } from './actions/actions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:"" ,redirectTo:"register", pathMatch:"full"},
  {path:"register", component: RegistrationComponent},
  {path:"actions", component: ActionsComponent},
  {path:"update/:id", component: UpdateComponent},
  {path:"employeeById/:id", component: EmployeeByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
