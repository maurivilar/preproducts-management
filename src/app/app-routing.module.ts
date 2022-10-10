import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home.module').then(
        (m) => m.HomeModule) 
  },
  {
    path: 'preproduct',
    loadChildren: () =>
      import('./preproduct/feature/preproduct-list/preproduct-list.module').then(
        (m) => m.PreproductListModule) 
  },
  {
    path: 'preproduct/add',
    loadChildren: () =>
      import('./preproduct/feature/preproduct-add/preproduct-add.module').then(
        (m) => m.PreproductAddModule) 
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
