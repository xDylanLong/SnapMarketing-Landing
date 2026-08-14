# SnapMarketing 品牌与 SEO 技术优化设计

## 目标

在不增加页面区块、不改变当前单屏着陆页信息架构的前提下，将网站和产品统一命名为 SnapMarketing，接入用户提供的鲸鱼产品 logo，并补齐搜索引擎与社交分享所需的 HTML 元信息。

## 范围

- 保留当前 `header`、单一 hero、流程提示、footer 和安装弹窗结构。
- 移除页面中以 `DeepSeek Harness` 作为主品牌/产品标题的表达，统一使用 `SnapMarketing`；安装弹框标题保留用户指定的 `DeepSeekHarness` 会话指令。
- 使用用户提供的 logo 作为导航品牌图、页面产品视觉和 favicon / apple-touch-icon 的源文件。
- 保留当前 GitHub 入口和安装弹窗交互，不新增产品能力或未经确认的外部链接。
- 不添加 FAQ、场景卡片、功能区块或其他纵向内容。

## 页面表达

- 页面标题聚焦 SnapMarketing 的产品定位，避免把安装动作误写成产品本身。
- 首屏保留当前「发现 / 安装 / 使用」流程，但改成围绕 SnapMarketing 的中性、可验证描述。
- logo 图片提供准确的中文无障碍替代文本；纯装饰性背景使用空 alt 或 CSS 处理。
- 安装弹窗中的指令同步使用 SnapMarketing 名称，避免留下旧产品名。

## SEO 元属性

在 `index.html` 的 `<head>` 中补齐：

- `lang="zh-CN"`、charset、viewport 和 theme color。
- 精炼且唯一的 `title` 与 `meta[name="description"]`。
- `meta[name="robots"]`，允许索引和跟踪链接。
- `link[rel="canonical"]`，统一指向当前仓库对应的 GitHub Pages 地址：`https://xdylanlong.github.io/SnapMarketing-Landing/`；后续有独立域名时只替换这一组集中定义的地址。
- Open Graph：`og:type`、`og:site_name`、`og:title`、`og:description`、`og:url`、`og:image`、`og:locale`。
- Twitter Card：`twitter:card`、`twitter:title`、`twitter:description`、`twitter:image`。
- `favicon` 与 `apple-touch-icon`，复用同一份本地 logo 资源。
- 一个描述 SnapMarketing 网站的 `WebSite` JSON-LD，避免与页面可见内容冲突。

不添加 `meta keywords`，不堆叠关键词，不生成无法验证的评分、组织、产品价格或用户数据结构化信息。

## HTML 结构与资源

- 保持语义化 `header` / `main` / `footer`，为 logo、主标题、主要操作和流程列表保留明确的可访问名称。
- 产品视觉使用 `<img>`，设置明确的 `width`、`height`、`loading` 与 `decoding` 属性，避免布局抖动。
- 将 logo 放入仓库内的稳定资源目录，避免依赖临时剪贴板路径。
- CSS 只做必要的 logo 尺寸、比例和适配调整，不改变页面整体布局方向。

## 验收标准

- 页面中不再出现作为主产品名的 `DeepSeek Harness`；安装弹框标题必须显示为“把下述内容发送给 DeepSeekHarness 任意会话”。
- 直接打开 `index.html` 仍可正常显示，当前安装弹窗和 GitHub 入口可用。
- `<head>` 包含 title、description、robots、canonical、OG、Twitter、favicon、apple-touch-icon 和 JSON-LD。
- logo 在桌面端、移动端、favicon 和社交分享图片路径上均指向仓库内资源。
- 页面仍保持单屏结构，不新增纵向内容区块。
- 本地静态服务器可返回 `index.html`、logo 资源、`robots.txt` 和 `sitemap.xml`。
