### 博客&&精选web

> version 0.0.2
>
> 添加了tag组件

### Vue组件

#### tag

```
props: 
    title: tag的名称
    path: 点击tag跳转的地址（可不传）
```


使用：

在markdown文件中使用
```javascript
<tag 
    title="javascript"
    path="/blog/javascript/" />

<tag title="eslint" />

<tag title="代码规范" />

<br clear="both" /> // 清除浮动
```

>warning
> 
> 因为`tag`采用了浮动，所以需要在最后清除浮动，所以需要加入`<br clear="both" />`



___

基于VuePress🙏

