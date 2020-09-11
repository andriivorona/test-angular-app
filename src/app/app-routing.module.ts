import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'app-main',
    component: MainComponent
  },
  {
    path: 'app-login',
    component: LoginComponent,
  },
  {
    path: 'app-register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
