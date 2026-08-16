const modal = document.querySelector('[data-install-modal]');
const openButton = document.querySelector('[data-open-install]');
const closeButton = document.querySelector('[data-close-install]');
const copyButton = document.querySelector('[data-copy-install]');
const copyTarget = document.querySelector('[data-install-copy]');
const copyStatus = document.querySelector('[data-copy-status]');
const languageToggle = document.querySelector('[data-language-toggle]');

const translations = {
  en: {
    pageTitle: 'dsh-snapmarketing · Plugin Installation Hub',
    metaDescription: 'dsh-snapmarketing is the plugin installation hub for DeepSeek Harness. Discover, install, and use plugins from one clear entry point.',
    eyebrow: 'DSH / PLUGIN INSTALLATION HUB',
    heroTitle: 'inside DeepSeek Harness',
    heroDescription: '<strong>dsh-snapmarketing</strong> is the plugin installation hub for DeepSeek Harness — discover, install, and use plugins from one clear entry point.',
    installButton: 'Install dsh-snapmarketing',
    githubButton: 'View on GitHub',
    footerNote: 'A simpler way to bring plugins into your workflow.',
    stepDiscover: 'Discover',
    stepInstall: 'Install',
    stepUse: 'Use',
    siteFooter: 'dsh-snapmarketing · Plugin installation hub for DeepSeek Harness.',
    modalTitle: 'Send the following to any DeepSeekHarness session',
    installInstruction: 'Install dsh-snapmarketing from this GitHub repository: https://github.com/xDylanLong/SnapMarketing',
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
    pageTitle: 'dsh-snapmarketing · 插件安装中心',
    metaDescription: 'dsh-snapmarketing 是面向 DeepSeek Harness 的插件安装中心，从一个清晰入口发现、安装并使用插件。',
    eyebrow: 'DSH / 插件安装中心',
    heroTitle: 'DeepSeek Harness 插件中心',
    heroDescription: '<strong>dsh-snapmarketing</strong> 是面向 DeepSeek Harness 的插件安装中心，从一个清晰入口发现、安装并使用插件。',
    installButton: '安装 dsh-snapmarketing',
    githubButton: '查看 GitHub',
    footerNote: '让插件更简单地进入你的工作流。',
    stepDiscover: '发现',
    stepInstall: '安装',
    stepUse: '使用',
    siteFooter: 'dsh-snapmarketing · DeepSeek Harness 插件安装中心。',
    modalTitle: '把下述内容发送给 DeepSeekHarness 任意会话',
    installInstruction: '根据这个 GitHub 仓库安装一下 dsh-snapmarketing：https://github.com/xDylanLong/SnapMarketing',
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
  document.querySelector('.brand').setAttribute('aria-label', copy.homeLabel);
  document.querySelector('.product-preview').setAttribute('aria-label', copy.previewLabel);
  document.querySelector('.product-preview-image').setAttribute('alt', copy.previewAlt);
  document.querySelector('.process-list').setAttribute('aria-label', copy.processLabel);
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

openButton.addEventListener('click', openInstallModal);
closeButton.addEventListener('click', closeInstallModal);
copyButton.addEventListener('click', copyInstallInstruction);
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
