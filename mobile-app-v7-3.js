window.bridgeHelpV7Variant = {
  id: 'v7-3',
  file: 'mobile-app-v7-3.html',
  themeClass: 'theme-v73',
  sideEyebrow: 'V7.3 Profile',
  sideTitle: '프로필/지도 강화형',
  sideCopy: '음성형 홈을 유지하면서 동행 카드와 지도 표현을 더 구체화한 시안입니다.',
  sidePoints: [
    { title: '프로필형 동행', body: '국적, 한국 생활 기간, 언어를 함께 보여줍니다.' },
    { title: '아이콘+한글 배지', body: '문제 선택을 더 쉽게 읽을 수 있습니다.' },
    { title: '가상 지도 배경', body: '지도 앱처럼 보이는 발표용 시각 구성을 넣었습니다.' }
  ],
  brandTitle: 'BridgeHelp Profile',
  brandCopy: 'SPEAK. CONNECT. GO.',
  renderHome(ctx, b) {
    return `<div class="v7-scroll-screen">${b.header(ctx.t(ctx.ui.home.label), ctx.t(ctx.ui.home.title), '', '<button class="v7-button-secondary" data-tab="emergency">긴급</button>')}${b.micCard({ hero: true, title: '말해서 찾기', copy: '예: 예방접종 어디서 해요?' })}${b.quickActions()}${b.problemGrid({ title: '문제 선택', copy: '카드를 누르면 시작됩니다.' })}${b.feedPreview({ limit: 2 })}${b.emergencyBanner()}${b.questionPanel()}${b.languageMini()}</div>`;
  }
};
