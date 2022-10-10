import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreproductListModule } from 'src/app/preproduct/feature/preproduct-list/preproduct-list.module';

@NgModule({
  declarations: [  
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PreproductListModule
  ]
})
export class HomeModule { }
