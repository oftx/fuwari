# 关于
这是我的个人博客，也是我的**备忘录/记事本/收藏夹/剪贴板**，我会在这里分享我的想法、经验和创作，欢迎参观！  


## 建站历程
| 时间 | 事件 |
| - | - |
| 2025/08/14 | 部署 [Fuwari](https://github.com/saicaca/fuwari) 博客，借助 [GitHub](https://github.com/oftx/fuwari) 和 [Cloudflare Pages](https://pages.cloudflare.com/) 部署静态页面。<br>先前我在本地写了一些备忘的文本，大多是操作流程记录。<br>随着文档数量的增加，我意识到把这些文件保存到本地并不可靠，应该把它们上传到云端以防数据丢失，所以建立了博客以保存我编写的内容，同时也方便分享。 |
| 2021/02/09 | 注册博客园账号。但由于没有写作动力，注册后即停止更新内容。 |


## 博客模版
此博客基于 [Fuwari](https://github.com/saicaca/fuwari) 模板构建。  

Fuwari 项目链接👇  
::github{repo="saicaca/fuwari"}


## 评论系统

此博客使用基于 GitHub Discussions 的 [giscus](https://giscus.app/) 项目实现博客评论功能。  

依据以下教程搭建:
- [将 Giscus 评论插件添加到博客](https://adclosenn.top/posts/giscus/)

giscus 项目链接👇  
::github{repo="giscus/giscus"}


## 访问统计

此博客使用自部署 [Umami](https://github.com/umami-software/umami) 进行游客浏览数据统计，代码托管于 [GitHub](https://github.com/)，网页部署于 [Netlify](https://app.netlify.com/)，统计数据托管于 [Neon](https://console.neon.tech/)。

参考以下教程和代码实现:
- [静态博客也想展示文章浏览量？当然可以！](https://www.2x.nz/posts/static-view/)
- [手把手自托管 Umami](https://adclosenn.top/posts/umami/)
- [refactor(umami): 重构 Umami 数据获取逻辑并添加缓存机制 · afoim/fuwari@15b9e2b](https://github.com/afoim/fuwari/commit/15b9e2b4d65ade0dc201e983b9b4fa803932b24a)

Umami 项目链接👇  
::github{repo="umami-software/umami"}

---

结束!