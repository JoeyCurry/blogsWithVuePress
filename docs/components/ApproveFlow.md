# ApproveFlow

## Props

<!-- @vuese:ApproveFlow:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|approveNodes|COMPLETED(0, "审批完成"),DELETED(1, "审批失效"),PENDING(2, "审批中"),APPROVED(3, "审批通过"),REFUSED(4, "审批拒绝"),SUBMITTED(5, "已提交"),APPROVAL_PENDING(6, "待审批");|`Array`|`true`||
|applyStatus|审批状态|`Number`|`false`|-|
|statusMapping|unavailable: 0, // 审批失效finished: 1, // 审批完成processing: 2, // 审批中passed: 3,     // 通过rejected: 4,   // 不通过originated: 5, // 发起pending: 6,    // 待审批recalled: 7,   // 撤回|`Object`|`false`|[object Object]|
<!-- @vuese:ApproveFlow:props:end -->





## Events

<!-- @vuese:ApproveFlow:events:start -->
<!-- @vuese:ApproveFlow:events:end -->

## Slots

<!-- @vuese:ApproveFlow:slots:start -->
<!-- @vuese:ApproveFlow:slots:end -->

## Methods

<!-- @vuese:ApproveFlow:methods:start -->
<!-- @vuese:ApproveFlow:methods:end -->