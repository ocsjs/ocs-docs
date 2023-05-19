---
title: 开发文档
tags:
  - 开发文档
  - API
---

### 说明

> 由于现在盗版脚本猖獗，所以只提供部分 API 以及开发教程，如需二次开发或者加入开发者，请联系作者进行确认并获取使用步骤。

### 项目技术选型

- 框架：原生 js + WebComponent
- 脚本：原生 js + WebComponent
 
### 项目结构

```
+ packages/
    + core      ## 自研脚本框架
    + scripts   ## 脚本核心实现
    + utils     ## 工具库
```

所有网课学习核心功能都在 `packages/scripts/src/projects/` 文件夹下

### AnswererWrapper 题库配置

> OCS 提供了强大的 [`题库配置解析器`](https://github.com/enncy/online-course-script/blob/3.0/packages/scripts/src/browser/core/worker/answer.wrapper.handler.ts)，你可以对接大多数的题库进行使用

**类型** : Array<[`AnswererWrapper`](#answererwrapper)>

**参数** :

| 参数        | 类型                           | 必填 | 说明                                                                                                      |
| ----------- | ------------------------------ | ---- | --------------------------------------------------------------------------------------------------------- |
| url         | string                         | 是   | 请求路径                                                                                                  |
| name        | string                         | 是   | 题库名字                                                                                                  |
| homepage    | string                         | 否   | 题库网址                                                                                                  |
| data        | Record<string, string>         | 否   | 传递的参数, get 请求将会添加到 url 后面， post 请求会生成请求体                                           |
| method      | "post" \| "get"                | 否   | 默认 `get` , 请求方法                                                                                     |
| contentType | "json" \| "text"               | 否   | 默认 `json` , 定义 handler 中的参数类型                                                                   |
| type        | "fetch" \| "GM_xmlhttpRequest" | 否   | 默认 `fetch` , 请求类型, `fetch` 是用浏览器原生 API， `GM_xmlhttpRequest` 使用油猴自带 API , 可进行跨域。 |
| headers     | Record<string, string>         | 否   | 默认 `{}`                                                                                                 |
| handler     | string                         | 是   | 详情请看下方解释                                                                                          |

`handler` 选项是个字符串 ， 使用 Function(string) 构造方法进行解析生成方法，方法传入的第一个参数是 `请求获取到的文本/数据（使用 contentType 定义的数据）`

- handler 中需要对请求到的数据进行解析，并返回一个数组，二维数组，或者 undefined

- 这里注意，如果题库需要返回一个多选题的答案，需要将答案用[`特殊符号`](https://github.com/ocsjs/ocsjs/blob/4.0/packages/core/src/core/worker/utils.ts#L59)分隔 ，而不是将答案写成数组。

---

- 返回一个数组 : `[题目, 答案]`

> 假设接口数据(res)为：

```json
{
  "code": 1,
  "question": "中国梦是什么？",
  "answer": "实现中华民族伟大复兴，本质是国家富强、民族振兴、人民幸福。"
}
```

handler 例子：

```json
{
  "handler": "return (res)=> res.code === 1 ? [res.question,res.answer] : undefined"
}
```

---

- 或者二维数组 : `[[题目1, 答案1], [题目2, 答案2]]`，对应的字符串 `return [["xxx","xxx"],["xxx","xxx"]]`

> 假设接口数据(res)为：

```json
{
  "code": 1,
  "results": [
    {
      "question": "中国梦是什么？",
      "answer": "实现中华民族伟大复兴，本质是国家富强、民族振兴、人民幸福。"
    }
  ]
}
```

handler 例子：

```json
{
  "handler": "return (res)=> res.code === 1 ? res.results.map(r=>([r.question,r.answer])) : undefined"
}
```

---

- 如果题库接口搜索不到，需要显示某些信息（需要提醒用户的信息）


> 假设接口数据(res)为：

```json
{
  "code": 0,
  "msg": "搜索不到"
}
```

handler 例子：

```json
{
  "handler": "return (res)=>res.code === 1 ? [res.question,res.answer] : [res.msg, undefined]  ",
}
```

---

- 如果题库接口不存在题目的内容，题目可以直接写 undefined ，（OCS会自动将搜索的题目显示）

> 假设接口数据(res)为：

```json
{
  "code": 1,
  "answer": "实现中华民族伟大复兴，本质是国家富强、民族振兴、人民幸福。"
}
```

handler 例子：

```json
{
  "handler": "return (res)=> res.code === 1 ? [undefined, res.answer] : undefined"
}
```

**简单例子**

> 假设有一个接口 : https://example.com/search?title=1+2,2+3

> 此接口返回 {code: 1, data: { answers: [3 , 5] , title:'1+2' }, msg:'成功'}

```ts
// 这段代码是模仿脚本中的调用方式
defaultAnswerWrapperHandler(
    {
        // 题目
        title: '1+2,2+3',
        // 题目选项
        type: 'single',
        // 题目选项
        options: 'A. xxx\nB. xxx\nC. xxx\nD. xxx'
    },
      // 可以有多个题库配置
    [
        {
            url: "https://example.com/search/"// url 也可以进行解析 ${title} , 例如 https://example.com/search/${title}/,
            method: "get",
            contentType: "json",
            data: {
                title: "${title}", // 1+2,2+3,
                abc: "123", // 自定义参数,
            },
            handler: "return (res)=> res.code === 0 ? undefined : [res.data.title, res.data.answers[0]]"  // 取第一个结果
            // 或者多个结果
            // handler: "return (res)=> res.code === 0 ? undefined : res.data.answers.map(a=>([res.data.title, a]))"  
        },
    ]
);

```

注意：

- `${xxx}` 是变量占位符，是根据脚本中调用的 defaultAnswerWrapperHandler 的第一个参数进行替换，如果脚本调用时没传 type 或者 options ，则不会替换
  - 可以使用在 `data` 和 `url` 字段中
  - 可以解析
    - $title: 题目标题
    - $type: 题目类型
    - $options: 题目选项

所以最终填写的 `题库配置` 为： （不要使用这个，这个只是例子！！！！）

```json
[
  {
    "url": "https://example.com/search/",
    "method": "get",
    "contentType": "json",
    "data": { "title": "${title}" },
    "handler": "return (res)=> res.code === 0 ? undefined : [res.data.title, res.data.answers[0]]"
  }
]
```
