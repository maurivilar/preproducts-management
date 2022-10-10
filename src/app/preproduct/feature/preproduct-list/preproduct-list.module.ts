import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreproductListRoutingModule } from './preproduct-list-routing.module';
import { PreproductListComponent } from './preproduct-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PreproductListComponent
  ],
  imports: [
    CommonModule,
    PreproductListRoutingModule,
    SharedModule,
  ]
})
export class PreproductListModule { }
