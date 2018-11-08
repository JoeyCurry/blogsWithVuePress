# UserFilter

## Props

<!-- @vuese:UserFilter:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|getUserObject|服务端不仅需要仅中的id，还需要员工号及其它信息，为true返回选中的object|—|`false`|false|
|name|-|`String`|`false`|-|
|isMultiple|TODO 单选在IE11下有问题，统一搞成多选|—|`false`|-|
|url|请求用户接口地址|—|`false`|'/staff/simpleList.json'|
|disabled|-|—|`false`|false|
|options|给定下拉选择项|—|`false`|default() {
  return [];
}|
|extraParams|发请求的额外的参数|—|`false`|default() {
  return {};
}|
|placeholder|-|—|`false`|'请输入姓名/工号/拼音'|
|width|-|—|`false`|''|
<!-- @vuese:UserFilter:props:end -->





## Events

<!-- @vuese:UserFilter:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|input|-|-|
|change|-|-|
|changeuserobject|-|-|
<!-- @vuese:UserFilter:events:end -->





## Slots

<!-- @vuese:UserFilter:slots:start -->
<!-- @vuese:UserFilter:slots:end -->

## Methods

<!-- @vuese:UserFilter:methods:start -->
<!-- @vuese:UserFilter:methods:end -->