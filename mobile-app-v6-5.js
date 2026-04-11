window.bridgeHelpV6Variant = {
  id: 'v6-5',
  file: 'mobile-app-v6-5.html',
  themeClass: 'theme-v65',
  sideEyebrow: 'V6.5 Map First',
  sideTitle: '지도 중심형 시안',
  sideCopy: '기관 찾기와 실제 방문 행동을 가장 강하게 보여주는 버전으로, 홈부터 지도와 주변 기관이 먼저 보입니다.',
  sidePoints: [
    { title: '방문 행동 우선', body: '홈에서 바로 현재 위치 주변 기관과 길 안내 흐름을 확인할 수 있습니다.' },
    { title: '기관 중심 설계', body: '결과를 본 뒤 바로 방문, 전화, 요청 카드로 이어지는 구조입니다.' },
    { title: '실행 메시지 강화', body: '정보를 읽는 앱이 아니라 실제로 움직이게 만드는 느낌을 주는 안입니다.' }
  ],
  brandTitle: 'BridgeHelp Map',
  brandCopy: 'FIND. GO. ARRIVE.',
  renderHome(ctx, b) {
    const filter = ctx.scenario.agencyFilter || 'welfare';
    return `<div class="v6-screen-scroll v6-home-map">${b.header(ctx.ui.home.label.ko, '가까운 도움부터 찾기', '<button class="v6-danger-button" data-tab="emergency">긴급</button>')}${b.mapPreview('현재 위치 주변 기관', '지금 선택한 문제와 연결되는 가까운 기관을 먼저 보여줍니다.')}${b.agencyHighlights(filter, '지금 바로 갈 수 있는 기관', '전화, 길 안내, 요청 카드까지 한 번에 이어집니다.')}${b.scenarioSection({ layout: 'row', title: '문제 필터', copy: '문제를 바꾸면 연결 기관도 함께 바뀝니다.' })}${b.quickActions()}${b.feedSection({ limit: 2 })}${b.questionSection()}${b.languageMini()}</div>`;
  },
  renderResults(ctx, b) {
    const filter = ctx.scenario.agencyFilter || 'welfare';
    return `<div class="v6-screen-scroll v6-results-map">${b.header(ctx.ui.results.label.ko, '가장 가까운 다음 행동', '<button class="v6-ghost-button" data-tab="home">질문 수정</button>')}${b.mapPreview('이 상황에 맞는 기관', '요약을 본 뒤 바로 방문 행동으로 이어질 수 있게 기관을 먼저 보여줍니다.')}${b.resultsSummary()}${b.agencyHighlights(filter, '연결 기관 미리 보기', '결과를 확인한 뒤 바로 기관 상세와 길 안내로 들어갈 수 있습니다.')}${b.resultsActions()}${b.resultsNext(true)}</div>`;
  },
  renderDocument(ctx, b) {
    const filter = ctx.documentInfo.agencyFilter || 'welfare';
    return `<div class="v6-screen-scroll v6-document-map">${b.header(ctx.ui.document.label.ko, '문서 보고 바로 방문 준비', '<button class="v6-ghost-button" data-tab="results">결과로</button>')}${b.documentUpload()}${b.documentInterpretation()}${b.agencyHighlights(filter, '이 문서와 연결되는 기관', '문서를 이해한 뒤 바로 갈 수 있는 기관을 같이 보여줍니다.')}${b.documentNext()}</div>`;
  },
  renderEmergency(ctx, b) {
    return `<div class="v6-screen-scroll v6-emergency-map">${b.header(ctx.ui.emergency.label.ko, '긴급 연결과 위치 행동', '<button class="v6-danger-button" data-privacy-toggle>빠른 종료</button>')}${b.emergencyCalls()}${b.mapPreview('가까운 보호 기관 찾기', '긴급 상황에서는 주변 기관과 길 안내도 같이 확인합니다.')}${b.emergencyAlerts()}${b.emergencyRequest()}${b.phrases()}</div>`;
  }
};
