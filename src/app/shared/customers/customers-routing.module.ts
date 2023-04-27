import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { LoginComponent } from 'src/app/core/components/login/login.component';
import { RegisterComponent } from 'src/app/core/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
