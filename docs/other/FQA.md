---
title: 疑问解答
---

## 自动答题

### `如何使用自动答题`

自动答题需要你进入学习，作业，考试页面后，根据弹出来的弹窗，进行题库配置。 关于题库配置，请看： [自动答题教程](/docs/work)

### `为什么不开始自动答题`

- 请检查自动答题设置是否开启
- 检查题库配置是否正确（题库配置一般为 JSON 字符串 ，而不是 36 个字符串）
- 在超星中请查看当前页面是否有任务点的标志，脚本不会运行非任务点的章节，（任务点一般是黄色的小圆点） ， 这种情况你可以考虑开启 `强制答题`。
- 请等待脚本识别完成题目与文字后才会开始自动答题
- 也许已经开始自动答题但是并未搜索到题目，请打开搜索结果仔细查看

### `为什么搜不到题目`

题库不是百分百能搜到题目，如果你发现所有题目都搜索不到，查看科目是否较为冷门或者是专业课，例如理科，高数，物理，英语这种题库较少。

### `为什么搜到了题目但是不填上去`

脚本不是人工智能，以下情况请自行填入：

- 假如答案 ABCD 的情况，需要自行填写，因为不能确定选项顺序是否被打乱。
- 假如答案和选项有干扰，例如答案为 ： `10` ， 选项为 `A. 10` ， 这种情况可能会更新优化，如果没有填写，则还请暂时手动填写，
- 填空题有多个填空的话必须满足一定格式才能解析，例如： 你的名字是？ `张三#李四#王五` , 你的名字是？ `张三---李四---王五` ，之类的。

## 超星

### `为什么超星不显示脚本，但其他网课显示`

- 超星的域名变化无常， 常见的域名有 `chaoxing.com` , `org.cn` , `edu.cn` ， 如果你的域名不属于这些，请在脚本里自行添加

例如：

你的学校超星网站为 `https://xxxxx.net/xxxx` ，那么 `xxxxx.net` 这个就是网站域名

1.打开右上角的脚本管理器，并且打开脚本进行编辑。

2.在代码里面添加 `// @match *://*.[网站域名]/*` （把括号里面替换成真实域名）

例子 :

```js
// ==UserScript==
// @name       				OCS 网课助手
// @version    				xxx
// @description				OCS(online-course-script) 网课助手，xxxxxxxxxxxxx
// @author     				enncy
// @license    				MIT
// @match      				*://*.zhihuishu.com/*
// @match      				*://*.chaoxing.com/*
// @match      				*://*.edu.cn/*
// @match      				*://*.org.cn/*
// @match                   *://*.xxxxx.net/*                         <-- 回车新建一行，然后在这一行写
// @grant      				GM_info
// @grant      				GM_getTab
...
...
...
... 剩下代码不用动
```

3.添加后，点击左上角的“编辑-保存”

4.重新进入超星页面即可

### `为什么开了倍速没反应`

- 如果倍速无效，设置 2 倍速，却变成了 1 倍速，那么就是超星不允许倍速。

### `为什么刷过的课程第二天看却显示没有刷`

- 因为开高倍速被老师清空或者超星自动清空了。

### `开高倍速会怎么样`

学习通后台可以看到你开了多少倍，所以自己判断，公开课一般可以开，没人管，专业课的话你自己斟酌吧。

### `超星视频为什么一直转圈圈`

- 网络问题，刷新或者换成热点 wifi 尝试
- 视频问题，切换设置里面的视频路线，多个路线尝试。

### `为什么超星总是有验证码`

- 请尝试使用低倍速，高倍速的话有些课程容易出现验证码。
- 请查看页面是否使用太多脚本，请关闭其他脚本防止脚本冲突导致的问题。
- 请更新脚本到 3.2.xx 以后的版本，最好是更新到最新版。

### `为什么超星不自动跳转`

- 首先确认你是否在超星新版页面，如果不是，请往返页面自行寻找 `切换新版` 的按钮，切换到超星新版。
- 其次查看您的课程是否为 `闯关模式` , 闯关模式一般右边的任务栏带有很多的小旗帜，此时你必须手动完成才能进入下一个，所以如果脚本不能完成当前章节就会一直卡着。
- 最后查看您的浏览器是否为最大化，或者小窗口模式，请不要最小化浏览器，否则会导致页面卡死。
- 其他不自动跳转情况，请联系作者说明。

### `超星作业/考试不运行`

请查看是否是新版超星，如果是请查看提示面板是否出现，如果没有出现请刷新重试，刷新后还是没有出现可以向作者反馈。

## 智慧树

### `为什么不能倍速`

- 倍速会导致进度不正常
- 倍速可能导致封号的风险

### `共享课考试页面为什么没有设置`

- 共享课考试页面请手动刷新一次，才会出现设置 。

## 软件疑问解答

### `运行后软件报错/报红`

只要不影响脚本操作，报错爆红无所谓。

### `我运行之后为什么没有登录`

请查看你的浏览器路径是否正确，或者可能是你选择了 `手动登录` ， 手动登录需要自己操作

### `登录完成之后为什么不动了`

登录完成后查看页面是否弹出来 OCS 助手的提示框，如果有，按照上面的提示进行操作，没有的话，向作者报告情况

### `浏览器关不掉怎么办`

手动关闭即可

### `为什么一直卡在脚本更新的页面`

脚本需要等待页面加载完成才能执行，所以如果您的网络速度非常慢，就容易卡死，此时重启任务即可。

## 其他

### 关于软件辅助开启前为什么需要调整窗口大小？

软件辅助功能其实借助于 谷歌 [playwright](https://playwright.dev/) 库的自动化实现，点击元素需要当前元素在视野中，并且会尝试滚动当前的页面使得元素在视野中。

如果元素不在视野中，可能会导致点击失败。

所以必须将窗口调整到合适的大小，使得元素在视野中。

或者物理上改变浏览器的渲染大小(viewport)，这也是自动调整窗口大小的原理，虽然会导致浏览器无法看到超出窗口的元素，但是并不影响点击功能的执行。（我也不太清楚原理，可能有不在视野也可以点击的功能？）

**为什么不调整元素的 `style.width` 或者 `style.zoom` 来调整窗口大小？**

因为这会导致元素样式出现难以预料的错乱。

（又或者我学术不精没想到其他解决方法？🧐）
