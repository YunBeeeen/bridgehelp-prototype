window.bridgeHelpV6Data = (() => {
  const D = (ko, en = '', zh = '', vi = '', ru = '', uz = '') => {
    const value = { ko };
    if (en) value.en = en;
    if (zh) value.zh = zh;
    if (vi) value.vi = vi;
    if (ru) value.ru = ru;
    if (uz) value.uz = uz;
    return value;
  };

  const categoryMeta = {
    education: {
      label: D('교육', 'Education'),
      icon: '학',
      color: 'blue',
      badge: D('학교', 'School')
    },
    welfare: {
      label: D('복지', 'Welfare'),
      icon: '복',
      color: 'green',
      badge: D('생활', 'Daily Life')
    },
    medical: {
      label: D('의료', 'Medical'),
      icon: '의',
      color: 'teal',
      badge: D('병원', 'Health')
    },
    emergency: {
      label: D('긴급', 'Urgent'),
      icon: '긴',
      color: 'red',
      badge: D('긴급', 'Urgent')
    },
    labor: {
      label: D('노동', 'Labor'),
      icon: '일',
      color: 'orange',
      badge: D('일자리', 'Jobs')
    },
    admin: {
      label: D('행정', 'Admin'),
      icon: '행',
      color: 'slate',
      badge: D('행정', 'Admin')
    },
    counseling: {
      label: D('상담', 'Counseling'),
      icon: '상',
      color: 'violet',
      badge: D('상담', 'Counseling')
    },
    food: {
      label: D('음식점', 'Food'),
      icon: '맛',
      color: 'orange',
      badge: D('음식', 'Food')
    },
    market: {
      label: D('식재료', 'Market'),
      icon: '장',
      color: 'green',
      badge: D('마트', 'Market')
    },
    community: {
      label: D('커뮤니티', 'Community'),
      icon: '모',
      color: 'blue',
      badge: D('모임', 'Community')
    },
    religion: {
      label: D('종교', 'Religion'),
      icon: '종',
      color: 'teal',
      badge: D('종교', 'Religion')
    }
  };

  const easyReadFeedData = [
    {
      id: 'school-guide',
      category: 'education',
      sentence: D('학교 준비물은 사진으로 확인하고, 이해가 어렵다면 요청 카드를 바로 보여주세요.'),
      imageKey: 'school-kit',
      tag: D('새 학기 안내'),
      cta: D('자세히 보기'),
      action: { type: 'document', document: 'school' }
    },
    {
      id: 'heat-alert',
      category: 'emergency',
      sentence: D('폭염 경보가 있으면 물을 자주 마시고 낮 시간 야외 작업을 줄여야 합니다.'),
      imageKey: 'heat-safe',
      tag: D('긴급 알림'),
      cta: D('대처 방법 보기'),
      action: { type: 'alert', alertId: 'heatwave' }
    },
    {
      id: 'wage-help',
      category: 'labor',
      sentence: D('월급을 받지 못했다면 급여 기록부터 모으고 노동 상담으로 바로 이어지세요.'),
      imageKey: 'salary-help',
      tag: D('일자리 도움'),
      cta: D('도움 보기'),
      action: { type: 'scenario', scenario: 'work' }
    },
    {
      id: 'clinic-support',
      category: 'medical',
      sentence: D('병원 진료가 걱정되면 통역 요청 카드와 가까운 병원 찾기를 함께 사용하세요.'),
      imageKey: 'clinic-route',
      tag: D('병원 준비'),
      cta: D('기관 찾기'),
      action: { type: 'agency', filter: 'medical' }
    }
  ];

  const quickActionData = [
    {
      id: 'open-feed',
      title: D('공지 보기'),
      body: D('쉬운 카드로 확인'),
      icon: '읽',
      color: 'blue',
      action: { type: 'feed-highlight' }
    },
    {
      id: 'open-agencies',
      title: D('기관 찾기'),
      body: D('주변 기관 보기'),
      icon: '길',
      color: 'green',
      action: { type: 'view', view: 'agencyMap', filter: 'welfare' }
    },
    {
      id: 'open-requests',
      title: D('요청 카드'),
      body: D('버튼 한 번으로 전달'),
      icon: '카',
      color: 'teal',
      action: { type: 'view', view: 'requestCards', category: 'admin' }
    },
    {
      id: 'open-urgent',
      title: D('긴급 도움'),
      body: D('전화와 문장 바로'),
      icon: '긴',
      color: 'red',
      action: { type: 'tab', tab: 'emergency' }
    }
  ];

  const agencyData = [
    {
      id: 'danuri-center',
      name: D('다누리콜센터 연계지원센터'),
      category: 'counseling',
      address: D('서울 중구 을지로 100, 2층'),
      hours: D('평일 09:00 - 18:00, 전화상담 상시 연결'),
      phoneDisplay: '1577-1366',
      phoneDial: '15771366',
      languages: D('한국어, 영어, 중국어, 베트남어'),
      distance: D('도보 12분'),
      summary: D('생활 상담, 통역 연결, 학교/병원 안내를 함께 받을 수 있는 다국어 지원 기관입니다.'),
      requestCardCategories: ['admin', 'education', 'medical', 'counseling'],
      mapTag: D('상담'),
      routeSteps: [
        { imageKey: 'crosswalk', caption: D('큰 횡단보도를 건너 직진하세요.') },
        { imageKey: 'building-sign', caption: D('파란 안내판이 보이는 건물 입구로 들어가세요.') },
        { imageKey: 'front-desk', caption: D('2층 안내 데스크에서 통역이 필요하다고 보여주세요.') }
      ]
    },
    {
      id: 'family-support-center',
      name: D('다문화가족지원센터'),
      category: 'welfare',
      address: D('서울 영등포구 선유로 44, 주민복지관 3층'),
      hours: D('평일 09:00 - 18:00'),
      phoneDisplay: '02-2670-0000',
      phoneDial: '0226700000',
      languages: D('한국어, 영어, 중국어'),
      distance: D('버스 8분'),
      summary: D('생활 적응, 교육, 행정 안내와 가족 상담을 받을 수 있는 생활지원 기관입니다.'),
      requestCardCategories: ['admin', 'education', 'counseling'],
      mapTag: D('복지'),
      routeSteps: [
        { imageKey: 'bus-stop', caption: D('주민복지관 앞 정류장에서 내리세요.') },
        { imageKey: 'community-building', caption: D('노란 간판 건물 3층으로 올라가세요.') },
        { imageKey: 'counter', caption: D('접수대에서 생활 지원 상담을 요청하면 됩니다.') }
      ]
    },
    {
      id: 'global-clinic',
      name: D('외국인 진료지원 클리닉'),
      category: 'medical',
      address: D('서울 구로구 새말로 88, 메디컬타워 1층'),
      hours: D('월-토 08:30 - 17:30'),
      phoneDisplay: '02-860-2000',
      phoneDial: '028602000',
      languages: D('한국어, 영어, 베트남어 통역 연계'),
      distance: D('택시 10분'),
      summary: D('진료 예약, 검사 안내, 통역 연계를 함께 받을 수 있는 병원 안내 기관입니다.'),
      requestCardCategories: ['medical', 'counseling'],
      mapTag: D('병원'),
      routeSteps: [
        { imageKey: 'hospital-front', caption: D('응급 표지판이 보이는 정문으로 들어가세요.') },
        { imageKey: 'elevator-hall', caption: D('1층 접수 창구 오른쪽 줄로 이동하세요.') },
        { imageKey: 'registration-desk', caption: D('요청 카드를 보여주면 접수를 도와줍니다.') }
      ]
    },
    {
      id: 'education-help-desk',
      name: D('학교생활 지원 데스크'),
      category: 'education',
      address: D('서울 동대문구 답십리로 72, 교육지원관 1층'),
      hours: D('평일 09:00 - 17:00'),
      phoneDisplay: '02-2210-1100',
      phoneDial: '0222101100',
      languages: D('한국어, 영어, 다문화 학부모 지원'),
      distance: D('도보 15분'),
      summary: D('학교 안내문 해석, 준비물 확인, 학부모 상담을 받을 수 있는 교육지원 창구입니다.'),
      requestCardCategories: ['education', 'admin'],
      mapTag: D('교육'),
      routeSteps: [
        { imageKey: 'school-gate', caption: D('정문 옆 교육지원관 방향 표지판을 따라가세요.') },
        { imageKey: 'hallway', caption: D('1층 끝 상담창구에서 도움을 요청하세요.') },
        { imageKey: 'desk-sign', caption: D('학교 안내문을 이해하지 못했다고 카드로 보여주세요.') }
      ]
    }
  ];

  const requestCardData = [
    {
      id: 'medical-interpret',
      category: 'medical',
      title: D('병원 통역 요청'),
      korean: '통역이 필요합니다.',
      translated: {
        ko: '통역이 필요합니다.',
        en: 'I need an interpreter.',
        zh: '我需要翻译。',
        vi: 'Tôi cần thông dịch viên.',
        ru: 'Мне нужен переводчик.',
        uz: 'Menga tarjimon kerak.'
      }
    },
    {
      id: 'medical-treatment',
      category: 'medical',
      title: D('진료 요청'),
      korean: '병원 진료를 받고 싶습니다.',
      translated: {
        ko: '병원 진료를 받고 싶습니다.',
        en: 'I want medical treatment.',
        zh: '我想接受诊疗。',
        vi: 'Tôi muốn được khám bệnh.',
        ru: 'Я хочу получить медицинскую помощь.',
        uz: 'Men tibbiy ko‘rikdan o‘tmoqchiman.'
      }
    },
    {
      id: 'admin-document',
      category: 'admin',
      title: D('문서 도움 요청'),
      korean: '이 문서를 이해하지 못했습니다.',
      translated: {
        ko: '이 문서를 이해하지 못했습니다.',
        en: 'I do not understand this document.',
        zh: '我看不懂这份文件。',
        vi: 'Tôi không hiểu tài liệu này.',
        ru: 'Я не понимаю этот документ.',
        uz: 'Men bu hujjatni tushunmadim.'
      }
    },
    {
      id: 'admin-guidance',
      category: 'admin',
      title: D('행정 안내 요청'),
      korean: '어디로 가야 하는지 알려주세요.',
      translated: {
        ko: '어디로 가야 하는지 알려주세요.',
        en: 'Please tell me where I should go.',
        zh: '请告诉我应该去哪里。',
        vi: 'Xin hãy chỉ tôi cần đến đâu.',
        ru: 'Пожалуйста, скажите, куда мне идти.',
        uz: 'Qayerga borishim kerakligini ayting.'
      }
    },
    {
      id: 'education-school-note',
      category: 'education',
      title: D('학교 안내문 요청'),
      korean: '학교 안내문을 이해하지 못했습니다.',
      translated: {
        ko: '학교 안내문을 이해하지 못했습니다.',
        en: 'I do not understand the school notice.',
        zh: '我看不懂学校通知。',
        vi: 'Tôi không hiểu thông báo của trường.',
        ru: 'Я не понимаю школьное уведомление.',
        uz: 'Men maktab xabarini tushunmadim.'
      }
    },
    {
      id: 'education-supplies',
      category: 'education',
      title: D('준비물 확인 요청'),
      korean: '무엇을 준비해야 하는지 알려주세요.',
      translated: {
        ko: '무엇을 준비해야 하는지 알려주세요.',
        en: 'Please tell me what I need to prepare.',
        zh: '请告诉我需要准备什么。',
        vi: 'Hãy cho tôi biết cần chuẩn bị gì.',
        ru: 'Пожалуйста, скажите, что нужно подготовить.',
        uz: 'Nima tayyorlashim kerakligini ayting.'
      }
    },
    {
      id: 'labor-counseling',
      category: 'labor',
      title: D('노동 상담 요청'),
      korean: '임금을 받지 못했습니다. 상담이 필요합니다.',
      translated: {
        ko: '임금을 받지 못했습니다. 상담이 필요합니다.',
        en: 'I have not been paid. I need counseling.',
        zh: '我没有拿到工资，需要咨询。',
        vi: 'Tôi chưa được trả lương. Tôi cần tư vấn.',
        ru: 'Мне не выплатили зарплату. Мне нужна консультация.',
        uz: 'Menga ish haqi berilmadi. Menga maslahat kerak.'
      }
    },
    {
      id: 'labor-interpret',
      category: 'labor',
      title: D('직장 통역 요청'),
      korean: '노동 문제를 설명할 통역이 필요합니다.',
      translated: {
        ko: '노동 문제를 설명할 통역이 필요합니다.',
        en: 'I need interpretation to explain a labor problem.',
        zh: '我需要翻译来说明劳动问题。',
        vi: 'Tôi cần thông dịch để giải thích vấn đề lao động.',
        ru: 'Мне нужен переводчик, чтобы объяснить трудовую проблему.',
        uz: 'Mehnat muammosini tushuntirish uchun tarjimon kerak.'
      }
    },
    {
      id: 'counseling-help',
      category: 'counseling',
      title: D('상담 요청'),
      korean: '상담이 필요합니다.',
      translated: {
        ko: '상담이 필요합니다.',
        en: 'I need counseling.',
        zh: '我需要咨询。',
        vi: 'Tôi cần được tư vấn.',
        ru: 'Мне нужна консультация.',
        uz: 'Menga maslahat kerak.'
      }
    },
    {
      id: 'counseling-safe',
      category: 'counseling',
      title: D('안전 도움 요청'),
      korean: '지금 안전하지 않습니다. 도움을 부탁합니다.',
      translated: {
        ko: '지금 안전하지 않습니다. 도움을 부탁합니다.',
        en: 'I am not safe right now. Please help me.',
        zh: '我现在不安全，请帮助我。',
        vi: 'Bây giờ tôi không an toàn. Xin hãy giúp tôi.',
        ru: 'Сейчас мне небезопасно. Пожалуйста, помогите.',
        uz: 'Hozir men xavfsiz emasman. Iltimos, yordam bering.'
      }
    }
  ];

  const emergencyAlertData = [
    {
      id: 'heatwave',
      icon: '햇',
      color: 'red',
      title: D('폭염 주의'),
      summary: D('물을 자주 마시고 한낮 야외 활동을 줄이세요.'),
      actions: [
        D('시원한 실내에서 쉬기'),
        D('물을 자주 마시기'),
        D('몸이 이상하면 119 또는 가까운 병원에 연락하기')
      ],
      cta: D('대처 방법 보기')
    },
    {
      id: 'heavy-rain',
      icon: '비',
      color: 'blue',
      title: D('폭우 예보'),
      summary: D('하천 주변과 지하 공간을 피하고 이동 전에 경로를 확인하세요.'),
      actions: [
        D('우산보다 안전한 실내 대피 우선'),
        D('침수 지역과 지하차도 피하기'),
        D('위험하면 112 또는 119에 신고하기')
      ],
      cta: D('대처 방법 보기')
    },
    {
      id: 'fine-dust',
      icon: '마',
      color: 'slate',
      title: D('미세먼지 높음'),
      summary: D('외출 시 마스크를 착용하고 창문을 오래 열지 마세요.'),
      actions: [
        D('KF 마스크 착용'),
        D('실내 공기 환기는 짧게'),
        D('기침, 호흡 곤란이 있으면 병원 문의')
      ],
      cta: D('대처 방법 보기')
    }
  ];

  const culturePlaceData = [
    {
      id: 'vietnam-market',
      category: 'market',
      name: D('안녕 아시아 마트'),
      cultureTag: D('베트남 / 동남아'),
      description: D('향신료, 쌀국수 재료, 냉동 식재료를 쉽게 찾을 수 있는 마트입니다.'),
      location: D('서울 구로구 남부순환로 120'),
      recommendation: D('고향 재료를 찾고 싶을 때 가장 먼저 들르기 좋은 곳')
    },
    {
      id: 'halal-food',
      category: 'food',
      name: D('사프란 키친'),
      cultureTag: D('할랄 / 중앙아시아'),
      description: D('할랄 메뉴와 따뜻한 식사를 제공하는 커뮤니티형 식당입니다.'),
      location: D('서울 용산구 우사단로 31'),
      recommendation: D('처음 정착한 사람도 편하게 식사하고 정보를 나눌 수 있는 장소')
    },
    {
      id: 'community-lounge',
      category: 'community',
      name: D('글로벌 커뮤니티 라운지'),
      cultureTag: D('모임 / 상담 / 정보교류'),
      description: D('언어교환, 생활 정보 모임, 정착 프로그램이 열리는 열린 공간입니다.'),
      location: D('서울 마포구 월드컵북로 52'),
      recommendation: D('친구를 만들고 생활 정보를 얻기 좋은 커뮤니티 공간')
    },
    {
      id: 'peace-center',
      category: 'religion',
      name: D('평화 문화 예배공간'),
      cultureTag: D('종교 / 모임'),
      description: D('예배와 문화 모임이 함께 열리는 조용한 커뮤니티 장소입니다.'),
      location: D('서울 영등포구 도신로 18'),
      recommendation: D('익숙한 공동체와 연결되고 싶을 때 찾기 좋은 공간')
    }
  ];

  const scenarioData = {
    visa: {
      label: D('비자·출입국', 'Visa & Immigration'),
      summary: D('비자 연장이나 체류 절차를 확인하고 필요한 기관과 요청 카드로 바로 이어질 수 있어요.'),
      actions: ['비자 만료일과 방문 기한 확인', '여권, 등록증, 예약 여부 준비', '필요하면 다국어 상담으로 먼저 확인'],
      notes: ['원본 서류 준비', '방문 전 전화', '기한 놓치지 않기'],
      agencyFilter: 'counseling',
      requestCategory: 'admin',
      contacts: [
        { name: '출입국·외국인종합안내센터', desc: '비자·체류·등록 상담', info: '1345는 비자, 체류 자격, 외국인등록 관련 안내를 제공합니다.', hours: '상담센터 운영시간 기준', languages: '다국어 안내 가능', phoneDisplay: '1345', phoneDial: '1345' },
        { name: '다누리콜센터', desc: '다국어 생활 상담', info: '1577-1366에서 다국어로 절차 설명과 통역 연결을 받을 수 있습니다.', hours: '24시간', languages: '영어, 중국어, 베트남어 등', phoneDisplay: '1577-1366', phoneDial: '15771366' }
      ]
    },
    work: {
      label: D('일자리·노동', 'Jobs & Labor'),
      summary: D('임금체불, 해고, 산재처럼 노동 문제가 생겼을 때 증거 정리부터 기관 연결까지 바로 이어집니다.'),
      actions: ['급여 내역, 문자, 근무 날짜 모으기', '무슨 문제가 있었는지 한 줄로 정리하기', '노동 상담 번호로 먼저 전화하거나 요청 카드 보여주기'],
      notes: ['증거 먼저', '오늘 날짜 메모', '통역 필요 시 미리 말하기'],
      agencyFilter: 'counseling',
      requestCategory: 'labor',
      contacts: [
        { name: '고용노동부 고객상담센터', desc: '임금체불·해고·노동 상담', info: '1350으로 임금체불, 해고, 산재 관련 상담을 시작할 수 있습니다.', hours: '평일 안내 중심', languages: '한국어 중심', phoneDisplay: '1350', phoneDial: '1350' },
        { name: '다누리콜센터', desc: '다국어 연결 상담', info: '한국어 설명이 어렵다면 1577-1366으로 먼저 연결해 도움을 받을 수 있습니다.', hours: '24시간', languages: '영어, 중국어, 베트남어 등', phoneDisplay: '1577-1366', phoneDial: '15771366' }
      ]
    },
    health: {
      label: D('병원·건강', 'Hospital & Health'),
      summary: D('병원 방문 전 준비물, 통역 요청, 가까운 기관 찾기까지 같이 도와드릴게요.'),
      actions: ['증상, 날짜, 현재 먹는 약을 적기', '예약 문자나 검사 안내문 사진 준비', '통역이 필요하면 요청 카드 보여주기'],
      notes: ['예약 시간 확인', '검사 전 금식 여부 확인', '문서 사진 찍기'],
      agencyFilter: 'medical',
      requestCategory: 'medical',
      contacts: [
        { name: '보건복지상담센터', desc: '보건·복지 기본 안내', info: '129에서 보건, 복지, 긴급 지원 관련 기본 안내를 받을 수 있습니다.', hours: '대표 콜센터 안내', languages: '한국어 중심', phoneDisplay: '129', phoneDial: '129' },
        { name: '다누리콜센터', desc: '의료 통역 연결', info: '병원 방문 전 언어 지원이 필요하면 1577-1366으로 다국어 상담을 받을 수 있습니다.', hours: '24시간', languages: '영어, 중국어, 베트남어 등', phoneDisplay: '1577-1366', phoneDial: '15771366' }
      ]
    },
    education: {
      label: D('아이 학교·교육', 'School & Education'),
      summary: D('학교 안내문, 준비물, 학부모 상담처럼 이해가 어려운 내용을 쉽게 풀어드릴게요.'),
      actions: ['가정통신문이나 준비물 안내를 사진으로 남기기', '언제까지 무엇을 준비해야 하는지 체크', '이해가 어려우면 요청 카드 보여주기'],
      notes: ['준비물 먼저 확인', '마감 날짜 표시', '보호자와 공유'],
      agencyFilter: 'education',
      requestCategory: 'education',
      contacts: [
        { name: '다누리콜센터', desc: '학교 안내문 다국어 상담', info: '1577-1366은 학교 안내문, 생활 적응, 통역이 필요한 상황을 도와줍니다.', hours: '24시간', languages: '영어, 중국어, 베트남어 등', phoneDisplay: '1577-1366', phoneDial: '15771366' },
        { name: '정부민원안내콜센터', desc: '기관 안내·행정 연결', info: '110은 학교 관련 행정 문의와 기본 기관 연결을 도와줍니다.', hours: '24시간', languages: '전화와 채팅 안내', phoneDisplay: '110', phoneDial: '110' }
      ]
    },
    housing: {
      label: D('주거·생활', 'Housing & Daily Life'),
      summary: D('주거, 생활 적응, 주민센터 연결이 필요하면 어디로 가야 할지 먼저 정리해드릴게요.'),
      actions: ['어떤 문제가 있는지 한 줄로 적기', '현재 지역과 필요한 도움 종류 적기', '복지 기관이나 주민센터 연결 전화해보기'],
      notes: ['지역 정보 준비', '필요 서류 확인', '생활지원 여부 확인'],
      agencyFilter: 'welfare',
      requestCategory: 'admin',
      contacts: [
        { name: '보건복지상담센터', desc: '생활·복지 기본 안내', info: '129는 생활 지원과 복지 관련 기본 안내를 제공합니다.', hours: '대표 콜센터 안내', languages: '한국어 중심', phoneDisplay: '129', phoneDial: '129' },
        { name: '정부민원안내콜센터', desc: '행정기관 연결', info: '110은 주민센터나 행정기관을 찾을 때 기본 안내를 해줍니다.', hours: '24시간', languages: '전화와 채팅 안내', phoneDisplay: '110', phoneDial: '110' }
      ]
    },
    emergency: {
      label: D('긴급 도움', 'Urgent Help'),
      summary: D('위험하거나 급히 사람과 연결되어야 할 때, 짧은 문장과 전화 연결부터 바로 시작할 수 있습니다.'),
      actions: ['가능하면 더 안전한 장소로 이동', '상황에 맞는 긴급 번호 바로 누르기', '말이 어려우면 긴급 문장 카드 보여주기'],
      notes: ['위치 먼저 알리기', '짧게 말해도 괜찮음', '빠른 종료 사용 가능'],
      agencyFilter: 'counseling',
      requestCategory: 'counseling',
      contacts: [
        { name: '긴급신고 112', desc: '폭력·위험·범죄', info: '위험하거나 범죄, 폭력 상황이면 112로 바로 신고하세요.', hours: '24시간', languages: '긴급 대응', phoneDisplay: '112', phoneDial: '112' },
        { name: '여성긴급전화 1366', desc: '상담·보호 연결', info: '1366은 위기 상황 상담과 보호기관 연계를 24시간 지원합니다.', hours: '24시간', languages: '상담 연결', phoneDisplay: '1366', phoneDial: '1366' }
      ]
    }
  };

  const documentData = {
    school: { label: D('학교 안내문', 'School notice'), summary: D('학교 준비물과 제출 날짜를 알려주는 문서예요.'), simple: D('무엇을 가져가야 하는지, 언제까지 내야 하는지를 먼저 보면 됩니다.'), actions: ['준비물 확인', '날짜 저장', '보호자와 공유'], requestCategory: 'education', agencyFilter: 'education' },
    medical: { label: D('병원 안내문', 'Hospital notice'), summary: D('검사 준비와 방문 시간이 적힌 안내문이에요.'), simple: D('금식 여부, 방문 시간, 가져갈 서류를 먼저 확인하면 됩니다.'), actions: ['검사 시간 확인', '가져갈 것 확인', '약 복용 여부 문의'], requestCategory: 'medical', agencyFilter: 'medical' },
    immigration: { label: D('출입국 공지', 'Immigration notice'), summary: D('방문 날짜와 필요한 서류를 안내하는 문서예요.'), simple: D('마감 날짜와 필요한 서류 목록부터 확인하면 됩니다.'), actions: ['기한 확인', '예약 여부 확인', '원본 서류 준비'], requestCategory: 'admin', agencyFilter: 'counseling' },
    community: { label: D('주민센터 안내', 'Community-center notice'), summary: D('어떻게 신청하고 어떤 서류를 내야 하는지 알려주는 안내예요.'), simple: D('신청 조건과 증빙 서류를 먼저 보면 됩니다.'), actions: ['자격 확인', '증빙 준비', '제출처 확인'], requestCategory: 'admin', agencyFilter: 'welfare' }
  };

  const samplePrompts = [
    { text: D('월급을 못 받았어요', 'I did not get paid'), scenario: 'work' },
    { text: D('외국인등록 연장하려면 뭐가 필요해요?', 'How do I extend my visa?'), scenario: 'visa' },
    { text: D('아이 학교 준비물이 뭔지 모르겠어요', 'I need school supply help'), scenario: 'education' }
  ];

  const emergencyQuickCalls = [
    { title: D('긴급신고', 'Emergency'), number: '112', phoneDisplay: '112', phoneDial: '112', urgent: true },
    { title: D('응급·화재', 'Medical'), number: '119', phoneDisplay: '119', phoneDial: '119', urgent: true },
    { title: D('다국어 상담', 'Multilingual'), number: '1577-1366', phoneDisplay: '1577-1366', phoneDial: '15771366', urgent: false },
    { title: D('법률 지원', 'Legal Aid'), number: '132', phoneDisplay: '132', phoneDial: '132', urgent: false },
    { title: D('노동 상담', 'Labor Help'), number: '1350', phoneDisplay: '1350', phoneDial: '1350', urgent: false },
    { title: D('보호 지원', 'Protection'), number: '1366', phoneDisplay: '1366', phoneDial: '1366', urgent: false }
  ];

  const phraseData = [
    D('통역이 필요합니다.', 'I need an interpreter.'),
    D('도움이 필요합니다.', 'I need help.'),
    D('임금을 받지 못했습니다.', 'I have not been paid.'),
    D('지금 위험한 상황입니다.', 'I am in danger now.')
  ];
  return {
    categoryMeta,
    easyReadFeedData,
    quickActionData,
    agencyData,
    requestCardData,
    emergencyAlertData,
    culturePlaceData,
    scenarioData,
    documentData,
    samplePrompts,
    emergencyQuickCalls,
    phraseData
  };
})();



