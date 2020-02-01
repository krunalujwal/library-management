import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from '../gaurds/auth-gaurd.service';
import { OnboardComponent } from '../layout/onboard/onboard.component';
import { LoginComponent } from '../modules/onboard/login/login.component';
import { RegisterComponent } from '../modules/onboard/register/register.component';
import { AdminComponent } from '../layout/admin/admin.component';
import { RouterGaurd } from '../gaurds/router-gaurd.service';

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
  },
  {
    path: 'app',
    component: AdminComponent,
    canActivate: [RouterGaurd],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../modules/application/dashboard/dashboard.module').then(mod => mod.DashboardModule),
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
