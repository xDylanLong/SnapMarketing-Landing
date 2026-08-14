const modal = document.querySelector('[data-install-modal]');
const openButton = document.querySelector('[data-open-install]');
const closeButton = document.querySelector('[data-close-install]');
const copyButton = document.querySelector('[data-copy-install]');
const copyTarget = document.querySelector('[data-install-copy]');
const copyStatus = document.querySelector('[data-copy-status]');

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

  copyStatus.textContent = '已复制，可以粘贴到 DeepSeek Harness。';
  copyButton.textContent = '已复制';
  window.setTimeout(() => {
    copyButton.textContent = '复制';
  }, 1800);
}

openButton.addEventListener('click', openInstallModal);
closeButton.addEventListener('click', closeInstallModal);
copyButton.addEventListener('click', copyInstallInstruction);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeInstallModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeInstallModal();
});
