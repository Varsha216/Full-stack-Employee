import { EmployeeRegistrationService } from './employee-registration.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ActionsComponent } from './actions/actions.component';
import { UpdateComponent } from './update/update.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ActionsComponent,
    UpdateComponent,
    EmployeeByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmployeeRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
