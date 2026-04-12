window.bridgeHelpV7Variant = {
  id: 'v7-2',
  file: 'mobile-app-v7-2.html',
  themeClass: 'theme-v72',
  sideEyebrow: 'V7.2 Voice',
  sideTitle: '음성 비서형 홈',
  sideCopy: '큰 마이크 버튼으로 바로 찾는 구조입니다.',
  sidePoints: [
    { title: '큰 마이크 중심', body: '말로 바로 시작합니다.' },
    { title: '음성 -> 행동 안내', body: '바로 행동 안내로 이어집니다.' },
    { title: '보조 진입 유지', body: '카드와 버튼은 아래에 둡니다.' }
  ],
  brandTitle: 'BridgeHelp Voice',
  brandCopy: 'SPEAK. UNDERSTAND.',
  renderHome(ctx, b) {
    return `<div class="v7-scroll-screen">${b.header(ctx.t(ctx.ui.home.label), ctx.t(ctx.ui.home.title), '', '<button class="v7-button-secondary" data-tab="emergency">긴급</button>')}${b.micCard({ hero: true, title: '말해서 찾기', copy: '예: 예방접종 어디서 해요?' })}${b.quickActions()}${b.problemGrid({ title: '문제 선택', copy: '카드를 누르면 시작됩니다.' })}${b.feedPreview({ limit: 2 })}${b.emergencyBanner()}${b.questionPanel()}${b.languageMini()}</div>`;
  }
};
