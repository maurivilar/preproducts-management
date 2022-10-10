import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreproductAddComponent } from './preproduct-add.component';

const routes: Routes = [
  {
    path: '',
    component: PreproductAddComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PreproductAddRoutingModule { }
