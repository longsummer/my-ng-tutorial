import { Util } from '../util';

class BaseResponse {
    errno: number;
    result: any;
}

class ProductResponse {
    private num: number;
    private version: string;

    constructor() {};
    parse(res: BaseResponse) {
        let temp = res.result[0];
        this.num = temp.num;
        this.version = temp.version;
    }
}

class StorageStatusResponse {
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

class Warning {
    level: number;
    content: string;
    time: string;
    confirmed: object;
    solved: object;
    object: string;
    id: number;
}

class WarningInfoResponse {
    count: number;
    list: Array<Warning>;

    constructor() {};

    parse(res: BaseResponse) {
        let temp = res.result;
        this.count = temp.count;
        this.list = temp.list;
    }
}

export { BaseResponse, ProductResponse, StorageStatusResponse, WarningInfoResponse };
