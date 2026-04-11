window.bridgeHelpV6Variant = {
  id: 'v6-4',
  file: 'mobile-app-v6-4.html',
  themeClass: 'theme-v64',
  sideEyebrow: 'V6.4 Stories',
  sideTitle: '카드뉴스형 시안',
  sideCopy: '읽기 쉬운 카드뉴스 피드를 가장 앞에 두고, 카드 하나를 누르면 결과나 기관 연결로 바로 이어지는 설명형 구조입니다.',
  sidePoints: [
    { title: '피드 중심 첫 화면', body: '텍스트를 길게 읽지 않아도 한 문장 카드로 핵심을 이해할 수 있습니다.' },
    { title: '이미지와 배지 강조', body: '카테고리, 색상, 아이콘이 먼저 보여 이해 부담을 줄입니다.' },
    { title: '발표 친화적', body: '정보 이해 장벽 완화라는 메시지를 가장 선명하게 보여주는 안입니다.' }
  ],
  brandTitle: 'BridgeHelp Stories',
  brandCopy: 'SEE FIRST. ACT NEXT.',
  renderHome(ctx, b) {
    return `<div class="v6-screen-scroll v6-home-stories">${b.header(ctx.ui.home.label.ko, '한 장으로 먼저 이해하기', '<button class="v6-danger-button" data-tab="emergency">긴급</button>')}${b.hero('EASY READ FEED', '카드부터 보고 움직이기', '공지와 안내를 카드뉴스처럼 보여주고, 카드 하나를 누르면 결과 화면이나 기관 연결로 이어지는 시안입니다.')}${b.feedSection({ layout: 'stack' })}${b.emergencyBanner()}${b.quickActions()}${b.scenarioSection({ layout: 'row', title: '문제 유형 빠르게 보기', copy: '읽은 뒤 바로 문제 선택으로 이어질 수 있습니다.' })}${b.questionSection()}${b.languageMini()}</div>`;
  },
  renderResults(ctx, b) {
    return `<div class="v6-screen-scroll v6-results-stories">${b.header(ctx.ui.results.label.ko, '읽고 바로 행동', '<button class="v6-ghost-button" data-tab="home">질문 수정</button>')}${b.resultsSummary()}${b.resultsActions()}${b.resultsContacts()}${b.feedSection({ limit: 2, layout: 'stack' })}${b.resultsNext(false)}</div>`;
  },
  renderDocument(ctx, b) {
    return `<div class="v6-screen-scroll v6-document-stories">${b.header(ctx.ui.document.label.ko, '사진과 카드로 이해하기', '<button class="v6-ghost-button" data-tab="results">결과로</button>')}${b.documentUpload()}${b.documentInterpretation()}${b.documentPicker()}${b.documentNext()}</div>`;
  },
  renderEmergency(ctx, b) {
    return `<div class="v6-screen-scroll v6-emergency-stories">${b.header(ctx.ui.emergency.label.ko, '긴급 알림과 연결', '<button class="v6-danger-button" data-privacy-toggle>빠른 종료</button>')}${b.emergencyAlerts()}${b.emergencyCalls()}${b.emergencyRequest()}${b.phrases()}</div>`;
  }
};
