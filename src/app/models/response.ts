import { Util } from '../util';

export class BaseResponse {
    errno: number;
    result: any;
}

export class ProductResponse {
    private num: number;
    private version: string;

    constructor() {};
    parse(res: BaseResponse) {
        let temp = res.result[0];
        this.num = temp.num;
        this.version = temp.version;
    }
}

export class StorageStatusResponse {
    total: string;
    used: string;
    free: string;
    percentage: string;

    constructor() {};

    parse(res: BaseResponse) {
        let temp = res.result;
        this.total = Util.unitConvert(temp.total);
        this.used = Util.unitConvert(temp.used);
        this.free = Util.unitConvert(temp.total - temp.used);
        this.percentage = String((temp.used*100 / temp.total).toPrecision(2));
    }
}

export class Warning {
    level: number;
    content: string;
    time: string;
    confirmed: object;
    solved: object;
    object: string;
    id: number;
}

export class WarningInfoResponse {
    count: number;
    list: Array<Warning>;

    constructor() {};

    parse(res: BaseResponse) {
        let temp = res.result;
        this.count = temp.count;
        this.list = temp.list;
    }
}

export class SmtpInfoResponse {
    email: string;
    smtp_addr: string;
    smtp_passwd: string;
    smtp_user: string;
}
