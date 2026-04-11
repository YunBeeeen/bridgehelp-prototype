window.bridgeHelpV6Variant = {
  id: 'v6-3',
  file: 'mobile-app-v6-3.html',
  themeClass: 'theme-v63',
  sideEyebrow: 'V6.3 Community',
  sideTitle: '커뮤니티형 시안',
  sideCopy: '지원 정보와 문화 정착을 같은 흐름 안에 두어 혼자가 아니라는 느낌을 주는 따뜻한 구조입니다.',
  sidePoints: [
    { title: '생활+문화 연결', body: '기관 정보와 문화 장소를 같은 홈에서 자연스럽게 이어줍니다.' },
    { title: '따뜻한 톤', body: '차가운 행정 앱보다 조금 더 친근하고 부드러운 분위기로 설계합니다.' },
    { title: '공동체 감각', body: '도움을 받는 것뿐 아니라 연결되는 느낌이 들도록 만듭니다.' }
  ],
  brandTitle: 'BridgeHelp Community',
  brandCopy: 'YOU ARE NOT ALONE.',
  renderHome(ctx, b) {
    return `<div class="v6-screen-scroll v6-home-community">${b.header(ctx.ui.home.label.ko, '같이 정착하기', '<button class="v6-danger-button" data-tab="emergency">긴급</button>')}${b.hero('COMMUNITY CARE', '도움과 연결을 함께', '생활 지원, 문화 공간, 커뮤니티 정보를 같은 흐름으로 보여주는 커뮤니티형 시안입니다.', `<div class="v6-inline-row"><button class="v6-inline-button" data-inline-action="culture">문화 지도</button><button class="v6-inline-button" data-inline-action="agency">기관 찾기</button></div>`)}${b.communityBand()}${b.culturePreview('익숙한 장소부터 찾기', '음식점, 마트, 커뮤니티 공간을 먼저 보고 마음을 놓을 수 있습니다.')}${b.agencyHighlights('welfare', '생활지원 기관', '정착 초기에 자주 찾게 되는 기관을 먼저 보여줍니다.')}${b.scenarioSection({ title: '문제 선택', copy: '지원이 필요한 문제를 눌러 이어서 도움을 보세요.' })}${b.questionSection()}${b.languageMini()}</div>`;
  },
  renderResults(ctx, b) {
    return `<div class="v6-screen-scroll v6-results-community">${b.header(ctx.ui.results.label.ko, '정리된 도움', '<button class="v6-ghost-button" data-tab="home">질문 수정</button>')}${b.resultsSummary()}${b.resultsContacts()}${b.resultsActions()}${b.culturePreview('같이 가기 좋은 장소', '기관 방문 전 익숙한 장소를 함께 찾아 정서적 장벽을 낮춥니다.')}${b.resultsNext(false)}</div>`;
  },
  renderDocument(ctx, b) {
    return `<div class="v6-screen-scroll v6-document-community">${b.header(ctx.ui.document.label.ko, '문서도 같이 이해하기', '<button class="v6-ghost-button" data-tab="results">결과로</button>')}${b.documentPicker()}${b.documentUpload()}${b.documentInterpretation()}${b.culturePreview('생활 정보 함께 보기', '학교, 병원, 주민센터 문서를 본 뒤 생활 공간과도 연결할 수 있습니다.')}${b.documentNext()}</div>`;
  },
  renderEmergency(ctx, b) {
    return `<div class="v6-screen-scroll v6-emergency-community">${b.header(ctx.ui.emergency.label.ko, '급할 때도 혼자 두지 않기', '<button class="v6-danger-button" data-privacy-toggle>빠른 종료</button>')}${b.emergencyAlerts()}${b.emergencyRequest()}${b.emergencyCalls()}${b.phrases()}</div>`;
  }
};
