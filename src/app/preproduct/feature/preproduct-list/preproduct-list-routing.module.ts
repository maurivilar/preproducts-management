import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreproductListComponent } from './preproduct-list.component';
import { PreproductAddComponent } from '../preproduct-add/preproduct-add.component';

const routes: Routes = [
  {
    path: '',
    component: PreproductListComponent
  },
  {
    path: 'add',
    component: PreproductAddComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PreproductListRoutingModule { }
