const scenarioData = {
  work: {
    label: "일자리·노동",
    title: "임금체불 또는 노동 문제 지원",
    actions: [
      "급여 기록과 계약서를 모으기",
      "못 받은 금액과 날짜를 적기",
      "상담 후 신고 여부 결정하기"
    ],
    contacts: [
      {
        name: "고용노동부 고객상담센터",
        desc: "임금, 퇴직금, 근로계약 상담",
        phoneDisplay: "1350",
        phoneDial: "1350",
        info: "고용노동부 고객상담센터는 고용·노동 분야 상담을 제공합니다."
      },
      {
        name: "대한법률구조공단",
        desc: "법률상담과 구조 안내",
        phoneDisplay: "132",
        phoneDial: "132",
        info: "대한법률구조공단은 법률상담 132를 운영합니다."
      }
    ],
    notes: ["증거 먼저 확보", "체류 영향 같이 확인", "위험하면 긴급 탭 이동"]
  },
  visa: {
    label: "비자·출입국",
    title: "비자 연장과 체류 절차 안내",
    actions: [
      "여권과 등록증 준비하기",
      "필요 서류 확인하기",
      "방문 또는 예약 시간 확인하기"
    ],
    contacts: [
      {
        name: "출입국민원콜센터",
        desc: "체류, 등록, 비자 문의",
        phoneDisplay: "1345",
        phoneDial: "1345",
        info: "외국인종합안내센터는 출입국 민원콜센터 1345를 운영합니다."
      },
      {
        name: "다누리콜센터",
        desc: "다국어 생활상담",
        phoneDisplay: "1577-1366",
        phoneDial: "15771366",
        info: "다누리 서비스는 1577-1366에서 다국어 상담을 제공합니다."
      }
    ],
    notes: ["기한 전에 준비", "원본과 사본 함께", "언어지원 확인"]
  },
  health: {
    label: "병원·건강",
    title: "병원 이용과 건강 지원 안내",
    actions: [
      "증상과 복용 약을 메모하기",
      "신분증과 보험 정보 준비하기",
      "응급이면 바로 119 연결하기"
    ],
    contacts: [
      {
        name: "응급의료",
        desc: "응급 상황 즉시 연결",
        phoneDisplay: "119",
        phoneDial: "119",
        info: "응급 상황에서는 119를 우선 이용합니다."
      },
      {
        name: "보건복지상담센터",
        desc: "의료·복지 상담",
        phoneDisplay: "129",
        phoneDial: "129",
        info: "보건복지 상담은 전국 어디서나 129에서 안내합니다."
      }
    ],
    notes: ["심하면 119 우선", "검사 안내문은 문서 탭", "의료비 상담 가능"]
  },
  education: {
    label: "학교·교육",
    title: "학교 안내문과 준비물 확인",
    actions: [
      "학교 문서를 먼저 찍기",
      "준비물과 날짜를 체크하기",
      "보호자 확인이 필요한지 보기"
    ],
    contacts: [
      {
        name: "다누리콜센터",
        desc: "학부모 다국어 상담",
        phoneDisplay: "1577-1366",
        phoneDial: "15771366",
        info: "다누리콜센터는 다문화가족과 외국인 주민을 위한 다국어 상담을 제공합니다."
      },
      {
        name: "정부민원안내",
        desc: "행정 문의 일반 안내",
        phoneDisplay: "110",
        phoneDial: "110",
        info: "정부민원안내 콜센터 110은 일반 행정 상담에 연결됩니다."
      }
    ],
    notes: ["날짜 먼저 체크", "준비물 놓치지 않기", "문서 탭에서 바로 해석"]
  },
  housing: {
    label: "주거·생활",
    title: "주거와 생활 지원 연결",
    actions: [
      "계약서나 고지서 챙기기",
      "필요한 지원 종류 정하기",
      "주민센터 방문 전 문의하기"
    ],
    contacts: [
      {
        name: "보건복지상담센터",
        desc: "생활·복지 상담",
        phoneDisplay: "129",
        phoneDial: "129",
        info: "복지 상담과 긴급복지 지원은 129에서 안내합니다."
      },
      {
        name: "정부민원안내",
        desc: "행정 절차 일반 문의",
        phoneDisplay: "110",
        phoneDial: "110",
        info: "정부민원안내 콜센터 110은 공공 행정 안내에 연결됩니다."
      }
    ],
    notes: ["계약 정보 준비", "서류 사진 보관", "생활 신청은 기한 확인"]
  },
  emergency: {
    label: "긴급 도움",
    title: "즉시 연결이 필요한 상황",
    actions: [
      "가장 먼저 안전한 곳으로 이동하기",
      "상황에 맞는 번호로 바로 전화하기",
      "필요하면 문장을 보여주기"
    ],
    contacts: [
      {
        name: "긴급",
        desc: "위험·범죄·위협",
        phoneDisplay: "112",
        phoneDial: "112",
        info: "위험 상황은 112에 즉시 연결합니다."
      },
      {
        name: "보호 지원",
        desc: "폭력 피해 상담",
        phoneDisplay: "1366",
        phoneDial: "1366",
        info: "여성긴급전화 1366은 24시간 긴급 상담과 보호 연계를 지원합니다."
      }
    ],
    notes: ["검색보다 연결", "짧게 설명", "빠른 종료 가능"]
  }
};

const documentData = {
  school: {
    label: "학교 문서",
    summary: "준비물과 제출 날짜 안내",
    simple: "무엇을 챙기고 언제 내야 하는지 확인하면 됩니다.",
    actions: ["준비물 확인", "보호자 서명", "날짜 저장"]
  },
  hospital: {
    label: "병원 문서",
    summary: "검사 전 준비 안내",
    simple: "금식 시간과 방문 시간을 먼저 확인하면 됩니다.",
    actions: ["금식 시간 확인", "예약 문자 준비", "약 복용 문의"]
  },
  immigration: {
    label: "출입국 문서",
    summary: "신청 일정과 필요 서류 안내",
    simple: "기한 안에 신청하고 신분 서류를 함께 준비해야 합니다.",
    actions: ["마감일 확인", "여권 준비", "예약 여부 확인"]
  },
  community: {
    label: "주민센터 문서",
    summary: "신청 방법과 제출 서류 안내",
    simple: "대상 여부를 확인하고 신분증과 증빙서류를 준비하면 됩니다.",
    actions: ["대상 확인", "증빙 준비", "방문 시간 확인"]
  }
};

const onboardingData = [
  { title: "문제 선택", body: "카테고리나 질문을 고릅니다." },
  { title: "AI 정리", body: "해야 할 일과 연락처를 보여줍니다." },
  { title: "바로 연결", body: "전화 버튼을 누르면 바로 넘어갑니다." }
];

const loadingMessage = {
  question: {
    title: "도움을 정리 중",
    desc: "지금 필요한 연락처와 행동을 준비하고 있어요."
  },
  document: {
    title: "문서 해석 중",
    desc: "짧은 요약과 해야 할 일을 만들고 있어요."
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
  screens: Array.from(document.querySelectorAll(".screen")),
  tabs: Array.from(document.querySelectorAll("[data-tab]")),
  languageButtons: Array.from(document.querySelectorAll("[data-language]")),
  scenarioButtons: Array.from(document.querySelectorAll("[data-scenario]")),
  documentButtons: Array.from(document.querySelectorAll("[data-document]")),
  sampleButtons: Array.from(document.querySelectorAll(".sample-chip")),
  phraseButtons: Array.from(document.querySelectorAll(".phrase-btn")),
  onboardingList: document.getElementById("onboarding-list-v3"),
  questionInput: document.getElementById("question-input-v3"),
  documentFileInput: document.getElementById("document-file-v3"),
  languageCurrent: document.getElementById("language-current"),
  scenarioCurrent: document.getElementById("scenario-current"),
  resultTitle: document.getElementById("result-title-v3"),
  resultActions: document.getElementById("result-actions-v3"),
  resultContacts: document.getElementById("result-contacts-v3"),
  resultNotes: document.getElementById("result-notes-v3"),
  documentCurrent: document.getElementById("document-current"),
  documentFileStatus: document.getElementById("document-file-v3-status"),
  documentSummary: document.getElementById("document-summary-v3"),
  documentSimple: document.getElementById("document-simple-v3"),
  documentActions: document.getElementById("document-actions-v3"),
  splash: document.getElementById("splash-v3"),
  onboarding: document.getElementById("onboarding-v3"),
  loading: document.getElementById("loading-v3"),
  privacy: document.getElementById("privacy-v3"),
  loadingTitle: document.getElementById("loading-title-v3"),
  loadingDesc: document.getElementById("loading-desc-v3"),
  sheetBackdrop: document.getElementById("sheet-backdrop-v3"),
  sheet: document.getElementById("sheet-v3"),
  sheetTitle: document.getElementById("sheet-title-v3"),
  sheetBody: document.getElementById("sheet-body-v3"),
  toast: document.getElementById("toast-v3")
};

let splashTimer = null;
let loadingTimer = null;

function setState(patch) {
  Object.assign(appState, patch);
  render();
}

function detectScenario(text) {
  const q = text.trim().toLowerCase();
  if (!q) {
    return appState.selectedScenario;
  }
  if (q.includes("월급") || q.includes("임금") || q.includes("노동") || q.includes("퇴직금")) return "work";
  if (q.includes("비자") || q.includes("출입국") || q.includes("등록") || q.includes("체류")) return "visa";
  if (q.includes("병원") || q.includes("건강") || q.includes("검사") || q.includes("진료")) return "health";
  if (q.includes("학교") || q.includes("준비물") || q.includes("가정통신문") || q.includes("아이")) return "education";
  if (q.includes("주거") || q.includes("생활") || q.includes("계약") || q.includes("집")) return "housing";
  if (q.includes("긴급") || q.includes("위험") || q.includes("폭력") || q.includes("응급")) return "emergency";
  return appState.selectedScenario;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 1700);
}

function renderOnboarding() {
  elements.onboardingList.innerHTML = onboardingData.map((item) => `
    <article class="onboarding-item">
      <strong>${item.title}</strong>
      <span>${item.body}</span>
    </article>
  `).join("");
}

function renderHome() {
  elements.languageCurrent.textContent = appState.selectedLanguage;
  elements.scenarioCurrent.textContent = scenarioData[appState.selectedScenario].label;

  elements.languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === appState.selectedLanguage);
  });

  elements.scenarioButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === appState.selectedScenario);
  });

  if (elements.questionInput.value !== appState.question) {
    elements.questionInput.value = appState.question;
  }
}

function renderResults() {
  const current = scenarioData[appState.selectedScenario];
  elements.resultTitle.textContent = current.title;
  elements.resultActions.innerHTML = current.actions.map((item) => `<li>${item}</li>`).join("");
  elements.resultNotes.innerHTML = current.notes.map((item) => `<span class="tag">${item}</span>`).join("");
  elements.resultContacts.innerHTML = current.contacts.map((contact, index) => `
    <article class="call-card">
      <div class="call-top">
        <div>
          <span class="call-name">${contact.name}</span>
          <span class="call-desc">${contact.desc}</span>
        </div>
      </div>
      <div class="call-number">
        <strong>${contact.phoneDisplay}</strong>
        <a class="call-btn" href="tel:${contact.phoneDial}" data-contact-call="${index}">전화</a>
      </div>
      <button class="small-btn" data-contact-info="${index}">안내 보기</button>
    </article>
  `).join("");
}

function renderDocument() {
  const current = documentData[appState.selectedDocument];
  elements.documentCurrent.textContent = current.label;
  elements.documentFileStatus.textContent = appState.documentFileName || "파일 없음";
  elements.documentSummary.textContent = current.summary;
  elements.documentSimple.textContent = current.simple;
  elements.documentActions.innerHTML = current.actions.map((item) => `<li>${item}</li>`).join("");

  elements.documentButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.document === appState.selectedDocument);
  });
}

function renderTabs() {
  elements.screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === appState.currentTab);
  });

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === appState.currentTab);
  });
}

function renderOverlays() {
  elements.splash.classList.toggle("hidden", appState.bootState !== "splash");
  elements.onboarding.classList.toggle("hidden", appState.bootState !== "onboarding");
  elements.loading.classList.toggle("hidden", appState.analysisState === "idle");
  elements.privacy.classList.toggle("hidden", !appState.isPrivacyMode);

  if (appState.analysisState !== "idle") {
    const content = loadingMessage[appState.analysisState];
    elements.loadingTitle.textContent = content.title;
    elements.loadingDesc.textContent = content.desc;
  }
}

function renderSheet() {
  const opened = Boolean(appState.activeSheet);
  elements.sheetBackdrop.classList.toggle("hidden", !opened);
  elements.sheet.classList.toggle("hidden", !opened);
  if (!opened) return;
  elements.sheetTitle.textContent = appState.activeSheet.title;
  elements.sheetBody.textContent = appState.activeSheet.body;
}

function render() {
  renderHome();
  renderResults();
  renderDocument();
  renderTabs();
  renderOverlays();
  renderSheet();
}

function goToTab(tab) {
  setState({ currentTab: tab, activeSheet: null });
}

function startQuestionFlow() {
  const scenario = detectScenario(elements.questionInput.value);
  setState({
    selectedScenario: scenario,
    question: elements.questionInput.value.trim(),
    analysisState: "question",
    activeSheet: null
  });
  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => {
    setState({ analysisState: "idle", currentTab: "results" });
  }, 1100);
}

function startDocumentFlow() {
  setState({ analysisState: "document", currentTab: "document", activeSheet: null });
  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => {
    setState({ analysisState: "idle" });
    showToast("문서 해석 완료");
  }, 1000);
}

document.addEventListener("click", async (event) => {
  const tabTarget = event.target.closest("[data-tab]");
  const languageTarget = event.target.closest("[data-language]");
  const scenarioTarget = event.target.closest("[data-scenario]");
  const documentTarget = event.target.closest("[data-document]");
  const sampleTarget = event.target.closest(".sample-chip");
  const phraseTarget = event.target.closest(".phrase-btn");
  const infoTarget = event.target.closest("[data-contact-info]");
  const callTarget = event.target.closest("[data-contact-call]");

  if (tabTarget) {
    goToTab(tabTarget.dataset.tab);
    return;
  }

  if (languageTarget) {
    setState({ selectedLanguage: languageTarget.dataset.language });
    showToast(`${languageTarget.dataset.language} 선택`);
    return;
  }

  if (scenarioTarget) {
    setState({ selectedScenario: scenarioTarget.dataset.scenario });
    return;
  }

  if (documentTarget) {
    setState({ selectedDocument: documentTarget.dataset.document });
    return;
  }

  if (sampleTarget) {
    const value = sampleTarget.textContent.trim();
    appState.question = value;
    elements.questionInput.value = value;
    return;
  }

  if (infoTarget) {
    const contact = scenarioData[appState.selectedScenario].contacts[Number(infoTarget.dataset.contactInfo)];
    setState({
      activeSheet: {
        title: `${contact.name} 안내`,
        body: contact.info
      }
    });
    return;
  }

  if (callTarget) {
    const contact = scenarioData[appState.selectedScenario].contacts[Number(callTarget.dataset.contactCall)];
    showToast(`${contact.name} 전화 연결`);
    return;
  }

  if (phraseTarget) {
    try {
      await navigator.clipboard.writeText(phraseTarget.textContent.trim());
      showToast("문장 복사 완료");
    } catch (error) {
      showToast("복사 권한 없음");
    }
  }
});

document.getElementById("analyze-question-v3").addEventListener("click", () => {
  startQuestionFlow();
});

document.getElementById("analyze-document-v3").addEventListener("click", () => {
  startDocumentFlow();
});

document.getElementById("skip-splash-v3").addEventListener("click", () => {
  window.clearTimeout(splashTimer);
  setState({ bootState: "onboarding" });
});

document.getElementById("start-v3").addEventListener("click", () => {
  setState({ bootState: "ready" });
});

document.getElementById("privacy-btn-v3").addEventListener("click", () => {
  setState({ isPrivacyMode: true, activeSheet: null });
});

document.getElementById("return-v3").addEventListener("click", () => {
  setState({ isPrivacyMode: false });
});

document.getElementById("sheet-close-v3").addEventListener("click", () => {
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
  setState({ documentFileName: file ? `${file.name}` : "" });
});

renderOnboarding();
render();

splashTimer = window.setTimeout(() => {
  if (appState.bootState === "splash") {
    setState({ bootState: "onboarding" });
  }
}, 1300);
