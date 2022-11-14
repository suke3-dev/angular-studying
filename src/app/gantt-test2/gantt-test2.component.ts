import { Component, OnInit } from '@angular/core';
import { RegisterSampleDialogService } from '../register-sample/register-sample-dialog.service';

export interface dateArray {
  date: number;
  hiduke: Date;
  flg: boolean;
}

@Component({
  selector: 'app-gantt-test2',
  templateUrl: './gantt-test2.component.html',
  styleUrls: ['./gantt-test2.component.scss']
})
export class GanttTest2Component implements OnInit {

  constructor(
    private _registerSampleDialogService: RegisterSampleDialogService
  ) { }
  todayColumnIndex = 3;

  userList = [
    { userId: 1, userName: 'sample1' },
    { userId: 2, userName: 'sample2' },
    { userId: 3, userName: 'sample3' },
    { userId: 4, userName: 'sample4' },
    { userId: 5, userName: 'sample5' }
  ];

  rentalList = [
    { startDate: new Date('2022/11/03'), endDate: new Date('2022/11/05'), start: 3, end: 5, userId: 1, key4: 'testtest1' },
    { startDate: new Date('2022/11/04'), endDate: new Date('2022/11/07'),start: 4, end: 7, userId: 2, key4: 'testtest2' },
    { startDate: new Date('2022/11/09'), endDate: new Date('2022/11/15'),start: 9, end: 15, userId: 2, key4: 'testtest3' },
    { startDate: new Date('2022/11/08'), endDate: new Date('2022/11/22'),start: 8, end: 22, userId: 4, key4: 'testtest4' },
    { startDate: new Date('2022/11/12'), endDate: new Date('2022/11/30'),start: 12, end: 30, userId: 5, key4: 'testtest5' },
  ];

  datetest: Date = new Date();
  isSmSizePlatform = false;
  startDateArr: dateArray[] = [];
  endDateArr: dateArray[] = [];


  dateArray: dateArray[] = [
    { date: 1, hiduke: new Date('2021/03/01'), flg: false },
    { date: 2, hiduke: new Date('2021/03/02'), flg: false },
    { date: 3, hiduke: new Date('2021/03/03'), flg: false },
    { date: 4, hiduke: new Date('2021/03/04'), flg: false },
    { date: 5, hiduke: new Date('2021/03/05'), flg: false },
    { date: 6, hiduke: new Date('2021/03/06'), flg: false },
    { date: 7, hiduke: new Date('2021/03/07'), flg: false },
    { date: 8, hiduke: new Date('2021/03/08'), flg: false },
    { date: 9, hiduke: new Date('2021/03/09'), flg: false },
    { date: 10, hiduke: new Date('2021/03/10'), flg: false },
    { date: 11, hiduke: new Date('2021/03/11'), flg: false },
    { date: 12, hiduke: new Date('2021/03/12'), flg: false },
    { date: 13, hiduke: new Date('2021/03/13'), flg: false },
    { date: 14, hiduke: new Date('2021/03/14'), flg: false },
    { date: 15, hiduke: new Date('2021/03/15'), flg: false },
    { date: 16, hiduke: new Date('2021/03/16'), flg: false },
    { date: 17, hiduke: new Date('2021/03/17'), flg: false },
    { date: 18, hiduke: new Date('2021/03/18'), flg: false },
    { date: 19, hiduke: new Date('2021/03/19'), flg: false },
    { date: 20, hiduke: new Date('2021/03/20'), flg: false },
    { date: 21, hiduke: new Date('2021/03/21'), flg: false },
    { date: 22, hiduke: new Date('2021/03/22'), flg: false },
    { date: 23, hiduke: new Date('2021/03/23'), flg: false },
    { date: 24, hiduke: new Date('2021/03/24'), flg: false },
    { date: 25, hiduke: new Date('2021/03/25'), flg: false },
    { date: 26, hiduke: new Date('2021/03/26'), flg: false },
    { date: 27, hiduke: new Date('2021/03/27'), flg: false },
    { date: 28, hiduke: new Date('2021/03/28'), flg: false },
    { date: 29, hiduke: new Date('2021/03/29'), flg: false },
    { date: 30, hiduke: new Date('2021/03/30'), flg: false }
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

  startRow = 0;
  endRow = 0;
  startDate: dateArray[] = [];
  endDate: dateArray[] = [];




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

  onClick(startDate: Date, endDate: Date, hidukeKey: number): void {
    this.registerOpen2(startDate, endDate, hidukeKey);
  }

  onMouseDown(event: MouseEvent, rowIndex: number, colIndex: number): void {
    this.mouseDownRow = rowIndex;
    this.mouseDownCol = colIndex;

  }

  onMouseUp(event: MouseEvent, rowIndex: number, colIndex: number): void {
    console.log('onMouseUp!!!!!!!!!!!!!!!11');
    console.log((event.target as HTMLElement).textContent);
    // this.mouseUpPos = (event.target as HTMLElement).textContent;
    // this.colorFlg = false;
    // alert('( ' + this.mouseDownRow + ', ' + this.mouseDownCol + ' ) to ( ' + rowIndex + ', ' + colIndex + ' )');

    this.endDate = this.endDateArr = this.dateArray.filter(x => x.date === colIndex);
    if (this.mouseDownCol < colIndex) {
      this.startDateArr = this.dateArray.filter(x => x.date === this.mouseDownCol);
      this.endDateArr = this.dateArray.filter(x => x.date === colIndex);
    } else {
      this.startDateArr = this.dateArray.filter(x => x.date === colIndex);
      this.endDateArr = this.dateArray.filter(x => x.date === this.mouseDownCol);
    }



    if (this.startDate.length > 0) {
      if (this.startRow === rowIndex)
        this.registerOpen();
    }

    this.colorFlg = true;

    this.dateArray.map(y => y.flg = false);
    this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);

    this.startDate = this.dateArray.filter(x => x.date === colIndex);
    this.startRow = rowIndex;

    console.log(this.mouseDownRow);
    console.log(this.startDate[0].date);

    this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);

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
        this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);
      } else {
        // 色削除
        if (colIndex !== this.mouseDownCol) {
          // this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = false);
          this.dateArray.filter(x => x.date === colIndex - 1).map(y => y.flg = false);
        }
      }
    }

    // +方向に移動 (16 -> 18)
    if (this.mouseDownCol < colIndex) {
      // 背景色の判定
      if (this.bfCol < colIndex) {
        // 色変更
        this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);
      } else {
        // 色削除
        if (colIndex !== this.mouseDownCol) {
          // this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = false);
          this.dateArray.filter(x => x.date === colIndex + 1).map(y => y.flg = false);
        }
      }
    }

    // 始点に入った場合
    if (this.mouseDownCol === colIndex) {
      console.log('始点に入った');
      // 背景色の判定
      // 色削除
      if (this.bfCol > colIndex) {
        this.dateArray.filter(x => x.date === colIndex + 1).map(y => y.flg = false);
      } else if (this.bfCol < colIndex) {
        this.dateArray.filter(x => x.date === colIndex - 1).map(y => y.flg = false);
      }
    }


    console.log({ bfCol: this.bfCol, nowCol: colIndex });
    this.enterCol = colIndex;

  }

  onMouseLeave(rowIndex: number, colIndex: number): void {
    const test = this.dateArray.filter(x => x.date === colIndex);
    this.bfbfCol = this.bfCol;
    this.bfbfRow = this.bfRow;
    this.bfCol = colIndex;
    this.bfRow = rowIndex;


  }


  onTouchStart(event: TouchEvent, rowIndex: number, colIndex: number): void {
    this.mouseDownRow = rowIndex;
    this.mouseDownCol = colIndex;
    this.colorFlg = true;


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
          this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);
        } else {
          // 色削除
          if (colIndex !== this.mouseDownCol) {
            this.dateArray.filter(x => x.date === colIndex - 1).map(y => y.flg = false);
          }
        }

        // +方向に移動 (16 -> 18)
        if (this.mouseDownCol > colIndex) {
          this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);
        } else {
          // 色削除
          if (colIndex !== this.mouseDownCol) {
            this.dateArray.filter(x => x.date === colIndex + 1).map(y => y.flg = false);
          }
        }

        // 始点に入った場合
        if (this.mouseDownCol === colIndex) {
          console.log('始点に入った');
          console.log({ row: this.bfCol, col: colIndex });
          // 背景色の判定
          // 色削除
          this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = false);
          this.dateArray.filter(x => x.date === colIndex + 1).map(y => y.flg = false);
          this.dateArray.filter(x => x.date === colIndex - 1).map(y => y.flg = false);
          // if (this.bfCol > colIndex) {
          //   this.dateArray.filter(x => x.date === colIndex + 1).map(y => y.flg = false);
          // } else if (this.bfCol < colIndex) {
          //   this.dateArray.filter(x => x.date === colIndex - 1).map(y => y.flg = false);
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
    this.endDate = this.endDateArr = this.dateArray.filter(x => x.date === colIndex);
    if (this.mouseDownCol < colIndex) {
      this.startDateArr = this.dateArray.filter(x => x.date === this.mouseDownCol);
      this.endDateArr = this.dateArray.filter(x => x.date === colIndex);
    } else {
      this.startDateArr = this.dateArray.filter(x => x.date === colIndex);
      this.endDateArr = this.dateArray.filter(x => x.date === this.mouseDownCol);
    }



    if (this.startDate.length > 0) {
      if (this.startRow === rowIndex)
        this.registerOpen();
    }

    this.dateArray.map(y => y.flg = false);
    this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);

    this.startDate = this.dateArray.filter(x => x.date === colIndex);
    this.startRow = rowIndex;

    console.log(this.mouseDownRow);
    console.log(this.startDate[0].date);

    this.dateArray.filter(x => x.date === colIndex).map(y => y.flg = true);
  }

  registerOpen() {
    this._registerSampleDialogService.open$(
      this.isSmSizePlatform,
      this.startDateArr[0].date,
      this.startDateArr[0].hiduke,
      this.endDateArr[0].hiduke
    ).subscribe(x => {
      this.colorFlg = false;
      this.startDate = [];
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

  registerOpen2(startDate: Date, endDate: Date, hidukeKey: number) {
    this._registerSampleDialogService.open$(
      this.isSmSizePlatform,
      hidukeKey,
      startDate,
      endDate
    ).subscribe(x => {
      this.colorFlg = false;
      this.startDate = [];
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

  dataCheck(): boolean {

    return false;

  }




  
}
