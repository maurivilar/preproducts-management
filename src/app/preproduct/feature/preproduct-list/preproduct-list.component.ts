import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PreproductService } from '../../data-access/preproduct.service';
import { Preproduct } from '../../interfaces/preproduct.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-preproduct-list',
  templateUrl: './preproduct-list.component.html',
  styleUrls: ['./preproduct-list.component.scss']
})
export class PreproductListComponent implements OnInit {

  preproducts!: Preproduct[];
  displayedColumns: string[] = ['name', 'price', 'container', 'brand', 'actions'];
  
  columns: any[] = [
    { name: 'name' },
    { name: 'price' },
    { name: 'container' },
    { name: 'brand' },
    { name: 'actions' },
  ];
  dataSource: MatTableDataSource<Preproduct> = new MatTableDataSource();
  previousIndex: number = 0;

  constructor(private preproductService: PreproductService, 
    private liveAnnouncer: LiveAnnouncer) { 
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getPreproducts();
  }

  getPreproducts(): void {
    this.preproductService.getPreproducts()
      .subscribe(preproducts => {
        this.preproducts = preproducts;
        this.dataSource = new MatTableDataSource(this.preproducts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  dropColumn(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  sortColumn(eventSort: Sort): void {
    if (eventSort.direction) {
      this.liveAnnouncer.announce(`Sorted ${eventSort.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  deletePreproduct(preproduct: Preproduct): void{
    const confirmDelete = confirm(`You are about to delete the preproduct ${preproduct.name}, are you sure?`);
  
    if(confirmDelete){
      this.preproductService.deletePreproduct(preproduct.id).subscribe(response => {
        this.getPreproducts();
      });
    } 
  }

}
