(() => {
  const variant = window.bridgeHelpV6Variant || {};
  const config = window.bridgeHelpV6Config || {};
  const data = window.bridgeHelpV6Data || {};
  const versions = config.versions || [];
  const QR_TARGET_URL = config.QR_TARGET_URL || 'https://yunbeeeen.github.io/bridgehelp-prototype/mobile-app-v6.html';
  const translationMap = config.translationMap || {};

  const languageOptions = [
    { code: 'ko', label: '한국어', subtitle: 'Korean' },
    { code: 'en', label: 'English', subtitle: 'English' },
    { code: 'zh', label: '中文', subtitle: 'Chinese' },
    { code: 'vi', label: 'Tiếng Việt', subtitle: 'Vietnamese' },
    { code: 'ru', label: 'Русский', subtitle: 'Russian' },
    { code: 'uz', label: "O'zbekcha", subtitle: 'Uzbek' }
  ];

  const scenarioOrder = ['visa', 'work', 'health', 'education', 'housing', 'emergency'];
  const agencyFilterOrder = ['welfare', 'medical', 'education', 'counseling'];
  const requestCategoryOrder = ['medical', 'admin', 'education', 'labor', 'counseling'];
  const cultureFilters = ['all', 'food', 'market', 'community', 'religion'];
  const scenarioToneMap = {
    visa: 'admin',
    work: 'labor',
    health: 'medical',
    education: 'education',
    housing: 'welfare',
    emergency: 'emergency'
  };

  const ui = {
    tabs: {
      home: L('홈', 'Home', '主页', 'Trang chủ', 'Главная', 'Bosh sahifa'),
      results: L('결과', 'Result', '结果', 'Kết quả', 'Результат', 'Natija'),
      document: L('문서', 'Docs', '文书', 'Tài liệu', 'Документ', 'Hujjat'),
      emergency: L('긴급', 'Urgent', '紧急', 'Khẩn cấp', 'Срочно', 'Shoshilinch')
    },
    common: {
      close: L('닫기', 'Close'),
      copy: L('복사하기', 'Copy'),
      saved: L('번호를 복사했어요.', 'Number copied.'),
      phrase: L('문장을 복사했어요.', 'Phrase copied.'),
      file: L('파일을 준비했어요.', 'File ready.'),
      help: L('도움 정리가 끝났어요.', 'Help is ready.'),
      doc: L('문서 해석이 끝났어요.', 'Document is ready.'),
      openCall: L('전화 앱으로 이동합니다.', 'Opening phone app.'),
      lang: L('언어가 바뀌었습니다.', 'Language changed.'),
      loadingHelp: L('도움 정리 중', 'Preparing help'),
      loadingHelpCopy: L('지금 필요한 행동과 연락처를 고르고 있어요.', 'We are preparing actions and contacts.'),
      loadingDoc: L('문서 해석 중', 'Reading document'),
      loadingDocCopy: L('짧은 요약과 해야 할 일을 만들고 있어요.', 'We are making a short summary and to-do list.'),
      privacyTitle: L('일반 화면으로 전환했습니다.', 'Switched to a neutral screen.'),
      privacyBack: L('돌아가기', 'Back'),
      callLabel: L('전화 연결', 'Call options'),
      callConfirm: L('전화 걸기', 'Make a call'),
      callSave: L('번호 저장하기', 'Save number'),
      callCancel: L('취소', 'Cancel')
    },
    home: {
      label: L('홈', 'Home'),
      title: L('무엇을 도와드릴까요?', 'What do you need?'),
      subtitle: L('읽고 이해한 뒤 바로 행동할 수 있게 연결합니다.', 'Read, understand, and act.'),
      problemTitle: L('문제 선택', 'Choose a problem'),
      problemCopy: L('기관 이름 대신 지금 겪는 문제부터 누르면 됩니다.', 'Start with the problem, not the institution name.'),
      quickTitle: L('빠른 진입', 'Quick actions'),
      quickCopy: L('읽기, 기관, 요청 카드, 긴급 도움으로 바로 이동하세요.', 'Jump straight into the next action.'),
      feedTitle: L('쉬운 공지', 'Easy read feed'),
      feedCopy: L('한 문장 카드로 먼저 이해하고 다음 행동으로 이어가세요.', 'Understand first, then move to the next step.'),
      questionTitle: L('자유 질문', 'Ask freely'),
      questionCopy: L('뭐라고 물어봐야 할지 몰라도 짧게 적어보세요.', 'Even a short sentence is enough.'),
      placeholder: L('예: 월급을 못 받았어요', 'Example: I did not get paid'),
      submit: L('도움 정리 보기', 'Show help'),
      language: L('언어', 'Language'),
      alertBtn: L('대처 방법 보기', 'See what to do'),
      inlineAgency: L('기관 찾기', 'Find agencies'),
      inlineRequest: L('요청 카드', 'Request cards'),
      inlineCulture: L('문화 지도', 'Culture map')
    },
    results: {
      label: L('결과', 'Result'),
      title: L('지금 할 일', 'What to do now'),
      edit: L('질문 수정', 'Edit'),
      badge: L('상황 정리', 'Summary'),
      actions: L('바로 할 일', 'Actions'),
      contacts: L('바로 연결', 'Contacts'),
      notes: L('짧은 메모', 'Quick notes'),
      cta: L('다음 행동', 'Next action'),
      ctaCopy: L('기관 찾기나 요청 카드로 바로 이어가세요.', 'Move straight to agencies or request cards.')
    },
    document: {
      label: L('문서', 'Docs'),
      title: L('사진으로 이해하기', 'Understand by photo'),
      back: L('결과로', 'Back'),
      kind: L('문서 종류', 'Document type'),
      upload: L('파일 올리기', 'Upload'),
      uploadEmpty: L('파일 없음', 'No file'),
      choose: L('문서 선택', 'Choose a file'),
      analyze: L('문서 해석', 'Analyze'),
      summary: L('원문 요약', 'Summary'),
      simple: L('쉬운 말 설명', 'Easy words'),
      actions: L('해야 할 일', 'To do'),
      wait1: L('문서를 고르고 해석 버튼을 눌러보세요.', 'Choose a file and tap analyze.'),
      wait2: L('복잡한 문장을 더 쉬운 표현으로 바꿔줍니다.', 'Complex text will be rewritten in simpler words.'),
      wait3: L('기한, 제출처, 준비물을 같이 정리합니다.', 'Deadlines and items will be listed together.'),
      cta: L('이어서 행동하기', 'Next action'),
      ctaCopy: L('문서를 이해했다면 기관 찾기나 요청 카드로 넘어가세요.', 'Move to agencies or request cards after understanding the document.')
    },
    emergency: {
      label: L('긴급', 'Urgent'),
      title: L('지금 바로 도움받기', 'Get help now'),
      privacy: L('빠른 종료', 'Quick exit'),
      callTitle: L('바로 연결', 'Call now'),
      callCopy: L('위험, 의료, 상담, 노동 문제는 번호를 눌러 바로 연결하세요.', 'Tap a number to connect right away.'),
      requestTitle: L('긴급 문장 카드', 'Urgent phrase cards'),
      requestCopy: L('말이 막힐 때는 카드 한 장을 크게 보여주세요.', 'Show one card when speaking is hard.'),
      phraseTitle: L('바로 보여줄 문장', 'Tap to copy'),
      phraseSub: L('누르면 복사', 'Tap to copy')
    },
    view: {
      agencyLabel: L('기관 안내', 'Agency guide'),
      agencyTitle: L('현재 위치 주변 기관', 'Nearby agencies'),
      agencyListTitle: L('기관 목록', 'Agency list'),
      detailLabel: L('기관 상세', 'Agency detail'),
      requestLabel: L('요청 카드', 'Request cards'),
      requestTitle: L('버튼 한 번으로 전달', 'Show one message'),
      cultureLabel: L('문화 지도', 'Culture map'),
      cultureTitle: L('익숙한 장소 찾기', 'Find familiar places')
    }
  };

  const state = {
    currentTab: 'home',
    bootState: 'splash',
    selectedLanguage: 'ko',
    selectedScenario: 'work',
    selectedDocument: 'school',
    question: '',
    documentFileName: '',
    resultReady: false,
    documentReady: false,
    analysisState: 'idle',
    isPrivacyMode: false,
    activeView: null,
    activeSheet: null,
    selectedFeedCard: (data.easyReadFeedData && data.easyReadFeedData[0] && data.easyReadFeedData[0].id) || null,
    selectedAgencyId: (data.agencyData && data.agencyData[0] && data.agencyData[0].id) || null,
    selectedAgencyFilter: 'welfare',
    selectedRequestCategory: 'admin',
    selectedRequestCardId: null,
    selectedAlertId: (data.emergencyAlertData && data.emergencyAlertData[0] && data.emergencyAlertData[0].id) || null,
    selectedCultureCategory: 'all'
  };

  let launchTimer = null;
  let analysisTimer = null;
  let toastTimer = null;
  const refs = {};

  function L(ko, en = '', zh = '', vi = '', ru = '', uz = '') {
    const value = { ko };
    if (en) value.en = en;
    if (zh) value.zh = zh;
    if (vi) value.vi = vi;
    if (ru) value.ru = ru;
    if (uz) value.uz = uz;
    return value;
  }

  function pick(value, lang) {
    if (value == null) return '';
    if (typeof value === 'string') return (translationMap[lang] && translationMap[lang][value]) || value;
    if (value[lang]) return value[lang];
    return value.en || value.ko || Object.values(value).find(Boolean) || '';
  }

  function t(value) {
    return pick(value, state.selectedLanguage);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function metaFor(category) {
    return data.categoryMeta[category] || { label: L('도움', 'Help'), badge: L('도움', 'Help'), icon: '도', color: 'slate' };
  }

  function toneClass(category) {
    return `tone-${metaFor(category).color || 'slate'}`;
  }

  function scenarioMeta(key) {
    return metaFor(scenarioToneMap[key] || 'admin');
  }

  function getScenario(key = state.selectedScenario) { return (data.scenarioData && data.scenarioData[key]) || data.scenarioData.work; }
  function getDocumentData(key = state.selectedDocument) { return (data.documentData && data.documentData[key]) || data.documentData.school; }
  function getAlertById(id) { return (data.emergencyAlertData || []).find((item) => item.id === id) || (data.emergencyAlertData || [])[0]; }
  function getAgencyById(id) { return (data.agencyData || []).find((item) => item.id === id) || (data.agencyData || [])[0]; }
  function getRequestCardById(id) { return (data.requestCardData || []).find((item) => item.id === id) || (data.requestCardData || [])[0]; }
  function getFilteredAgencies(filter) { return (data.agencyData || []).filter((item) => item.category === filter); }
  function getRequestCards(category) { return (data.requestCardData || []).filter((item) => item.category === category); }
  function getCulturePlaces(category) { return category === 'all' ? data.culturePlaceData || [] : (data.culturePlaceData || []).filter((item) => item.category === category); }
  function currentLanguageLabel() { return (languageOptions.find((item) => item.code === state.selectedLanguage) || languageOptions[0]).label; }
  function mapScenarioToAgencyFilter(key) { const item = getScenario(key); return item.agencyFilter || 'welfare'; }

  function detectScenario(text) {
    const source = String(text || '').trim().toLowerCase();
    if (!source) return state.selectedScenario;
    const rules = [
      ['emergency', ['긴급', '위험', '폭력', '신고', '응급', 'danger', 'violence', 'emergency']],
      ['work', ['월급', '임금', '급여', '노동', '근무', '산재', '해고', 'salary', 'wage', 'labor', 'work']],
      ['visa', ['비자', '체류', '출입국', '연장', '등록', 'visa', 'stay', 'immigration']],
      ['health', ['병원', '건강', '진료', '검사', '약', 'hospital', 'health', 'clinic']],
      ['education', ['학교', '교육', '준비물', '가정통신문', 'school', 'teacher', 'child']],
      ['housing', ['주거', '생활', '주민센터', '집', '월세', 'housing', 'rent', 'home']]
    ];
    const found = rules.find((entry) => entry[1].some((word) => source.includes(word)));
    return found ? found[0] : state.selectedScenario;
  }

  function setState(patch) { Object.assign(state, patch); render(); }

  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }

  function showToast(message) {
    if (!refs.toast) return;
    refs.toast.textContent = message;
    refs.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => refs.toast.classList.remove('show'), 1800);
  }

  function triggerDial(number) {
    const dial = String(number || '').replace(/[^\d+]/g, '');
    const link = document.createElement('a');
    link.href = `tel:${dial}`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function openCallSheet(item) {
    if (!item) return;
    setState({ activeSheet: { type: 'call', name: t(item.name || item.title || ''), phoneDisplay: item.phoneDisplay || item.number, phoneDial: item.phoneDial || String(item.number || '').replace(/[^\d+]/g, '') } });
  }

  function openInfoSheet(item) { setState({ activeSheet: { type: 'info', title: t(item.name || item.title || '상세 안내'), item } }); }
  function openRequestCardSheet(cardId) { setState({ selectedRequestCardId: cardId, activeSheet: { type: 'request-card', cardId } }); }
  function openAlertSheet(alertId) { setState({ selectedAlertId: alertId, activeSheet: { type: 'alert-detail', alertId } }); }
  function openAgencyMap(filter) { setState({ activeView: 'agencyMap', selectedAgencyFilter: filter || mapScenarioToAgencyFilter(state.selectedScenario), activeSheet: null }); }
  function openAgencyDetail(id) { setState({ activeView: 'agencyDetail', selectedAgencyId: id, activeSheet: null }); }
  function openRequestCards(category) { setState({ activeView: 'requestCards', selectedRequestCategory: category || getScenario().requestCategory || 'admin', activeSheet: null }); }
  function openCultureMap(category = 'all') { setState({ activeView: 'cultureMap', selectedCultureCategory: category, activeSheet: null }); }
  function closeActiveView() { if (state.activeView === 'agencyDetail') { setState({ activeView: 'agencyMap' }); return; } setState({ activeView: null }); }
  function focusFeed() { state.selectedFeedCard = (data.easyReadFeedData && data.easyReadFeedData[0] && data.easyReadFeedData[0].id) || null; render(); }

  function handleAction(action) {
    if (!action) return;
    switch (action.type) {
      case 'scenario': setState({ selectedScenario: action.scenario, currentTab: action.tab || 'results', activeView: null, activeSheet: null, resultReady: true }); break;
      case 'document': setState({ selectedDocument: action.document, currentTab: 'document', activeView: null, activeSheet: null, documentReady: true }); break;
      case 'agency': openAgencyMap(action.filter || mapScenarioToAgencyFilter(state.selectedScenario)); break;
      case 'alert': openAlertSheet(action.alertId || state.selectedAlertId); break;
      case 'tab': setState({ currentTab: action.tab, activeView: null, activeSheet: null }); break;
      case 'view': if (action.view === 'agencyMap') openAgencyMap(action.filter); if (action.view === 'requestCards') openRequestCards(action.category); if (action.view === 'cultureMap') openCultureMap(action.category || 'all'); break;
      case 'feed-highlight': focusFeed(); break;
      default: break;
    }
  }

  function renderBadge(text, extraClass = '') { return `<span class="v6-badge ${extraClass}">${escapeHtml(text)}</span>`; }
  function renderState(text) { return `<span class="v6-state-pill">${escapeHtml(text)}</span>`; }

  function renderHeader(label, title, actionHtml = '') {
    return `<header class="v6-header-row"><div><p class="v6-screen-label">${escapeHtml(label)}</p><h2 class="v6-screen-title">${escapeHtml(title)}</h2></div>${actionHtml}</header>`;
  }

  function renderHero(eyebrow, title, copy, actions = '', className = '') {
    return `<section class="v6-hero ${className}"><div><p class="v6-eyebrow">${escapeHtml(eyebrow)}</p><h3 class="v6-hero-title">${escapeHtml(title)}</h3></div><p class="v6-hero-copy">${escapeHtml(copy)}</p>${actions}</section>`;
  }

  function renderLanguageMini() {
    return `<section class="v6-card v6-language-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.home.language))}</h3><p class="v6-copy">${escapeHtml(currentLanguageLabel())}</p></div></div><div class="v6-language-row">${languageOptions.map((item) => `<button class="v6-chip ${item.code === state.selectedLanguage ? 'active' : ''}" data-language="${item.code}">${escapeHtml(item.label)}</button>`).join('')}</div></section>`;
  }

  function renderScenarioSection(options = {}) {
    const title = options.title || t(ui.home.problemTitle);
    const copy = options.copy || t(ui.home.problemCopy);
    const gridClass = options.layout === 'row' ? 'v6-feed-rail v6-chip-scroll' : 'v6-pictogram-grid';
    return `<section class="v6-card ${options.className || ''}"><div class="v6-section-head"><div><h3>${escapeHtml(title)}</h3><p class="v6-copy">${escapeHtml(copy)}</p></div></div><div class="${gridClass}">${scenarioOrder.map((key) => { const item = getScenario(key); const meta = scenarioMeta(key); return `<button class="v6-pictogram-button ${toneClass(scenarioToneMap[key])} ${key === state.selectedScenario ? 'is-active' : ''}" data-scenario="${key}"><span class="v6-icon-pill">${escapeHtml(meta.icon)}</span><strong>${escapeHtml(t(item.label))}</strong><span class="v6-muted">${escapeHtml(t(meta.badge))}</span></button>`; }).join('')}</div></section>`;
  }

  function renderQuickActionsSection(options = {}) {
    return `<section class="v6-card ${options.className || ''}"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.home.quickTitle))}</h3><p class="v6-copy">${escapeHtml(t(ui.home.quickCopy))}</p></div></div><div class="v6-quick-grid">${(data.quickActionData || []).map((item) => `<button class="v6-quick-tile ${toneClass(item.color)}" data-quick-id="${escapeHtml(item.id)}"><span class="v6-icon-pill">${escapeHtml(item.icon)}</span><strong>${escapeHtml(t(item.title))}</strong><span class="v6-muted">${escapeHtml(t(item.body))}</span></button>`).join('')}</div></section>`;
  }

  function renderFeedSection(options = {}) {
    const layoutClass = options.layout === 'stack' ? 'v6-feed-stack' : 'v6-feed-rail';
    const items = (data.easyReadFeedData || []).slice(0, options.limit || data.easyReadFeedData.length);
    return `<section class="v6-card ${options.className || ''}"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.home.feedTitle))}</h3><p class="v6-copy">${escapeHtml(t(ui.home.feedCopy))}</p></div><button class="v6-ghost-button" data-quick-id="open-feed">${escapeHtml(t(ui.home.alertBtn))}</button></div><div class="${layoutClass}">${items.map((card) => { const meta = metaFor(card.category); return `<button class="v6-feed-card ${toneClass(card.category)} ${card.id === state.selectedFeedCard ? 'is-active' : ''}" data-feed-id="${escapeHtml(card.id)}"><div class="v6-feed-top"><div class="v6-feed-meta">${renderBadge(t(meta.label))}${renderState(t(card.tag))}</div><span class="v6-mini-icon">${escapeHtml(meta.icon)}</span></div><p class="v6-feed-sentence">${escapeHtml(t(card.sentence))}</p><div class="v6-feed-visual ${toneClass(card.category)}"><span class="v6-icon-pill">${escapeHtml(meta.icon)}</span><span class="v6-visual-label">${escapeHtml(t(card.tag))}</span></div><div class="v6-feed-footer">${renderState(t(meta.badge))}<strong>${escapeHtml(t(card.cta))}</strong></div></button>`; }).join('')}</div></section>`;
  }

  function renderQuestionSection(options = {}) {
    return `<section class="v6-question-card ${options.className || ''}"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.home.questionTitle))}</h3><p class="v6-copy">${escapeHtml(t(ui.home.questionCopy))}</p></div></div><textarea rows="3" data-question-input placeholder="${escapeHtml(t(ui.home.placeholder))}">${escapeHtml(state.question)}</textarea><div class="v6-sample-row">${(data.samplePrompts || []).map((item, index) => `<button class="v6-chip" data-sample-index="${index}">${escapeHtml(t(item.text))}</button>`).join('')}</div><button class="v6-primary-button" data-question-submit>${escapeHtml(t(ui.home.submit))}</button></section>`;
  }

  function renderEmergencyBanner() {
    const alert = getAlertById(state.selectedAlertId);
    if (!alert) return '';
    return `<section class="v6-alert-banner ${toneClass(alert.color)}" data-alert-id="${escapeHtml(alert.id)}"><div class="v6-alert-top"><div><div class="v6-alert-meta">${renderBadge('긴급 알림')}${renderState(t(alert.title))}</div><strong>${escapeHtml(t(alert.summary))}</strong></div><span class="v6-icon-pill">${escapeHtml(alert.icon)}</span></div><button class="v6-cta-secondary" data-alert-id="${escapeHtml(alert.id)}">${escapeHtml(t(alert.cta || ui.home.alertBtn))}</button></section>`;
  }

  function renderMapPreview(title = '현재 위치 주변 기관', copy = '가까운 기관과 길 안내를 먼저 볼 수 있어요.') {
    const agencies = getFilteredAgencies(mapScenarioToAgencyFilter(state.selectedScenario)).slice(0, 2);
    return `<section class="v6-card v6-map-preview-card"><div class="v6-section-head"><div><h3>${escapeHtml(title)}</h3><p class="v6-copy">${escapeHtml(copy)}</p></div></div><div class="v6-hero-map"><div class="v6-map-gridline"></div><span class="v6-you-pin" style="left:14%; top:24%;">나</span>${agencies.map((agency, index) => { const positions = ['left:58%; top:28%;', 'left:30%; top:64%;']; return `<button class="v6-map-pin ${toneClass(agency.category)}" data-agency-open="${escapeHtml(agency.id)}" style="${positions[index] || positions[0]}">${escapeHtml(t(agency.mapTag || metaFor(agency.category).label))}</button>`; }).join('')}</div><div class="v6-cta-row"><button class="v6-cta-primary" data-quick-id="open-agencies">기관 찾기</button><button class="v6-cta-ghost" data-inline-action="request">요청 카드</button></div></section>`;
  }

  function renderAgencyHighlights(filter, title, copy) {
    const agencies = getFilteredAgencies(filter).slice(0, 2);
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(title)}</h3><p class="v6-copy">${escapeHtml(copy)}</p></div></div><div class="v6-agency-list">${agencies.map((agency) => { const meta = metaFor(agency.category); return `<article class="v6-agency-card ${toneClass(agency.category)}"><div class="v6-agency-top"><div><div class="v6-agency-meta">${renderBadge(t(meta.label))}${renderState(t(agency.distance))}</div><strong>${escapeHtml(t(agency.name))}</strong><p class="v6-copy">${escapeHtml(t(agency.summary))}</p></div><span class="v6-mini-icon">${escapeHtml(meta.icon)}</span></div><div class="v6-cta-row"><button class="v6-cta-secondary" data-agency-open="${escapeHtml(agency.id)}">길 안내</button><button class="v6-cta-ghost" data-agency-call="${escapeHtml(agency.id)}">전화하기</button></div></article>`; }).join('')}</div></section>`;
  }

  function renderCulturePreview(title = '익숙한 장소', copy = '정착과 연결되는 문화 공간도 함께 볼 수 있어요.') {
    const places = getCulturePlaces('all').slice(0, 2);
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(title)}</h3><p class="v6-copy">${escapeHtml(copy)}</p></div></div><div class="v6-culture-list">${places.map((place) => { const meta = metaFor(place.category); return `<article class="v6-culture-card ${toneClass(place.category)}"><div class="v6-culture-top"><div><div class="v6-culture-meta">${renderBadge(t(meta.label))}${renderState(t(place.cultureTag))}</div><strong>${escapeHtml(t(place.name))}</strong><p class="v6-culture-desc">${escapeHtml(t(place.description))}</p></div><span class="v6-mini-icon">${escapeHtml(meta.icon)}</span></div><div class="v6-agency-inline"><span>위치</span><strong>${escapeHtml(t(place.location))}</strong></div></article>`; }).join('')}</div><button class="v6-cta-secondary" data-inline-action="culture">문화 지도 열기</button></section>`;
  }

  function renderCommunityBand() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>함께 정착하기</h3><p class="v6-copy">생활지원 기관과 문화 장소를 같이 보면 덜 막막해집니다.</p></div></div><div class="v6-community-band"><strong>혼자가 아니라는 느낌을 주는 정착 지원형 시안</strong></div></section>`;
  }

  function renderResultsSummary() {
    const scenario = getScenario();
    return `<section class="v6-summary-card"><p class="v6-mini-label">${escapeHtml(t(ui.results.badge))}</p><h3>${escapeHtml(t(scenario.label))}</h3><p class="v6-copy">${escapeHtml(scenario.summary)}</p></section>`;
  }

  function renderResultsActions() {
    const scenario = getScenario();
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.results.actions))}</h3><p class="v6-copy">3단계</p></div></div><ol class="v6-step-list">${scenario.actions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>`;
  }

  function renderResultsContacts() {
    const scenario = getScenario();
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.results.contacts))}</h3><p class="v6-copy">전화와 안내</p></div></div><div class="v6-contact-list">${scenario.contacts.map((item, index) => `<article class="v6-contact-card ${toneClass(index === 0 ? scenarioToneMap[state.selectedScenario] : 'counseling')}"><div class="v6-contact-top"><div><strong>${escapeHtml(item.name)}</strong><p class="v6-contact-desc">${escapeHtml(item.desc)}</p></div><span class="v6-mini-icon">연</span></div><div class="v6-call-line"><span>${escapeHtml(t(ui.results.contacts))}</span><strong>${escapeHtml(item.phoneDisplay)}</strong></div><div class="v6-contact-actions"><button class="v6-cta-secondary" data-contact-call="${index}">전화하기</button><button class="v6-cta-ghost" data-contact-info="${index}">자세히 보기</button></div></article>`).join('')}</div></section>`;
  }

  function renderResultsNotes() {
    const scenario = getScenario();
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.results.notes))}</h3><p class="v6-copy">한눈에</p></div></div><div class="v6-chip-row">${scenario.notes.map((item) => `<span class="v6-chip-card">${escapeHtml(item)}</span>`).join('')}</div></section>`;
  }

  function renderResultsNext(sticky) {
    return `<section class="v6-card ${sticky ? 'v6-sticky-cta' : ''}"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.results.cta))}</h3><p class="v6-copy">${escapeHtml(t(ui.results.ctaCopy))}</p></div></div><div class="v6-cta-grid"><button class="v6-cta-primary" data-results-cta="agency">기관 찾기</button><button class="v6-cta-secondary" data-results-cta="request">요청 카드 보기</button></div></section>`;
  }

  function renderDocumentPicker() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.document.kind))}</h3><p class="v6-copy">${escapeHtml(t(getDocumentData().label))}</p></div></div><div class="v6-chip-row">${Object.entries(data.documentData || {}).map(([key, item]) => `<button class="v6-chip ${key === state.selectedDocument ? 'active' : ''}" data-document="${key}">${escapeHtml(t(item.label))}</button>`).join('')}</div></section>`;
  }

  function renderDocumentUpload() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.document.upload))}</h3><p class="v6-copy">${escapeHtml(state.documentFileName || t(ui.document.uploadEmpty))}</p></div></div><label class="v6-question-card"><input type="file" data-document-file accept="image/*,.pdf"><strong>${escapeHtml(t(ui.document.choose))}</strong></label><button class="v6-primary-button" data-document-submit>${escapeHtml(t(ui.document.analyze))}</button></section>`;
  }

  function renderDocumentInterpretation() {
    const doc = getDocumentData();
    const summary = state.documentReady ? doc.summary : t(ui.document.wait1);
    const simple = state.documentReady ? doc.simple : t(ui.document.wait2);
    const actions = state.documentReady ? doc.actions : [t(ui.document.wait3)];
    return `<section class="v6-card"><div class="v6-request-language"><strong>${escapeHtml(t(ui.document.summary))}</strong><span>${escapeHtml(summary)}</span></div><div class="v6-request-language"><strong>${escapeHtml(t(ui.document.simple))}</strong><span>${escapeHtml(simple)}</span></div><div class="v6-request-language"><strong>${escapeHtml(t(ui.document.actions))}</strong><ul class="v6-bullet-list">${actions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div></section>`;
  }

  function renderDocumentNext() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.document.cta))}</h3><p class="v6-copy">${escapeHtml(t(ui.document.ctaCopy))}</p></div></div><div class="v6-cta-grid"><button class="v6-cta-primary" data-document-cta="agency">기관 찾기</button><button class="v6-cta-secondary" data-document-cta="request">요청 카드 보기</button></div></section>`;
  }

  function renderEmergencyAlerts() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>긴급 알림</h3><p class="v6-copy">폭염, 폭우, 미세먼지 같은 상황을 그림으로 먼저 확인합니다.</p></div></div><div class="v6-alert-stack">${(data.emergencyAlertData || []).map((alert) => `<article class="v6-alert-mini ${toneClass(alert.color)}" data-alert-id="${escapeHtml(alert.id)}"><div class="v6-alert-top"><div><strong>${escapeHtml(t(alert.title))}</strong><p class="v6-copy">${escapeHtml(t(alert.summary))}</p></div><span class="v6-mini-icon">${escapeHtml(alert.icon)}</span></div><button class="v6-cta-secondary" data-alert-id="${escapeHtml(alert.id)}">${escapeHtml(t(alert.cta))}</button></article>`).join('')}</div></section>`;
  }

  function renderEmergencyCalls() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.emergency.callTitle))}</h3><p class="v6-copy">${escapeHtml(t(ui.emergency.callCopy))}</p></div></div><div class="v6-call-grid">${(data.emergencyQuickCalls || []).map((item, index) => `<button class="v6-call-chip ${item.urgent ? 'tone-red' : toneClass('counseling')}" data-quick-call="${index}"><strong>${escapeHtml(item.number)}</strong><span>${escapeHtml(t(item.title))}</span></button>`).join('')}</div></section>`;
  }

  function renderEmergencyRequest() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.emergency.requestTitle))}</h3><p class="v6-copy">${escapeHtml(t(ui.emergency.requestCopy))}</p></div></div><div class="v6-cta-grid"><button class="v6-cta-primary" data-emergency-cta="request">요청 카드 보기</button><button class="v6-cta-secondary" data-emergency-cta="alert">대처 방법 보기</button></div></section>`;
  }

  function renderPhrases() {
    return `<section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.emergency.phraseTitle))}</h3><p class="v6-copy">${escapeHtml(t(ui.emergency.phraseSub))}</p></div></div><div class="v6-phrase-grid">${(data.phraseData || []).map((item, index) => `<button class="v6-phrase-button" data-phrase-index="${index}">${escapeHtml(t(item))}</button>`).join('')}</div></section>`;
  }

  function renderAgencyCard(agency) {
    const meta = metaFor(agency.category);
    return `<article class="v6-agency-card ${toneClass(agency.category)}"><div class="v6-agency-top"><div><div class="v6-agency-meta">${renderBadge(t(meta.label))}${renderState(t(agency.distance))}</div><strong>${escapeHtml(t(agency.name))}</strong><p class="v6-copy">${escapeHtml(t(agency.summary))}</p></div><span class="v6-mini-icon">${escapeHtml(meta.icon)}</span></div><div class="v6-agency-inline"><span>주소</span><strong>${escapeHtml(t(agency.address))}</strong></div><div class="v6-agency-inline"><span>운영시간</span><strong>${escapeHtml(t(agency.hours))}</strong></div><div class="v6-agency-inline"><span>지원 언어</span><strong>${escapeHtml(t(agency.languages))}</strong></div><div class="v6-agency-actions"><button class="v6-cta-primary" data-agency-route="${escapeHtml(agency.id)}">길 안내</button><button class="v6-cta-secondary" data-agency-call="${escapeHtml(agency.id)}">전화하기</button><button class="v6-cta-ghost" data-agency-request="${escapeHtml(agency.id)}">요청 카드</button></div></article>`;
  }

  function renderAgencyMapView() {
    const agencies = getFilteredAgencies(state.selectedAgencyFilter);
    const positions = ['left:60%; top:26%;', 'left:24%; top:58%;', 'left:76%; top:66%;', 'left:38%; top:36%;'];
    return `<div class="v6-screen-scroll v6-view-screen v6-view-agency-map ${variant.id}">${renderHeader(t(ui.view.agencyLabel), t(ui.view.agencyTitle), '<button class="v6-ghost-button" data-view-back>닫기</button>')}<section class="v6-map-stage"><div class="v6-chip-row">${agencyFilterOrder.map((filter) => `<button class="v6-filter-chip ${filter === state.selectedAgencyFilter ? 'active' : ''}" data-agency-filter="${filter}">${escapeHtml(t(metaFor(filter).label))}</button>`).join('')}</div><div class="v6-map-canvas"><div class="v6-map-gridline"></div><span class="v6-you-pin" style="left:14%; top:24%;">나</span>${agencies.map((agency, index) => `<button class="v6-map-pin ${toneClass(agency.category)}" data-agency-open="${escapeHtml(agency.id)}" style="${positions[index % positions.length]}">${escapeHtml(t(agency.mapTag || metaFor(agency.category).label))}</button>`).join('')}</div></section><section class="v6-card"><div class="v6-section-head"><div><h3>${escapeHtml(t(ui.view.agencyListTitle))}</h3><p class="v6-copy">전화, 요청 카드, 길 안내로 이어집니다.</p></div></div><div class="v6-agency-list">${agencies.map((agency) => renderAgencyCard(agency)).join('')}</div></section></div>`;
  }

  function renderAgencyDetailView() {
    const agency = getAgencyById(state.selectedAgencyId);
    const firstCategory = agency.requestCardCategories[0] || 'admin';
    return `<div class="v6-screen-scroll v6-view-screen v6-view-agency-detail ${variant.id}">${renderHeader(t(ui.view.detailLabel), t(agency.name), '<button class="v6-ghost-button" data-view-back>목록</button>')}${renderAgencyCard(agency)}<section class="v6-card"><div class="v6-section-head"><div><h3>사진으로 길 보기</h3><p class="v6-copy">지도에 익숙하지 않아도 사진 순서대로 따라가면 됩니다.</p></div></div><div class="v6-route-gallery" id="route-guide">${agency.routeSteps.map((step, index) => `<article class="v6-route-step ${toneClass(agency.category)}"><div class="v6-route-photo ${toneClass(agency.category)}"><span class="v6-number-pill">${index + 1}</span><span class="v6-visual-label">${escapeHtml(step.imageKey)}</span></div><p class="v6-route-caption">${escapeHtml(t(step.caption))}</p></article>`).join('')}</div></section><section class="v6-card ${variant.id === 'v6-2' ? 'v6-sticky-cta' : ''}"><div class="v6-cta-grid"><button class="v6-cta-primary" data-agency-detail-route>길 안내 보기</button><button class="v6-cta-secondary" data-agency-detail-call>전화하기</button><button class="v6-cta-ghost" data-agency-detail-request="${escapeHtml(firstCategory)}">요청 카드 보기</button></div></section></div>`;
  }

  function renderRequestCardsView() {
    const cards = getRequestCards(state.selectedRequestCategory);
    return `<div class="v6-screen-scroll v6-view-screen v6-view-request-cards ${variant.id}">${renderHeader(t(ui.view.requestLabel), t(ui.view.requestTitle), '<button class="v6-ghost-button" data-view-back>닫기</button>')}<section class="v6-card"><div class="v6-chip-row">${requestCategoryOrder.map((category) => `<button class="v6-filter-chip ${category === state.selectedRequestCategory ? 'active' : ''}" data-request-category="${category}">${escapeHtml(t(metaFor(category).label))}</button>`).join('')}</div><div class="v6-request-list">${cards.map((card) => { const translated = card.translated[state.selectedLanguage] || card.translated.en || card.korean; return `<button class="v6-request-card ${toneClass(card.category)}" data-request-card-id="${escapeHtml(card.id)}"><strong>${escapeHtml(t(card.title))}</strong><div class="v6-request-language"><strong>한국어</strong><span>${escapeHtml(card.korean)}</span></div><div class="v6-request-language"><strong>${escapeHtml(currentLanguageLabel())}</strong><span>${escapeHtml(translated)}</span></div></button>`; }).join('')}</div></section></div>`;
  }

  function renderCultureView() {
    const places = getCulturePlaces(state.selectedCultureCategory);
    return `<div class="v6-screen-scroll v6-view-screen v6-view-culture ${variant.id}">${renderHeader(t(ui.view.cultureLabel), t(ui.view.cultureTitle), '<button class="v6-ghost-button" data-view-back>닫기</button>')}<section class="v6-card"><div class="v6-chip-row">${cultureFilters.map((filter) => `<button class="v6-filter-chip ${filter === state.selectedCultureCategory ? 'active' : ''}" data-culture-category="${filter}">${escapeHtml(filter === 'all' ? '전체' : t(metaFor(filter).label))}</button>`).join('')}</div><div class="v6-culture-list">${places.map((place) => { const meta = metaFor(place.category); return `<article class="v6-culture-card ${toneClass(place.category)}"><div class="v6-culture-top"><div><div class="v6-culture-meta">${renderBadge(t(meta.label))}${renderState(t(place.cultureTag))}</div><strong>${escapeHtml(t(place.name))}</strong><p class="v6-culture-desc">${escapeHtml(t(place.description))}</p></div><span class="v6-mini-icon">${escapeHtml(meta.icon)}</span></div><div class="v6-agency-inline"><span>위치</span><strong>${escapeHtml(t(place.location))}</strong></div><div class="v6-agency-inline"><span>추천</span><strong>${escapeHtml(t(place.recommendation))}</strong></div></article>`; }).join('')}</div></section><section class="v6-card v6-culture-form"><div class="v6-section-head"><div><h3>내 문화 장소 추가</h3><p class="v6-copy">실제 저장은 아니지만 참여 흐름을 보여주는 더미 폼입니다.</p></div></div><input type="text" value="장소 이름" readonly><input type="text" value="문화/국가" readonly><textarea rows="3" readonly>짧은 메모</textarea><button class="v6-primary-button" data-culture-submit>추천 남기기</button></section></div>`;
  }

  const blocks = { header: renderHeader, hero: renderHero, languageMini: renderLanguageMini, scenarioSection: renderScenarioSection, quickActions: renderQuickActionsSection, feedSection: renderFeedSection, questionSection: renderQuestionSection, emergencyBanner: renderEmergencyBanner, mapPreview: renderMapPreview, agencyHighlights: renderAgencyHighlights, culturePreview: renderCulturePreview, communityBand: renderCommunityBand, resultsSummary: renderResultsSummary, resultsActions: renderResultsActions, resultsContacts: renderResultsContacts, resultsNotes: renderResultsNotes, resultsNext: renderResultsNext, documentPicker: renderDocumentPicker, documentUpload: renderDocumentUpload, documentInterpretation: renderDocumentInterpretation, documentNext: renderDocumentNext, emergencyAlerts: renderEmergencyAlerts, emergencyCalls: renderEmergencyCalls, emergencyRequest: renderEmergencyRequest, phrases: renderPhrases };

  function defaultHome() { return `<div class="v6-screen-scroll">${renderHeader(t(ui.home.label), t(ui.home.title), '<button class="v6-danger-button" data-tab="emergency">긴급</button>')}${renderHero('BridgeHelp', t(ui.home.title), t(ui.home.subtitle), `<div class="v6-inline-row"><button class="v6-inline-button" data-inline-action="agency">${escapeHtml(t(ui.home.inlineAgency))}</button><button class="v6-inline-button" data-inline-action="request">${escapeHtml(t(ui.home.inlineRequest))}</button><button class="v6-inline-button" data-inline-action="culture">${escapeHtml(t(ui.home.inlineCulture))}</button></div>`)}${renderEmergencyBanner()}${renderScenarioSection()}${renderQuickActionsSection()}${renderFeedSection()}${renderQuestionSection()}${renderLanguageMini()}</div>`; }
  function defaultResults() { return `<div class="v6-screen-scroll">${renderHeader(t(ui.results.label), t(ui.results.title), '<button class="v6-ghost-button" data-tab="home">질문 수정</button>')}${renderResultsSummary()}${renderResultsActions()}${renderResultsContacts()}${renderResultsNotes()}${renderResultsNext(false)}</div>`; }
  function defaultDocument() { return `<div class="v6-screen-scroll">${renderHeader(t(ui.document.label), t(ui.document.title), '<button class="v6-ghost-button" data-tab="results">결과로</button>')}${renderDocumentPicker()}${renderDocumentUpload()}${renderDocumentInterpretation()}${renderDocumentNext()}</div>`; }
  function defaultEmergency() { return `<div class="v6-screen-scroll">${renderHeader(t(ui.emergency.label), t(ui.emergency.title), '<button class="v6-danger-button" data-privacy-toggle>빠른 종료</button>')}${renderEmergencyAlerts()}${renderEmergencyCalls()}${renderEmergencyRequest()}${renderPhrases()}</div>`; }

  function renderActiveView() {
    if (!state.activeView) return '';
    if (state.activeView === 'agencyMap') return renderAgencyMapView();
    if (state.activeView === 'agencyDetail') return renderAgencyDetailView();
    if (state.activeView === 'requestCards') return renderRequestCardsView();
    if (state.activeView === 'cultureMap') return renderCultureView();
    return '';
  }

  function renderSheetOverlay() {
    const sheet = state.activeSheet;
    if (!sheet || sheet.type === 'call') return '';
    if (sheet.type === 'info') { const item = sheet.item; return `<div class="v6-overlay v6-bottom-sheet"><div class="v6-sheet-card"><div class="v6-sheet-head"><div><p class="v6-eyebrow">기관 안내</p><h2>${escapeHtml(sheet.title)}</h2></div></div><div class="v6-sheet-inline"><span>운영시간</span><strong>${escapeHtml(item.hours || '안내 확인')}</strong></div><div class="v6-sheet-inline"><span>지원 언어</span><strong>${escapeHtml(item.languages || '안내 확인')}</strong></div><p class="v6-sheet-note">${escapeHtml(item.info || '추가 안내를 확인하세요.')}</p><div class="v6-sheet-actions"><button class="v6-cta-secondary" data-sheet-call>전화하기</button><button class="v6-cta-primary" data-sheet-close>${escapeHtml(t(ui.common.close))}</button></div></div></div>`; }
    if (sheet.type === 'request-card') { const card = getRequestCardById(sheet.cardId); const translated = card.translated[state.selectedLanguage] || card.translated.en || card.korean; return `<div class="v6-overlay v6-bottom-sheet"><div class="v6-sheet-card"><div class="v6-sheet-head"><div><p class="v6-eyebrow">요청 카드</p><h2>${escapeHtml(t(card.title))}</h2></div></div><div class="v6-request-language"><strong>한국어</strong><span>${escapeHtml(card.korean)}</span></div><div class="v6-request-language"><strong>${escapeHtml(currentLanguageLabel())}</strong><span>${escapeHtml(translated)}</span></div><p class="v6-sheet-note">직원이나 상담사에게 그대로 보여주세요.</p><div class="v6-sheet-actions"><button class="v6-cta-secondary" data-sheet-copy-request>${escapeHtml(t(ui.common.copy))}</button><button class="v6-cta-primary" data-sheet-close>${escapeHtml(t(ui.common.close))}</button></div></div></div>`; }
    if (sheet.type === 'alert-detail') { const alert = getAlertById(sheet.alertId); return `<div class="v6-overlay v6-bottom-sheet"><div class="v6-sheet-card"><div class="v6-sheet-head"><div><p class="v6-eyebrow">대처 방법</p><h2>${escapeHtml(alert.icon)} ${escapeHtml(t(alert.title))}</h2></div></div><p class="v6-sheet-note">${escapeHtml(t(alert.summary))}</p><ul class="v6-sheet-list">${alert.actions.map((item) => `<li>${escapeHtml(t(item))}</li>`).join('')}</ul><div class="v6-sheet-actions"><button class="v6-cta-primary" data-sheet-open-emergency>긴급 화면 보기</button><button class="v6-cta-secondary" data-sheet-open-agency>기관 찾기</button><button class="v6-cta-ghost" data-sheet-close>${escapeHtml(t(ui.common.close))}</button></div></div></div>`; }
    return '';
  }

  function renderCallOverlay() {
    if (!state.activeSheet || state.activeSheet.type !== 'call') return '';
    return `<div class="v6-overlay"><div class="v6-overlay-card v6-call-modal"><div class="v6-call-head"><div><p class="v6-eyebrow">${escapeHtml(t(ui.common.callLabel))}</p><h2 class="v6-modal-number">${escapeHtml(state.activeSheet.phoneDisplay)}</h2><p class="v6-copy">${escapeHtml(state.activeSheet.name)}</p></div></div><div class="v6-call-actions"><button class="v6-primary-button" data-call-confirm>${escapeHtml(t(ui.common.callConfirm))}</button><button class="v6-cta-secondary" data-call-save>${escapeHtml(t(ui.common.callSave))}</button><button class="v6-cta-ghost" data-call-cancel>${escapeHtml(t(ui.common.callCancel))}</button></div></div></div>`;
  }

  function renderLoadingOverlay() {
    if (state.analysisState === 'idle') return '';
    const title = state.analysisState === 'document' ? t(ui.common.loadingDoc) : t(ui.common.loadingHelp);
    const copy = state.analysisState === 'document' ? t(ui.common.loadingDocCopy) : t(ui.common.loadingHelpCopy);
    return `<div class="v6-overlay"><div class="v6-overlay-card"><div class="v6-loading-spinner"></div><h2>${escapeHtml(title)}</h2><p class="v6-loading-copy">${escapeHtml(copy)}</p></div></div>`;
  }

  function renderPrivacyOverlay() {
    if (!state.isPrivacyMode) return '';
    return `<div class="v6-overlay"><div class="v6-overlay-card"><p class="v6-eyebrow">Privacy</p><h2>${escapeHtml(t(ui.common.privacyTitle))}</h2><button class="v6-primary-button" data-privacy-return>${escapeHtml(t(ui.common.privacyBack))}</button></div></div>`;
  }

  function renderBrandOverlay() {
    if (state.bootState !== 'splash') return '';
    return `<div class="v6-overlay"><div class="v6-overlay-card"><p class="v6-eyebrow">${escapeHtml(variant.kicker || 'BridgeHelp')}</p><h2 class="v6-brand-title">${escapeHtml(variant.brandTitle || 'BridgeHelp V6')}</h2><p class="v6-brand-copy">${escapeHtml(variant.brandCopy || 'READ. UNDERSTAND. ACT.')}</p></div></div>`;
  }

  function renderLanguageOverlay() {
    if (state.bootState !== 'language') return '';
    return `<div class="v6-overlay"><div class="v6-overlay-card"><p class="v6-eyebrow">BridgeHelp</p><h2>언어를 선택하세요</h2><p class="v6-language-copy">원하는 언어를 누르면 바로 메인 화면으로 들어갑니다.</p><div class="v6-language-list">${languageOptions.map((item) => `<button class="v6-language-option" data-gate-language="${item.code}"><strong>${escapeHtml(item.label)}</strong><span class="v6-muted">${escapeHtml(item.subtitle)}</span></button>`).join('')}</div></div></div>`;
  }

  function renderOverlays() { refs.overlayRoot.innerHTML = `${renderBrandOverlay()}${renderLanguageOverlay()}${renderLoadingOverlay()}${renderPrivacyOverlay()}${renderCallOverlay()}${renderSheetOverlay()}`; }

  function renderSidePanel() {
    refs.sideEyebrow.textContent = variant.sideEyebrow || 'BridgeHelp V6';
    refs.sideTitle.textContent = variant.sideTitle || 'BridgeHelp V6';
    refs.sideCopy.textContent = variant.sideCopy || '다문화 이주민이 읽고 이해한 뒤 바로 행동하도록 연결하는 시안입니다.';
    refs.sidePoints.innerHTML = (variant.sidePoints || [{ title: '읽기', body: '쉬운 카드와 픽토그램으로 먼저 이해합니다.' }, { title: '이해하기', body: '결과, 문서 해석, 요청 카드로 필요한 내용을 짧게 정리합니다.' }, { title: '행동하기', body: '기관 찾기, 전화 연결, 길 안내로 바로 다음 행동까지 이어집니다.' }]).map((item) => `<article class="v6-side-point"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.body)}</span></article>`).join('');
    refs.versionLinks.innerHTML = [`<a class="v6-side-link" href="mobile-app-v6.html">V6 허브</a>`, `<a class="v6-side-link" href="mobile-app-v5.html">V5 보기</a>`].concat(versions.filter((item) => item.file !== variant.file).map((item) => `<a class="v6-side-link" href="${item.file}">${escapeHtml(item.title)}</a>`)).join('');
    renderQrCard();
  }

  function renderQrCard() {
    refs.qrTitle.textContent = t((config.qrUi && config.qrUi.title) || L('QR로 모바일에서 열기', 'Open on mobile'));
    refs.qrCopy.textContent = t((config.qrUi && config.qrUi.copy) || L('휴대폰으로 스캔하면 모바일 프로토타입이 바로 열립니다.', 'Scan to open the mobile prototype.'));
    refs.qrUrl.textContent = QR_TARGET_URL;
    refs.qrUrl.title = QR_TARGET_URL;
    if (typeof qrcode !== 'function') { refs.qrCode.innerHTML = '<span class="v6-muted">QR unavailable</span>'; return; }
    if (qrcode.stringToBytesFuncs && qrcode.stringToBytesFuncs['UTF-8']) qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
    const qr = qrcode(0, 'M');
    qr.addData(QR_TARGET_URL);
    qr.make();
    refs.qrCode.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true, title: 'QR' });
  }

  function renderTabs() { refs.tabbar.innerHTML = ['home', 'results', 'document', 'emergency'].map((tab) => `<button class="v6-tab ${state.currentTab === tab ? 'active' : ''} ${tab === 'emergency' ? 'v6-tab-urgent' : ''}" data-tab="${tab}">${escapeHtml(t(ui.tabs[tab]))}</button>`).join(''); }

  function renderScreen() {
    if (state.activeView) { refs.screenRoot.innerHTML = renderActiveView(); return; }
    const ctx = { state, ui, scenario: getScenario(), documentInfo: getDocumentData(), alert: getAlertById(state.selectedAlertId), currentLanguageLabel: currentLanguageLabel(), selectedVariant: variant };
    if (state.currentTab === 'home') { refs.screenRoot.innerHTML = variant.renderHome ? variant.renderHome(ctx, blocks) : defaultHome(); return; }
    if (state.currentTab === 'results') { refs.screenRoot.innerHTML = variant.renderResults ? variant.renderResults(ctx, blocks) : defaultResults(); return; }
    if (state.currentTab === 'document') { refs.screenRoot.innerHTML = variant.renderDocument ? variant.renderDocument(ctx, blocks) : defaultDocument(); return; }
    refs.screenRoot.innerHTML = variant.renderEmergency ? variant.renderEmergency(ctx, blocks) : defaultEmergency();
  }

  function render() { document.documentElement.lang = state.selectedLanguage; renderSidePanel(); renderTabs(); renderScreen(); renderOverlays(); }
  function startLaunchTimer() { clearTimeout(launchTimer); launchTimer = window.setTimeout(() => { if (state.bootState === 'splash') setState({ bootState: 'language' }); }, variant.splashDelay || 1700); }

  function runQuestionFlow() {
    const nextScenario = detectScenario(state.question);
    setState({ selectedScenario: nextScenario, analysisState: 'question', activeSheet: null, activeView: null, isPrivacyMode: false });
    clearTimeout(analysisTimer);
    analysisTimer = window.setTimeout(() => { setState({ analysisState: 'idle', currentTab: 'results', resultReady: true }); showToast(t(ui.common.help)); }, 900);
  }

  function runDocumentFlow() {
    setState({ analysisState: 'document', activeSheet: null, activeView: null, isPrivacyMode: false });
    clearTimeout(analysisTimer);
    analysisTimer = window.setTimeout(() => { setState({ analysisState: 'idle', currentTab: 'document', documentReady: true }); showToast(t(ui.common.doc)); }, 880);
  }

  function handleClick(event) {
    const tab = event.target.closest('[data-tab]'); if (tab) { setState({ currentTab: tab.dataset.tab, activeView: null, activeSheet: null }); return; }
    const gate = event.target.closest('[data-gate-language]'); if (gate) { setState({ selectedLanguage: gate.dataset.gateLanguage, bootState: 'ready', currentTab: 'home', activeView: null, activeSheet: null, isPrivacyMode: false }); showToast(t(ui.common.lang)); return; }
    const lang = event.target.closest('[data-language]'); if (lang) { setState({ selectedLanguage: lang.dataset.language }); showToast(t(ui.common.lang)); return; }
    const inlineAction = event.target.closest('[data-inline-action]'); if (inlineAction) { if (inlineAction.dataset.inlineAction === 'agency') openAgencyMap(mapScenarioToAgencyFilter(state.selectedScenario)); if (inlineAction.dataset.inlineAction === 'request') openRequestCards(getScenario().requestCategory); if (inlineAction.dataset.inlineAction === 'culture') openCultureMap(); return; }
    const scenario = event.target.closest('[data-scenario]'); if (scenario) { setState({ selectedScenario: scenario.dataset.scenario, resultReady: false }); return; }
    const sample = event.target.closest('[data-sample-index]'); if (sample) { const selected = (data.samplePrompts || [])[Number(sample.dataset.sampleIndex)]; state.question = t(selected.text); setState({ selectedScenario: selected.scenario, resultReady: false }); return; }
    const docType = event.target.closest('[data-document]'); if (docType) { setState({ selectedDocument: docType.dataset.document, documentReady: false }); return; }
    const feed = event.target.closest('[data-feed-id]'); if (feed) { const selected = (data.easyReadFeedData || []).find((item) => item.id === feed.dataset.feedId); if (selected) { setState({ selectedFeedCard: selected.id }); handleAction(selected.action); } return; }
    const quick = event.target.closest('[data-quick-id]'); if (quick) { const selected = (data.quickActionData || []).find((item) => item.id === quick.dataset.quickId); if (selected) handleAction(selected.action); return; }
    const resultsCta = event.target.closest('[data-results-cta]'); if (resultsCta) { if (resultsCta.dataset.resultsCta === 'agency') openAgencyMap(getScenario().agencyFilter); if (resultsCta.dataset.resultsCta === 'request') openRequestCards(getScenario().requestCategory); return; }
    const documentCta = event.target.closest('[data-document-cta]'); if (documentCta) { const doc = getDocumentData(); if (documentCta.dataset.documentCta === 'agency') openAgencyMap(doc.agencyFilter); if (documentCta.dataset.documentCta === 'request') openRequestCards(doc.requestCategory); return; }
    const emergencyCta = event.target.closest('[data-emergency-cta]'); if (emergencyCta) { if (emergencyCta.dataset.emergencyCta === 'request') openRequestCards('counseling'); if (emergencyCta.dataset.emergencyCta === 'alert') openAlertSheet(state.selectedAlertId); return; }
    const alertButton = event.target.closest('[data-alert-id]'); if (alertButton) { openAlertSheet(alertButton.dataset.alertId); return; }
    const contactCall = event.target.closest('[data-contact-call]'); if (contactCall) { openCallSheet(getScenario().contacts[Number(contactCall.dataset.contactCall)]); return; }
    const contactInfo = event.target.closest('[data-contact-info]'); if (contactInfo) { openInfoSheet(getScenario().contacts[Number(contactInfo.dataset.contactInfo)]); return; }
    const quickCall = event.target.closest('[data-quick-call]'); if (quickCall) { openCallSheet((data.emergencyQuickCalls || [])[Number(quickCall.dataset.quickCall)]); return; }
    const phrase = event.target.closest('[data-phrase-index]'); if (phrase) { copyText(t((data.phraseData || [])[Number(phrase.dataset.phraseIndex)])).catch(() => {}); showToast(t(ui.common.phrase)); return; }
    const agencyFilter = event.target.closest('[data-agency-filter]'); if (agencyFilter) { setState({ selectedAgencyFilter: agencyFilter.dataset.agencyFilter }); return; }
    const agencyOpen = event.target.closest('[data-agency-open]'); if (agencyOpen) { openAgencyDetail(agencyOpen.dataset.agencyOpen); return; }
    const agencyRoute = event.target.closest('[data-agency-route]'); if (agencyRoute) { openAgencyDetail(agencyRoute.dataset.agencyRoute); return; }
    const agencyCall = event.target.closest('[data-agency-call]'); if (agencyCall) { openCallSheet(getAgencyById(agencyCall.dataset.agencyCall)); return; }
    const agencyRequest = event.target.closest('[data-agency-request]'); if (agencyRequest) { const agency = getAgencyById(agencyRequest.dataset.agencyRequest); openRequestCards(agency.requestCardCategories[0] || 'admin'); return; }
    if (event.target.closest('[data-agency-detail-call]')) { openCallSheet(getAgencyById(state.selectedAgencyId)); return; }
    const agencyDetailRequest = event.target.closest('[data-agency-detail-request]'); if (agencyDetailRequest) { openRequestCards(agencyDetailRequest.dataset.agencyDetailRequest || 'admin'); return; }
    if (event.target.closest('[data-agency-detail-route]')) { const routeGuide = document.getElementById('route-guide'); if (routeGuide && typeof routeGuide.scrollIntoView === 'function') routeGuide.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (event.target.closest('[data-view-back]')) { closeActiveView(); return; }
    const requestCategory = event.target.closest('[data-request-category]'); if (requestCategory) { setState({ selectedRequestCategory: requestCategory.dataset.requestCategory }); return; }
    const requestCard = event.target.closest('[data-request-card-id]'); if (requestCard) { openRequestCardSheet(requestCard.dataset.requestCardId); return; }
    const cultureCategory = event.target.closest('[data-culture-category]'); if (cultureCategory) { setState({ selectedCultureCategory: cultureCategory.dataset.cultureCategory }); return; }
    if (event.target.closest('[data-culture-submit]')) { showToast('문화 장소 제안 흐름을 준비했어요.'); return; }
    if (event.target.closest('[data-sheet-close]')) { setState({ activeSheet: null }); return; }
    if (event.target.closest('[data-sheet-call]')) { if (state.activeSheet && state.activeSheet.type === 'info') { const item = state.activeSheet.item; setState({ activeSheet: null }); openCallSheet(item); } return; }
    if (event.target.closest('[data-sheet-copy-request]')) { if (state.activeSheet && state.activeSheet.type === 'request-card') { const card = getRequestCardById(state.activeSheet.cardId); const translated = card.translated[state.selectedLanguage] || card.translated.en || card.korean; copyText(`${card.korean}\n${translated}`).catch(() => {}); showToast(t(ui.common.phrase)); } return; }
    if (event.target.closest('[data-sheet-open-emergency]')) { setState({ currentTab: 'emergency', activeSheet: null, activeView: null }); return; }
    if (event.target.closest('[data-sheet-open-agency]')) { setState({ activeSheet: null }); openAgencyMap('medical'); return; }
    if (event.target.closest('[data-call-confirm]')) { if (!state.activeSheet || state.activeSheet.type !== 'call') return; const dial = state.activeSheet.phoneDial; setState({ activeSheet: null }); showToast(t(ui.common.openCall)); window.setTimeout(() => triggerDial(dial), 120); return; }
    if (event.target.closest('[data-call-save]')) { if (!state.activeSheet || state.activeSheet.type !== 'call') return; copyText(state.activeSheet.phoneDisplay).catch(() => {}); setState({ activeSheet: null }); showToast(t(ui.common.saved)); return; }
    if (event.target.closest('[data-call-cancel]')) { setState({ activeSheet: null }); return; }
    if (event.target.closest('[data-privacy-toggle]')) { setState({ isPrivacyMode: true, activeSheet: null }); return; }
    if (event.target.closest('[data-privacy-return]')) { setState({ isPrivacyMode: false }); return; }
    if (event.target.closest('[data-question-submit]')) { runQuestionFlow(); return; }
    if (event.target.closest('[data-document-submit]')) { runDocumentFlow(); }
  }

  function handleInput(event) { if (event.target.matches('[data-question-input]')) state.question = event.target.value; }
  function handleChange(event) { if (event.target.matches('[data-document-file]')) { const file = event.target.files && event.target.files[0]; setState({ documentFileName: file ? file.name : '', documentReady: false }); if (file) showToast(t(ui.common.file)); } }

  function cacheRefs() {
    refs.sideEyebrow = document.getElementById('v6-side-eyebrow'); refs.sideTitle = document.getElementById('v6-side-title'); refs.sideCopy = document.getElementById('v6-side-copy'); refs.sidePoints = document.getElementById('v6-side-points'); refs.versionLinks = document.getElementById('v6-version-links'); refs.qrTitle = document.getElementById('v6-qr-title'); refs.qrCopy = document.getElementById('v6-qr-copy'); refs.qrCode = document.getElementById('v6-qr-code'); refs.qrUrl = document.getElementById('v6-qr-url'); refs.screenRoot = document.getElementById('v6-screen-root'); refs.overlayRoot = document.getElementById('v6-overlay-root'); refs.tabbar = document.getElementById('v6-tabbar'); refs.toast = document.getElementById('v6-toast');
  }

  function buildShell() {
    document.body.classList.add('v6-app-body', variant.themeClass || 'theme-v61');
    document.body.innerHTML = `<div class="v6-ambient v6-ambient-orange"></div><div class="v6-ambient v6-ambient-teal"></div><main class="v6-layout"><aside class="v6-side-panel"><p class="v6-eyebrow" id="v6-side-eyebrow"></p><h1 id="v6-side-title"></h1><p class="v6-side-copy" id="v6-side-copy"></p><div class="v6-side-points" id="v6-side-points"></div><section class="v6-card"><div class="v6-section-head"><div><h3 id="v6-qr-title"></h3><p class="v6-copy" id="v6-qr-copy"></p></div></div><div class="v6-route-photo" id="v6-qr-code"></div><p class="v6-copy" id="v6-qr-url"></p></section><div class="v6-side-links" id="v6-version-links"></div></aside><section class="v6-phone-stage"><div class="v6-phone-frame"><div class="v6-status"><span>BridgeHelp</span><span>09:41</span><span>100%</span></div><div class="v6-surface"><div id="v6-screen-root"></div><div class="v6-overlay-layer" id="v6-overlay-root"></div></div><nav class="v6-tabbar" id="v6-tabbar" aria-label="V6 navigation"></nav></div></section></main><div class="v6-toast" id="v6-toast" aria-live="polite"></div>`;
    cacheRefs();
  }

  buildShell();
  render();
  startLaunchTimer();
  document.addEventListener('click', handleClick);
  document.addEventListener('input', handleInput);
  document.addEventListener('change', handleChange);
})();
