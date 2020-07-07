---
title: 高山流水觅知音：Bitping 如何改变计算机的经典协议
tags:
  - bitcoin
  - bsv
  - bitping
  - protocol
  - micropayment
img: 'https://static01.imgkr.com/temp/54065ca537dd437bae00c6409faac2b5.jpeg'
description: ''
date: 2020-06-24 12:01:13
---

![bitping](https://static01.imgkr.com/temp/54065ca537dd437bae00c6409faac2b5.jpeg)

今天，我们来讲讲 Bitping 如何通过使用 BSV 网络来此呼彼应的故事。

<!--more-->

## 伯牙遇知音

> 伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在登高山。钟子期曰：“善哉？峨峨兮若泰山！” 志在流水，钟子期曰：“善哉，洋洋兮若江河！” 伯牙所念，钟子期必得之。 --《列子・汤问》

《高山流水》乃是中国十大古曲之一。传说先秦的琴师伯牙某天在荒山野地弹琴，樵夫钟子期竟能领会这是描绘 “峨峨兮若泰山” 和 “洋洋兮若江河”。伯牙惊道：“善哉，子之心而与吾心同。” 钟子期死后，伯牙痛失知音，摔琴绝弦，终生不弹，故有高山流水之曲。

“久旱逢甘露，他乡遇故知，洞房花烛夜，金榜题名时。” 这四句诗被视为人生 “四喜”。其中的他乡遇故知，指的就是难得遇到一个懂自己的人。古人时常感叹怀才不遇，知己难寻，很大程度上也是受当时通讯落后所局限，纵使偶成佳作亦无法获取足够的受众产生共鸣。幸运的是，两千多年后的互联网时代，彻底改变了这一点。

## 网内存知己

网内存知己，天涯若比邻。

这句话曾是邱少我 2000 年时的 QQ 签名。在那个年代，QQ 头像还不是会一直亮着的，因为那时去网吧上网对于才刚上初中的我还是一种奢侈，更不要说要保持时刻在线了。在那时候，通常发消息都要看着对方头像判断是否在线，然后再发一句” 在么 “过去，当熟悉的滴滴声伴随着头像响动时，才能开始愉快地聊天会话。

**非时刻在线** ，是当时的普遍状态，也是 ping 这个命令所的意义所在。

Ping 是用来检查网络是否通畅或者网络连接速度的命令，其全称是 Packet Internet Groper 事实上，这个名称其实远不如 pingpong 打乒乓球那样直接形象。简单地说，执行 ping 指令会使用 ICMP 传输协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

不过身处墙国的话，情况要更复杂一些，毕竟 `ping baidu.com` 和 `ping youtube.com` 的时候虽然对方服务器工作正常，但结果却会截然不同。这也意味着，对于需要 24 小时不间断在线的网站服务而言，其管理员应该掌握在不同的网络环境网站的可访问性变化并及时做出对应。

这，也正是 Bitping 在比特币的助力之下，对 ping 命令的升级改进。

## 应答即挖矿

Ping 命令是应答式服务的最简形式：用户发出请求，服务器给予答复。对于单次的操作是非常简单的，但在大规模化时，其实需要考量的事情并不少。比如说，需要有许多不同的地区的节点接入，这样 ping 测速的结果才更具有代表性，但对于这样简单的服务，专门部署大量的节点服务往往得不偿失。

Bitping (原名 UptimeSV) 的诞生，就是要利用 BSV 区块链的功能与优势，提供高效且低成本的网站连通性监控服务。与传统测速服务不同，Bitping 的监控服务并非由中心节点提供，而是由遍布全球的节点池共同提供。

通过将任务指派分配给不同地区的节点并不困难，问题是如何让人们有足够的动力去执行这样的任务。而解决的方案其实也非常简单：给钱。

对于平时经常需要自己运行 VPS 查看外面的世界的网友来说，自己的服务器其实通常是低负荷状态运行的，而通过加入 Bitping 节点池，实际上是共享自己计算机的一部分资源去偶尔测速一下，从而换取一部分的经济回报，这何尝不是一种 PoW 的挖矿呢？

事实上，这样的雇佣服务其实非常常见，但在现有金融体系中结算会非常繁琐。例如说最简单的广告 Affiliate 系统，通常需要累积达到 25 美金才会允许提现，这很大程度上会限制了用户的参与热情。

这也正是体现 BSV 小额支付潜力的场景之一：通过对每一次任务定价即时结算，按要求完成任务的人可以即时获取回报，这使得每项任务的粒度非常细化，即减少了服务方周期性对账的负担，也降低了用户担心平台跑路无法提现的风险。

## 安装与配置

说了这么多，下面让我们详细说明如何操作开启你的 Bitping 挖矿之旅。

首先需要去 <Bitping.com> 注册一个账户，设置邮箱和密码即可。

然后，准备一台虚拟主机，还没有的可以去 [Vultr](https://www.vultr.com/?ref=6932622 "SSD VPS Servers, Cloud Servers and Cloud Hosting by Vultr") 注册一台。通常每月 5 美刀的已经足够用了。

从 [这里](https://www.bitping.com/node#downloads "Bitping Nodes Download") 可以下载各个客户端的版本，这里我们选择 Linux 版的，可以 wget 或者下载后 scp 到服务器。

    wget https://uptimesv-artifacts.s3.amazonaws.com/go-node/latest/bitping-node-amd64-linux.zip

解压到根目录

    unzip bitping-node-amd64-linux.zip

运行并按提示输入邮箱和密码

    ./bitping-node-amd64-linux -server

成功验证后，即可在 https://app.bitping.com/node 上看到自己的节点上线，这意味着你的服务器已经加入 Bitping 集群，并可以随时接受任务。

上面的命令还是在前台运行，也可以加入到自动启动里面。比如说，我们可以通过 `crontab -e` 将下面的指令添加到 Cron 里面，从而实现每次开机就在后台启动。

    @reboot nohup ~/release/bitping-node-amd64-linux -server 2>&1 &

这样，即使平时自己不用这台主机的时候，也能让其发挥一丝余热。

## 开发再思考

最近一个月里，不时还会有一些韭菜和我说现在 BSV 价格没了起伏，仿佛失去了灵魂一般。对此我只能微微一笑，转手把[如何从 BSV 上赚钱](https://metanet.press/blog/2020/03/how-to-invest-in-bsv/ "君若中莫负妾身：如何从 BSV 上赚大钱")这篇文章发给他。

因为他们看不到的，是这几个月里面围绕着 BSV 而构建的应用其实多了许多。

但邱少我也看到了一些开发者的迷惘：数据上链是有成本的，上链的数据越多，频率越高，所需要的成本就越大，如何使得自己开发的应用在经济上是可持续的呢？

答案其实也很简单：找准一个合理的商业模式，然后通过使用区块链而提高其效率。

再回过头来看，其实 Bitping 的出现本身只是源于一个非常简单的想法，通过使用 BSV 进行经济激励，可以实现极细粒度的任务分配与结算，这是对现有网络测速服务的一个改进。在[这里](https://www.chainnews.com/articles/359892054870.htm "Dean Little 演讲：Bitping 通过比特币（BSV）创建分布式网络智能平台")可以看到作者当时创作的故事。

而再配合着 BSV 的特性，其实还可以有更多的扩展功能，比如说：

* 可以将奖励放在 ANYCANSPEND 的 output 里面，先发现并完成这个 ping 任务的节点可以即时完成并领取奖励。
* 通过建立支付通道，实现持续一定时间内的多次 ping 请求后再最终结算，从而使得单次费用更加市场化。
* 将每次 ping 的目标网址及结果直接以 tx 的方式应答，用 OP_RETURN 的方式存储在链上，这样可以增加历史累积透明度，亦方便今后实时展示。
* ……

而什么时候去实现这些增强性的功能呢？

当 Bitping 获取到足够多的用户，有足够的利润去进行进一步扩大生产提高竞争力的时候。

因为商场如战场，前期当出奇兵以卡位，后期应固其营以守城。唯有不断保持自身优势，产生足够的现金流，才能处于不败之地。当你明白 Bitcoin is a utility，应该去使用而不是囤的时候，更应该明白要用好这每一颗子弹。

所以，与 Bitping 类似，在 BSV 上会出现按 API 调用次数收费的 Codugh，按点击次数即时结算的 TonicPow，不是因为它们有着非凡的创新，而是它们可以做得更细，从而获取更大的细分市场。

看到这里的你，觉得下一个可以突破的点是什么呢？欢迎交流分享 :)

![](https://imgkr.cn-bj.ufileos.com/9c7d15e2-403a-4c2b-b01d-05c4cb14ad42.png)

<sub><sup > 喜欢本文的话，欢迎关注本公众号，或者打赏比特币至 [metanetpress@moneybutton.com](bitcoin:metanetpress@moneybutton.com) 或者 [1GT6fnb7zbtzjy9pC3iyEwdpg11ax9nRst](bitcoin:1GT6fnb7zbtzjy9pC3iyEwdpg11ax9nRst) 请我喝杯咖啡：)</sup></sub>