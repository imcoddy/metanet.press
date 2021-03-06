---
title: 小世界里大天地：比特币就是现实世界的桃花源
tags: [bsv, mining, ' 小世界网络 ', ' 挖矿 ']
img: 'https://pic4.zhimg.com/v2-8f50257d495c063f9469fb883a79f194_1200x500.jpg'
date: 2020-02-19 20:19:09
---

![](https://pic4.zhimg.com/v2-8f50257d495c063f9469fb883a79f194_1200x500.jpg)

## 再读桃花源

> 土地平旷，屋舍俨然，有良田，美池，桑，竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人；黄发，垂髫，并怡然自乐。 -- 桃花源记

《桃花源记》是东晋文学家陶渊明的代表作之一，是《桃花源诗》的序言，选自《陶渊明集》。此文借武陵渔人行踪这一线索，把现实和理想境界联系起来，通过对桃花源的安宁和乐、自由平等生活的描绘，表现了作者追求美好生活的理想和对当时的现实生活不满。

<!--more-->

桃花源究在何地抑或存在与否，古今异说纷纭。《老子・不徙章》中提到的小国寡民，可能是桃花源记的原型之一。说到老子的《道德经》，其中的 “治大国若烹小鲜” 的思想其实在比特币中亦是展现得淋漓尽致，不过邱少我今天先按此不表，本文先着重阐述这世外桃源的小世界。

阡陌交通，鸡犬相闻。这两句翻译成大白话就是田间小路交错相通，鸡鸣狗叫到处可以听到。

其中阡陌两字用得甚是精妙：“千” 是空间概念，指南北方向。“百” 是时间概念，将昼夜划分成均衡的一百刻，因此，“千百” 一词合成了类似 “时空”、“宇宙” 的概念。在此基础上，“阡” 是指南北走向的田埂；“陌” 是指东西走向的土埂，田间小路纵横交错以喻其大，而鸡鸣狗吠四处可闻则喻其小。桃花源中人的生活一样是 “往来耕作”，“屋舍俨然”，和睦相处，“怡然自乐”，这俨然是一个与世无争自由自在的小世界。

## 小世界现象

![](https://mmbiz.qpic.cn/mmbiz_jpg/5EsQe61CaFlIOpag2oiclsaplrAXjozxRNOC621sszGDpmeW4ebr1u1vsTgib6NCicBnSEYFicYok6QKHhsLoRjTcQ/0?wx_fmt=jpeg)

小世界现象，就是指这个世界其实很小，小到你想和世界上任何另外一个陌生人建立关系，只需要 6 个左右的中间人。这个现象也叫[六度分隔](https://zh.wikipedia.org/wiki/%E5%85%AD%E5%BA%A6%E5%88%86%E9%9A%94%E7%90%86%E8%AE%BA "六度分隔理论") 现象。

最早观察到小世界现象的是社会人际网络。将每个人作为节点，将人与人之间的人际关系（朋友，合作，相识等）作为链接，就创建起一个社会人际网络。

二十世纪 60 年代，美国哈佛大学社会心理学家斯坦利・米尔格伦（Stanley Milgram）做了一个连锁信实验。他将一些信件交给自愿的参加者，要求他们通过自己的熟人将信传到信封上指明的收信人手里，他发现，296 封信件中有 64 封最终送到了目标人物手中。而在成功传递的信件中，平均只需要 5 次转发，就能够到达目标。也就是说，在社会网络中，任意两个人之间的 “距离” 是 6。尽管他的实验有不少缺陷，但这个现象引起了学界的注意。

1998 年，学术界关于 “六度分隔” 的研究也取得全新的进展。美国 Cornell 大学的博士生瓦茨（D. Watts）和他的导师斯特罗加茨（S. Strogatz）在《Nature》上发表了题为《[小世界网络的集体动力学](https://www.nature.com/articles/30918 "Collective dynamics of ‘small-world’ networks")》一文，在 “六度分隔” 假设的基础上，第一次提出了 “小世界网络” 的概念和模型。他们把 “六度分隔” 现象归类为可以由两个网络结构参数 —— 较大的网络群聚系数和较短的网络平均距离来描述 “小世界现象”，这种现象在各种社会网络、电力网络、神经网络、生物网络中均存在。

由于小世界网络具有高集聚系数，它的结构中不可避免地会有许多团（彼此之间两两相连的一小群节点）以及只比团差几个连接的节点群。另一方面，任两个结点大多会以至少一条短路径连接着。这是要求有小的最短路径长度平均值的结果。此外，小世界网络常连带地具有一些性质，不过这些性质并不是作为这类网络非有不可的。很典型的是这类网络常常会出现 “枢纽”（与很多节点都相连的节点）。

简单地说，小世界网络是一个趋完全图，其反映的是其中节点的连接紧密程度。对于有着 n 个顶点的图而言，其顶点之间的边数大于可能的总边数，即边数不少于 ```n*(n-1)/4``` 的图即可认为是个小世界网络。

更准确的计算方式是计算其平均路径长度。平均路径长度也称为特征路径长度或平均最短路径长度，指的是一个网络中两点之间最短路径长度（或称距离）的平均值。
假如从节点 i 出发，经过与它相连的节点，逐步“走”到另一个节点 j 所经过的路途，称为两点间的路径，则其中最短的路径也称为两点间的距离，记作 dist(i,j)。而平均路径长度定义为：

![distance-of-small-world-network](https://wikimedia.org/api/rest_v1/media/math/render/svg/6a3bdb8f39dde0ab7d5f74d00769f0d2de99f6ce)

现实网络的小世界特性，就是：

* 有很小的平均路径长度：在节点数 N 很大时，平均路径长度近似于 ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bc0aa0559de03194bf9c6403306f8fb8d418694b)
* 有很高的集聚系数：集聚系数大约和规则网络在同一数量级，远大于随机网络的集聚系数

如果上面的内容还让你觉得小世界网络难以理解的话，想想近期的肺炎疫情，你或许就能有更真切的体会了：传染病在人群中的流行、病毒在计算机网络上的蔓延、谣言在人际社会中的扩散等，都可视为流行病在小世界网络上的传播问题 [](http://www.cbdio.com/BigData/2016-10/17/content_5337620.htm "小白学数据：小世界网络中的大世界")。无论你身在何方，地球另一面所发生的事情与你并不遥远。

## 比特币网络

![](https://mmbiz.qpic.cn/mmbiz_jpg/5EsQe61CaFlIOpag2oiclsaplrAXjozxRxRIX70UtqpRKBbTICLLQnplqU1yib28g0smf20kuLSfibL9bZAcH4Jcw/0?wx_fmt=jpeg)

[比特币其实也是一个小世界网络](https://metanet.press/chapter-mining/small-world-network.html "比特币重生计划：小世界网络")，这是波茨坦大学信息系统主席 Annika Baumann 于 2014 年发表的论文《[Exploring the Bitcoin Network](https://www.researchgate.net/publication/262562539_Exploring_the_Bitcoin_Network "Exploring the Bitcoin Network")》中得到的结论：
在这种网络中大部分的节点彼此并不相连，但绝大部分节点之间经过少数几步就可到达。

这样的网络的意义在于，参与的节点大部分会紧密连接，使得信息广播在整个网络中的得以高效传递。同时这些节点组成的网络具有良好的扩展性，新加入的节点可以根据自身情况迅速融入其中，退出的节点也不会影响到整个网络系统。

而在实际情况中，节点会倾向于与连接性良好的其它节点保持紧密关联，以便能尽快地接收交易信息以及将自己打包的区块传递出去。这使得节点在加入比特币网络后，会尽量与更多节点直接关联，从而让整个比特币网络慢慢变成了一张近完全图（Near Completed Graph)。下面这个『小世界网络与闪电网络的 120 个节点模拟演示
](https://www.bilibili.com/video/av69007728 "小世界网络与闪电网络的 120 个节点模拟演示") 的视频，生动地显示了新节点不断加入比特币网络后整体变得更加紧密的过程。

https://www.bilibili.com/video/av69007728

需要明白的是，比特币节点会组成小世界网络即是果，也是因。在经济激励之下，矿工有动力去维持和其它节点的连接紧密，以便可以更迅速地接收 / 广播相应的交易和区块信息。这一点也是 BSV 和 BTC 的支持者在理念上截然不同的地方之一，BSV 相信矿工们在自由竞争之下会充分竞争从而整体实力达到接近社会平均水平，而 BTC 则强调所谓的“人人运行节点的权力”而束缚了扩容的潜能。

事实上，随着矿工的竞争充分以及交易的类型增多，比特币矿工组成的小世界网络会进化形成一个[超小世界的 Mandala 网络](https://www.nature.com/articles/srep09082 "Mandala Networks: ultra-small-world and highly sparse graphs")，其构成了 Metanet 的核心根基。不过由于时间有限，这部分只能改天再和大家分享了。

再回到开头的桃花源中，那里没有村社一类的基层组织，又因与世隔绝，外界一切机构组织都无由对之施用权力，人们各行其职，生活得自由自在。而比特币的矿工们，何尝不是生活在一片桃花源中呢？

![](https://imgkr.cn-bj.ufileos.com/be77d669-d9a8-46ed-b6b1-8f48692f3b9b.png)

<sub><sup>喜欢本文的话，欢迎关注本公众号，或者打赏比特币至 [metanetpress@moneybutton.com](bitcoin:metanetpress@moneybutton.com) 或者 [1GT6fnb7zbtzjy9pC3iyEwdpg11ax9nRst](bitcoin:1GT6fnb7zbtzjy9pC3iyEwdpg11ax9nRst) 请我喝杯咖啡：)</sup></sub>
