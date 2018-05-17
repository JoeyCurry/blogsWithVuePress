### CRM联调问题记录

<author author="江军" date="2018-05-14 11:27" />

<tag 
    title="其他"
    path="/blog/other/" />

<tag title="CRM" />

<tag title="BUG记录" />

<br clear="both" />


#### 13. 主控台 ==> 工作台

我的数据表中，本月跟进商机数量显示不对，

本月我已经操作了好几次跟进，商机「貂蝉 id=2」已经有5条跟进记录了

:::danger 接口
work/getMyData.json
:::

![](/img/WX20180517-151754.png)

#### 14. 主控台 ==> 工作台

排行榜中，数据不对

本月只有我一个用户有商机，且没有成单，感觉这里数据不对

:::danger 接口
work/getRanking.json
:::

![](/img/WX20180517-152206.png)

![](/img/WX20180517-152428.png)


#### 11. ~~主控台 ==> 工作台~~

~~这里「剩余量」数据错误，应该是`库容量num - 使用量num`(应对图中数据这里应该为49)~~

:::tip 接口已修改
work/getMyCapacity.json
:::

![](/img/WX20180517-150219.png)


#### 12. ~~主控台 ==> 工作台~~

~~商机任务中，转现场预约商机应该为今天的现场预约商机，~~

~~现在这里如果搜索今天的现场预约是没有数据的，只有昨天有现场预约的数据，这里是否统计错误？~~

<font color="#dd0000">无需修改，是我时间判断错误</font>
:::tip 接口
work/getMyTask.json
:::

![](/img/WX20180517-150514.png)


#### 9. ~~营销管理审批通过~~

~~这里审批为批量审批，在传递参数时应该是id的数组，但现在为单个id~~
~~显示审批通过，但商机仍是待审批状态~~

:::tip 接口已修改
biz/discard/approve.json
:::

![](/img/WX20180517-145330.png)

#### 10. ~~营销管理缺失审批驳回的接口~~

~~<font color="#dd0000">新增审批驳回功能</font>~~

:::tip 接口已添加
biz/discard/reject.json
:::

![](/img/WX20180517-145847.png)

#### 8. ~~营销管理废弃原因字段~~

~~`reason`字段应该给我中文描述，或者添加`reasonStr`字段~~

:::tip 接口已修改
biz/discard/list.json
:::

![](/img/WX20180517-142728.png)

#### 7. ~~商机详细跟进商机~~

~~choice字段应该为数组，且保存时报错~~

:::tip 接口已修改
biz/follow/add.json
:::

#### 6. ~~商机详情更改城市后需要释放商机~~

~~在更改商机的城市后，需先判断更改的城市是否在当前用户的数据权限里，如果在则不释放商机，如果不在那么就要把商机释放到公海~~

:::tip 接口已修改
biz/baseInfo/mod.json
:::

#### 1. ~~主控台==>私有库「剩余释放天数」字段~~

~~主控台==>私有库 <font color="#dd0000">字段少了个 「剩余释放时间 releaseTime」</font> 然后多了这两个字段(deadline,releaseCount)，是字段改名了改成这两个的其中一个，还是没传「剩余释放时间」呢~~

<font color="#dd0000">已修改</font>

:::tip 接口已修改
biz/privateSea/list.json
:::

![](/img/WechatIMG212.jpeg)

![](/img/WechatIMG213.jpeg)

#### 2. ~~主控台==>私有库 释放到公海~~

~~调用接口后，返回值`code:0`，<font color="#dd0000">但被释放的商机仍然在私有库中，没有去公海</font>~~

:::tip 接口已修改
biz/release/add.json
:::

![参数](/img/WX20180514-113539.png)

![返回值](/img/WX20180514-113603.png)

#### 3. ~~主控台==>公海商机 绑定到私有库~~

~~调用接口后，返回值`code:0`，<font color="#dd0000">但被绑定的商机仍然在公海中，没有去私有库</font>~~

:::tip 接口已修改
biz/binding/add.json
:::

![](/img/WX20180514-145242.png)

#### 4. ~~主控台==>已成单 列表~~

~~调用接口后，<font color="#dd0000">返回「id为空」</font>，应该是不需要id的~~

:::tip 接口已修改
biz/complete/list.json
:::
![](/img/WX20180514-142548.png)

![](/img/WX20180514-142348.png)

#### 5. ~~搜索用户搜不到~~

~~<font color="#dd0000">搜索用户「祝融」无结果</font>，但「祝融」用户存在，<font color="#dd0000">搜索电话号码同理也搜不到</font>~~

:::tip 接口已修改
biz/list.json
:::

![](/img/WX20180514-144123.png)

![](/img/WX20180514-144134.png)

![](/img/WX20180514-144341.png)






