[![Build Status](https://travis-ci.org/1512751361/react-cli-components.svg?branch=master)](https://travis-ci.org/1512751361/react-cli-components)

# react-cli-components
react-cli-components

## 文件加说明

  ```
  dist/   typescript打包后的文件
  lib/    原始文件
  ```

## 打包

  ```npm run build```

## 本地测试npm包

  ```cd react-cli-components && npm link```

  进入项目文件
  ```cd com-coupon-web && @lhs1512751361/react-cli-components```
  
  然后就可以在本项目开发插件，用 npm run build 打包后，com-coupon-web项目中可直接使用

## 发布命令

  ```npm publish```