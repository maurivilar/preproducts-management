import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PreproductService } from '../../data-access/preproduct.service';
import { Preproduct } from '../../interfaces/preproduct.interface';
import { PreproductForm } from '../../interfaces/preproductForm.interface';

@Component({
  selector: 'app-preproduct-add',
  templateUrl: './preproduct-add.component.html',
  styleUrls: ['./preproduct-add.component.scss']
})
export class PreproductAddComponent implements OnInit {

  preproductForm!: FormGroup<PreproductForm>;

  constructor(private fb: FormBuilder, 
    private preproductService: PreproductService,
    private router: Router) {
    this.preproductForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      container: ['', Validators.required],
      brand: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  add(): void {
    const newPreproduct: Preproduct = { 
      name : this.preproductForm.value.name,
      price : this.preproductForm.value.price,
      container : this.preproductForm.value.container,
      brand : this.preproductForm.value.brand,
    } as Preproduct;

    this.preproductService
      .addPreproduct(newPreproduct)
      .subscribe(response => {
        this.router.navigate(['/preproduct']);
      }); 
  }

}
