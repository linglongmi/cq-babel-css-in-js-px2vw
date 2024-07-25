const defaultOptions = {
    viewportWidth: 375, //  设计稿视口宽度
    unitPrecision: 5 //  转换后保留精度
};
module.exports = function (source) {
    const option = this.getOptions();
    // 合并参数
    const options = { ...defaultOptions, ...option };
    // 匹配以数字开头，中间可能带小数点的，并且以px结尾的
    const reg = /\b(\d+(\.d+)?)px\b/g;
    if (reg.test(source)) {
        const { viewportWidth, unitPrecision } = options;
        const p = 100 / viewportWidth; // 1px = (val)vw
        return source.replace(reg, (data, val) => {
            let value = p * val;
            value = parseFloat(value.toFixed(unitPrecision));
            return value === 0 ? value : value + 'vw';
        });
    } else {
        return source;
    }
};
