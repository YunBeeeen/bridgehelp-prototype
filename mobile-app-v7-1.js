window.bridgeHelpV7Variant = {
  id: 'v7-1',
  file: 'mobile-app-v7-1.html',
  themeClass: 'theme-v71',
  sideEyebrow: 'V7.1 Action',
  sideTitle: '행동 유도형 본체',
  sideCopy: '문제 선택에서 바로 행동 안내, 기관, 요청 카드로 이어지는 가장 현실적인 구조입니다.',
  sidePoints: [
    { title: '문제 -> 행동 -> 연결', body: '홈에서 문제를 누르는 순간 다음 행동이 바로 보입니다.' },
    { title: '핵심 행동 우선', body: '읽을 정보보다 지금 눌러야 할 버튼을 앞에 둡니다.' },
    { title: '실사용 톤', body: '행정 앱처럼 차분하지만 실제 방문까지 이어지는 느낌을 줍니다.' }
  ],
  brandTitle: 'BridgeHelp Action',
  brandCopy: 'UNDERSTAND. ACT.',
  renderHome(ctx, b) {
    return `<div class="v7-scroll-screen">${b.header(ctx.t(ctx.ui.home.label), '지금 바로 움직이는 도움', '문제를 고르고 바로 다음 행동으로 이어지는 행동형 홈입니다.', '<button class="v7-button-secondary" data-tab="emergency">긴급</button>')}${b.emergencyBanner()}${b.problemGrid({ title: '1. 문제부터 고르기', copy: '기관 이름을 몰라도 지금 겪는 문제를 누르면 됩니다.' })}${b.actionPreview()}${b.quickActions()}${b.micCard({ hero: false, title: '말해서 찾기', copy: '글이 어려우면 말로 시작해도 됩니다.' })}${b.feedPreview({ limit: 3 })}${b.questionPanel()}${b.languageMini()}</div>`;
  }
};
