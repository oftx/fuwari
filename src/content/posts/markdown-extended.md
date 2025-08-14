---
title: Markdown 扩展功能
published: 1111-07-08
updated: 2024-11-29
description: '了解更多关于 Fuwari 中 Markdown 功能的信息'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: false
---

## GitHub 仓库卡片
您可以添加动态卡片，链接到 GitHub 仓库，页面加载时会从 GitHub API 拉取仓库信息。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<owner>/<repo>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框

支持以下类型的提示框：`note`、`tip`、`important`、`warning`、`caution`

:::note
突出显示用户在浏览时应注意的信息。
:::

:::tip
提供可选信息，帮助用户更成功。
:::

:::important
用户成功所需的关键信息。
:::

:::warning
因潜在风险需要用户立即关注的紧急内容。
:::

:::caution
行动可能带来的负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户在浏览时应注意的信息。
:::

:::tip
提供可选信息，帮助用户更成功。
:::
```

### 自定义标题

提示框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示。
:::
```

### GitHub 语法

> [!TIP]
> 也支持 [GitHub 语法](https://github.com/orgs/community/discussions/16925)。

```
> [!NOTE]
> 也支持 GitHub 语法。

> [!TIP]
> 也支持 GitHub 语法。
```