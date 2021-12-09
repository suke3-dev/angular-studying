import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { RegisterSampleDialogService } from '../register-sample/register-sample-dialog.service';

export interface dateArray {
  key1: number;
  key2: Date;
  flg: boolean;
}

@Component({
  selector: 'app-gantt-test',
  templateUrl: './gantt-test.component.html',
  styleUrls: ['./gantt-test.component.scss']
})
export class GanttTestComponent implements OnInit {

  constructor(
    private _registerSampleDialogService: RegisterSampleDialogService
  ) { }
  todayColumnIndex = 3;

  userList = [
    { key1: 1, key2: 'sample1' },
    { key1: 2, key2: 'sample2' },
    { key1: 3, key2: 'sample3' },
    { key1: 4, key2: 'sample4' },
    { key1: 5, key2: 'sample5' }
  ];
  datetest: Date = new Date();
  isSmSizePlatform = false;
  startDateArr: dateArray[] = [];
  endDateArr: dateArray[] = [];

  gridColumnsStyle = '';

  dateArray: dateArray[] = [
    { key1: 1, key2: new Date('2021/03/01'), flg: false },
    { key1: 2, key2: new Date('2021/03/02'), flg: false },
    { key1: 3, key2: new Date('2021/03/03'), flg: false },
    { key1: 4, key2: new Date('2021/03/04'), flg: false },
    { key1: 5, key2: new Date('2021/03/05'), flg: false },
    { key1: 6, key2: new Date('2021/03/06'), flg: false },
    { key1: 7, key2: new Date('2021/03/07'), flg: false },
    { key1: 8, key2: new Date('2021/03/08'), flg: false },
    { key1: 9, key2: new Date('2021/03/09'), flg: false },
    { key1: 10, key2: new Date('2021/03/10'), flg: false },
    { key1: 11, key2: new Date('2021/03/11'), flg: false },
    { key1: 12, key2: new Date('2021/03/12'), flg: false },
    { key1: 13, key2: new Date('2021/03/13'), flg: false },
    { key1: 14, key2: new Date('2021/03/14'), flg: false },
    { key1: 15, key2: new Date('2021/03/15'), flg: false },
    { key1: 16, key2: new Date('2021/03/16'), flg: false },
    { key1: 17, key2: new Date('2021/03/17'), flg: false },
    { key1: 18, key2: new Date('2021/03/18'), flg: false },
    { key1: 19, key2: new Date('2021/03/19'), flg: false },
    { key1: 20, key2: new Date('2021/03/20'), flg: false },
    { key1: 21, key2: new Date('2021/03/21'), flg: false },
    { key1: 22, key2: new Date('2021/03/22'), flg: false },
    { key1: 23, key2: new Date('2021/03/23'), flg: false },
    { key1: 24, key2: new Date('2021/03/24'), flg: false },
    { key1: 25, key2: new Date('2021/03/25'), flg: false },
    { key1: 26, key2: new Date('2021/03/26'), flg: false },
    { key1: 27, key2: new Date('2021/03/27'), flg: false },
    { key1: 28, key2: new Date('2021/03/28'), flg: false },
    { key1: 29, key2: new Date('2021/03/29'), flg: false },
    { key1: 30, key2: new Date('2021/03/30'), flg: false }
  ];


  mouseDownRow = 0;
  mouseDownCol = 0;
  enterCol = 0;

  bfRow = 0;
  bfCol = 0;
  bfbfRow = 0;
  bfbfCol = 0;
  colorFlg = false;
  maxRowIndex = 0;
  maxColIndex = 0;
  enterFlg = false;
  today = new Date();



  ngOnInit(): void {

    this.maxRowIndex = this.userList.length;
    this.maxColIndex = this.dateArray.length;

    const target = document.getElementById('test');
    // target.style.backgroundColor= '#FF0000';

    // console.log(target);
    target?.addEventListener('mouseenter', () => {
      console.log('over処理');
      target.style.backgroundColor = '#FF0000';
    })
  }


  onKey(event: any): void {
    console.log('keyUp!!!!!!!!!!!!!!!11');
  }

  onClick(event: any): void {
    // console.log('onClick!!!!!!!!!!!!!!!11');
  }

  onMouseDown(event: MouseEvent, rowIndex: number, colIndex: number): void {
    console.log('onMouseDown!!!!!!!!!!!!!!!11');
    console.log((event.target as HTMLElement).textContent);
    this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = true);
    this.mouseDownRow = rowIndex;
    this.mouseDownCol = colIndex;
    this.colorFlg = true;

  }

  onMouseUp(event: MouseEvent, rowIndex: number, colIndex: number): void {
    console.log('onMouseUp!!!!!!!!!!!!!!!11');
    console.log((event.target as HTMLElement).textContent);
    // this.mouseUpPos = (event.target as HTMLElement).textContent;
    this.colorFlg = false;
    // alert('( ' + this.mouseDownRow + ', ' + this.mouseDownCol + ' ) to ( ' + rowIndex + ', ' + colIndex + ' )');
    this.dateArray.map(y => y.flg = false);

    if (this.mouseDownCol < colIndex) {
      this.startDateArr = this.dateArray.filter(x => x.key1 === this.mouseDownCol);
      this.endDateArr = this.dateArray.filter(x => x.key1 === colIndex);
    } else {
      this.startDateArr = this.dateArray.filter(x => x.key1 === colIndex);
      this.endDateArr = this.dateArray.filter(x => x.key1 === this.mouseDownCol);
    }

    this._registerSampleDialogService.open$(
      this.isSmSizePlatform,
      this.startDateArr[0].key1,
      this.startDateArr[0].key2,
      this.endDateArr[0].key2
    ).subscribe(x => {
      if (typeof (x) === 'undefined') {
        // this.fetchCustomerList();
        return;
      }

      if (typeof (x.selectUsers) === 'undefined' || x.selectUsers === null) {
        // this.fetchCustomerList();
        return;
      }
    });
  }

  onMouseEnter(event: MouseEvent, rowIndex: number, colIndex: number): void {
    console.log('onMouseEnter!!!!!!!!!!!!!!!11');
    const target = document.getElementById('test');
    // target.style.backgroundColor= '#FF0000';

    // console.log(target);
    target?.addEventListener('mouseenter', () => {
      console.log('over処理');
      target.style.backgroundColor = '#FF0000';
    })

    // MouseDownしていないときは処理をしない
    if (!this.colorFlg) {
      return;
    }

    // -方向に移動 (18 -> 16)
    if (this.mouseDownCol > colIndex) {
      // 背景色の判定
      if (this.bfCol > colIndex) {
        // 色変更
        this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = true);
      } else {
        // 色削除
        if (colIndex !== this.mouseDownCol) {
          // this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = false);
          this.dateArray.filter(x => x.key1 === colIndex - 1).map(y => y.flg = false);
        }
      }
    }

    // +方向に移動 (16 -> 18)
    if (this.mouseDownCol < colIndex) {
      // 背景色の判定
      if (this.bfCol < colIndex) {
        // 色変更
        this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = true);
      } else {
        // 色削除
        if (colIndex !== this.mouseDownCol) {
          // this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = false);
          this.dateArray.filter(x => x.key1 === colIndex + 1).map(y => y.flg = false);
        }
      }
    }

    // 始点に入った場合
    if (this.mouseDownCol === colIndex) {
      console.log('始点に入った');
      // 背景色の判定
      // 色削除
      if (this.bfCol > colIndex) {
        this.dateArray.filter(x => x.key1 === colIndex + 1).map(y => y.flg = false);
      } else if (this.bfCol < colIndex) {
        this.dateArray.filter(x => x.key1 === colIndex - 1).map(y => y.flg = false);
      }
    }


    console.log({ bfCol: this.bfCol, nowCol: colIndex });
    this.enterCol = colIndex;

  }

  onMouseLeave(rowIndex: number, colIndex: number): void {
    const test = this.dateArray.filter(x => x.key1 === colIndex);
    this.bfbfCol = this.bfCol;
    this.bfbfRow = this.bfRow;
    this.bfCol = colIndex;
    this.bfRow = rowIndex;


  }


  onTouchStart(event: TouchEvent, rowIndex: number, colIndex: number): void {
    console.log('onTouchStart!!!!!!!!!!!!!!!11');
    console.log((event.target as HTMLElement).textContent);
    this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = true);


    this.mouseDownRow = rowIndex;
    this.mouseDownCol = colIndex;
    this.colorFlg = true;
    console.log({ row: rowIndex, col: colIndex });

  }

  onTouchMove(event: TouchEvent, rowIndex: number, colIndex: number): void {
    event.preventDefault();


    // touchMoveの場合、touchStartしたindexを保存する。

    var testst = '';
    for (var i = 0; i < event.changedTouches.length; ++i) {
      const touch = event.changedTouches[i];
      const elm = document.elementFromPoint(touch.clientX, touch.clientY);
      if (elm != null) {
        testst = elm.id;
      }

      const rowrow = testst.slice(4, testst.indexOf('-'));
      const colcol = testst.slice(testst.indexOf('-') + 1);

      // idがある場合
      if (testst !== undefined) {
        rowIndex = parseInt(rowrow) + 1;
        colIndex = parseInt(colcol) + 1;


        // MouseDownしていないときは処理をしない
        if (!this.colorFlg) {
          return;
        }

        // divを離れていない場合は処理しない
        if (this.bfCol === colIndex) {
          return;
        }

        this.bfbfCol = this.bfCol;
        this.bfbfRow = this.bfRow;
        this.bfCol = colIndex;

        // -方向に移動 (18 -> 16)
        if (this.mouseDownCol < colIndex) {
          this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = true);
        } else {
          // 色削除
          if (colIndex !== this.mouseDownCol) {
            this.dateArray.filter(x => x.key1 === colIndex - 1).map(y => y.flg = false);
          }
        }

        // +方向に移動 (16 -> 18)
        if (this.mouseDownCol > colIndex) {
          this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = true);
        } else {
          // 色削除
          if (colIndex !== this.mouseDownCol) {
            this.dateArray.filter(x => x.key1 === colIndex + 1).map(y => y.flg = false);
          }
       }

        // 始点に入った場合
        if (this.mouseDownCol === colIndex) {
          console.log('始点に入った');
          console.log({ row: this.bfCol, col: colIndex });
          // 背景色の判定
          // 色削除
          this.dateArray.filter(x => x.key1 === colIndex).map(y => y.flg = false);
          this.dateArray.filter(x => x.key1 === colIndex + 1).map(y => y.flg = false);
          this.dateArray.filter(x => x.key1 === colIndex - 1).map(y => y.flg = false);
          // if (this.bfCol > colIndex) {
          //   this.dateArray.filter(x => x.key1 === colIndex + 1).map(y => y.flg = false);
          // } else if (this.bfCol < colIndex) {
          //   this.dateArray.filter(x => x.key1 === colIndex - 1).map(y => y.flg = false);
          // }
        }
      }


      console.log('どこもはいらない')
      // console.log({ bfCol: this.bfCol, nowCol: colIndex });
      this.enterCol = colIndex;
    }

  }





  onTouchEnd(event: TouchEvent, rowIndex: number, colIndex: number): void {
    console.log('onTouchEnd!!!!!!!!!!!!!!!11');
    console.log(rowIndex);
    console.log(colIndex);
    console.log((event.target as HTMLElement).textContent);
    // this.mouseUpPos = (event.target as HTMLElement).textContent;
    this.colorFlg = false;
    // alert('( ' + this.mouseDownRow + ', ' + this.mouseDownCol + ' ) to ( ' + rowIndex + ', ' + colIndex + ' )');
    this.dateArray.map(y => y.flg = false);

    if (this.mouseDownCol < colIndex) {
      this.startDateArr = this.dateArray.filter(x => x.key1 === this.mouseDownCol);
      this.endDateArr = this.dateArray.filter(x => x.key1 === colIndex);
    } else {
      this.startDateArr = this.dateArray.filter(x => x.key1 === colIndex);
      this.endDateArr = this.dateArray.filter(x => x.key1 === this.mouseDownCol);
    }

    this._registerSampleDialogService.open$(
      this.isSmSizePlatform,
      this.startDateArr[0].key1,
      this.startDateArr[0].key2,
      this.endDateArr[0].key2
    ).subscribe(x => {
      if (typeof (x) === 'undefined') {
        // this.fetchCustomerList();
        return;
      }

      if (typeof (x.selectUsers) === 'undefined' || x.selectUsers === null) {
        // this.fetchCustomerList();
        return;
      }
    });
  }

}
