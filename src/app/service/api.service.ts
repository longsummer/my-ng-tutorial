import {
  Component,
  Injectable,
  OnInit,
  ElementRef,
  EventEmitter,
  Inject
} from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { BaseResponse } from '../models/response';

export const WEBSERVICE_ADDRESS = 'http://192.168.10.143:8866';

export const PRODUCT_INFO = WEBSERVICE_ADDRESS + '/api/home/xenserver/version/';
export const HOME_STORAGE_STATUS = WEBSERVICE_ADDRESS + '/api/home/storageusage/statistics/';
export const WARNING_INFO = WEBSERVICE_ADDRESS + '/api/monitorinfo/warn/';

@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json', 'X-AUTH-TOKEN':'69ECEED75C614AE6988B689FD9073482'});
    constructor(private http: Http) {
    }

    getInfo(api: string): Observable<BaseResponse> {
        let options = new RequestOptions({ headers: this.headers});
        return this.http.get(api, options).map((response: Response) => {
            return response.json();
        });
    }
}

export let ApiServiceInjectables: Array<any> = [
    {provide: ApiService, useClass: ApiService},
    {provide: PRODUCT_INFO, useValue: PRODUCT_INFO},
    {provide: HOME_STORAGE_STATUS, useValue: HOME_STORAGE_STATUS}
]



