---
title: Fuwari 简易指南
published: 1111-11-12
description: "如何使用此博客模板。"
image: "./cover.jpeg"
tags: [示例]
category: 示例
draft: false
---

> 封面图片来源：[来源](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板基于 [Astro](https://astro.build/) 构建。本指南未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章 Front-matter

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: 前端
draft: false
---
```

| 属性          | 描述                                                                                                                                                                                                 |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章的标题。                                                                                                                                                                                        |
| `published`   | 文章发布的日期。                                                                                                                                                                                    |
| `description` | 文章的简短描述。显示在首页上。                                                                                                                                                                      |
| `image`       | 文章封面图片的路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：用于 `public` 目录中的图片<br/>3. 无前缀：相对于 markdown 文件的路径 |
| `tags`        | 文章的标签。                                                                                                                                                                                        |
| `category`    | 文章的分类。                                                                                                                                                                                        |
| `draft`       | 如果文章仍为草稿，将不会显示。                                                                                                                                                                      |

## 文章文件的存放位置

您的文章文件应放置在 `src/content/posts/` 目录中。您还可以创建子目录，以便更好地组织文章和相关资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```