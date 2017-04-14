import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

class TableHead {
  name: string;
  value: string;
}

class TableBody {
  name: string;
  value: string;
}

class TableConfigOptions {
  head: Array<TableHead>;
  data: Array<[TableBody]>;
}

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
})
export class SimpleTableComponent implements OnInit {
  @Input() tableConfig: TableConfigOptions;
  @Input() tableOptions: Object;
  tableHeadName: Array<string>;
  tableBodyData: Array<Array<any>>;

  constructor() {
    this.tableHeadName = [];
    this.tableBodyData = [];
  }

  ngOnInit() {
    let rowData;
    console.log(this.tableConfig);
    this.tableConfig.head.forEach(element => {
      this.tableHeadName.push(element.name);
    });
    this.tableConfig.data.forEach((row) => {
      rowData = [];
      this.tableHeadName.forEach((name) => {
        rowData.push(row[name]);
      });
      this.tableBodyData.push(rowData);
    });
  }

}

