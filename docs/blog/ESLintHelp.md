### ESLint 使用帮助

> author: `江军 2018-05-03 16:10`

#### 推荐使用`VSCode`，本文档使用`VSCode`进行说明，其他编辑器自行处理

#### 规则使用`eslint-config-alloy`规范，如对此规范不了解[可点击这里查看](https://github.com/AlloyTeam/eslint-config-alloy)

___

1.在扩展中安装ESLint插件

2.添加`eslint-config-alloy`

```
npm install --save-dev eslint babel-eslint eslint-config-alloy

with vue:

npm install --save-dev eslint babel-eslint vue-eslint-parser@2.0.1-beta.2 eslint-plugin-vue@3 eslint-config-alloy

with TypeScript

npm install --save-dev eslint typescript typescript-eslint-parser eslint-plugin-typescript eslint-config-alloy

```

3.添加`.eslintrc`和`.eslintignore`文件

.eslintrc:

```
module.exports = {
    extends: [
        //'eslint-config-alloy',
        // 如果是vue则使用这个
        //'eslint-config-alloy/vue',
        // 如果是react则使用这个
        //'eslint-config-alloy/react'
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false,
        // $: false
    },
    rules: {
    	// 推荐新项目不要打开规则，尽量去适应这份规则
        // "vue/order-in-components": "off",
        // 关闭强制使用"==="
        // "eqeqeq": ["off"],
        // 关闭函数名前空格检测
        // "space-before-function-paren": ['off'],
        // 允许使用for-in
        "guard-for-in": ['off'],
        // debugger
        // "no-debugger": ['off']
    }
};
```
.eslintignore:

```
/build
/dist
...不使用规则检查的文件
```

4.在`VSCode`设置里打开eslint检查与保存时自动修复

```
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
    "eslint.enable": true
```

5.如果某些代码不想使用某些规则来规范，可以在代码前添加注释，例如：

```
/* eslint-disable no-new */
	
或
	
/* eslint-disable */
```

6.推荐不要分号（[英文好可以看这篇讲解](http://inimino.org/~inimino/blog/javascript_semicolons)）。

7.推荐使用eslint来规范代码，对于多人合作开发，极大的提高工作效率，不用去阅读“烂代码”是多么的清爽。推荐尽量去适应这份规则，如果配置不好，也可以参考[AlloyTeam ESLint 配置指南](http://www.alloyteam.com/2017/08/13065/)
