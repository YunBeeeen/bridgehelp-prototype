(() => {
  const config = window.bridgeHelpV7Config || {};
  const versions = config.versions || [];
  const qrTarget = config.QR_TARGET_URL || 'https://yunbeeeen.github.io/bridgehelp-prototype/mobile-app-v7.html';
  const grid = document.getElementById('hub-version-grid');
  const qrBox = document.getElementById('hub-qr');
  const qrUrl = document.getElementById('hub-qr-url');

  grid.innerHTML = versions.map((item, index) => `
    <article class="version-card">
      <span class="tag">V7.${index + 1}</span>
      <h2>${item.title}</h2>
      <p class="copy">${item.summary}</p>
      <div class="actions">
        <a class="button primary" href="${item.file}">시안 열기</a>
      </div>
    </article>
  `).join('');

  qrUrl.textContent = qrTarget;
  if (typeof qrcode === 'function') {
    if (qrcode.stringToBytesFuncs && qrcode.stringToBytesFuncs['UTF-8']) qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
    const qr = qrcode(0, 'M');
    qr.addData(qrTarget);
    qr.make();
    qrBox.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 1, scalable: true, title: 'QR' });
  }
})();
