import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SmtpInfoResponse } from '../../models/response';

@Injectable()
export class SmtpService {
    smtpInfo: SmtpInfoResponse;

    constructor(private http: Http) {
    }

    getSmtpInfo(): Observable<SmtpInfoResponse> {
        return this.http.get('http://192.168.10.143:8866/api/system/pages/warn/sender/').map((response: Response) => {
            this.smtpInfo = response.json();
            return this.smtpInfo;
        });
    }

    updateSmtpInfo(newData: SmtpInfoResponse) {
        this.http.put('http://192.168.10.143:8866/api/system/func/warn/sender/', JSON.stringify(newData))
        .subscribe(
            data => { this.smtpInfo = newData; },
            err => console.log(err)
        )
    }
}