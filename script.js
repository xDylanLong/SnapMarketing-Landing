const modal = document.querySelector('[data-install-modal]');
const openButton = document.querySelector('[data-open-install]');
const closeButton = document.querySelector('[data-close-install]');
const copyButton = document.querySelector('[data-copy-install]');
const copyTarget = document.querySelector('[data-install-copy]');
const copyStatus = document.querySelector('[data-copy-status]');
const languageToggle = document.querySelector('[data-language-toggle]');
const commandCopyButton = document.querySelector('[data-copy-command]');
const commandCopyTarget = document.querySelector('[data-command-copy]');

const translations = {
  en: {
    pageTitle: 'dsh-snapmarketing · Marketing Automation Plugins',
    metaDescription: 'dsh-snapmarketing is a marketing-focused plugin hub for DeepSeek Harness, growing into a fast collection of tools for marketing automation.',
    eyebrow: 'DSH / MARKETING PLUGIN HUB',
    heroTitle: 'for marketing automation',
    heroDescription: '<strong>dsh-snapmarketing</strong> is a marketing-focused plugin hub for DeepSeek Harness — growing into a fast collection of tools for marketing automation.',
    installButton: 'Installation details',
    installHint: 'Then open dsh web → Settings → Plugin Market.',
    githubButton: 'View on GitHub',
    footerNote: 'A simpler way to bring plugins into your workflow.',
    stepDiscover: 'Discover',
    stepInstall: 'Install',
    stepUse: 'Use',
    siteFooter: 'dsh-snapmarketing · Marketing plugins for faster automation.',
    modalTitle: 'Send the following to any DeepSeekHarness session',
    installInstruction: 'Install dsh-snapmarketing from this GitHub repository: https://github.com/xDylanLong/SnapMarketing',
    commandCopyButton: 'Copy',
    commandCopyStatus: 'Command copied.',
    copyButton: 'Copy',
    copyStatus: 'Copied. Paste it into DeepSeekHarness.',
    languageLabel: 'Switch to Chinese',
    languageButton: '中文',
    closeModal: 'Close installation instructions',
    homeLabel: 'dsh-snapmarketing home',
    previewLabel: 'dsh-snapmarketing product preview',
    previewAlt: 'dsh-snapmarketing plugin market settings',
    processLabel: 'dsh-snapmarketing installation flow',
    primaryNav: 'Primary navigation'
  },
  zh: {
    pageTitle: 'dsh-snapmarketing · 营销自动化插件',
    metaDescription: 'dsh-snapmarketing 是面向 DeepSeek Harness 的营销专用插件中心，逐步汇集快速营销自动化工具。',
    eyebrow: 'DSH / 营销专用插件中心',
    heroTitle: '快速营销自动化工具集合',
    heroDescription: '<strong>dsh-snapmarketing</strong> 是面向 DeepSeek Harness 的营销专用插件中心，逐步汇集快速营销自动化工具，让发现、安装和使用更简单。',
    installButton: '安装说明',
    installHint: '然后打开 dsh web → Settings → Plugin Market。',
    githubButton: '查看 GitHub',
    footerNote: '让插件更简单地进入你的工作流。',
    stepDiscover: '发现',
    stepInstall: '安装',
    stepUse: '使用',
    siteFooter: 'dsh-snapmarketing · 面向营销自动化的专用插件集合。',
    modalTitle: '把下述内容发送给 DeepSeekHarness 任意会话',
    installInstruction: '根据这个 GitHub 仓库安装一下 dsh-snapmarketing：https://github.com/xDylanLong/SnapMarketing',
    commandCopyButton: '复制',
    commandCopyStatus: '命令已复制。',
    copyButton: '复制',
    copyStatus: '已复制，可以粘贴到 DeepSeekHarness。',
    languageLabel: '切换为英文',
    languageButton: 'English',
    closeModal: '关闭安装说明',
    homeLabel: 'dsh-snapmarketing 首页',
    previewLabel: 'dsh-snapmarketing 产品预览',
    previewAlt: 'dsh-snapmarketing 插件市场设置界面',
    processLabel: 'dsh-snapmarketing 插件安装流程',
    primaryNav: '主导航'
  }
};

let currentLanguage = 'en';

let lastFocusedElement;

function openInstallModal() {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  closeButton.focus();
}

function closeInstallModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  copyStatus.textContent = '';
  lastFocusedElement?.focus();
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = translations[language];

  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  document.querySelector('[data-language-toggle]').textContent = copy.languageButton;
  document.querySelector('[data-language-toggle]').setAttribute('aria-label', copy.languageLabel);
  commandCopyButton.textContent = copy.commandCopyButton;
  document.querySelector('.brand').setAttribute('aria-label', copy.homeLabel);
  document.querySelector('.product-preview').setAttribute('aria-label', copy.previewLabel);
  document.querySelector('.product-preview-image').setAttribute('alt', copy.previewAlt);
  document.querySelector('.process-list').setAttribute('aria-label', copy.processLabel);
  document.querySelector('.install-command').setAttribute('aria-label', language === 'zh' ? '安装命令' : 'Install command');
  document.querySelector('.header-nav').setAttribute('aria-label', copy.primaryNav);
  document.querySelector('.modal-close').setAttribute('aria-label', copy.closeModal);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });

  copyStatus.textContent = '';
}

async function copyInstallInstruction() {
  const text = copyTarget.textContent.trim();

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }

  copyStatus.textContent = translations[currentLanguage].copyStatus;
  copyButton.textContent = currentLanguage === 'zh' ? '已复制' : 'Copied';
  window.setTimeout(() => {
    copyButton.textContent = translations[currentLanguage].copyButton;
  }, 1800);
}

async function copyInstallCommand() {
  const text = commandCopyTarget.textContent.trim();

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }

  commandCopyButton.textContent = currentLanguage === 'zh' ? '已复制' : 'Copied';
  window.setTimeout(() => {
    commandCopyButton.textContent = translations[currentLanguage].commandCopyButton;
  }, 1800);
}

openButton.addEventListener('click', openInstallModal);
closeButton.addEventListener('click', closeInstallModal);
copyButton.addEventListener('click', copyInstallInstruction);
commandCopyButton.addEventListener('click', copyInstallCommand);
languageToggle.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'zh' : 'en');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeInstallModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeInstallModal();
});

applyLanguage('en');
