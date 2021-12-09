import { Component, OnInit } from '@angular/core';
import { userList, dateArray, kousuuData } from '../mock/report-mock'
export interface userArray {
  key1: string;
  key2: string;
}

export interface personKousuu {
  department_code: string,
  employee_code: string,
  employee_name: string,
  manager_division: number,
  month: string,
  semester: string,
  up_down: string,
  work_date: Date,
  work_time_on_day: number
}

@Component({
  selector: 'app-report-test',
  templateUrl: './report-test.component.html',
  styleUrls: ['./report-test.component.scss']
})
export class ReportTestComponent implements OnInit {

  constructor() {

  }
  todayColumnIndex = 3;

  userList: userArray[] = userList;
  datetest: Date = new Date();
  isSmSizePlatform = false;
  // startDateArr: dateArray[] = [];
  // endDateArr: dateArray[] = [];

  gridColumnsStyle = '';
  dateArray: Date[] = dateArray;
  kousuuData: Array<personKousuu> = kousuuData;

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
  }

  onClick(event: any): void {
    // console.log('onClick!!!!!!!!!!!!!!!11');
  }

  // 日ごとの合計を算出
  daySumCheck(user: userArray, dateCol: Date): string {

    let kousuuSum = 0;
    const testdata = this.kousuuData.filter(x => x.work_date.getTime() == dateCol.getTime());

    for (let i = 0; i < testdata.length; i++) {
      kousuuSum += testdata[i].work_time_on_day;
    }
    return kousuuSum.toFixed(1).toString();
  }


  // 個人ごとの合計を算出
  personSumCheck(user: userArray): string {
    let kousuuSum = 0;
    const testdata = this.kousuuData.filter(x => x.employee_code === user.key1);

    for (let i = 0; i < testdata.length; i++) {
      kousuuSum += testdata[i].work_time_on_day;
    }
    return kousuuSum.toFixed(1).toString();
  }

  allSumCheck(): string {
    let kousuuSum = 0;

    for (let i = 0; i < this.kousuuData.length; i++) {
      kousuuSum += this.kousuuData[i].work_time_on_day;
    }
    return kousuuSum.toFixed(1).toString();
  }

  kousuuCheck(user: userArray, dateCol: Date): string {

    if (dateCol.getTime() === new Date('2021-04-17').getTime() && user.key1 === '99999') {
      return this.allSumCheck();
    }

    if (dateCol.getTime() === new Date('2021-04-17').getTime()) {
      return this.personSumCheck(user);
    }

    if (user.key1 === '99999') {
      return this.daySumCheck(user, dateCol);
    }


    const datadata = this.kousuuData.filter(x => x.employee_code === user.key1)
    const test = datadata.filter(y => y.work_date.getTime() == dateCol.getTime())
    console.log(datadata[0].work_date);
    console.log(dateCol);
    console.log(test);

    console.log(datadata);
    if (test.length > 0) {
      return test[0].work_time_on_day.toFixed(1).toString();
    }

    return '';
  }
}
