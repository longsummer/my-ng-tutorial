import { Component, OnInit } from '@angular/core';
import * as Api from '../../service/api.service';

import { WarningInfoResponse } from '../../models/response';

@Component({
  selector: 'app-warning-info',
  templateUrl: './warning-info.component.html',
  styleUrls: ['./warning-info.component.css']
})
export class WarningInfoComponent implements OnInit {
  tableConfig: Object;
  response: WarningInfoResponse = new WarningInfoResponse();
  show: boolean = true;

  constructor(private apiService: Api.ApiService) {
    let url = Api.WARNING_INFO + '?from_id=10&count=5';
    apiService.getInfo(url).subscribe(
      (data => {
        this.show = false;
        this.response.parse(data);
        this.tableConfig = {
          head: [
            {name: 'level', value: '严重性'},
            {name: 'content', value: '报警内容'},
            {name: 'time', value: '时间'},
            {name: 'object', value: '对象'}
          ],
          data: this.response.list
        }
      })
    );
  }

  ngOnInit() {
  }

}
