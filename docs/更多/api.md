---
title: 开发文档
tags: 
  - 开发文档
  - API
---


### 说明

> 由于现在盗版脚本猖獗，所以只提供部分API以及开发教程，如需二次开发或者加入开发者，请联系作者进行确认并获取使用步骤。

### 项目技术选型

网课脚本：

- 框架：原生js + WebComponent 
- 脚本：原生js + WebComponent

桌面软件： 

- 主进程： electron + playwright
- 渲染进程： vue3 + arco.design



### 项目结构

```
+ packages/
    + app       ## 软件主进程源码
    + web       ## 软件渲染进程源码
    + common    ## 公共库
    + utils     ## 工具库
    + core      ## 自研脚本框架
    + scripts   ## 脚本核心实现
```

所有网课学习核心功能都在 `packages/scripts/src/projects/` 文件夹下
 
### AnswererWrapper  题库配置


> OCS 提供了强大的 [`题库配置解析器`](https://github.com/enncy/online-course-script/blob/3.0/packages/scripts/src/browser/core/worker/answer.wrapper.handler.ts)，你可以对接大多数的题库进行使用

**类型** : Array\<[`AnswererWrapper`](#AnswererWrapper)>

**简单例子** 

```ts
// 假设有一个接口 : https://example.com/search?title=1+2,2+3
// 此接口返回 {code: 1, data: { answers: [3 , 5] , title:'1+2' }, msg:'成功'}

defaultAnswerWrapperHandler(
    {
        // 题目
        title: '1+2,2+3',
        // 题目类型
        type: 'single'
    },
    [
        // 可以有多个构造器，最终通过 answerPath 一起合并到一个列表并返回
        {
            url: "https://example.com/search/"// url 也可以进行解析 ${title} , 例如 https://example.com/search/${title}/,
            method: "get",
            contentType: "json",
            data: {
                title: "${title}", // 1+2,2+3,
                abc: "123", // 自定义参数,
            },
            handler: `return (res)=> res.code === 0 ? undefined : [res.data.title, res.data.answers[0]]`  // 取第一个结果
        },
    ]
); 

```
注意：
- 文本为 json 数组， 数组意味着你可以配置多个题库
- `${xxx}` 是变量占位符 
    - 可以使用在 `data` 和 `url` 字段中
    - 可以解析 
        - $title: 题目标题
        - $type: 题目类型
        - $root: 题目元素，具体元素请看各脚本的代码实现。

所以最终填写的 `题库配置` 为：  （不要使用这个，这个只是例子！！！！）
```json
[{"url":"https://example.com/search/","method":"get","contentType":"json","data":{"title":"${title}"},"handler":"return (res)=> res.code === 0 ? undefined : [res.data.title, res.data.answers[0]]"}]
```


 