---
title: 脚本教程
tags:
  - 教程
  - OCS脚本
---

:::tip 使用须知

- 如果之前有使用过其他脚本的小伙伴，在使用 OCS 助手之前，请先关闭其他脚本，避免脚本之间发生冲突。
- 请务必使用 edge , chrome 使用其他浏览器的例如 360，qq 浏览器所造成的不兼容，以及其他情况用户自行承担。

推荐浏览器：

<a href="https://www.microsoft.com/zh-cn/edge/download" target="_blank"> <img src="https://user-images.githubusercontent.com/50533276/166101774-c62bfc5a-89fc-42e2-9638-484847bb0dd7.png" width="64" height="64" /> </a>

<a href="https://www.google.com/intl/zh-CN/chrome/" target="_blank"> <img src="https://user-images.githubusercontent.com/50533276/166101769-cc4cf43a-df3f-479a-bd19-e5d4033961dd.png" width="64" height="64" /> </a>

:::

### 使用须知

如果是电脑小白，不会安装脚本管理器和脚本，可以下载 OCS 软件： [`OCS软件教程`](/docs/app)  
里面有傻瓜式一键安装所有环境，并可以直接新建浏览器进行刷课

---

### 第一步 安装脚本管理器

> 以下管理器只需安装其中一个即可
> 🎉 脚本猫是[一之哥](https://blog.icodef.com/)开发的国产脚本管理器哦，多多支持~

- `脚本猫`： <a href="https://docs.scriptcat.org/" target="_blank"> https://docs.scriptcat.org </a>

- `Tampermonkey`： <a href="https://www.tampermonkey.net/" target="_blank"> https://www.tampermonkey.net/</a>

---

### 第二步 安装脚本

> 直接点进链接，然后点击安装按钮即可  
> 脚本猫或者 greasyfork 上的脚本访问不了或者被封禁的时候，可以使用官方或 github 的脚本安装链接。

| 安装来源           | 链接                                                                                                                                       | 说明                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| 脚本猫脚本站       | [https://scriptcat.org/script-show-page/367](https://scriptcat.org/script-show-page/367)                                                   | 脚本猫旗下的脚本托管网站              |
| greasyfork（油叉） | [https://greasyfork.org/zh-CN/scripts/457151](https://greasyfork.org/zh-CN/scripts/457151)                                                 | 油叉是当下比较热门的的脚本托管网站    |
| github             | [https://github.com/ocsjs/ocsjs/releases/latest/download/ocs.user.js](https://github.com/ocsjs/ocsjs/releases/latest/download/ocs.user.js) | 由 Github Action 自动打包生成（最新） |
| 官方安装链接       | [https://cdn.ocsjs.com/ocs.user.js](https://cdn.ocsjs.com/ocs.user.js)                                                                     | OCS 官方脚本链接                      |

其他版本安装请看：

脚本猫脚本站-历史版本：https://scriptcat.org/script-show-page/367/version

greasyfork-历史版本：https://greasyfork.org/zh-CN/scripts/457151/versions

github-历史版本：https://github.com/ocsjs/ocsjs/releases

### 第三步 进入网课页面

打开超星，智慧树，等网课平台，等待页面上出现提示面板 （一个白色的小框框，一般在屏幕正中间），根据面板提示操作，进入学习，作业考试页面即可自动运行。

例如：

![cx](/img/cx.png)
![cx](/img/zhs.png)

### 第四步 开启自动答题

脚本默认带有视频，ppt，等学习功能，如果想开启自动答题功能，请查看 [自动答题教程](/docs/work)

### 关闭脚本教程

> 注意每个脚本管理器的页面是不一样的，但是关闭逻辑大致相同。

1. 打开右上角的脚本管理器，点击脚本管理。

![脚本管理](../static/img/common/script_manage.png)

2. 然后进入脚本列表，找到左边开关按钮，点击即可关闭

![脚本关闭](../static/img/common/script_close.png)

### 删除脚本教程

> 注意每个脚本管理器的页面是不一样的，但是删除逻辑大致相同。

1. 打开右上角的脚本管理器，点击脚本管理。

![脚本管理](../static/img/common/script_manage.png)

2. 然后进入脚本列表，找到右边删除按钮，点击即可删除

![脚本删除](../static/img/common/script_delete.png)

### 注意事项

- 如果您的页面没有出现悬浮窗，请刷新重试，或者更换浏览器，还不行的话加群带着截图进行反馈。

- 如果是超星没出现，但是智慧树等其他平台出现了悬浮窗，可以查看这里的超星问题： [#为什么超星不显示脚本但其他网课显示](/docs/other/FQA#为什么超星不显示脚本但其他网课显示)
