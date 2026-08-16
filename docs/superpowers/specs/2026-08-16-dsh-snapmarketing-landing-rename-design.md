# dsh-snapmarketing landing rename design

## Goal

将当前 landing 仓库与公开页面统一改名为 `dsh-snapmarketing-landing`，页面产品品牌统一显示为 `dsh-snapmarketing`，并保留当前单屏页面结构、三步流程、安装弹窗、GitHub 入口与图片资源。

## Scope

- 将页面可见品牌、标题、SEO 描述、社交分享文本、README 文案和安装提示统一改为 `dsh-snapmarketing`。
- 将 landing 仓库链接、GitHub Pages canonical、Open Graph、Twitter 和 sitemap/robots 地址改为 `dsh-snapmarketing-landing`。
- 保留安装源仓库 `xDylanLong/SnapMarketing`，因为本次请求只涉及当前 landing 仓库，避免改动另一个产品仓库的外部地址。
- 不修改页面布局、交互流程、图片文件名或 CSS 结构。

## Verification

- 搜索当前源文件，确认旧 landing 仓库名和旧产品展示名不再出现在页面、README 与抓取文件中。
- 启动静态 HTTP 服务，确认首页与资源返回成功，并检查关键产品名称、描述、GitHub 链接和安装指令。
- 通过 GitHub CLI 将当前仓库重命名为 `dsh-snapmarketing-landing`，再确认远端 URL 与本地 remote 已同步。
