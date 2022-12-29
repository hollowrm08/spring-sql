import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './home/home.guard';
import { OverviewGuard } from './overview/overview.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
    canLoad: [OverviewGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
