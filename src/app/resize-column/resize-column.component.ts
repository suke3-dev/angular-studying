import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IProductListModel, ProductList } from '../mock/resize-mock';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  datetest: Date;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'aa', weight: 0.0079, symbol: 'h', datetest: new Date() },
  { position: 2, name: 'aaa', weight: 4.0026, symbol: 'He', datetest: new Date() },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', datetest: new Date() },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', datetest: new Date() },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', datetest: new Date() },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', datetest: new Date() },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', datetest: new Date() },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', datetest: new Date() },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', datetest: new Date() },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', datetest: new Date() },
];

@Component({
  selector: 'app-resize-column',
  templateUrl: './resize-column.component.html',
  styleUrls: ['./resize-column.component.scss']
})
export class ResizeColumnComponent implements OnInit {

  displayedColumns: string[] = ['productCd', 'figureNumber', 'productName', 'surfaceProcess', 'postProcess', 'material', 'jancd', 'registerDate', 'waste',];
  dataSource = new MatTableDataSource<IProductListModel>(ProductList);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  showFirstLastButtons = true;
  resultLength = 0;
  currentPageIndex = 0;

  ngOnInit(): void {
    this.resultLength = ProductList.length;
    this.dataSource.paginator =  this.paginator;
  }
  renameHeader(column: string): string {
    // if (column === 'position') {
    //   return 'ポジション';
    // }
    // if (column === 'name') {
    //   return 'ネーム';
    // }
    // if (column === 'weight') {
    //   return 'ウェイト';
    // }
    // if (column === 'symbol') {
    //   return 'シンボル';
    // }
    // if (column === 'datetest') {
    //   return '日付';
    // }

    return '';

  }


  showData(column: string, data: any): any {
    if (column === 'productCd') {
      return data;
    }
    if (column === 'figureNumber') {
      return data;
    }
    if (column === 'productName') {
      return data;
    }
    if (column === 'surfaceProcess') {
      return data;
    }
    if (column === 'postProcess') {
      return data;
    }
    if (column === 'material') {
      return data;
    }
    if (column === 'jancd') {
      return data;
    }
    if (column === 'registerDate') {
      return data.toLocaleDateString();
    }
    if (column === 'waste') {
      if (data == '0'){
        return '';
      } else {
        return '廃';
      }
    }

  }
    /**
   * ページングが行われたとき
   * @param event 
   */
     onPaginateChange(event: { pageIndex: number; }) {
      this.currentPageIndex = event.pageIndex;
    }
}
