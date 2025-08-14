---
title: 表达代码示例
published: 1111-05-06
description: 在 Markdown 中使用 Expressive Code 的代码块展示。
tags: [Markdown, 示例]
category: 示例
draft: false
---

在这里，我们将探索如何使用 [Expressive Code](https://expressive-code.com/) 展示代码块。提供的示例基于官方文档，您可以参考文档获取更多细节。

## 表达代码

### 语法高亮

[语法高亮](https://expressive-code.com/key-features/syntax-highlighting/)

#### 常规语法高亮

```js
console.log('这段代码已进行语法高亮！')
```

#### 渲染 ANSI 转义序列

```ansi
ANSI 颜色：
- 常规：[31m红[0m [32m绿[0m [33m黄[0m [34m蓝[0m [35m紫[0m [36m青[0m
- 加粗：[1;31m红[0m [1;32m绿[0m [1;33m黄[0m [1;34m蓝[0m [1;35m紫[0m [1;36m青[0m
- 暗淡：[2;31m红[0m [2;32m绿[0m [2;33m黄[0m [2;34m蓝[0m [2;35m紫[0m [2;36m青[0m

256 色（显示颜色 160-177）：
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

全 RGB 颜色：
[38;2;34;139;34m森林绿 - RGB(34, 139, 34)[0m

文本格式：[1m加粗[0m [2m暗淡[0m [3m斜体[0m [4m下划线[0m
```

### 编辑器与终端框架

[编辑器与终端框架](https://expressive-code.com/key-features/frames/)

#### 代码编辑器框架

```js title="my-test-file.js"
console.log('标题属性示例')
```

---

```html
<!-- src/content/index.html -->
<div>文件名注释示例</div>
```

#### 终端框架

```bash
echo "此终端框架没有标题"
```

---

```powershell title="PowerShell 终端示例"
Write-Output "这个有标题！"
```

#### 覆盖框架类型

```sh frame="none"
echo "看，没有框架！"
```

---

```ps frame="code" title="PowerShell Profile.ps1"
# 如果不覆盖，这将是一个终端框架
function Watch-Tail { Get-Content -Tail 20 -Wait $args }
New-Alias tail Watch-Tail
```

### 文本与行标记

[文本与行标记](https://expressive-code.com/key-features/text-markers/)

#### 标记整行与行范围

```js {1, 4, 7-8}
// 第 1 行 - 通过行号指定
// 第 2 行
// 第 3 行
// 第 4 行 - 通过行号指定
// 第 5 行
// 第 6 行
// 第 7 行 - 通过范围 "7-8" 指定
// 第 8 行 - 通过范围 "7-8" 指定
```

#### 选择行标记类型（mark、ins、del）

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('此行标记为已删除')
  // 此行及下一行标记为已插入
  console.log('这是第二行已插入的行')

  return '此行使用默认中性标记类型'
}
```

#### 为行标记添加标签

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 在单独行添加长标签

```jsx {"1. 在此处提供 value 属性：":5-6} del={"2. 移除 disabled 和 active 状态：":8-10} ins={"3. 添加此内容以在按钮内渲染子节点：":12-15}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

#### 使用类似 diff 的语法

```diff
+此行将标记为已插入
-此行将标记为已删除
这是常规行
```

---

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+这是一个实际的 diff 文件
-所有内容将保持未修改
 空白也不会被移除
```

#### 结合语法高亮与类似 diff 的语法

```diff lang="js"
  function thisIsJavaScript() {
    // 整个代码块将高亮为 JavaScript，
    // 并且我们仍然可以为其添加 diff 标记！
-   console.log('要移除的旧代码')
+   console.log('全新且亮眼的代码！')
  }
```

#### 标记行内的单个文本

```js "given text"
function demo() {
  // 标记行内的任何给定文本
  return '支持给定文本的多次匹配';
}
```

#### 正则表达式

```ts /ye[sp]/
console.log('单词 yes 和 yep 将被标记。')
```

#### 转义正斜杠

```sh /\/ho.*\//
echo "Test" > /home/test.txt
```

#### 选择内联标记类型（mark、ins、del）

```js "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('这些是插入和删除的标记类型');
  // return 语句使用默认标记类型
  return true;
}
```

### 自动换行

[自动换行](https://expressive-code.com/key-features/word-wrap/)

#### 为每个代码块配置换行

```js wrap
// 带换行示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法适应可用空间'
}
```

---

```js wrap=false
// 不带换行示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法适应可用空间'
}
```

#### 配置换行行的缩进

```js wrap preserveIndent
// 带 preserveIndent 示例（默认启用）
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法适应可用空间'
}
```

---

```js wrap preserveIndent=false
// 不带 preserveIndent 示例
function getLongString() {
  return '这是一个非常长的字符串，除非容器非常宽，否则很可能无法适应可用空间'
}
```

## 可折叠部分

[可折叠部分](https://expressive-code.com/plugins/collapsible-sections/)

```js collapse={1-5, 12-14, 21-24}
// 所有这些样板设置代码将被折叠
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// 这部分代码默认可见
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // 可以有多个折叠部分
  const a = 1
  const b = 2
  const c = a + b

  // 这部分将保持可见
  console.log(`计算结果：${a} + ${b} = ${c}`)
  return c
}

// 从这里到代码块结束的所有代码将再次被折叠
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: '示例样板代码结束' })
```

## 行号

[行号](https://expressive-code.com/plugins/line-numbers/)

### 为每个代码块显示行号

```js showLineNumbers
// 此代码块将显示行号
console.log('来自第 2 行的问候！')
console.log('我在第 3 行')
```

---

```js showLineNumbers=false
// 此代码块禁用行号
console.log('你好？')
console.log('抱歉，你知道我在第几行吗？')
```

### 更改起始行号

```js showLineNumbers startLineNumber=5
console.log('来自第 5 行的问候！')
console.log('我在第 6 行')
```