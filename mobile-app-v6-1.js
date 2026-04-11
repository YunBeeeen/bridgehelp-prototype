window.bridgeHelpV6Variant = {
  id: 'v6-1',
  file: 'mobile-app-v6-1.html',
  themeClass: 'theme-v61',
  sideEyebrow: 'V6.1 Public',
  sideTitle: '공공형 시안',
  sideCopy: '가장 실사용에 가까운 공공서비스형 구조입니다. 문제 유형, 기관 연결, 요청 카드가 단정하게 정리됩니다.',
  sidePoints: [
    { title: '명확한 첫 화면', body: '긴급 알림, 문제 선택, 빠른 진입을 정렬감 있게 배치합니다.' },
    { title: '짧은 문구', body: '설명보다 행동 버튼을 먼저 보여줘 낯설지 않게 시작합니다.' },
    { title: '실사용 느낌', body: '공공앱처럼 차분하지만 전화, 기관, 요청 카드로 바로 이어집니다.' }
  ],
  brandTitle: 'BridgeHelp Public',
  brandCopy: 'CLEAR. CALM. READY.',
  renderHome(ctx, b) {
    return `<div class="v6-screen-scroll v6-home-public">${b.header(ctx.ui.home.label.ko, ctx.ui.home.title.ko, '<button class="v6-danger-button" data-tab="emergency">긴급</button>')}${b.hero('PUBLIC GUIDE', '처음 써도 막히지 않게', '무슨 기관인지 몰라도 문제부터 누르고 바로 도움으로 이어지는 공공형 홈입니다.', `<div class="v6-inline-row"><button class="v6-inline-button" data-inline-action="agency">기관 찾기</button><button class="v6-inline-button" data-inline-action="request">요청 카드</button><button class="v6-inline-button" data-inline-action="culture">문화 지도</button></div>`)}${b.emergencyBanner()}${b.scenarioSection()}${b.quickActions()}${b.feedSection({ limit: 4 })}${b.questionSection()}${b.languageMini()}</div>`;
  },
  renderResults(ctx, b) {
    return `<div class="v6-screen-scroll v6-results-public">${b.header(ctx.ui.results.label.ko, ctx.ui.results.title.ko, '<button class="v6-ghost-button" data-tab="home">질문 수정</button>')}${b.resultsSummary()}${b.resultsActions()}${b.resultsContacts()}${b.resultsNotes()}${b.resultsNext(false)}</div>`;
  },
  renderDocument(ctx, b) {
    return `<div class="v6-screen-scroll v6-document-public">${b.header(ctx.ui.document.label.ko, ctx.ui.document.title.ko, '<button class="v6-ghost-button" data-tab="results">결과로</button>')}${b.documentPicker()}${b.documentUpload()}${b.documentInterpretation()}${b.documentNext()}</div>`;
  },
  renderEmergency(ctx, b) {
    return `<div class="v6-screen-scroll v6-emergency-public">${b.header(ctx.ui.emergency.label.ko, ctx.ui.emergency.title.ko, '<button class="v6-danger-button" data-privacy-toggle>빠른 종료</button>')}${b.emergencyAlerts()}${b.emergencyCalls()}${b.emergencyRequest()}${b.phrases()}</div>`;
  }
};
