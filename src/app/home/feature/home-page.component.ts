import { Component, OnInit } from '@angular/core';
import { PreproductService } from 'src/app/preproduct/data-access/preproduct.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  numberPendingPreproducts!:number;

  constructor(private preproductService: PreproductService) { }

  ngOnInit(): void {
    this.preproductService.getPreproducts()
    .subscribe(preproducts => {
      this.numberPendingPreproducts = preproducts.length;
    });
  }

}
