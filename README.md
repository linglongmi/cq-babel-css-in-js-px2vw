
# cq-babel-css-in-js-px2vw

安装
```bash
npm i cq-babel-css-in-js-px2vw
```

解决行内样式单位转换，使用方法如下：
webpack.config.js
```ecmascript 6
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'cq-babel-css-in-js-px2vw',
      },
    ],
  },
};

```