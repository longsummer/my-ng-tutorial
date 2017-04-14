function unitConvert(sourceValue: number|string): string {
    if (sourceValue === 0 || sourceValue === '0') return '0 B';
    if (sourceValue < 1) return '0 B';
    var k = 1024, 
        base = 999.5, // 数学问题，不解释，避免了四舍五入带来的科学计数法问题
        unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(Number(sourceValue)) / Math.log(base));
    return (Number(sourceValue) / Math.pow(k, i)).toPrecision(3) + ' ' + unit[i];    
}

export let Util = {
    unitConvert: unitConvert
}