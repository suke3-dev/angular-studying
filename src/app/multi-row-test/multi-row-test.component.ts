import { Component, OnInit } from '@angular/core';
import { sampleData } from '../mock/hacchu-mock'
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

export interface Transaction {
  position: string;
  type: string;
  takanotype: string;
  name: string;
  takanokikaku: string;
  limited: Date;
  note: string;
  siirename: string;
  hacchuno: string;
  suryo: number;
  syukka: string;
  hopedate: Date;
  syukkadate: Date;
  tanka: number;
  goaldate: Date;
  tehai: string;
  hacchutani: number;
  maker: string;
  nyuukadate: Date;
  hacchutanka: number;
}

@Component({
  selector: 'app-multi-row-test',
  templateUrl: './multi-row-test.component.html',
  styleUrls: ['./multi-row-test.component.scss']
})
export class MultiRowTestComponent implements OnInit {

  constructor(public platform: Platform) { }
  transactions: Transaction[];

  ngOnInit(): void {
    this.transactions = sampleData;
    console.log({brink: this.platform.BLINK, ios: this.platform.IOS, android: this.platform.ANDROID, edge: this.platform.EDGE});
  }

  displayedColumns1 = [
    'position',
    'null12',
    'null13',
    'null14',
    'null15',
    'null16',
    'null17',
    'null18',
    'null19',
    'null110',
  ];

  displayedColumns2 = [
    'type',
    'takanotype',
    'name',
    'null24',
    'suryo',
    'syukka',
    'hopedate',
    'syukkadate',
    'tanka',
    'null210',
  ];
  
  displayedColumns3 = [
    'takanokikaku',
    'null32',
    'null33',
    'limited',
    'null35',
    'null36',
    'goaldate',
    'null38',
    'null39',
    'null310',
  ];

  
  displayedColumns4 = [
    'note',
    'null42',
    'siirename',
    'null44',
    'tehai',
    'hacchutani',
    'maker',
    'nyuukadate',
    'hacchutanka',
    'null410',
  ];
  
  displayedColumns5 = [
    'hacchuno',
    'null52',
    'null53',
    'null54',
    'null55',
    'null56',
    'null57',
    'null58',
    'null59',
    'null510',
  ];
 

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.tanka).reduce((acc, value) => acc + value, 0);
  }

}
