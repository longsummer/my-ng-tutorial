import { Component, OnInit } from '@angular/core';

import { BlockComponent } from './block/block.component';
import * as Api from '../service/api.service';
import { BaseResponse, ProductResponse, StorageStatusResponse } from '../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productInfo: ProductResponse = new ProductResponse();
  storageStatus: StorageStatusResponse = new StorageStatusResponse();

  constructor(private apiService: Api.ApiService) {
    apiService.getInfo(Api.PRODUCT_INFO).subscribe(
      (data: BaseResponse) => {
        this.productInfo.parse(data);
      }
    );
    apiService.getInfo(Api.HOME_STORAGE_STATUS).subscribe(
      (data: BaseResponse) => {
        this.storageStatus.parse(data);
      }
    );
  }

  ngOnInit() {
  }
}
