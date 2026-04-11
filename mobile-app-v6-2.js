window.bridgeHelpV6Variant = {
  id: 'v6-2',
  file: 'mobile-app-v6-2.html',
  themeClass: 'theme-v62',
  sideEyebrow: 'V6.2 Action',
  sideTitle: '행동형 시안',
  sideCopy: '지금 해야 할 일을 가장 앞세워서 문제 선택부터 전화와 기관 연결까지 단계적으로 보여주는 실행형 구조입니다.',
  sidePoints: [
    { title: '문제 -> 행동 -> 연결', body: '홈에서 바로 다음 행동이 보이도록 단계형으로 구성합니다.' },
    { title: '하단 CTA 강조', body: '결과와 기관 상세에서 다음 버튼이 계속 보이게 유지합니다.' },
    { title: '읽기 최소화', body: '설명 길이를 줄이고 버튼과 번호, 핵심 행동만 남깁니다.' }
  ],
  brandTitle: 'BridgeHelp Action',
  brandCopy: 'MOVE NOW.',
  renderHome(ctx, b) {
    return `<div class="v6-screen-scroll v6-home-action">${b.header(ctx.ui.home.label.ko, '지금 해야 할 행동', '<button class="v6-danger-button" data-tab="emergency">긴급</button>')}${b.hero('ACTION FLOW', '문제 선택 -> 다음 행동 -> 연결', '무엇을 읽을지보다 무엇을 먼저 해야 하는지를 바로 보이게 만든 실행 중심형 시안입니다.')}${b.scenarioSection({ title: '1단계 문제 선택', copy: '가장 가까운 문제를 누르면 다음 행동이 바뀝니다.', layout: 'row', className: 'v6-step-card' })}${b.quickActions({ className: 'v6-step-card' })}${b.mapPreview('2단계 가까운 기관 보기', '문제를 고른 뒤 바로 갈 수 있는 기관과 길 안내를 보여줍니다.')}${b.questionSection({ className: 'v6-step-card' })}${b.feedSection({ limit: 3 })}${b.languageMini()}</div>`;
  },
  renderResults(ctx, b) {
    return `<div class="v6-screen-scroll v6-results-action">${b.header(ctx.ui.results.label.ko, '바로 움직이기', '<button class="v6-ghost-button" data-tab="home">질문 수정</button>')}${b.resultsSummary()}${b.resultsActions()}${b.resultsContacts()}${b.resultsNext(true)}</div>`;
  },
  renderDocument(ctx, b) {
    return `<div class="v6-screen-scroll v6-document-action">${b.header(ctx.ui.document.label.ko, '문서 보고 바로 준비', '<button class="v6-ghost-button" data-tab="results">결과로</button>')}${b.documentUpload()}${b.documentPicker()}${b.documentInterpretation()}${b.documentNext()}</div>`;
  },
  renderEmergency(ctx, b) {
    return `<div class="v6-screen-scroll v6-emergency-action">${b.header(ctx.ui.emergency.label.ko, '바로 연결', '<button class="v6-danger-button" data-privacy-toggle>빠른 종료</button>')}${b.emergencyCalls()}${b.emergencyRequest()}${b.emergencyAlerts()}${b.phrases()}</div>`;
  }
};
