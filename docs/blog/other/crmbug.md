### CRM联调问题记录

<author author="江军" date="2018-05-14 11:27" />

<tag 
    title="其他"
    path="/blog/other/" />

<tag title="crm" />

<tag title="BUG记录" />

<br clear="both" />

#### 7. 商机详细跟进商机

choice字段应该为数组，且保存时报错

:::danger 接口
biz/follow/add.json
:::

#### 6. 商机详情更改城市后需要释放商机

在更改商机的城市后，需先判断更改的城市是否在当前用户的数据权限里，如果在则不释放商机，如果不在那么就要把商机释放到公海

:::danger 接口
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






