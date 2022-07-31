import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/core/guard/auth.guard';
import { MountsComponent } from './modules/features/mounts/mounts.component';
import { OverviewComponent } from './modules/features/overview/overview.component';
import { FullComponent } from './modules/layout/full/full.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'overview', component: OverviewComponent
      },
      {
        path: 'mounts', component: MountsComponent
      },
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
