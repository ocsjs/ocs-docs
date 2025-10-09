---
title: 脚本教程
tags:
  - 教程
  - OCS脚本
---

:::info 用于自动学习 `超星学习通`、`知道智慧树`、`职教云`、`智慧职教` 等多个网课

:::

### 使用须知

:::warning 不要使用 QQ 、360 等浏览器（不兼容） ！
:::

<details>

<summary>目前兼容的浏览器（点击展开）：</summary>

<div style={{display:'flex', alignItems:'center', border: '1px solid #bfbfbf', borderRadius:'12px',margin:'4px 0px'}}>

<img
src="https://user-images.githubusercontent.com/50533276/166101774-c62bfc5a-89fc-42e2-9638-484847bb0dd7.png"
width="64"
height="64"
style={{ borderRadius: "12px", marginRight: "24px" }}
/>

<span>
  Edge 微软浏览器
  <a href="https://www.microsoft.com/zh-cn/edge/download" target="_blank">
    https://www.microsoft.com/zh-cn/edge/download
  </a>
</span>

</div>

<div style={{display:'flex', alignItems:'center', border: '1px solid #bfbfbf', borderRadius:'12px',margin:'4px 0px'}}>

<img
src="https://user-images.githubusercontent.com/50533276/166101769-cc4cf43a-df3f-479a-bd19-e5d4033961dd.png"
width="64"
height="64"
style={{ borderRadius: "12px", marginRight: "24px" }}
/>

<span>
  Chrome 谷歌浏览器
  <a href="https://www.google.cn/chrome/index.html" target="_blank">
    https://www.google.cn/chrome/index.html
  </a>
</span>

</div>

</details>

---

## 第一步 安装 脚本管理器

:::warning 以下两个脚本管理器只需安装其中一个即可 ！
:::

<details>

<summary>点击展开</summary>

> 🎉 脚本猫是 [一之哥](https://blog.icodef.com/) 开发的国产脚本管理器哦，多多支持~

<details>
<summary> <b> 脚本猫 安装-图文教程：</b> </summary>

- `脚本猫链接`： <a href="https://docs.scriptcat.org/" target="_blank"> https://docs.scriptcat.org </a>

<div style={{maxWidth:"400px"}}>

![1](../static/img/script/scriptcat_download_1.png)

![2](../static/img/script/scriptcat_download_2.png)

![3](../static/img/script/scriptcat_download_3.png)

</div>
 
<div style={{margin:"12px 0px"}}>

点击获取即可安装。安装后，即可查看第二步。

</div>

</details>

> Tampermonkey（篡改猴/有些人也叫他油猴，但油猴其实是 GreaseMonkey ， 最早出现的脚本管理器）

<details>

<summary> 
  <b>Tampermonkey 安装-图文教程：</b> 
</summary>

- `Tampermonkey 链接`： <a href="https://www.tampermonkey.net/" target="_blank"> https://www.tampermonkey.net/</a>

<div style={{maxWidth:"400px"}}>

![1](../static/img/script/tampermonkey_download_1.png)

![2](../static/img/script/tampermonkey_download_2.png)

</div>

点击获取即可安装。安装后，即可查看第二步。

</details>
</details>

## 第二步 安装脚本

:::warning 关于 2025 年多个刷课问题公示 ： [点击查看](./issues/2025.md)
:::

:::warning 在使用之前，请关闭其他脚本，避免脚本之间发生冲突 ！如果页面出现多个 OCS 脚本，请参考下方的 [`删除脚本教程`](#删除脚本教程) ，确保只有一个脚本

:::

:::warning 请先查看 [`第一步安装脚本管理器`](#第一步-安装-脚本管理器) ，否则将无法安装脚本到管理器中进行使用，而是下载脚本文件
:::

:::info 在安装页面点 `安装/更新` 按钮后，页面会 `自动关闭` ，这是 `正常现象`
:::

<div style={{fontSize:"14px"}}>

| 安装来源                                 | 链接                                                                                    | 说明                                  |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------- |
| `✨推荐` 官方安装链接                    | [🔗 前往安装/更新](https://cdn.ocsjs.com/ocs.user.js)                                   | OCS 官方脚本链接                      |
| 脚本猫脚本站                             | [🔗 前往安装/更新](https://scriptcat.org/script-show-page/367)                          | 脚本猫旗下的脚本托管网站              |
| ~~greasyfork（油叉，国内暂时无法访问）~~ | [~~🔗 前往安装/更新~~](https://greasyfork.org/zh-CN/scripts/457151)                     | 油叉是当下比较热门的的脚本托管网站    |
| github（需科学上网）                     | [🔗 前往安装/更新](https://github.com/ocsjs/ocsjs/releases/latest/download/ocs.user.js) | 由 Github Action 自动打包生成（最新） |

</div>

<details>

<summary> 
  <b> 其他版本安装 ：</b> 
</summary>

脚本猫脚本站-历史版本：https://scriptcat.org/script-show-page/367/version

greasyfork-历史版本：https://greasyfork.org/zh-CN/scripts/457151/versions

github-历史版本：https://github.com/ocsjs/ocsjs/releases （还有预发布版本）

</details>

## 第三步 进入网课页面

打开网课平台，等待页面上出现脚本窗口，根据面板提示操作，进入视频学习，作业考试页面即可自动运行。

例如：

<div style={{maxWidth:"400px"}}>

![show_case_cx](../static/img/script/show_case_cx.png)
![show_case_zhs](../static/img/script/show_case_zhs.png)

</div>

## 第四步 开启自动答题

脚本默认带有视频，ppt，等学习功能，如果想开启自动答题功能，请查看

<a href="https://docs.ocsjs.com/docs/work" target="_blank">
  自动答题教程 ： https://docs.ocsjs.com/docs/work{" "}
</a>

## 最后一步 学习如何更新/管理脚本

**更新脚本教程**

链接： <a href="https://docs.ocsjs.com/docs/update" target="_blank">https://docs.ocsjs.com/docs/update</a>

<div id="关闭脚本教程"></div>

**关闭脚本教程**

> 注意每个脚本管理器的页面是不一样的，但是关闭逻辑大致相同。

1. 打开右上角的脚本管理器，点击脚本管理。

![脚本管理](../static/img/common/script_manage.png)

2. 然后进入脚本列表，找到左边开关按钮，点击即可关闭

![脚本关闭](../static/img/common/script_close.png)

<div id="删除脚本教程"></div>

**删除脚本教程**

> 注意每个脚本管理器的页面是不一样的，但是删除逻辑大致相同。

1. 打开右上角的脚本管理器，点击脚本管理。

![脚本管理](../static/img/common/script_manage.png)

2. 然后进入脚本列表，找到右边删除按钮，点击即可删除

![脚本删除](../static/img/common/script_delete.png)

## 注意事项

- 如果是超星没出现，但是智慧树等其他平台出现了悬浮窗，可以查看这里的超星问题： [#为什么超星不显示脚本但其他网课显示](/docs/other/FQA#为什么超星不显示脚本但其他网课显示)
