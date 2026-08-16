# dsh-snapmarketing landing

dsh-snapmarketing is the plugin installation hub for DeepSeek Harness, with one clear entry point for product information, installation, and related resources.

本仓库只负责官网页面展示，不承载插件安装包，也不在这里维护安装流程。

## Install

```bash
dsh plugin --profile web add @snapmarketing/dsh-plugin-center
```

Then open `dsh web` → Settings → Plugin Market.

## 页面索引

- [dsh-snapmarketing 官网页面](https://github.com/xDylanLong/dsh-snapmarketing-landing)
- [dsh-snapmarketing 插件仓库（GitHub）](https://github.com/xDylanLong/SnapMarketing)

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 4173
```

然后打开 <http://127.0.0.1:4173>。
