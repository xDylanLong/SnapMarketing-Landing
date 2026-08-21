const translations = {
  en: {
    pageTitle: 'dsh-snapmarketing | Marketing Automation Plugins',
    metaDescription: 'dsh-snapmarketing is a marketing-focused plugin hub for DeepSeek Harness. Discover and install tools for marketing automation.',
    eyebrow: 'DSH / MARKETING PLUGIN HUB',
    heroTitle: 'Marketing tools for the work ahead.',
    heroDescription: '<strong>dsh-snapmarketing</strong> is a focused plugin hub for DeepSeek Harness. Find useful tools, install them quickly, and keep working in one place.',
    installHint: 'Then open dsh web, go to Settings, and choose Plugin Market.',
    previewLabel: 'Product preview of the dsh-snapmarketing plugin market',
    previewAlt: 'dsh-snapmarketing plugin market inside dsh web settings',
    previewCaption: 'Plugin Market inside dsh web',
    workflowTitle: 'From discovery to workflow',
    workflowDescription: 'A shorter path from finding a tool to using it in the work already in motion.',
    stepDiscover: 'Discover',
    stepDiscoverDescription: 'Find marketing plugins that fit the task in front of you.',
    stepInstall: 'Install',
    stepInstallDescription: 'Copy the command, then open Plugin Market in dsh web.',
    stepUse: 'Use',
    stepUseDescription: 'Bring the plugin into the workflow you already have.',
    siteFooter: 'dsh-snapmarketing | Marketing plugins for faster automation.',
    commandCopyButton: 'Copy',
    commandCopyStatus: 'Copied',
    languageLabel: 'Switch to Chinese',
    languageButton: '中文',
    homeLabel: 'dsh-snapmarketing home',
    processLabel: 'dsh-snapmarketing workflow',
    primaryNav: 'Primary navigation',
    githubLabel: 'GitHub'
  },
  zh: {
    pageTitle: 'dsh-snapmarketing | 营销自动化插件',
    metaDescription: 'dsh-snapmarketing 是面向 DeepSeek Harness 的营销专用插件中心，帮助你发现并安装营销自动化工具。',
    eyebrow: 'DSH / 营销专用插件中心',
    heroTitle: '让营销工作，直接用上合适的插件。',
    heroDescription: '<strong>dsh-snapmarketing</strong> 是面向 DeepSeek Harness 的专用插件中心。找到有用的工具，快速安装，然后继续在一个地方完成工作。',
    installHint: '然后打开 dsh web，进入 Settings，选择 Plugin Market。',
    previewLabel: 'dsh-snapmarketing 插件市场产品预览',
    previewAlt: 'dsh web 设置中的 dsh-snapmarketing 插件市场',
    previewCaption: 'dsh web 中的插件市场',
    workflowTitle: '从发现，到进入工作流',
    workflowDescription: '从找到工具，到把它用进正在进行的工作，路径更短。',
    stepDiscover: '发现',
    stepDiscoverDescription: '找到适合当前营销任务的插件。',
    stepInstall: '安装',
    stepInstallDescription: '复制命令，然后在 dsh web 中打开插件市场。',
    stepUse: '使用',
    stepUseDescription: '把插件带回你已经在使用的工作流。',
    siteFooter: 'dsh-snapmarketing | 面向营销自动化的专用插件集合。',
    commandCopyButton: '复制',
    commandCopyStatus: '已复制',
    languageLabel: '切换为英文',
    languageButton: 'English',
    homeLabel: 'dsh-snapmarketing 首页',
    processLabel: 'dsh-snapmarketing 工作流',
    primaryNav: '主导航',
    githubLabel: 'GitHub'
  }
};

function getCopy(language) {
  return translations[language] || translations.en;
}

function getInstallCommand() {
  return 'dsh plugin --profile web add @snapmarketing/dsh-plugin-center';
}

const snapMarketingLandingLogic = { getCopy, getInstallCommand };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = snapMarketingLandingLogic;
} else {
  window.SnapMarketingLanding = snapMarketingLandingLogic;
}
