import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from '../gaurds/auth-gaurd.service';
import { OnboardComponent } from '../layout/onboard/onboard.component';
import { LoginComponent } from '../modules/onboard/login/login.component';
import { RegisterComponent } from '../modules/onboard/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGaurd],
    component: OnboardComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
