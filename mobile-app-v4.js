const languageOptions = [
  { code: "ko", label: "\uD55C\uAD6D\uC5B4", subtitle: "Korean" },
  { code: "en", label: "English", subtitle: "English" },
  { code: "zh", label: "\u4E2D\u6587", subtitle: "Chinese" },
  { code: "vi", label: "Ti\u1EBFng Vi\u1EC7t", subtitle: "Vietnamese" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", subtitle: "Russian" },
  { code: "uz", label: "O'zbekcha", subtitle: "Uzbek" }
];

const config = window.bridgeHelpV4Config || {};
const QR_TARGET_URL = config.QR_TARGET_URL || "https://yunbeeeen.github.io/bridgehelp-prototype/mobile-app-v4.html";
const translationMap = config.translationMap || { vi: {}, ru: {}, uz: {} };

function L(ko, en, zh, vi, ru, uz) {
  const value = { ko, en, zh };
  if (typeof vi !== "undefined") value.vi = vi;
  if (typeof ru !== "undefined") value.ru = ru;
  if (typeof uz !== "undefined") value.uz = uz;
  return value;
}

function pick(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (value[lang]) return value[lang];
  const fallbackKey = value.en || value.ko || "";
  return (translationMap[lang] && translationMap[lang][fallbackKey]) || fallbackKey;
}

const copyLabels = {
  hours: L("운영", "Hours", "时间", "Giờ", "Время", "Vaqt"),
  language: L("언어", "Language", "语言", "Ngôn ngữ", "Язык", "Til"),
  number: L("대표번호", "Number", "号码", "Số", "Номер", "Raqam")
};

const qrUi = config.qrUi || {
  title: L("QR로 모바일에서 열기", "Open on mobile with QR", "用二维码在手机打开", "Mo tren dien thoai bang QR", "Otkryt na telefone po QR", "QR orqali telefonda ochish"),
  copy: L("휴대폰 카메라로 스캔하면 모바일 프로토타입이 바로 열립니다.", "Scan with your phone camera to open the mobile prototype.", "用手机相机扫描后即可打开移动版原型。", "Quet bang camera dien thoai de mo ngay ban mau di dong.", "Skanirovat kameroy telefona, chtoby srazu otkryt mobilnyy prototip.", "Telefon kamerasi bilan skaner qilsangiz, mobil prototip darhol ochiladi."),
  fallback: L("이 브라우저에서는 QR 미리보기를 표시하지 못합니다.", "This browser cannot preview the QR code.", "此浏览器无法预览二维码。", "Trinh duyet nay khong the hien thi ma QR.", "Etoy brauzer ne mozhet pokazat QR-kod.", "Bu brauzer QR kodni ko'rsata olmaydi.")
};

const languageGateUi = {
  eyebrow: "BridgeHelp",
  title: "\uC5B8\uC5B4\uB97C \uC120\uD0DD\uD558\uC138\uC694\nChoose your language",
  copy: "\uC6D0\uD558\uB294 \uC5B8\uC5B4\uB97C \uB204\uB974\uBA74 \uBC14\uB85C \uC2DC\uC791\uB429\uB2C8\uB2E4.\nTap a language to enter the app."
};

const brandIntroUi = {
  eyebrow: "BridgeHelp",
  title: "BridgeHelp",
  copy: "MULTILINGUAL HELP, RIGHT AWAY"
};

const ui = {
  sideEyebrow: L("9:16 App Prototype V4", "9:16 App Prototype V4", "9:16 应用原型 V4"),
  sideTitle: L("BridgeHelp Call Flow", "BridgeHelp Call Flow", "BridgeHelp 通话流程"),
  sideCopy: L(
    "앱 안에서 먼저 확인하는 전화 팝업과 실제 언어 전환을 넣은 버전입니다.",
    "This version adds an in-app call popup and real language switching.",
    "这个版本加入了应用内通话弹窗和真实语言切换。",
    "Phiên bản này có popup gọi trong app và đổi ngôn ngữ thật.",
    "В этой версии есть окно звонка и реальная смена языка.",
    "Bu versiyada ichki qo'ng'iroq oynasi va haqiqiy til almashuvi bor."
  ),
  sidePoints: [
    { title: L("전화 팝업", "Call popup", "通话弹窗"), body: L("번호를 누르면 둥근 선택창이 먼저 뜹니다.", "Tap a number to open a rounded dialog first.", "点击号码后会先出现圆角弹窗。") },
    { title: L("언어 전환", "Language switch", "语言切换"), body: L("홈, 결과, 문서, 긴급 화면이 같이 바뀝니다.", "Home, result, docs, and urgent screens switch together.", "首页、结果、文档、紧急页面会一起切换。") },
    { title: L("짧은 흐름", "Simple flow", "简洁流程"), body: L("읽기보다 눌러서 바로 행동하게 구성했습니다.", "Built for quick taps instead of long reading.", "减少阅读，方便直接点击行动。") }
  ],
  linkV3: L("V3 보기", "Open V3", "打开 V3"),
  linkMobile: L("이전 모바일 보기", "Open previous mobile", "打开旧版移动端"),
  tabs: {
    home: L("홈", "Home", "首页", "Trang chủ", "Дом", "Bosh"),
    results: L("결과", "Result", "结果", "Kết quả", "Результат", "Natija"),
    document: L("문서", "Docs", "文档", "Tài liệu", "Док", "Hujjat"),
    emergency: L("긴급", "Urgent", "紧急", "Khẩn", "Срочно", "Shosh")
  },
  home: {
    label: L("홈", "Home", "首页", "Trang chủ", "Дом", "Bosh"),
    title: L("지금 어떤 도움이 필요하세요?", "What help do you need?", "你现在需要什么帮助？", "Bạn cần hỗ trợ gì?", "Какая помощь нужна?", "Qanday yordam kerak?"),
    emergencyButton: L("긴급", "Urgent", "紧急", "Khẩn", "Срочно", "Shosh"),
    hero: L("문제를 말하면 필요한 기관과 전화까지 바로 이어집니다.", "Tell us the problem and go straight to the right contact.", "只要说出问题，就能直接连接到合适的机构和电话。"),
    languageTitle: L("언어", "Language", "语言", "Ngôn ngữ", "Язык", "Til"),
    scenarioTitle: L("문제 선택", "Category", "问题分类", "Loại vấn đề", "Категория", "Toifa"),
    questionTitle: L("질문", "Question", "提问", "Câu hỏi", "Вопрос", "Savol"),
    questionSubtitle: L("짧게 입력", "Type briefly", "简短输入", "Nhập ngắn", "Кратко", "Qisqa"),
    placeholder: L("예: 월급을 못 받았어요", "Example: I did not get paid", "例如：我没有拿到工资", "Ví dụ: tôi chưa được trả lương", "Например: мне не выплатили зарплату", "Masalan: menga ish haqi berilmadi"),
    submit: L("도움 보기", "Show help", "查看帮助", "Xem hỗ trợ", "Показать", "Ko'rish")
  },
  results: {
    label: L("결과", "Result", "结果", "Kết quả", "Результат", "Natija"),
    title: L("지금 할 일", "What to do now", "现在该做什么", "Việc cần làm", "Что делать", "Hozir nima qilish"),
    edit: L("질문 수정", "Edit", "修改", "Sửa", "Изменить", "Tahrir"),
    badge: L("AI 요약", "AI Summary", "AI 摘要", "AI", "AI", "AI"),
    actionsTitle: L("바로 할 일", "Next steps", "下一步", "Bước tiếp theo", "Шаги", "Qadamlar"),
    actionsSub: L("3단계", "3 steps", "3步", "3 bước", "3 шага", "3 qadam"),
    contactsTitle: L("바로 전화", "Call now", "立即拨打", "Gọi ngay", "Позвонить", "Qo'ng'iroq"),
    contactsSub: L("앱 안에서 먼저 확인", "Confirm in app first", "先在应用内确认", "Xác nhận trong app", "Сначала подтвердите в приложении", "Avval ilovada tasdiqlang"),
    notesTitle: L("짧은 메모", "Notes", "注意事项", "Lưu ý", "Важно", "Eslatma"),
    notesSub: L("한눈에", "Quick view", "一眼查看", "Nhanh", "Коротко", "Tez"),
    call: L("전화하기", "Call", "拨打", "Gọi", "Позвонить", "Qo'ng'iroq"),
    info: L("자세히", "Info", "详情", "Chi tiết", "Подробнее", "Batafsil")
  },
  document: {
    label: L("문서", "Docs", "文档", "Tài liệu", "Док", "Hujjat"),
    title: L("사진 찍으면 바로 이해", "Understand with one photo", "拍照后马上理解", "Hiểu bằng ảnh", "Понять по фото", "Rasm bilan tushunish"),
    back: L("결과로", "To result", "返回结果", "Về kết quả", "К результату", "Natijaga"),
    kindTitle: L("문서 종류", "Document type", "文档类型", "Loại tài liệu", "Тип документа", "Hujjat turi"),
    uploadTitle: L("파일 올리기", "Upload file", "上传文件", "Tải tệp", "Загрузить", "Yuklash"),
    uploadEmpty: L("파일 없음", "No file", "没有文件", "Chưa có tệp", "Нет файла", "Fayl yo'q"),
    uploadButton: L("문서 선택", "Choose file", "选择文件", "Chọn tệp", "Выбрать файл", "Tanlash"),
    analyze: L("문서 해석", "Analyze", "文档解读", "Phân tích", "Разобрать", "Tahlil"),
    summaryTitle: L("요약", "Summary", "摘要"),
    simpleTitle: L("쉬운 말", "Easy words", "简单说明"),
    actionsTitle: L("해야 할 일", "To do", "需要做的事"),
    waitSummary: L("문서를 고르고 해석 버튼을 눌러보세요.", "Choose a file and tap analyze.", "选择文件并点击解读。"),
    waitSimple: L("복잡한 문장을 더 쉬운 표현으로 바꿔줍니다.", "Complex text will be rewritten in simpler words.", "复杂文字会改成更容易理解的表达。"),
    waitAction: L("기한, 제출처, 준비물을 같이 정리합니다.", "Deadlines and items will be listed together.", "会一起整理截止日期和准备物品。")
  },
  emergency: {
    label: L("긴급", "Urgent", "紧急", "Khẩn", "Срочно", "Shosh"),
    title: L("지금 바로 도움받기", "Get help now", "立即获得帮助", "Nhận hỗ trợ ngay", "Помощь сейчас", "Hozir yordam"),
    privacy: L("빠른 종료", "Quick exit", "快速退出", "Thoát nhanh", "Быстрый выход", "Tez yopish"),
    phraseTitle: L("바로 보여줄 문장", "Show this phrase", "立即展示的句子", "Câu để đưa", "Покажите фразу", "Ko'rsatish uchun gap"),
    phraseSub: L("누르면 복사", "Tap to copy", "点击复制", "Chạm để sao chép", "Нажмите, чтобы скопировать", "Bosib nusxa olish")
  }
};
const overlays = {
  loadingQuestionTitle: L("도움 정리 중", "Preparing help", "正在整理帮助"),
  loadingQuestionDesc: L("지금 필요한 행동과 연락처를 고르고 있어요.", "We are preparing actions and contacts.", "正在整理行动和联系方式。"),
  loadingDocumentTitle: L("문서 해석 중", "Reading document", "正在解读文档"),
  loadingDocumentDesc: L("짧은 요약과 해야 할 일을 만들고 있어요.", "We are making a short summary and to-do list.", "正在生成摘要和待办事项。"),
  privacyEyebrow: L("Privacy", "Privacy", "隐私"),
  privacyTitle: L("일반 화면으로 전환했습니다.", "Switched to a neutral screen.", "已切换到普通画面。"),
  privacyReturn: L("돌아가기", "Back", "返回"),
  callLabel: L("전화 연결", "Call options", "通话选项"),
  callConfirm: L("전화 걸기", "Make a call", "拨打电话"),
  callSave: L("번호 저장하기", "Save number", "保存号码"),
  callCancel: L("취소", "Cancel", "取消"),
  infoClose: L("닫기", "Close", "关闭"),
  toastSaved: L("번호를 복사했어요.", "Number copied.", "号码已复制。"),
  toastCall: L("전화 앱으로 이동합니다.", "Opening phone app.", "正在打开电话应用。"),
  toastLang: L("언어가 바뀌었습니다.", "Language changed.", "语言已切换。"),
  toastPhrase: L("문장을 복사했어요.", "Phrase copied.", "句子已复制。"),
  toastFile: L("파일을 준비했어요.", "File ready.", "文件已准备好。"),
  toastQuestion: L("도움 정리가 끝났어요.", "Help is ready.", "帮助已整理完成。"),
  toastDocument: L("문서 해석이 끝났어요.", "Document is ready.", "文档解读已完成。")
};

const scenarioData = {
  work: {
    label: L("일자리·노동", "Jobs & Labor", "工作与劳动"),
    summary: L("임금체불과 노동 상담이 필요해요.", "You need wage and labor support.", "你需要工资和劳动帮助。"),
    actions: [L("급여 기록 모으기", "Collect pay records", "收集工资记录"), L("근무 날짜 정리", "List work dates", "整理上班日期"), L("상담 번호로 바로 설명", "Call and explain briefly", "拨打热线简短说明")],
    notes: [L("증거 먼저", "Collect proof first", "先收集证据"), L("오늘 날짜 메모", "Note today's date", "记下今天日期"), L("방문 필요 여부 확인", "Check if a visit is needed", "确认是否需要到访")],
    contacts: [
      { name: L("고용노동부 고객상담센터", "MOEL Call Center", "雇佣劳动部客服中心"), desc: L("임금체불·해고·산재 상담", "Wage, dismissal, labor issues", "工资、解雇、工伤咨询"), info: L("1350으로 임금체불, 해고, 산재 문의를 할 수 있습니다.", "Call 1350 for wage, dismissal, and labor questions.", "可拨打1350咨询工资、解雇和工伤问题。"), hours: L("평일 안내 중심", "Weekday guidance", "工作日咨询"), languages: L("한국어 중심", "Mostly Korean", "以韩语为主"), phoneDisplay: "1350", phoneDial: "1350" },
      { name: L("다누리콜센터", "Danuri Multilingual Center", "Danuri 多语种中心"), desc: L("다국어 생활 상담", "Multilingual support", "多语种生活咨询"), info: L("1577-1366은 외국인 주민과 다문화가정을 위한 다국어 상담을 제공합니다.", "1577-1366 provides multilingual help for foreign residents.", "1577-1366 为外国居民提供多语种咨询。"), hours: L("24시간", "24/7", "24小时"), languages: L("영어·중국어·베트남어 등", "English, Chinese, Vietnamese and more", "提供英语、中文、越南语等"), phoneDisplay: "1577-1366", phoneDial: "15771366" }
    ]
  },
  visa: {
    label: L("비자·출입국", "Visa & Immigration", "签证与出入境"),
    summary: L("비자 연장 절차 확인이 필요해요.", "You need visa extension guidance.", "你需要确认签证延期流程。"),
    actions: [L("비자 만료일 확인", "Check visa expiry", "确认签证到期日"), L("여권과 등록증 준비", "Prepare passport and ID", "准备护照和证件"), L("예약 필요 여부 확인", "Check reservation needs", "确认是否需要预约")],
    notes: [L("만료일 놓치지 않기", "Do not miss the deadline", "不要错过到期日"), L("원본 서류 준비", "Bring original documents", "准备原件"), L("방문 전 전화", "Call before visiting", "到访前先打电话")],
    contacts: [
      { name: L("출입국·외국인종합안내센터", "Immigration Contact Center", "出入境综合咨询中心"), desc: L("비자·체류·등록 상담", "Visa and stay support", "签证、居留、登记咨询"), info: L("1345로 비자, 체류 자격, 외국인등록 문의를 할 수 있습니다.", "Call 1345 for visa, stay, and registration questions.", "签证、居留和登记问题可拨打1345。"), hours: L("안내센터 운영시간 기준", "Based on contact-center hours", "按咨询中心工作时间"), languages: L("다국어 안내 지원", "Multilingual guidance", "支持多语种咨询"), phoneDisplay: "1345", phoneDial: "1345" },
      { name: L("다누리콜센터", "Danuri Multilingual Center", "Danuri 多语种中心"), desc: L("언어 지원", "Language support", "语言支持"), info: L("절차가 어렵다면 1577-1366으로 다국어 도움을 받을 수 있습니다.", "If the process feels hard, 1577-1366 can help in multiple languages.", "如果流程太复杂，可拨打1577-1366获取多语种帮助。"), hours: L("24시간", "24/7", "24小时"), languages: L("영어·중국어·베트남어 등", "English, Chinese, Vietnamese and more", "提供英语、中文、越南语等"), phoneDisplay: "1577-1366", phoneDial: "15771366" }
    ]
  },
  health: {
    label: L("병원·건강", "Health", "医院与健康"),
    summary: L("병원 방문 준비와 통역 지원이 필요해요.", "You need hospital prep and language support.", "你需要就医准备和语言支持。"),
    actions: [L("증상과 날짜 적기", "Write symptoms and dates", "记下症状和日期"), L("예약 문자 챙기기", "Keep booking messages", "保留预约短信"), L("통역 필요하면 먼저 말하기", "Mention interpreter needs early", "如果需要翻译请先说明")],
    notes: [L("예약 시간 확인", "Check the booking time", "确认预约时间"), L("복용 약 확인", "Check current medicine", "确认正在服用的药"), L("필요한 문서 준비", "Prepare needed papers", "准备需要的文件")],
    contacts: [
      { name: L("보건복지상담센터", "Welfare and Health Call Center", "保健福祉咨询中心"), desc: L("보건·복지·긴급 지원 안내", "Health and welfare guidance", "保健、福利、紧急支援咨询"), info: L("129는 보건, 복지, 긴급 지원 관련 기본 안내를 제공합니다.", "Call 129 for health, welfare, and urgent-support guidance.", "129 提供保健、福利和紧急支援咨询。"), hours: L("대표 콜센터 안내", "Public hotline guidance", "公共热线咨询"), languages: L("한국어 중심", "Mostly Korean", "以韩语为主"), phoneDisplay: "129", phoneDial: "129" },
      { name: L("다누리콜센터", "Danuri Multilingual Center", "Danuri 多语种中心"), desc: L("의료 안내 통역 도움", "Language help for medical visits", "就医语言帮助"), info: L("병원 안내문이 어렵다면 1577-1366으로 다국어 상담을 받을 수 있습니다.", "If hospital notices are difficult, 1577-1366 can help in multiple languages.", "如果医院通知难理解，可拨打1577-1366获取多语种帮助。"), hours: L("24시간", "24/7", "24小时"), languages: L("영어·중국어·베트남어 등", "English, Chinese, Vietnamese and more", "提供英语、中文、越南语等"), phoneDisplay: "1577-1366", phoneDial: "15771366" }
    ]
  }
};
Object.assign(scenarioData, {
  education: {
    label: L("아이 학교·교육", "School & Education", "孩子学校与教育"),
    summary: L("학교 안내와 준비물 확인이 필요해요.", "You need help understanding school notices.", "你需要理解学校通知和准备物品。"),
    actions: [L("가정통신문 사진 찍기", "Take a photo of the notice", "拍下学校通知"), L("준비물과 날짜 체크", "Check supplies and dates", "确认准备物品和日期"), L("이해 안 되면 바로 묻기", "Call if anything is unclear", "不明白时可直接拨打咨询")],
    notes: [L("준비물 먼저", "Check supplies first", "先看准备物品"), L("마감 날짜 표시", "Mark the due date", "标出截止日期"), L("보호자 전달", "Share with guardian", "转达给监护人")],
    contacts: [
      { name: L("다누리콜센터", "Danuri Multilingual Center", "Danuri 多语种中心"), desc: L("학교 안내문 다국어 상담", "School-notice language help", "学校通知多语种咨询"), info: L("1577-1366은 학교 안내문, 생활 정보, 통역이 필요한 상황을 도와줍니다.", "1577-1366 can help with school notices and language support.", "1577-1366 可帮助理解学校通知和语言问题。"), hours: L("24시간", "24/7", "24小时"), languages: L("영어·중국어·베트남어 등", "English, Chinese, Vietnamese and more", "提供英语、中文、越南语等"), phoneDisplay: "1577-1366", phoneDial: "15771366" },
      { name: L("정부민원안내콜센터", "Government Help 110", "政府民愿咨询中心"), desc: L("행정 안내·기관 연결", "Government guidance", "行政咨询与机构连接"), info: L("110은 행정기관 문의와 기본 연결을 돕는 대표전화입니다.", "110 is a public hotline for general government guidance.", "110 是政府行政咨询与转接的代表电话。"), hours: L("365일 24시간", "24/7", "365天24小时"), languages: L("전화·채팅 등 제공", "Phone and chat support", "提供电话和聊天咨询"), phoneDisplay: "110", phoneDial: "110" }
    ]
  },
  housing: {
    label: L("주거·생활", "Housing & Daily Life", "住房与生活"),
    summary: L("주거와 생활 지원 연결이 필요해요.", "You need housing or daily-life support.", "你需要住房或生活支援。"),
    actions: [L("문제를 한 줄로 정리", "Write the issue in one line", "用一句话整理问题"), L("현재 지역 메모", "Note your area", "记下所在地区"), L("상담 후 기관 연결", "Call and ask for the right office", "咨询后转接到合适机构")],
    notes: [L("지역 정보 준비", "Prepare area info", "准备地区信息"), L("방문 전 전화", "Call before visiting", "到访前先打电话"), L("지원 대상 확인", "Check eligibility", "确认资格")],
    contacts: [
      { name: L("보건복지상담센터", "Welfare Call Center", "保健福祉咨询中心"), desc: L("생계·주거·복지 상담", "Daily-life and welfare support", "生活、住房、福利咨询"), info: L("129는 생활 곤란, 복지, 긴급 지원 관련 기본 상담을 제공합니다.", "Call 129 for daily-life, welfare, and urgent-support guidance.", "129 提供生活困难、福利和紧急支援咨询。"), hours: L("대표 콜센터 안내", "Public hotline guidance", "公共热线咨询"), languages: L("한국어 중심", "Mostly Korean", "以韩语为主"), phoneDisplay: "129", phoneDial: "129" },
      { name: L("정부민원안내콜센터", "Government Help 110", "政府民愿咨询中心"), desc: L("행정기관 안내·연결", "Government office guidance", "行政机构咨询与连接"), info: L("110은 주민센터나 관련 기관을 찾을 때 기본 연결에 도움이 됩니다.", "Call 110 if you need the right government office or community center.", "如果需要找到相关政府机构或居民中心，可拨打110。"), hours: L("365일 24시간", "24/7", "365天24小时"), languages: L("전화·채팅 등 제공", "Phone and chat support", "提供电话和聊天咨询"), phoneDisplay: "110", phoneDial: "110" }
    ]
  },
  emergency: {
    label: L("긴급 도움", "Urgent Help", "紧急帮助"),
    summary: L("지금 바로 사람과 연결이 필요해요.", "You need immediate help now.", "你现在需要立即联系人工帮助。"),
    actions: [L("안전한 곳으로 이동", "Move to a safer place", "移动到安全地点"), L("맞는 번호로 바로 전화", "Call the right number now", "立刻拨打合适号码"), L("짧은 문장 보여주기", "Show a short phrase if needed", "必要时直接展示短句")],
    notes: [L("짧게 말해도 괜찮음", "Short words are okay", "简短说明也可以"), L("위치 먼저 알리기", "Share location first", "先告知位置"), L("빠른 종료 가능", "Quick exit available", "支持快速退出")],
    contacts: [
      { name: L("긴급신고", "Emergency 112", "紧急报警112"), desc: L("위험·폭력·범죄 상황", "Danger, violence, crime", "危险、暴力、犯罪"), info: L("위험하거나 폭력, 범죄 상황이면 112로 바로 연결하세요.", "Use 112 immediately in danger, violence, or crime situations.", "遇到危险、暴力或犯罪时请立即拨打112。"), hours: L("24시간", "24/7", "24小时"), languages: L("긴급 대응", "Emergency response", "紧急应对"), phoneDisplay: "112", phoneDial: "112" },
      { name: L("응급의료·소방", "Emergency 119", "急救消防119"), desc: L("응급 의료·화재", "Medical emergency and fire", "医疗急救与火灾"), info: L("응급 의료나 화재 상황이면 119로 바로 연결하세요.", "Use 119 for medical emergencies or fire.", "医疗急救或火灾时请拨打119。"), hours: L("24시간", "24/7", "24小时"), languages: L("긴급 대응", "Emergency response", "紧急应对"), phoneDisplay: "119", phoneDial: "119" },
      { name: L("여성긴급전화 1366", "Women 1366", "女性紧急热线1366"), desc: L("폭력 피해 상담·보호", "Violence support and protection", "暴力受害咨询与保护"), info: L("1366은 폭력 피해 상담과 긴급보호 연계를 24시간 지원합니다.", "1366 provides crisis support and protection linkage 24 hours a day.", "1366 提供24小时危机咨询与保护联动。"), hours: L("365일 24시간", "24/7", "365天24小时"), languages: L("상담·보호 연계", "Counseling and protection linkage", "咨询与保护联动"), phoneDisplay: "1366", phoneDial: "1366" }
    ]
  }
});

const documentData = {
  school: { label: L("학교 안내문", "School notice", "学校通知"), summary: L("준비물과 제출 날짜를 알려주는 안내문입니다.", "This notice explains supplies and a due date.", "这是说明准备物品和提交日期的通知。"), simple: L("무엇을 챙기고 언제까지 내야 하는지만 먼저 보면 됩니다.", "First check what to bring and when to submit it.", "先看需要准备什么以及何时提交。"), actions: [L("준비물 체크", "Check supplies", "确认准备物品"), L("보호자 확인", "Share with guardian", "与监护人确认"), L("날짜 저장", "Save the date", "保存日期")] },
  hospital: { label: L("병원 안내문", "Hospital notice", "医院通知"), summary: L("검사 전 준비와 방문 시간을 알려주는 문서입니다.", "This document explains test preparation and visit time.", "这份文件说明检查前准备和到访时间。"), simple: L("금식 여부, 검사 시간, 가져갈 서류만 먼저 확인하면 됩니다.", "Check fasting rules, time, and documents first.", "先确认是否禁食、检查时间和文件。"), actions: [L("방문 시간 확인", "Check visit time", "确认到访时间"), L("준비물 확인", "Check what to bring", "确认需要携带的物品"), L("약 복용 문의", "Ask about medicine", "咨询用药") ] },
  immigration: { label: L("출입국 공지", "Immigration notice", "出入境公告"), summary: L("신청 일정과 필요한 서류를 안내하는 문서입니다.", "This notice explains dates and required documents.", "这份通知说明申请时间和所需材料。"), simple: L("마감일과 준비 서류를 먼저 보면 흐름을 잡기 쉽습니다.", "Start with the deadline and document list.", "先看截止日期和材料清单会更容易。"), actions: [L("마감일 확인", "Check deadline", "确认截止日期"), L("여권·등록증 준비", "Prepare passport and ID", "准备护照和证件"), L("예약 여부 확인", "Check reservation", "确认是否预约")] },
  community: { label: L("주민센터 안내", "Community-center notice", "居民中心通知"), summary: L("신청 방법과 제출 서류를 알려주는 안내문입니다.", "This paper explains how to apply and what to submit.", "这份文件说明申请方式和提交材料。"), simple: L("신청 대상인지와 필요한 증빙만 먼저 보면 됩니다.", "First check eligibility and proof documents.", "先确认自己是否符合条件以及需要哪些证明。"), actions: [L("대상 여부 확인", "Check eligibility", "确认是否符合条件"), L("증빙 준비", "Prepare proof", "准备证明材料"), L("방문 시간 확인", "Check visit time", "确认到访时间")] }
};

const samplePrompts = [
  { scenario: "work", text: L("월급을 못 받았어요", "I did not get paid", "我没有拿到工资") },
  { scenario: "education", text: L("아이 학교 준비물이 궁금해요", "I need school supply help", "我想知道孩子学校的准备物品") },
  { scenario: "visa", text: L("비자 연장은 어떻게 하나요?", "How do I extend my visa?", "签证延期怎么办？") }
];

const emergencyQuickCalls = [
  { title: L("긴급 신고", "Emergency", "紧急报警"), number: "112", dial: "112", urgent: true },
  { title: L("응급 의료", "Medical", "医疗急救"), number: "119", dial: "119" },
  { title: L("다국어 상담", "Multilingual", "多语种咨询"), number: "1577-1366", dial: "15771366" },
  { title: L("법률 지원", "Legal Aid", "法律援助"), number: "132", dial: "132" },
  { title: L("노동 상담", "Labor Help", "劳动咨询"), number: "1350", dial: "1350" },
  { title: L("보호 지원", "Protection", "保护支援"), number: "1366", dial: "1366" }
];

const phraseData = [
  L("통역이 필요합니다.", "I need an interpreter.", "我需要翻译。"),
  L("도움이 필요합니다.", "I need help.", "我需要帮助。"),
  L("임금을 받지 못했습니다.", "I have not been paid.", "我没有拿到工资。"),
  L("지금 위험한 상황입니다.", "I am in danger now.", "我现在有危险。")
];

const appState = {
  currentTab: "home",
  bootState: "splash",
  selectedLanguage: "ko",
  selectedScenario: "work",
  selectedDocument: "school",
  analysisState: "idle",
  isPrivacyMode: false,
  activeSheet: null,
  question: "",
  documentFileName: "",
  resultReady: false,
  documentReady: false
};

const elements = {
  qrTitle: document.getElementById("qr-title"), qrCopy: document.getElementById("qr-copy"), qrCode: document.getElementById("qr-code"), qrUrl: document.getElementById("qr-url"),
  screens: Array.from(document.querySelectorAll("[data-screen]")),
  navTabs: Array.from(document.querySelectorAll(".bottom-nav [data-tab]")),
  sideEyebrow: document.getElementById("side-eyebrow"), sideTitle: document.getElementById("side-title"), sideCopy: document.getElementById("side-copy"), sidePoints: document.getElementById("side-points"), linkV3: document.getElementById("link-v3"), linkMobile: document.getElementById("link-mobile"),
  homeLabel: document.getElementById("home-label"), homeTitle: document.getElementById("home-title"), homeEmergencyButton: document.getElementById("home-emergency-button"), homeHero: document.getElementById("home-hero"), languageTitle: document.getElementById("language-title"), languageCurrent: document.getElementById("language-current"), languageRow: document.getElementById("language-row"), scenarioTitle: document.getElementById("scenario-title"), scenarioCurrent: document.getElementById("scenario-current"), scenarioGrid: document.getElementById("scenario-grid"), questionTitle: document.getElementById("question-title"), questionSubtitle: document.getElementById("question-subtitle"), questionInput: document.getElementById("question-input-v4"), sampleRow: document.getElementById("sample-row"), questionSubmit: document.getElementById("question-submit"),
  resultsLabel: document.getElementById("results-label"), resultsTitle: document.getElementById("results-title"), resultsEditButton: document.getElementById("results-edit-button"), resultsBadge: document.getElementById("results-badge"), resultsSummary: document.getElementById("results-summary"), actionsTitle: document.getElementById("actions-title"), actionsSubtitle: document.getElementById("actions-subtitle"), actionsList: document.getElementById("actions-list"), contactsTitle: document.getElementById("contacts-title"), contactsSubtitle: document.getElementById("contacts-subtitle"), contactStack: document.getElementById("contact-stack"), notesTitle: document.getElementById("notes-title"), notesSubtitle: document.getElementById("notes-subtitle"), notesList: document.getElementById("notes-list"),
  documentLabel: document.getElementById("document-label"), documentTitle: document.getElementById("document-title"), documentBackButton: document.getElementById("document-back-button"), documentKindTitle: document.getElementById("document-kind-title"), documentCurrent: document.getElementById("document-current"), documentRow: document.getElementById("document-row"), uploadTitle: document.getElementById("upload-title"), uploadStatus: document.getElementById("upload-status"), uploadButtonLabel: document.getElementById("upload-button-label"), documentFile: document.getElementById("document-file-v4"), documentSubmit: document.getElementById("document-submit"), docSummaryTitle: document.getElementById("doc-summary-title"), docSummary: document.getElementById("doc-summary"), docSimpleTitle: document.getElementById("doc-simple-title"), docSimple: document.getElementById("doc-simple"), docActionsTitle: document.getElementById("doc-actions-title"), docActions: document.getElementById("doc-actions"),
  emergencyLabel: document.getElementById("emergency-label"), emergencyTitle: document.getElementById("emergency-title"), privacyButton: document.getElementById("privacy-button"), emergencyGrid: document.getElementById("emergency-grid"), phraseTitle: document.getElementById("phrase-title"), phraseSubtitle: document.getElementById("phrase-subtitle"), phraseGrid: document.getElementById("phrase-grid"),
  brandOverlay: document.getElementById("brand-overlay"), brandIntroEyebrow: document.getElementById("brand-intro-eyebrow"), brandIntroTitle: document.getElementById("brand-intro-title"), brandIntroCopy: document.getElementById("brand-intro-copy"), languageOverlay: document.getElementById("language-overlay"), languageGateEyebrow: document.getElementById("language-gate-eyebrow"), languageGateTitle: document.getElementById("language-gate-title"), languageGateCopy: document.getElementById("language-gate-copy"), languageGateList: document.getElementById("language-gate-list"), loadingOverlay: document.getElementById("loading-overlay"), loadingTitle: document.getElementById("loading-title"), loadingDescription: document.getElementById("loading-description"), privacyOverlay: document.getElementById("privacy-overlay"), privacyEyebrow: document.getElementById("privacy-eyebrow"), privacyTitle: document.getElementById("privacy-title"), privacyReturn: document.getElementById("privacy-return"), callOverlay: document.getElementById("call-overlay"), callModalLabel: document.getElementById("call-modal-label"), callModalNumber: document.getElementById("call-modal-number"), callModalName: document.getElementById("call-modal-name"), callConfirm: document.getElementById("call-confirm"), callSave: document.getElementById("call-save"), callCancel: document.getElementById("call-cancel"), infoOverlay: document.getElementById("info-overlay"), infoTitle: document.getElementById("info-title"), infoBody: document.getElementById("info-body"), infoClose: document.getElementById("info-close"), toast: document.getElementById("toast-v4")
};
let launchTimer = null;
let analysisTimer = null;
let toastTimer = null;

function t(value) { return pick(value, appState.selectedLanguage); }
function currentLanguageLabel() { return (languageOptions.find((item) => item.code === appState.selectedLanguage) || languageOptions[1]).label; }
function setState(patch) { Object.assign(appState, patch); render(); }
function toggleHidden(node, hidden) { node.classList.toggle("hidden", hidden); }

function detectScenario(text) {
  const source = text.trim().toLowerCase();
  if (!source) return appState.selectedScenario;
  const rules = [
    ["emergency", ["긴급", "위험", "폭력", "신고", "응급", "emergency", "danger", "violence", "police"]],
    ["work", ["월급", "임금", "급여", "노동", "근무", "산재", "해고", "salary", "wage", "labor", "paid", "work"]],
    ["visa", ["비자", "체류", "연장", "출입국", "등록", "visa", "immigration", "stay", "permit"]],
    ["health", ["병원", "건강", "진료", "검사", "약", "hospital", "health", "clinic", "sick"]],
    ["education", ["학교", "교육", "준비물", "가정통신문", "school", "teacher", "child", "class"]],
    ["housing", ["주거", "집", "월세", "전세", "생활", "주민센터", "housing", "rent", "home", "living"]]
  ];
  const found = rules.find((entry) => entry[1].some((word) => source.includes(word)));
  return found ? found[0] : appState.selectedScenario;
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("show"), 1800);
}

function triggerDial(number) {
  const dial = String(number).replace(/[^\d+]/g, "");
  const link = document.createElement("a");
  link.href = `tel:${dial}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function openCallSheet(item) {
  setState({ activeSheet: { type: "call", name: t(item.name || item.title), phoneDisplay: item.phoneDisplay || item.number, phoneDial: item.phoneDial || item.dial || item.number } });
}

function openInfoSheet(item) {
  const body = [t(item.info), `${t(copyLabels.hours)}: ${t(item.hours)}`, `${t(copyLabels.language)}: ${t(item.languages)}`].join("\n");
  setState({ activeSheet: { type: "info", title: t(item.name), body } });
}

function renderQrCard() {
  if (!elements.qrTitle || !elements.qrCopy || !elements.qrCode || !elements.qrUrl) return;
  elements.qrTitle.textContent = t(qrUi.title);
  elements.qrCopy.textContent = t(qrUi.copy);
  elements.qrUrl.textContent = QR_TARGET_URL;
  elements.qrUrl.title = QR_TARGET_URL;
  if (typeof qrcode !== "function") {
    elements.qrCode.innerHTML = `<span class="qr-fallback">${t(qrUi.fallback)}</span>`;
    return;
  }
  if (qrcode.stringToBytesFuncs && qrcode.stringToBytesFuncs["UTF-8"]) {
    qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
  }
  const qr = qrcode(0, "M");
  qr.addData(QR_TARGET_URL);
  qr.make();
  elements.qrCode.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true, title: t(qrUi.title) });
}

function renderSide() {
  document.documentElement.lang = appState.selectedLanguage;
  elements.sideEyebrow.textContent = t(ui.sideEyebrow);
  elements.sideTitle.textContent = t(ui.sideTitle);
  elements.sideCopy.textContent = t(ui.sideCopy);
  elements.linkV3.textContent = t(ui.linkV3);
  elements.linkMobile.textContent = t(ui.linkMobile);
  elements.sidePoints.innerHTML = ui.sidePoints.map((item) => `<article class="side-point"><strong>${t(item.title)}</strong><span>${t(item.body)}</span></article>`).join("");
}

function renderTabs() {
  elements.navTabs.forEach((button) => { const tab = button.dataset.tab; button.textContent = t(ui.tabs[tab]); button.classList.toggle("active", appState.currentTab === tab); });
  elements.screens.forEach((screen) => screen.classList.toggle("active", screen.dataset.screen === appState.currentTab));
}

function renderHome() {
  elements.homeLabel.textContent = t(ui.home.label);
  elements.homeTitle.textContent = t(ui.home.title);
  elements.homeEmergencyButton.textContent = t(ui.home.emergencyButton);
  elements.homeHero.textContent = t(ui.home.hero);
  elements.languageTitle.textContent = t(ui.home.languageTitle);
  elements.languageCurrent.textContent = currentLanguageLabel();
  elements.scenarioTitle.textContent = t(ui.home.scenarioTitle);
  elements.scenarioCurrent.textContent = t(scenarioData[appState.selectedScenario].label);
  elements.questionTitle.textContent = t(ui.home.questionTitle);
  elements.questionSubtitle.textContent = t(ui.home.questionSubtitle);
  elements.questionSubmit.textContent = t(ui.home.submit);
  elements.questionInput.placeholder = t(ui.home.placeholder);
  if (document.activeElement !== elements.questionInput) elements.questionInput.value = appState.question;
  elements.languageRow.innerHTML = languageOptions.map((item) => `<button class="chip-button ${item.code === appState.selectedLanguage ? "active" : ""}" data-language="${item.code}">${item.label}</button>`).join("");
  elements.scenarioGrid.innerHTML = Object.entries(scenarioData).map(([key, item]) => `<button class="category-button ${key === appState.selectedScenario ? "active" : ""}" data-scenario="${key}">${t(item.label)}</button>`).join("");
  elements.sampleRow.innerHTML = samplePrompts.map((item, index) => `<button class="chip-button" data-sample-index="${index}">${t(item.text)}</button>`).join("");
}

function renderResults() {
  const scenario = scenarioData[appState.selectedScenario];
  elements.resultsLabel.textContent = t(ui.results.label);
  elements.resultsTitle.textContent = t(ui.results.title);
  elements.resultsEditButton.textContent = t(ui.results.edit);
  elements.resultsBadge.textContent = t(ui.results.badge);
  elements.resultsSummary.textContent = t(scenario.summary);
  elements.actionsTitle.textContent = t(ui.results.actionsTitle);
  elements.actionsSubtitle.textContent = t(ui.results.actionsSub);
  elements.contactsTitle.textContent = t(ui.results.contactsTitle);
  elements.contactsSubtitle.textContent = t(ui.results.contactsSub);
  elements.notesTitle.textContent = t(ui.results.notesTitle);
  elements.notesSubtitle.textContent = t(ui.results.notesSub);
  elements.actionsList.innerHTML = scenario.actions.map((item) => `<li>${t(item)}</li>`).join("");
  elements.contactStack.innerHTML = scenario.contacts.map((item, index) => `<article class="contact-card"><div class="contact-top"><div><span class="contact-name">${t(item.name)}</span><span class="call-desc">${t(item.desc)}</span></div></div><div class="call-line"><span>${t(copyLabels.number)}</span><strong>${item.phoneDisplay}</strong></div><div class="contact-actions"><button class="call-action" data-contact-call="${index}">${t(ui.results.call)}</button><button class="info-action" data-contact-info="${index}">${t(ui.results.info)}</button></div></article>`).join("");
  elements.notesList.innerHTML = scenario.notes.map((item) => `<span class="tag">${t(item)}</span>`).join("");
}

function renderDocument() {
  const doc = documentData[appState.selectedDocument];
  elements.documentLabel.textContent = t(ui.document.label);
  elements.documentTitle.textContent = t(ui.document.title);
  elements.documentBackButton.textContent = t(ui.document.back);
  elements.documentKindTitle.textContent = t(ui.document.kindTitle);
  elements.documentCurrent.textContent = t(doc.label);
  elements.uploadTitle.textContent = t(ui.document.uploadTitle);
  elements.uploadStatus.textContent = appState.documentFileName || t(ui.document.uploadEmpty);
  elements.uploadButtonLabel.textContent = t(ui.document.uploadButton);
  elements.documentSubmit.textContent = t(ui.document.analyze);
  elements.docSummaryTitle.textContent = t(ui.document.summaryTitle);
  elements.docSimpleTitle.textContent = t(ui.document.simpleTitle);
  elements.docActionsTitle.textContent = t(ui.document.actionsTitle);
  elements.documentRow.innerHTML = Object.entries(documentData).map(([key, item]) => `<button class="chip-button ${key === appState.selectedDocument ? "active" : ""}" data-document="${key}">${t(item.label)}</button>`).join("");
  if (appState.documentReady) {
    elements.docSummary.textContent = t(doc.summary);
    elements.docSimple.textContent = t(doc.simple);
    elements.docActions.innerHTML = doc.actions.map((item) => `<li>${t(item)}</li>`).join("");
  } else {
    elements.docSummary.textContent = t(ui.document.waitSummary);
    elements.docSimple.textContent = t(ui.document.waitSimple);
    elements.docActions.innerHTML = `<li>${t(ui.document.waitAction)}</li>`;
  }
}

function renderEmergency() {
  elements.emergencyLabel.textContent = t(ui.emergency.label);
  elements.emergencyTitle.textContent = t(ui.emergency.title);
  elements.privacyButton.textContent = t(ui.emergency.privacy);
  elements.phraseTitle.textContent = t(ui.emergency.phraseTitle);
  elements.phraseSubtitle.textContent = t(ui.emergency.phraseSub);
  elements.emergencyGrid.innerHTML = emergencyQuickCalls.map((item, index) => `<button class="quick-call ${item.urgent ? "urgent" : ""}" data-quick-call="${index}"><span>${item.number}</span><strong>${t(item.title)}</strong></button>`).join("");
  elements.phraseGrid.innerHTML = phraseData.map((item, index) => `<button class="phrase-button" data-phrase-index="${index}">${t(item)}</button>`).join("");
}
function renderOverlays() {
  elements.brandIntroEyebrow.textContent = brandIntroUi.eyebrow;
  elements.brandIntroTitle.textContent = brandIntroUi.title;
  elements.brandIntroCopy.textContent = brandIntroUi.copy;
  elements.languageGateEyebrow.textContent = languageGateUi.eyebrow;
  elements.languageGateTitle.textContent = languageGateUi.title;
  elements.languageGateTitle.style.whiteSpace = "pre-line";
  elements.languageGateCopy.textContent = languageGateUi.copy;
  elements.languageGateCopy.style.whiteSpace = "pre-line";
  elements.languageGateList.innerHTML = languageOptions.map((item) =>
    `<button class="language-gate-button" data-gate-language="${item.code}"><strong>${item.label}</strong><span>${item.subtitle}</span></button>`
  ).join("");
  elements.loadingTitle.textContent = appState.analysisState === "question" ? t(overlays.loadingQuestionTitle) : t(overlays.loadingDocumentTitle);
  elements.loadingDescription.textContent = appState.analysisState === "question" ? t(overlays.loadingQuestionDesc) : t(overlays.loadingDocumentDesc);
  elements.privacyEyebrow.textContent = t(overlays.privacyEyebrow);
  elements.privacyTitle.textContent = t(overlays.privacyTitle);
  elements.privacyReturn.textContent = t(overlays.privacyReturn);
  elements.callConfirm.textContent = t(overlays.callConfirm);
  elements.callSave.textContent = t(overlays.callSave);
  elements.callCancel.textContent = t(overlays.callCancel);
  elements.infoClose.textContent = t(overlays.infoClose);
  if (appState.activeSheet && appState.activeSheet.type === "call") {
    elements.callModalLabel.textContent = t(overlays.callLabel);
    elements.callModalNumber.textContent = appState.activeSheet.phoneDisplay;
    elements.callModalName.textContent = appState.activeSheet.name;
  }
  if (appState.activeSheet && appState.activeSheet.type === "info") {
    elements.infoTitle.textContent = appState.activeSheet.title;
    elements.infoBody.textContent = appState.activeSheet.body;
    elements.infoBody.style.whiteSpace = "pre-line";
  }
  toggleHidden(elements.brandOverlay, appState.bootState !== "splash");
  toggleHidden(elements.languageOverlay, appState.bootState !== "language");
  toggleHidden(elements.loadingOverlay, appState.analysisState === "idle");
  toggleHidden(elements.privacyOverlay, !appState.isPrivacyMode);
  toggleHidden(elements.callOverlay, !(appState.activeSheet && appState.activeSheet.type === "call"));
  toggleHidden(elements.infoOverlay, !(appState.activeSheet && appState.activeSheet.type === "info"));
}

function render() {
  renderSide();
  renderQrCard();
  renderTabs();
  renderHome();
  renderResults();
  renderDocument();
  renderEmergency();
  renderOverlays();
}

function startLaunchTimer() {
  clearTimeout(launchTimer);
  launchTimer = window.setTimeout(() => {
    if (appState.bootState === "splash") setState({ bootState: "language" });
  }, 1800);
}

function runQuestionFlow() {
  setState({ selectedScenario: detectScenario(appState.question), analysisState: "question", activeSheet: null, isPrivacyMode: false });
  clearTimeout(analysisTimer);
  analysisTimer = window.setTimeout(() => {
    setState({ analysisState: "idle", currentTab: "results", resultReady: true });
    showToast(t(overlays.toastQuestion));
  }, 1100);
}

function runDocumentFlow() {
  setState({ analysisState: "document", activeSheet: null, isPrivacyMode: false });
  clearTimeout(analysisTimer);
  analysisTimer = window.setTimeout(() => {
    setState({ analysisState: "idle", currentTab: "document", documentReady: true });
    showToast(t(overlays.toastDocument));
  }, 1000);
}

document.addEventListener("click", async (event) => {
  const tab = event.target.closest("[data-tab]");
  if (tab) return void setState({ currentTab: tab.dataset.tab, activeSheet: null });
  const gate = event.target.closest("[data-gate-language]");
  if (gate) return void setState({ selectedLanguage: gate.dataset.gateLanguage, bootState: "ready", currentTab: "home", activeSheet: null, isPrivacyMode: false });
  const lang = event.target.closest("[data-language]");
  if (lang) {
    setState({ selectedLanguage: lang.dataset.language });
    return void showToast(pick(overlays.toastLang, lang.dataset.language));
  }
  const scenario = event.target.closest("[data-scenario]");
  if (scenario) return void setState({ selectedScenario: scenario.dataset.scenario, resultReady: false });
  const sample = event.target.closest("[data-sample-index]");
  if (sample) {
    const selected = samplePrompts[Number(sample.dataset.sampleIndex)];
    appState.question = t(selected.text);
    return void setState({ selectedScenario: selected.scenario, resultReady: false });
  }
  const doc = event.target.closest("[data-document]");
  if (doc) return void setState({ selectedDocument: doc.dataset.document, documentReady: false });
  const call = event.target.closest("[data-contact-call]");
  if (call) return void openCallSheet(scenarioData[appState.selectedScenario].contacts[Number(call.dataset.contactCall)]);
  const info = event.target.closest("[data-contact-info]");
  if (info) return void openInfoSheet(scenarioData[appState.selectedScenario].contacts[Number(info.dataset.contactInfo)]);
  const quick = event.target.closest("[data-quick-call]");
  if (quick) return void openCallSheet(emergencyQuickCalls[Number(quick.dataset.quickCall)]);
  const phrase = event.target.closest("[data-phrase-index]");
  if (phrase) {
    try { await copyText(t(phraseData[Number(phrase.dataset.phraseIndex)])); } catch (error) {}
    showToast(t(overlays.toastPhrase));
  }
});

elements.questionInput.addEventListener("input", (event) => { appState.question = event.target.value; });
elements.documentFile.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  setState({ documentFileName: file ? file.name : "", documentReady: false });
  if (file) showToast(t(overlays.toastFile));
});
elements.questionSubmit.addEventListener("click", runQuestionFlow);
elements.documentSubmit.addEventListener("click", runDocumentFlow);
elements.privacyButton.addEventListener("click", () => setState({ isPrivacyMode: true, activeSheet: null }));
elements.privacyReturn.addEventListener("click", () => setState({ isPrivacyMode: false }));
elements.callConfirm.addEventListener("click", () => {
  if (!appState.activeSheet || appState.activeSheet.type !== "call") return;
  const dial = appState.activeSheet.phoneDial;
  setState({ activeSheet: null });
  showToast(t(overlays.toastCall));
  window.setTimeout(() => triggerDial(dial), 120);
});
elements.callSave.addEventListener("click", async () => {
  if (!appState.activeSheet || appState.activeSheet.type !== "call") return;
  try { await copyText(appState.activeSheet.phoneDisplay); } catch (error) {}
  setState({ activeSheet: null });
  showToast(t(overlays.toastSaved));
});
elements.callCancel.addEventListener("click", () => setState({ activeSheet: null }));
elements.infoClose.addEventListener("click", () => setState({ activeSheet: null }));

render();
startLaunchTimer();

