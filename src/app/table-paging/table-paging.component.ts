import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ILotsDataListModel, LotsDataList } from '../mock/lots-data-mock';

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.scss']
})
export class TablePagingComponent implements OnInit {

  constructor() { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'memo'];  
  dataSource = new MatTableDataSource<ILotsDataListModel>();

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  showFirstLastButtons = true;
  resultLength = 100;
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ILotsDataListModel>(LotsDataList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  paging() {
    const table = document.getElementById('sample');
    table.scrollTop = 0;
  }
}
