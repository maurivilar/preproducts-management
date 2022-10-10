import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreproductListComponent } from './preproduct-list.component';
import { PreproductService } from '../../data-access/preproduct.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { from, of } from 'rxjs';
import { Preproduct } from '../../interfaces/preproduct.interface';

describe('PreproductsListComponent Http Tests', () => {
  let component: PreproductListComponent;
  let fixture: ComponentFixture<PreproductListComponent>;
  let compiled: HTMLElement;
  let service: PreproductService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreproductListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PreproductService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreproductListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( PreproductService );
    httpMock = TestBed.inject( HttpTestingController );

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should request GET preproducts', () => {
    const req = httpMock.expectOne(environment.apiUrl);
    expect(req.request.method).toEqual('GET');
    httpMock.verify();
  });

});


describe('PreproductsListComponent', () => {

  let component: PreproductListComponent;
  let service = new PreproductService(null!);

  beforeEach(() => {
    component = new PreproductListComponent(service, null!);
  });

  it('should preproducts get assigned on init', () => {
    
    const preproducts: Preproduct[] =
    [ {
      id: 1,
      name: "arroz con leche",
      price: "2.25",
      container: "embasado",
      brand: "Hacendado"
    },
    {
      id: 2,
      name: "arroz con leche picante",
      price: "2.50",
      container: "embasado",
      brand: "Hacendado"
    }];

    spyOn( service, 'getPreproducts').and.callFake( ()=> {
      return from([preproducts]);
    });
    component.ngOnInit();
    expect(component.preproducts.length).toBeGreaterThan(0);

  });

  
  it('should call service function to delete preproduct on accept alert', ()=>{
    const preproduct: Preproduct =
    {
      id: 1,
      name: "arroz con leche",
      price: "2.25",
      container: "embasado",
      brand: "Hacendado"
    };

    const spyService = spyOn(service, 'deletePreproduct').and.returnValue( of() );
    //Avoid accept alert
    spyOn( window, 'confirm').and.returnValue(true);
    component.deletePreproduct(preproduct);
    expect(spyService).toHaveBeenCalledTimes(1);
  });

  it('not should call service function to delete preproduct on cancel alert', ()=>{
    const preproduct: Preproduct =
    {
      id: 1,
      name: "arroz con leche",
      price: "2.25",
      container: "embasado",
      brand: "Hacendado"
    };

    const spyService = spyOn(service, 'deletePreproduct').and.returnValue( of() );
    spyOn( window, 'confirm').and.returnValue(false);
    component.deletePreproduct(preproduct);
    expect(spyService).toHaveBeenCalledTimes(0);
  });

});


