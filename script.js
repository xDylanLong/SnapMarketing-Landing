const landingLogic = window.SnapMarketingLanding;
const languageToggle = document.querySelector('[data-language-toggle]');
const commandCopyButton = document.querySelector('[data-copy-command]');
const commandCopyTarget = document.querySelector('[data-command-copy]');

let currentLanguage = 'en';

function applyLanguage(language) {
  currentLanguage = language === 'zh' ? 'zh' : 'en';
  const copy = landingLogic.getCopy(currentLanguage);

  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  languageToggle.textContent = copy.languageButton;
  languageToggle.setAttribute('aria-label', copy.languageLabel);
  commandCopyButton.textContent = copy.commandCopyButton;
  document.querySelector('.brand').setAttribute('aria-label', copy.homeLabel);
  document.querySelector('.product-preview').setAttribute('aria-label', copy.previewLabel);
  document.querySelector('.product-preview-image').setAttribute('alt', copy.previewAlt);
  document.querySelector('[data-process-list]').setAttribute('aria-label', copy.processLabel);
  document.querySelector('.header-nav').setAttribute('aria-label', copy.primaryNav);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
}

async function copyInstallCommand() {
  const text = commandCopyTarget.textContent.trim();
  const copy = landingLogic.getCopy(currentLanguage);

  commandCopyButton.textContent = copy.commandCopyStatus;
  window.setTimeout(() => {
    commandCopyButton.textContent = landingLogic.getCopy(currentLanguage).commandCopyButton;
  }, 1800);

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
}

commandCopyTarget.textContent = landingLogic.getInstallCommand();
commandCopyButton.addEventListener('click', copyInstallCommand);
languageToggle.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'zh' : 'en');
});

applyLanguage('en');
