import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreproductAddComponent } from './preproduct-add.component';
import { PreproductService } from '../../data-access/preproduct.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

describe('PreproductsAddComponent', () => {

  let component: PreproductAddComponent;
  let service = new PreproductService(null!);
  let router: Router;

  beforeEach(() => {
    component = new PreproductAddComponent(new FormBuilder(), service, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with preproduct fields', () => {
    expect(component.preproductForm.contains('name')).toBeTruthy();
    expect(component.preproductForm.contains('price')).toBeTruthy();
    expect(component.preproductForm.contains('container')).toBeTruthy();
    expect(component.preproductForm.contains('brand')).toBeTruthy();
  });

  it('preproductForm invalid when empty', () =>{
    expect(component.preproductForm.valid).toBeFalsy();
  });

  it('should call service function to add preproduct', ()=>{
    const spy = spyOn(service, 'addPreproduct').and.returnValue( of() );
    component.add();
    expect(spy).toHaveBeenCalledTimes(1);
  });

});

