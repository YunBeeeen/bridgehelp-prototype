const scenarios = {
  visa: {
    summary: "비자 연장과 체류 절차 확인이 필요해요.",
    context: "필요한 서류와 신청 전 준비 사항을 먼저 정리하고, 출입국 관련 상담 창구로 연결합니다.",
    actions: [
      "여권, 외국인등록증, 체류 관련 기존 서류를 먼저 모아 두세요.",
      "연장 사유에 따라 재직증명서, 재학증명서, 거주지 증빙이 필요한지 확인하세요.",
      "방문 전 온라인 예약 가능 여부와 접수 시간을 확인하세요."
    ],
    agencies: [
      {
        name: "출입국 민원 안내 창구",
        description: "비자 연장, 체류 자격 변경, 필요 서류 확인을 도와줍니다.",
        meta: ["평일 09:00-18:00", "한국어·영어·중국어"]
      },
      {
        name: "외국인 주민 지원센터",
        description: "서류 준비와 번역, 예약 방법을 함께 안내합니다.",
        meta: ["지역 기반 지원", "생활 통합 상담"]
      }
    ],
    extras: [
      "체류 기한 직전에는 대기 시간이 길 수 있어 미리 준비하는 것이 안전합니다.",
      "서류 원본과 사본을 함께 준비하면 현장 대응이 쉬워집니다.",
      "언어가 어렵다면 통역 지원 가능 여부를 함께 확인하세요."
    ]
  },
  work: {
    summary: "임금체불 또는 노동 문제 해결이 필요해요.",
    context: "급여 기록과 근무 사실을 남기고, 상담과 신고를 연결해 바로 대응할 수 있게 정리합니다.",
    actions: [
      "급여명세서, 근로계약서, 출근 기록, 대화 내역을 모아 증거를 정리하세요.",
      "언제부터 얼마를 받지 못했는지 날짜와 금액을 메모해 두세요.",
      "오늘 바로 노동 상담을 받고 필요하면 진정 또는 신고 절차를 시작하세요."
    ],
    agencies: [
      {
        name: "노동 상담 지원센터",
        description: "임금체불, 퇴직금, 근로계약 문제를 상담하고 신고 절차를 안내합니다.",
        meta: ["전화 상담 가능", "다국어 연계 가능"]
      },
      {
        name: "외국인 노동자 지원기관",
        description: "통역, 법률 연계, 사업장 문제 대응을 함께 도와줍니다.",
        meta: ["지역 방문 상담", "법률 연계"]
      }
    ],
    extras: [
      "합의 전에는 금액과 지급 일정이 문서로 남는지 꼭 확인하세요.",
      "사업장을 그만두기 전 체류 자격과 고용 상태에 미치는 영향도 함께 상담받는 것이 좋습니다.",
      "산업재해나 폭력이 함께 있다면 긴급 연결 화면으로 바로 이동하세요."
    ]
  },
  health: {
    summary: "병원 방문과 건강 관련 안내가 필요해요.",
    context: "어떤 진료를 받아야 하는지와 준비 서류, 통역 필요 여부를 먼저 정리합니다.",
    actions: [
      "현재 증상, 시작 시점, 복용 중인 약을 메모하세요.",
      "신분증, 보험 정보, 이전 검사 결과가 있으면 함께 준비하세요.",
      "긴급 증상이 있으면 일반 안내보다 응급 연결을 먼저 이용하세요."
    ],
    agencies: [
      {
        name: "지역 의료 안내센터",
        description: "진료과 연결, 준비 서류, 통역 필요 여부를 안내합니다.",
        meta: ["평일 접수 안내", "통역 연계"]
      },
      {
        name: "다문화 건강 지원기관",
        description: "검진, 예방접종, 임신·출산, 아동 건강 정보를 지원합니다.",
        meta: ["가족 건강 상담", "생활 건강 정보"]
      }
    ],
    extras: [
      "증상이 심해지거나 호흡 곤란, 심한 출혈이 있으면 즉시 긴급 도움을 이용하세요.",
      "병원 안내문은 문서 해석 화면에서 쉽게 번역하고 요약할 수 있습니다.",
      "의료비 지원 가능 여부는 지역 지원센터에서 함께 확인할 수 있습니다."
    ]
  },
  education: {
    summary: "학교 안내문 이해와 준비물 확인이 필요해요.",
    context: "가정통신문을 쉽게 풀어 설명하고, 준비물과 제출 기한을 바로 정리합니다.",
    actions: [
      "학교 안내문 사진을 찍어 문서 해석 화면에 올리세요.",
      "준비물, 제출 서류, 행사 날짜를 먼저 체크하세요.",
      "이해가 어려운 항목은 다문화가족 지원기관이나 학교 상담실에 연결하세요."
    ],
    agencies: [
      {
        name: "학교 행정실 또는 담임 상담",
        description: "준비물, 수업 일정, 제출 서류를 가장 정확하게 확인할 수 있습니다.",
        meta: ["학사 일정 확인", "직접 문의"]
      },
      {
        name: "다문화가족 지원센터",
        description: "학교 적응, 보호자 상담, 통역 지원을 도와줍니다.",
        meta: ["학부모 지원", "언어 지원"]
      }
    ],
    extras: [
      "행사나 준비물 공지는 날짜를 놓치기 쉬워 캘린더 추가 기능이 특히 유용합니다.",
      "학교 안내문은 읽을 수 있어도 의미가 어려운 경우가 많아 쉬운 말 설명이 중요합니다.",
      "아이의 학년과 학교 유형에 따라 필요한 준비물이 달라질 수 있습니다."
    ]
  },
  housing: {
    summary: "주거와 생활 지원 정보를 찾고 있어요.",
    context: "주거 문제, 공공서비스 신청, 생활 정착에 필요한 기관을 정리해 드립니다.",
    actions: [
      "현재 주소, 계약 상태, 필요한 생활 지원 항목을 메모하세요.",
      "주거 계약서나 공과금 고지서가 있으면 준비하세요.",
      "주민센터나 생활 지원기관 방문 전 필요한 신청 서류를 확인하세요."
    ],
    agencies: [
      {
        name: "주민센터 생활지원 창구",
        description: "전입, 각종 신청, 생활복지 안내를 받을 수 있습니다.",
        meta: ["지역 방문 상담", "기초 행정 안내"]
      },
      {
        name: "외국인 주민 정착 지원센터",
        description: "주거, 생활 정보, 지역 서비스 연결을 도와줍니다.",
        meta: ["초기 정착 지원", "연계 서비스"]
      }
    ],
    extras: [
      "보증금, 계약, 체납 문제는 사진이나 문서로 남겨 두면 상담이 쉬워집니다.",
      "생활 신청 안내문은 문서 해석 화면에서 기한과 준비물을 바로 정리할 수 있습니다.",
      "긴급 주거 상황이면 보호기관 연결이 필요한지 함께 확인하세요."
    ]
  },
  emergency: {
    summary: "지금 즉시 연결이 필요한 긴급 상황일 수 있어요.",
    context: "긴급 전화, 보호기관, 통역 지원을 우선으로 연결하고 최소한의 행동만 보여드립니다.",
    actions: [
      "지금 위험하다면 먼저 긴급 전화 또는 가까운 도움 기관에 바로 연락하세요.",
      "혼자 설명이 어렵다면 긴급 화면의 한국어 문장을 보여주세요.",
      "가능하다면 현재 위치와 상황을 믿을 수 있는 사람에게 공유하세요."
    ],
    agencies: [
      {
        name: "긴급 대응 기관",
        description: "폭력, 위협, 응급 상황에 즉시 대응합니다.",
        meta: ["24시간 가능", "긴급 우선"]
      },
      {
        name: "보호 및 상담 기관",
        description: "임시 보호, 법률 연결, 심리 상담을 지원합니다.",
        meta: ["신속 연계", "보호 지원"]
      }
    ],
    extras: [
      "이 화면에서는 검색보다 연결이 우선입니다.",
      "상담 중에는 짧은 문장으로 현재 상태를 먼저 전달하세요.",
      "빠른 종료 버튼으로 화면을 즉시 전환할 수 있습니다."
    ]
  }
};

const documentProfiles = {
  school: {
    summary: "학교에서 준비물과 제출 서류, 행사 날짜를 안내하는 가정통신문입니다.",
    simple: "아이에게 필요한 준비물을 챙기고, 보호자가 서명한 확인서를 정해진 날짜까지 학교에 내야 합니다.",
    actions: [
      "준비물 목록을 확인해 오늘 안에 챙기기",
      "보호자 서명란 작성 후 제출하기",
      "행사 날짜를 캘린더에 저장하기"
    ]
  },
  hospital: {
    summary: "병원 검사 전 금식 시간과 방문 일시, 준비 서류를 안내하는 문서입니다.",
    simple: "검사 전에 음식을 먹지 말아야 하고, 예약 시간보다 조금 일찍 가서 접수해야 합니다.",
    actions: [
      "금식 시작 시간을 확인하기",
      "신분증과 예약 문자를 준비하기",
      "검사 전 복용 약 문의하기"
    ]
  },
  immigration: {
    summary: "체류 기간 연장 또는 서류 제출 일정과 필요한 증빙을 안내하는 공지입니다.",
    simple: "정해진 날짜 안에 방문하거나 온라인으로 신청해야 하고, 신분증과 관련 증빙서류를 함께 내야 합니다.",
    actions: [
      "신청 마감일 확인하기",
      "여권, 외국인등록증, 추가 증빙 준비하기",
      "예약 가능 여부 확인하기"
    ]
  },
  community: {
    summary: "주민센터에서 생활 지원 신청 방법과 제출 서류를 안내하는 문서입니다.",
    simple: "필요한 신청서를 작성하고, 주소나 소득을 확인할 수 있는 서류를 함께 제출해야 합니다.",
    actions: [
      "신청 대상인지 먼저 확인하기",
      "주소 증빙과 신분증 준비하기",
      "방문 접수 시간 확인하기"
    ]
  }
};

const screenButtons = document.querySelectorAll("[data-target]");
const screens = document.querySelectorAll(".screen");
const navPills = document.querySelectorAll(".nav-pill");
const languageButtons = document.querySelectorAll("[data-language]");
const categoryButtons = document.querySelectorAll("[data-category]");
const sampleButtons = document.querySelectorAll("#sample-list .sample-chip");
const questionInput = document.getElementById("question-input");
const analyzeButton = document.getElementById("analyze-button");
const resultSummary = document.getElementById("result-summary");
const resultContext = document.getElementById("result-context");
const actionList = document.getElementById("action-list");
const agencyList = document.getElementById("agency-list");
const extraList = document.getElementById("extra-list");
const selectedLanguageLabel = document.getElementById("selected-language-label");
const documentFile = document.getElementById("document-file");
const fileName = document.getElementById("file-name");
const documentSamples = document.querySelectorAll("#document-samples .sample-chip");
const analyzeDocumentButton = document.getElementById("analyze-document-button");
const documentSummary = document.getElementById("document-summary");
const documentSimple = document.getElementById("document-simple");
const documentActionList = document.getElementById("document-action-list");
const phraseButtons = document.querySelectorAll(".phrase-button");
const emergencyButtons = document.querySelectorAll(".emergency-button");
const saveActionButtons = document.querySelectorAll(".save-actions .secondary-button, .safety-tools .secondary-button");
const toast = document.getElementById("toast");
const quickExit = document.getElementById("quick-exit");
const safeScreen = document.getElementById("safe-screen");
const returnButton = document.getElementById("return-button");

let activeScenario = "work";
let activeDocument = "school";

function showScreen(targetId) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === targetId);
  });

  navPills.forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.target === targetId);
  });
}

function syncCategoryButtons(key) {
  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === key);
  });
}

function syncDocumentButtons(key) {
  documentSamples.forEach((button) => {
    button.classList.toggle("active", button.dataset.document === key);
  });
}

function renderScenario(key) {
  const scenario = scenarios[key] || scenarios.work;
  activeScenario = key;
  syncCategoryButtons(key);

  resultSummary.textContent = scenario.summary;
  resultContext.textContent = scenario.context;

  actionList.innerHTML = scenario.actions
    .map((item) => `<li>${item}</li>`)
    .join("");

  agencyList.innerHTML = scenario.agencies
    .map(
      (agency) => `
        <article class="agency-card">
          <h4>${agency.name}</h4>
          <p>${agency.description}</p>
          <div class="agency-meta">
            ${agency.meta.map((tag) => `<span class="mini-tag">${tag}</span>`).join("")}
          </div>
          <div class="agency-actions">
            <span class="mini-action">전화 연결</span>
            <span class="mini-action">운영시간 보기</span>
            <span class="mini-action">지도 보기</span>
          </div>
        </article>
      `
    )
    .join("");

  extraList.innerHTML = scenario.extras
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderDocument(key) {
  const profile = documentProfiles[key] || documentProfiles.school;
  activeDocument = key;
  syncDocumentButtons(key);
  documentSummary.textContent = profile.summary;
  documentSimple.textContent = profile.simple;
  documentActionList.innerHTML = profile.actions
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function detectScenario(input) {
  const text = input.trim().toLowerCase();

  if (!text) {
    return activeScenario;
  }

  if (text.includes("월급") || text.includes("임금") || text.includes("노동") || text.includes("퇴직금")) {
    return "work";
  }
  if (text.includes("학교") || text.includes("준비물") || text.includes("가정통신문") || text.includes("아이")) {
    return "education";
  }
  if (text.includes("비자") || text.includes("출입국") || text.includes("등록") || text.includes("체류")) {
    return "visa";
  }
  if (text.includes("병원") || text.includes("건강") || text.includes("검사") || text.includes("진료")) {
    return "health";
  }
  if (text.includes("집") || text.includes("주거") || text.includes("생활") || text.includes("계약")) {
    return "housing";
  }
  if (text.includes("위험") || text.includes("폭력") || text.includes("응급") || text.includes("긴급")) {
    return "emergency";
  }

  return activeScenario;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

screenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.target);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedLanguageLabel.textContent = `현재 언어: ${button.dataset.language}`;
    showToast(`${button.dataset.language} 모드로 전환했습니다.`);
  });
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeScenario = button.dataset.category;
    renderScenario(activeScenario);
    showToast(`${button.textContent} 주제로 준비했습니다.`);
  });
});

sampleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    questionInput.value = button.textContent;
  });
});

analyzeButton.addEventListener("click", () => {
  const scenarioKey = detectScenario(questionInput.value);
  renderScenario(scenarioKey);
  showScreen("results");
});

documentFile.addEventListener("change", () => {
  const file = documentFile.files?.[0];
  fileName.textContent = file ? `${file.name} 업로드 준비 완료` : "업로드된 파일이 없어요.";
});

documentSamples.forEach((button) => {
  button.addEventListener("click", () => {
    renderDocument(button.dataset.document);
  });
});

analyzeDocumentButton.addEventListener("click", () => {
  renderDocument(activeDocument);
  showToast("문서 핵심 내용을 정리했습니다.");
});

phraseButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.textContent);
      showToast("문장을 복사했습니다.");
    } catch (error) {
      showToast("복사 권한이 없어 직접 보여주세요.");
    }
  });
});

emergencyButtons.forEach((button) => {
  if (button.tagName === "A") {
    return;
  }

  button.addEventListener("click", () => {
    showToast(`${button.textContent} 연결 화면을 준비 중입니다.`);
  });
});

saveActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(`${button.textContent} 기능을 시연용으로 표시했습니다.`);
  });
});

quickExit.addEventListener("click", () => {
  safeScreen.classList.remove("hidden");
});

returnButton.addEventListener("click", () => {
  safeScreen.classList.add("hidden");
});

renderScenario(activeScenario);
renderDocument(activeDocument);
