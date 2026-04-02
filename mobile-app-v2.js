const scenarioData = {
  work: {
    label: "일자리·노동",
    summary: "임금체불 또는 노동 문제 해결이 필요해요.",
    context: "급여 기록과 근무 사실을 정리하고, 상담과 신고 연결까지 바로 이어지게 준비했습니다.",
    actions: [
      "급여명세서, 근로계약서, 출근 기록, 대화 내역을 먼저 모아 두세요.",
      "언제부터 얼마를 받지 못했는지 날짜와 금액을 메모하세요.",
      "오늘 바로 노동 상담을 받고 필요하면 진정 절차를 시작하세요."
    ],
    agencies: [
      {
        name: "노동 상담 지원센터",
        description: "임금체불, 퇴직금, 근로계약 문제를 상담하고 신고 절차를 안내합니다.",
        meta: ["전화 상담 가능", "다국어 연계 가능"],
        phoneDisplay: "000-1200-1101",
        phoneDial: "00012001101"
      },
      {
        name: "외국인 노동자 지원기관",
        description: "통역, 법률 연계, 사업장 문제 대응을 함께 도와줍니다.",
        meta: ["지역 방문 상담", "법률 연계"],
        phoneDisplay: "000-1200-1102",
        phoneDial: "00012001102"
      }
    ],
    extras: [
      "합의 전에는 지급 일정과 금액이 문서로 남는지 확인하는 것이 중요합니다.",
      "체류 자격에 영향이 있는 상황이면 상담 때 함께 확인하세요.",
      "산재나 폭력이 함께 있다면 긴급 화면으로 바로 이동하세요."
    ]
  },
  visa: {
    label: "비자·출입국",
    summary: "비자 연장과 체류 절차 확인이 필요해요.",
    context: "필요 서류와 신청 전 준비 사항을 먼저 정리하고, 출입국 관련 상담 창구로 연결합니다.",
    actions: [
      "여권, 외국인등록증, 체류 관련 서류를 먼저 모아 두세요.",
      "연장 사유에 따라 재직증명서나 거주지 증빙이 필요한지 확인하세요.",
      "오늘 예약 가능 여부와 접수 시간을 먼저 확인하세요."
    ],
    agencies: [
      {
        name: "출입국 민원 안내 창구",
        description: "비자 연장, 체류 자격 변경, 필요 서류 확인을 안내합니다.",
        meta: ["평일 09:00-18:00", "한국어·영어·중국어"],
        phoneDisplay: "000-1300-2101",
        phoneDial: "00013002101"
      },
      {
        name: "외국인 주민 지원센터",
        description: "서류 준비와 예약, 통역 연계를 도와줍니다.",
        meta: ["생활 통합 상담", "지역 기반 지원"],
        phoneDisplay: "000-1300-2102",
        phoneDial: "00013002102"
      }
    ],
    extras: [
      "체류 만료 직전에는 대기 시간이 길어질 수 있어 미리 준비하는 편이 안전합니다.",
      "서류 원본과 사본을 함께 챙기면 현장 대응이 더 쉬워집니다.",
      "언어가 어렵다면 통역 가능 여부를 같이 확인하세요."
    ]
  },
  health: {
    label: "병원·건강",
    summary: "병원 방문과 건강 관련 안내가 필요해요.",
    context: "어떤 진료가 필요한지, 무엇을 준비해야 하는지 먼저 정리해 드립니다.",
    actions: [
      "증상, 시작 시점, 복용 중인 약을 간단히 메모하세요.",
      "신분증, 보험 정보, 이전 검사 결과가 있으면 준비하세요.",
      "응급 증상이라면 일반 안내보다 긴급 연결을 우선 이용하세요."
    ],
    agencies: [
      {
        name: "지역 의료 안내센터",
        description: "진료과 연결, 준비 서류, 통역 필요 여부를 안내합니다.",
        meta: ["평일 접수 안내", "통역 연계"],
        phoneDisplay: "000-1400-3101",
        phoneDial: "00014003101"
      },
      {
        name: "다문화 건강 지원기관",
        description: "검진, 예방접종, 임신·출산, 아동 건강 정보를 지원합니다.",
        meta: ["가족 건강 상담", "생활 건강 정보"],
        phoneDisplay: "000-1400-3102",
        phoneDial: "00014003102"
      }
    ],
    extras: [
      "호흡 곤란이나 심한 출혈이 있다면 즉시 긴급 도움을 이용하세요.",
      "병원 안내문은 문서 해석 화면에서 쉽게 요약할 수 있습니다.",
      "의료비 지원 가능 여부도 함께 확인해 보세요."
    ]
  },
  education: {
    label: "아이 학교·교육",
    summary: "학교 안내문 이해와 준비물 확인이 필요해요.",
    context: "가정통신문을 쉽게 풀어 설명하고, 준비물과 제출 기한을 바로 정리합니다.",
    actions: [
      "학교 안내문 사진을 찍어 문서 해석 화면에 올리세요.",
      "준비물, 제출 서류, 행사 날짜를 먼저 체크하세요.",
      "이해가 어려운 항목은 학교 상담이나 지원센터에 연결하세요."
    ],
    agencies: [
      {
        name: "학교 행정실 또는 담임 상담",
        description: "준비물, 수업 일정, 제출 서류를 가장 정확하게 확인할 수 있습니다.",
        meta: ["학사 일정 확인", "직접 문의"],
        phoneDisplay: "000-1500-4101",
        phoneDial: "00015004101"
      },
      {
        name: "다문화가족 지원센터",
        description: "학교 적응, 보호자 상담, 통역 지원을 도와줍니다.",
        meta: ["학부모 지원", "언어 지원"],
        phoneDisplay: "000-1500-4102",
        phoneDial: "00015004102"
      }
    ],
    extras: [
      "행사 일정은 놓치기 쉬워 캘린더 추가 기능과 연결하기 좋습니다.",
      "읽을 수 있어도 의미가 어려운 문서는 쉬운 말 설명이 중요합니다.",
      "아이의 학년과 학교 유형에 따라 준비물이 달라질 수 있습니다."
    ]
  },
  housing: {
    label: "주거·생활",
    summary: "주거와 생활 지원 정보를 찾고 있어요.",
    context: "주거 문제, 공공서비스 신청, 생활 정착에 필요한 기관을 정리해 드립니다.",
    actions: [
      "현재 주소, 계약 상태, 필요한 생활 지원 항목을 메모하세요.",
      "주거 계약서나 공과금 고지서가 있으면 함께 준비하세요.",
      "주민센터 방문 전 필요한 신청 서류를 먼저 확인하세요."
    ],
    agencies: [
      {
        name: "주민센터 생활지원 창구",
        description: "전입, 각종 신청, 생활복지 안내를 받을 수 있습니다.",
        meta: ["지역 방문 상담", "기초 행정 안내"],
        phoneDisplay: "000-1600-5101",
        phoneDial: "00016005101"
      },
      {
        name: "외국인 주민 정착 지원센터",
        description: "주거, 생활 정보, 지역 서비스 연결을 도와줍니다.",
        meta: ["초기 정착 지원", "연계 서비스"],
        phoneDisplay: "000-1600-5102",
        phoneDial: "00016005102"
      }
    ],
    extras: [
      "계약이나 체납 문제는 사진이나 문서로 남겨 두면 상담이 쉬워집니다.",
      "생활 신청 안내문도 문서 해석 화면에서 기한과 준비물을 정리할 수 있습니다.",
      "긴급 주거 상황이면 보호기관 연결 여부를 함께 확인하세요."
    ]
  },
  emergency: {
    label: "긴급 도움",
    summary: "지금 즉시 연결이 필요한 긴급 상황일 수 있어요.",
    context: "긴급 전화, 보호기관, 통역 지원을 우선으로 연결하고 최소한의 행동만 먼저 보여드립니다.",
    actions: [
      "지금 위험하다면 먼저 긴급 전화나 가까운 도움 기관에 연락하세요.",
      "혼자 설명이 어렵다면 긴급 화면의 한국어 문장을 보여주세요.",
      "가능하다면 현재 위치와 상황을 믿을 수 있는 사람에게 공유하세요."
    ],
    agencies: [
      {
        name: "긴급 대응 기관",
        description: "폭력, 위협, 응급 상황에 즉시 대응합니다.",
        meta: ["24시간 가능", "긴급 우선"],
        phoneDisplay: "112",
        phoneDial: "112"
      },
      {
        name: "보호 및 상담 기관",
        description: "임시 보호, 법률 연결, 심리 상담을 지원합니다.",
        meta: ["신속 연계", "보호 지원"],
        phoneDisplay: "000-1700-6102",
        phoneDial: "00017006102"
      }
    ],
    extras: [
      "이 화면에서는 검색보다 연결이 우선입니다.",
      "상담 중에는 짧은 문장으로 현재 상태를 먼저 전달하세요.",
      "빠른 종료 버튼으로 화면을 즉시 전환할 수 있습니다."
    ]
  }
};

const documentData = {
  school: {
    label: "학교 문서",
    summary: "학교에서 준비물과 제출 서류, 행사 날짜를 안내하는 가정통신문입니다.",
    simple: "아이에게 필요한 준비물을 챙기고, 보호자가 서명한 확인서를 정해진 날짜까지 학교에 제출해야 합니다.",
    actions: [
      "준비물 목록을 오늘 안에 확인하기",
      "보호자 서명 후 제출하기",
      "행사 날짜를 캘린더에 저장하기"
    ]
  },
  hospital: {
    label: "병원 문서",
    summary: "병원 검사 전 금식 시간과 방문 일시, 준비 서류를 안내하는 문서입니다.",
    simple: "검사 전에 음식을 먹지 말아야 하고, 예약 시간보다 조금 일찍 가서 접수해야 합니다.",
    actions: [
      "금식 시작 시간 확인하기",
      "신분증과 예약 문자 준비하기",
      "검사 전 복용 약 문의하기"
    ]
  },
  immigration: {
    label: "출입국 문서",
    summary: "체류 기간 연장 또는 서류 제출 일정과 필요한 증빙을 안내하는 공지입니다.",
    simple: "정해진 날짜 안에 방문하거나 온라인 신청을 해야 하고, 신분증과 관련 증빙서류를 함께 내야 합니다.",
    actions: [
      "신청 마감일 확인하기",
      "여권과 외국인등록증 준비하기",
      "예약 가능 여부 확인하기"
    ]
  },
  community: {
    label: "주민센터 문서",
    summary: "주민센터에서 생활 지원 신청 방법과 제출 서류를 안내하는 문서입니다.",
    simple: "필요한 신청서를 작성하고, 주소나 소득을 확인할 수 있는 서류를 함께 제출해야 합니다.",
    actions: [
      "신청 대상인지 확인하기",
      "주소 증빙과 신분증 준비하기",
      "방문 접수 시간 확인하기"
    ]
  }
};

const onboardingData = [
  {
    title: "문제 입력",
    body: "어느 기관인지 몰라도 지금 겪는 문제를 먼저 말하면 됩니다."
  },
  {
    title: "맞춤 안내",
    body: "AI가 상황을 요약하고, 지금 해야 할 행동과 연결 기관을 정리합니다."
  },
  {
    title: "문서 해석",
    body: "사진 한 장으로 복잡한 안내문을 쉬운 말로 바꾸고 해야 할 일을 알려줍니다."
  }
];

const loadingMessages = {
  "question-loading": {
    title: "도움을 정리하고 있어요",
    description: "필요한 행동과 연결 기관을 순서대로 준비 중입니다."
  },
  "document-loading": {
    title: "문서를 해석하고 있어요",
    description: "핵심 요약, 쉬운 설명, 해야 할 일을 정리하고 있습니다."
  }
};

const appState = {
  currentTab: "home",
  bootState: "splash",
  selectedLanguage: "한국어",
  selectedScenario: "work",
  selectedDocument: "school",
  analysisState: "idle",
  isPrivacyMode: false,
  activeSheet: null,
  question: "",
  documentFileName: ""
};

const elements = {
  screens: Array.from(document.querySelectorAll("[data-tab-screen]")),
  navButtons: Array.from(document.querySelectorAll("[data-go-tab]")),
  bottomNavButtons: Array.from(document.querySelectorAll(".nav-button")),
  languageButtons: Array.from(document.querySelectorAll("[data-language]")),
  scenarioButtons: Array.from(document.querySelectorAll("[data-scenario]")),
  questionInput: document.getElementById("question-input-v2"),
  sampleButtons: Array.from(document.querySelectorAll(".sample-button")),
  selectedLanguageText: document.getElementById("selected-language-text"),
  selectedScenarioText: document.getElementById("selected-scenario-text"),
  resultsSummary: document.getElementById("results-summary"),
  resultsContext: document.getElementById("results-context"),
  resultsActionList: document.getElementById("results-action-list"),
  resultsAgencyStack: document.getElementById("results-agency-stack"),
  resultsExtraList: document.getElementById("results-extra-list"),
  resultCards: Array.from(document.querySelectorAll("[data-result-card]")),
  documentButtons: Array.from(document.querySelectorAll("[data-document]")),
  selectedDocumentText: document.getElementById("selected-document-text"),
  documentFileInput: document.getElementById("document-file-v2"),
  documentFileStatus: document.getElementById("document-file-status"),
  documentSummary: document.getElementById("document-summary"),
  documentSimple: document.getElementById("document-simple"),
  documentActionList: document.getElementById("document-action-list"),
  onboardingList: document.getElementById("onboarding-list"),
  splashOverlay: document.getElementById("splash-overlay"),
  onboardingOverlay: document.getElementById("onboarding-overlay"),
  loadingOverlay: document.getElementById("loading-overlay"),
  privacyOverlay: document.getElementById("privacy-overlay"),
  loadingTitle: document.getElementById("loading-title"),
  loadingDescription: document.getElementById("loading-description"),
  bottomSheet: document.getElementById("bottom-sheet"),
  sheetBackdrop: document.getElementById("sheet-backdrop"),
  sheetTitle: document.getElementById("sheet-title"),
  sheetDescription: document.getElementById("sheet-description"),
  sheetDetailList: document.getElementById("sheet-detail-list"),
  toast: document.getElementById("app-toast")
};

let splashTimer = null;
let loadingTimer = null;
let resultAnimationTimers = [];

function setState(patch) {
  Object.assign(appState, patch);
  render();
}

function detectScenario(text) {
  const normalized = text.trim().toLowerCase();

  if (!normalized) {
    return appState.selectedScenario;
  }
  if (normalized.includes("월급") || normalized.includes("임금") || normalized.includes("노동") || normalized.includes("퇴직금")) {
    return "work";
  }
  if (normalized.includes("비자") || normalized.includes("출입국") || normalized.includes("등록") || normalized.includes("체류")) {
    return "visa";
  }
  if (normalized.includes("학교") || normalized.includes("아이") || normalized.includes("준비물") || normalized.includes("가정통신문")) {
    return "education";
  }
  if (normalized.includes("병원") || normalized.includes("건강") || normalized.includes("검사") || normalized.includes("진료")) {
    return "health";
  }
  if (normalized.includes("주거") || normalized.includes("생활") || normalized.includes("계약") || normalized.includes("집")) {
    return "housing";
  }
  if (normalized.includes("긴급") || normalized.includes("위험") || normalized.includes("폭력") || normalized.includes("응급")) {
    return "emergency";
  }

  return appState.selectedScenario;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1800);
}

function buildSheetDetails(agencyName, actionType) {
  const actionMap = {
    phone: {
      title: "전화 연결 정보",
      description: `${agencyName}에 바로 연결할 수 있는 단계입니다.`,
      details: [
        "다국어 상담 가능 여부를 먼저 확인해 주세요.",
        "통화 전 현재 문제와 필요한 도움을 한 줄로 정리해 두면 좋습니다."
      ]
    },
    hours: {
      title: "운영시간 안내",
      description: `${agencyName} 방문 전 확인해야 할 운영 정보를 정리했습니다.`,
      details: [
        "평일 운영 여부와 점심시간 유무를 먼저 확인하세요.",
        "서류 접수 마감 시간이 일반 운영 종료 시간보다 빠를 수 있습니다."
      ]
    },
    map: {
      title: "방문 준비 안내",
      description: `${agencyName} 방문 시 필요한 기본 동선을 정리했습니다.`,
      details: [
        "신분증과 관련 서류를 함께 챙기세요.",
        "방문 전에 대중교통, 주차, 예약 여부를 확인하면 이동이 쉬워집니다."
      ]
    }
  };

  return actionMap[actionType];
}

function goToTab(tabKey, options = {}) {
  setState({ currentTab: tabKey, activeSheet: null });

  if (tabKey === "results" && options.animateResults !== false) {
    animateResultCards();
  }
}

function animateResultCards() {
  resultAnimationTimers.forEach((timer) => window.clearTimeout(timer));
  resultAnimationTimers = [];

  elements.resultCards.forEach((card) => {
    card.classList.remove("is-visible");
  });

  elements.resultCards.forEach((card, index) => {
    const timer = window.setTimeout(() => {
      card.classList.add("is-visible");
    }, 120 + index * 140);
    resultAnimationTimers.push(timer);
  });
}

function scheduleSplashTransition() {
  window.clearTimeout(splashTimer);
  splashTimer = window.setTimeout(() => {
    if (appState.bootState === "splash") {
      setState({ bootState: "onboarding" });
    }
  }, 1400);
}

function startQuestionAnalysis() {
  const resolvedScenario = detectScenario(elements.questionInput.value);

  setState({
    selectedScenario: resolvedScenario,
    question: elements.questionInput.value.trim(),
    analysisState: "question-loading",
    activeSheet: null
  });

  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => {
    setState({ analysisState: "idle", currentTab: "results" });
    animateResultCards();
  }, 1250);
}

function startDocumentAnalysis() {
  setState({ analysisState: "document-loading", activeSheet: null });

  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => {
    setState({ analysisState: "idle", currentTab: "document" });
    showToast("문서 핵심 내용을 정리했습니다.");
  }, 1150);
}

function renderOnboarding() {
  elements.onboardingList.innerHTML = onboardingData
    .map(
      (item) => `
        <article class="onboarding-item">
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </article>
      `
    )
    .join("");
}

function renderHome() {
  elements.selectedLanguageText.textContent = appState.selectedLanguage;
  elements.selectedScenarioText.textContent = scenarioData[appState.selectedScenario].label;

  elements.languageButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.language === appState.selectedLanguage);
  });

  elements.scenarioButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.scenario === appState.selectedScenario);
  });

  if (elements.questionInput.value !== appState.question) {
    elements.questionInput.value = appState.question;
  }
}

function renderResults() {
  const current = scenarioData[appState.selectedScenario];

  elements.resultsSummary.textContent = current.summary;
  elements.resultsContext.textContent = current.context;
  elements.resultsActionList.innerHTML = current.actions.map((item) => `<li>${item}</li>`).join("");
  elements.resultsExtraList.innerHTML = current.extras.map((item) => `<li>${item}</li>`).join("");
  elements.resultsAgencyStack.innerHTML = current.agencies
    .map(
      (agency, index) => `
        <article class="agency-card">
          <h4>${agency.name}</h4>
          <p>${agency.description}</p>
          <div class="agency-phone-row">
            <span class="meta-pill meta-pill-phone">대표번호</span>
            <a class="phone-link" href="tel:${agency.phoneDial}" data-agency-action="phone" data-agency-index="${index}">
              ${agency.phoneDisplay}
            </a>
          </div>
          <div class="agency-meta">
            ${agency.meta.map((item) => `<span class="meta-pill">${item}</span>`).join("")}
          </div>
          <div class="agency-actions">
            <a class="agency-action agency-action-call" href="tel:${agency.phoneDial}" data-agency-index="${index}" data-agency-action="phone">
              전화 연결
            </a>
            <button class="agency-action" data-agency-index="${index}" data-agency-action="hours">운영시간</button>
            <button class="agency-action" data-agency-index="${index}" data-agency-action="map">지도 보기</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDocument() {
  const current = documentData[appState.selectedDocument];

  elements.selectedDocumentText.textContent = current.label;
  elements.documentFileStatus.textContent = appState.documentFileName || "업로드된 파일이 없어요";
  elements.documentSummary.textContent = current.summary;
  elements.documentSimple.textContent = current.simple;
  elements.documentActionList.innerHTML = current.actions.map((item) => `<li>${item}</li>`).join("");

  elements.documentButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.document === appState.selectedDocument);
  });
}

function renderTabState() {
  elements.screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.tabScreen === appState.currentTab);
  });

  elements.bottomNavButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.goTab === appState.currentTab);
  });
}

function renderOverlays() {
  elements.splashOverlay.classList.toggle("is-hidden", appState.bootState !== "splash");
  elements.onboardingOverlay.classList.toggle("is-hidden", appState.bootState !== "onboarding");
  elements.loadingOverlay.classList.toggle("is-hidden", appState.analysisState === "idle");
  elements.privacyOverlay.classList.toggle("is-hidden", !appState.isPrivacyMode);

  if (appState.analysisState !== "idle") {
    const content = loadingMessages[appState.analysisState];
    elements.loadingTitle.textContent = content.title;
    elements.loadingDescription.textContent = content.description;
  }
}

function renderSheet() {
  const isOpen = Boolean(appState.activeSheet);
  elements.sheetBackdrop.classList.toggle("is-hidden", !isOpen);
  elements.bottomSheet.classList.toggle("is-hidden", !isOpen);

  if (!isOpen) {
    return;
  }

  elements.sheetTitle.textContent = appState.activeSheet.title;
  elements.sheetDescription.textContent = appState.activeSheet.description;
  elements.sheetDetailList.innerHTML = appState.activeSheet.details
    .map((item) => `<div class="sheet-detail">${item}</div>`)
    .join("");
}

function render() {
  renderHome();
  renderResults();
  renderDocument();
  renderTabState();
  renderOverlays();
  renderSheet();
}

document.addEventListener("click", async (event) => {
  const tabButton = event.target.closest("[data-go-tab]");
  const languageButton = event.target.closest("[data-language]");
  const scenarioButton = event.target.closest("[data-scenario]");
  const sampleButton = event.target.closest(".sample-button");
  const documentButton = event.target.closest("[data-document]");
  const agencyAction = event.target.closest(".agency-action");
  const emergencyAction = event.target.closest(".emergency-action");
  const phraseButton = event.target.closest(".phrase-card");
  const utilityButton = event.target.closest(".utility-button");

  if (tabButton) {
    goToTab(tabButton.dataset.goTab);
    return;
  }

  if (languageButton) {
    setState({ selectedLanguage: languageButton.dataset.language });
    showToast(`${languageButton.dataset.language} 모드로 전환했습니다.`);
    return;
  }

  if (scenarioButton) {
    setState({ selectedScenario: scenarioButton.dataset.scenario });
    return;
  }

  if (sampleButton) {
    const value = sampleButton.textContent.trim();
    appState.question = value;
    elements.questionInput.value = value;
    return;
  }

  if (documentButton) {
    setState({ selectedDocument: documentButton.dataset.document });
    return;
  }

  if (agencyAction) {
    const current = scenarioData[appState.selectedScenario];
    const agency = current.agencies[Number(agencyAction.dataset.agencyIndex)];

    if (agencyAction.dataset.agencyAction === "phone") {
      showToast(`${agency.name} 전화 연결 화면으로 이동합니다.`);
      return;
    }

    const sheetInfo = buildSheetDetails(agency.name, agencyAction.dataset.agencyAction);

    setState({
      activeSheet: {
        title: `${agency.name} · ${sheetInfo.title}`,
        description: sheetInfo.description,
        details: sheetInfo.details
      }
    });
    return;
  }

  if (emergencyAction && emergencyAction.tagName !== "A") {
    showToast(`${emergencyAction.textContent.trim()} 연결 화면을 준비 중입니다.`);
    return;
  }

  if (phraseButton) {
    try {
      await navigator.clipboard.writeText(phraseButton.textContent.trim());
      showToast("문장을 복사했습니다.");
    } catch (error) {
      showToast("복사 권한이 없어 직접 보여주세요.");
    }
    return;
  }

  if (utilityButton) {
    showToast(`${utilityButton.textContent.trim()} 기능을 시연용으로 표시했습니다.`);
  }
});

document.getElementById("question-analyze-button").addEventListener("click", () => {
  startQuestionAnalysis();
});

document.getElementById("document-analyze-button").addEventListener("click", () => {
  startDocumentAnalysis();
});

document.getElementById("splash-skip-button").addEventListener("click", () => {
  window.clearTimeout(splashTimer);
  setState({ bootState: "onboarding" });
});

document.getElementById("onboarding-skip-button").addEventListener("click", () => {
  setState({ bootState: "ready" });
});

document.getElementById("onboarding-start-button").addEventListener("click", () => {
  setState({ bootState: "ready" });
});

document.getElementById("privacy-mode-button").addEventListener("click", () => {
  setState({ isPrivacyMode: true, activeSheet: null });
});

document.getElementById("privacy-return-button").addEventListener("click", () => {
  setState({ isPrivacyMode: false });
});

document.getElementById("sheet-close-button").addEventListener("click", () => {
  setState({ activeSheet: null });
});

document.getElementById("sheet-confirm-button").addEventListener("click", () => {
  setState({ activeSheet: null });
});

elements.sheetBackdrop.addEventListener("click", () => {
  setState({ activeSheet: null });
});

elements.questionInput.addEventListener("input", () => {
  appState.question = elements.questionInput.value;
});

elements.documentFileInput.addEventListener("change", () => {
  const file = elements.documentFileInput.files?.[0];
  setState({ documentFileName: file ? `${file.name} 업로드 준비 완료` : "" });
});

renderOnboarding();
render();
scheduleSplashTransition();
