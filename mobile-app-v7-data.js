window.bridgeHelpV7Data = (() => {
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
    education: { label: D('교육', 'Education'), badge: D('학교', 'School'), icon: 'EDU', color: 'blue' },
    welfare: { label: D('복지', 'Welfare'), badge: D('생활', 'Life'), icon: 'LIFE', color: 'green' },
    medical: { label: D('의료', 'Medical'), badge: D('병원', 'Medical'), icon: 'MED', color: 'teal' },
    emergency: { label: D('긴급', 'Urgent'), badge: D('긴급', 'Urgent'), icon: 'SOS', color: 'red' },
    labor: { label: D('노동', 'Labor'), badge: D('일자리', 'Jobs'), icon: 'JOB', color: 'orange' },
    admin: { label: D('행정', 'Admin'), badge: D('행정', 'Admin'), icon: 'DOC', color: 'slate' },
    counseling: { label: D('상담', 'Counseling'), badge: D('상담', 'Counseling'), icon: 'TALK', color: 'violet' },
    community: { label: D('커뮤니티', 'Community'), badge: D('연결', 'Community'), icon: 'HUB', color: 'rose' },
    food: { label: D('음식', 'Food'), badge: D('음식', 'Food'), icon: 'FOOD', color: 'orange' },
    market: { label: D('식재료', 'Market'), badge: D('마트', 'Market'), icon: 'MART', color: 'green' },
    religion: { label: D('종교', 'Religion'), badge: D('종교', 'Religion'), icon: 'FAITH', color: 'blue' },
    voice: { label: D('음성', 'Voice'), badge: D('음성', 'Voice'), icon: 'MIC', color: 'teal' }
  };

  const scenarioData = {
      work: {
        title: D('월급을 받지 못했어요', 'I did not get paid'),
        short: D('기록을 모으고 노동 상담으로 가면 됩니다.'),
      steps: [
        D('메시지, 통장 기록, 출근 날짜를 먼저 모으세요.'),
        D('오늘 날짜와 마지막 근무일을 적어두세요.'),
        D('노동 상담이나 다국어 상담으로 바로 연결하세요.')
      ],
      notes: [D('짧게 말해도 됩니다.'), D('요청 카드를 먼저 보여줘도 됩니다.')],
      requestCategory: 'labor',
      agencyFilter: 'counseling',
      featuredCall: 'labor'
    },
      visa: {
        title: D('비자 연장 방법을 알고 싶어요', 'I need visa extension help'),
        short: D('기한과 서류를 먼저 확인하면 됩니다.'),
      steps: [
        D('체류 만료 날짜를 먼저 확인하세요.'),
        D('여권과 외국인등록증 원본을 준비하세요.'),
        D('예약이 필요한지 전화로 먼저 물어보세요.')
      ],
      notes: [D('기한을 넘기지 않는 것이 가장 중요합니다.'), D('어려우면 다국어 상담을 같이 이용하세요.')],
      requestCategory: 'admin',
      agencyFilter: 'counseling',
      featuredCall: 'immigration'
    },
      health: {
        title: D('병원에 가야 하는데 걱정돼요', 'I need hospital help'),
        short: D('증상과 예약 시간을 정리하면 됩니다.'),
      steps: [
        D('언제부터 아팠는지 한 줄로 적어두세요.'),
        D('예약 문자와 복용 중인 약을 같이 챙기세요.'),
        D('병원에 도착하면 통역 요청 카드를 먼저 보여주세요.')
      ],
      notes: [D('짧게 설명해도 됩니다.'), D('진료 전에 카드부터 보여줘도 괜찮습니다.')],
      requestCategory: 'medical',
      agencyFilter: 'medical',
      featuredCall: 'welfare'
    },
      education: {
        title: D('학교 안내문을 이해하기 어려워요', 'I need school notice help'),
        short: D('준비물과 날짜를 먼저 찾으면 됩니다.'),
      steps: [
        D('안내문 사진을 찍어 쉬운 해석 카드로 바꿔보세요.'),
        D('준비물과 날짜를 먼저 표시하세요.'),
        D('학교 지원 데스크나 다국어 상담으로 이어가세요.')
      ],
      notes: [D('모든 문장을 다 읽지 않아도 됩니다.'), D('필요하면 요청 카드를 보여주세요.')],
      requestCategory: 'education',
      agencyFilter: 'education',
      featuredCall: 'danuri'
    },
      housing: {
        title: D('생활지원이나 주민센터 도움이 필요해요', 'I need daily-life help'),
        short: D('가까운 복지 기관부터 찾으면 됩니다.'),
      steps: [
        D('어떤 도움이 필요한지 한 줄로 적어보세요.'),
        D('사는 동네 이름을 함께 적어두세요.'),
        D('주민센터나 가족지원센터 안내로 연결하세요.')
      ],
      notes: [D('처음부터 정확한 기관 이름을 몰라도 됩니다.'), D('전화로 어디로 가야 하는지 물어봐도 됩니다.')],
      requestCategory: 'admin',
      agencyFilter: 'welfare',
      featuredCall: 'government'
    },
      emergency: {
        title: D('지금 바로 도움이 필요해요', 'I need urgent help'),
        short: D('위험하면 먼저 전화하면 됩니다.'),
      steps: [
        D('가장 안전한 곳으로 먼저 이동하세요.'),
        D('112 또는 119처럼 맞는 번호를 바로 누르세요.'),
        D('말이 어려우면 긴급 문장 카드를 크게 보여주세요.')
      ],
      notes: [D('짧게 말해도 됩니다.'), D('위치부터 먼저 말하면 더 빠릅니다.')],
      requestCategory: 'counseling',
      agencyFilter: 'counseling',
      featuredCall: 'police'
    }
  };

  const easyReadArticleData = [
    {
      id: 'yearly-health-check',
      category: 'medical',
      tag: D('건강검진 안내', 'Health checks'),
      title: D('매년 건강검진은 왜 중요할까요?', 'Why yearly health checks matter'),
      intro: D('한 번에 하나씩, 그림과 짧은 문장으로 건강검진 흐름을 이해할 수 있게 만든 이지 리드 안내입니다.'),
      cta: D('병원 찾기', 'Find a clinic'),
      action: { type: 'scenario', scenario: 'health' },
      videoHint: D('전화로 예약하는 짧은 설명 영상'),
      blocks: [
        {
          imageLabel: D('진료실'),
          lines: [
            D('건강검진은 의사가 몸 상태를 크게 확인하는 시간입니다.'),
            D('아프지 않아도 1년에 한 번 받아두면 좋습니다.')
          ]
        },
        {
          imageLabel: D('달력 1회'),
          lines: [
            D('매년 한 번 받는 것이 좋습니다.'),
            D('건강 문제를 빨리 찾는 데 도움이 됩니다.')
          ]
        },
        {
          imageLabel: D('전화 예약'),
          lines: [
            D('병원에 전화해 긴 예약 시간이 필요하다고 말해도 됩니다.'),
            D('통역이 필요하면 함께 말해도 됩니다.')
          ]
        },
        {
          imageLabel: D('준비물'),
          lines: [
            D('복용 중인 약과 검사 기록을 함께 가져가세요.'),
            D('짧은 소매 옷을 입으면 혈압 검사에 편합니다.')
          ]
        },
        {
          imageLabel: D('검진 후'),
          lines: [
            D('검사 뒤에는 의사가 결과와 다음 행동을 설명합니다.'),
            D('다른 병원으로 연결될 수도 있습니다.')
          ]
        }
      ]
    },
    {
      id: 'school-notice-easy',
      category: 'education',
      tag: D('학교 안내문', 'School notice'),
      title: D('학교 안내문은 이렇게 읽어요', 'How to read a school notice'),
      intro: D('준비물, 날짜, 제출 장소를 먼저 찾는 쉬운 읽기 구조입니다.'),
      cta: D('문서 해석 보기', 'Open document help'),
      action: { type: 'document', document: 'school' },
      videoHint: D('준비물 확인하는 짧은 영상'),
      blocks: [
        {
          imageLabel: D('제목'),
          lines: [
            D('안내문 제목을 먼저 보고 어떤 내용인지 확인합니다.'),
            D('준비물, 행사, 제출 서류 같은 말이 보이는지 찾습니다.')
          ]
        },
        {
          imageLabel: D('날짜'),
          lines: [
            D('제출 날짜와 행사 날짜를 가장 먼저 표시하세요.'),
            D('달력에 바로 저장하면 잊지 않기 쉽습니다.')
          ]
        },
        {
          imageLabel: D('준비물'),
          lines: [
            D('가져갈 물건을 한 줄씩 체크합니다.'),
            D('이해가 안 되면 요청 카드를 보여줘도 됩니다.')
          ]
        }
      ]
    },
    {
      id: 'wage-rights',
      category: 'labor',
      tag: D('임금 도움', 'Wage help'),
      title: D('월급을 받지 못했을 때 먼저 할 일', 'What to do when wages are missing'),
      intro: D('길게 설명하지 않아도, 기록을 모으고 바로 상담으로 이어지는 이지 리드 안내입니다.'),
      cta: D('행동 안내 보기', 'Open action guide'),
      action: { type: 'scenario', scenario: 'work' },
      videoHint: D('급여 기록 모으는 짧은 영상'),
      blocks: [
        {
          imageLabel: D('메시지'),
          lines: [
            D('월급 약속이 담긴 메시지를 먼저 모으세요.'),
            D('근무 날짜와 시간도 함께 적어두세요.')
          ]
        },
        {
          imageLabel: D('통장'),
          lines: [
            D('입금이 안 된 날짜를 표시하세요.'),
            D('통장 사진을 저장해도 도움이 됩니다.')
          ]
        },
        {
          imageLabel: D('상담 전화'),
          lines: [
            D('짧게 말해도 됩니다.'),
            D('요청 카드를 먼저 보여주거나 읽어줘도 됩니다.')
          ]
        }
      ]
    },
    {
      id: 'heat-alert-guide',
      category: 'emergency',
      tag: D('폭염 알림', 'Heat alert'),
      title: D('폭염일 때는 이렇게 움직여요', 'What to do during heatwave'),
      intro: D('긴급 상황도 그림과 한 문장으로 먼저 이해하는 구조입니다.'),
      cta: D('긴급 대응 보기', 'See emergency help'),
      action: { type: 'alert', alertId: 'heatwave' },
      videoHint: D('폭염 대처 짧은 영상'),
      blocks: [
        {
          imageLabel: D('물'),
          lines: [D('물을 자주 마셔야 합니다.'), D('목이 마르지 않아도 조금씩 마십니다.')]
        },
        {
          imageLabel: D('그늘'),
          lines: [D('가장 더운 시간에는 밖에 오래 있지 않습니다.'), D('그늘이나 시원한 곳으로 이동합니다.')]
        },
        {
          imageLabel: D('도움 요청'),
          lines: [D('어지럽거나 힘이 없으면 바로 도움을 요청하세요.'), D('119나 가까운 병원으로 이어질 수 있습니다.')]
        }
      ]
    }
  ];

  const voiceGuideData = [
    { id: 'voice-vaccine', title: D('아이 예방접종'), spoken: D('아이 예방접종 어디서 해요?'), scenario: 'health' },
    { id: 'voice-wage', title: D('임금체불'), spoken: D('월급을 못 받았어요.'), scenario: 'work' },
    { id: 'voice-visa', title: D('비자 연장'), spoken: D('비자 연장하려면 뭐가 필요해요?'), scenario: 'visa' },
    { id: 'voice-school', title: D('학교 안내문'), spoken: D('학교 안내문을 모르겠어요.'), scenario: 'education' }
  ];

  const quickActionData = [
    { id: 'go-easy', title: D('쉬운 안내'), body: D('그림으로 보기'), icon: '그림', imageLabel: D('학교 안내문'), action: { type: 'tab', tab: 'easy' } },
    { id: 'go-agency', title: D('기관 찾기'), body: D('가까운 곳 찾기'), icon: '지도', imageLabel: D('건물 입구'), action: { type: 'tab', tab: 'agencies' } },
    { id: 'go-request', title: D('요청 카드'), body: D('눌러서 전달'), icon: '문장', imageLabel: D('메시지'), action: { type: 'request', category: 'admin' } },
    { id: 'go-emergency', title: D('긴급 도움'), body: D('바로 연결'), icon: '긴급', imageLabel: D('도움 요청'), action: { type: 'tab', tab: 'emergency' } }
  ];

  const agencyData = [
    {
      id: 'ansan-danuri',
      name: D('안산 다누리 다문화상담 연결센터'),
      category: 'counseling',
      address: D('안산시 단원구 중앙대로 927, 4층'),
      hours: D('평일 09:00 - 18:00'),
      phoneDisplay: '1577-1366',
      phoneDial: '15771366',
      languages: D('한국어, 영어, 중국어, 베트남어'),
      distance: D('버스 9분'),
      summary: D('학교, 병원, 행정 문제를 다국어 상담으로 먼저 정리해주는 연결 기관입니다.'),
      requestCardCategories: ['admin', 'education', 'medical', 'counseling'],
      mapTag: D('상담'),
      routeSteps: [
        { imageLabel: D('정류장'), caption: D('중앙역 앞 정류장에서 내려 큰 길을 따라 걸어가세요.') },
        { imageLabel: D('건물 입구'), caption: D('다문화 상담 안내판이 보이는 건물로 들어가세요.') },
        { imageLabel: D('접수 데스크'), caption: D('통역이 필요하다고 요청 카드를 먼저 보여주세요.') }
      ]
    },
    {
      id: 'ansan-family',
      name: D('안산시 가족센터 생활지원창구'),
      category: 'welfare',
      address: D('안산시 상록구 예술광장로 210, 2층'),
      hours: D('평일 09:00 - 18:00'),
      phoneDisplay: '031-480-1234',
      phoneDial: '0314801234',
      languages: D('한국어, 영어, 중국어'),
      distance: D('도보 14분'),
      summary: D('생활 적응, 주민센터 안내, 가족 상담과 교육 연결을 돕는 생활지원 기관입니다.'),
      requestCardCategories: ['admin', 'education', 'counseling'],
      mapTag: D('복지'),
      routeSteps: [
        { imageLabel: D('횡단보도'), caption: D('큰 횡단보도를 건너 오른쪽 골목으로 들어가세요.') },
        { imageLabel: D('안내판'), caption: D('가족센터 표지판이 붙은 유리문으로 들어가세요.') },
        { imageLabel: D('상담창구'), caption: D('2층 상담창구에서 생활지원 상담을 요청하면 됩니다.') }
      ]
    },
    {
      id: 'ansan-clinic',
      name: D('외국인 진료지원 클리닉'),
      category: 'medical',
      address: D('안산시 단원구 고잔로 118, 1층'),
      hours: D('월-토 08:30 - 17:30'),
      phoneDisplay: '031-410-2100',
      phoneDial: '0314102100',
      languages: D('한국어, 영어, 통역 연계'),
      distance: D('택시 11분'),
      summary: D('예약, 접수, 검사 준비를 함께 안내받을 수 있는 진료 연계 기관입니다.'),
      requestCardCategories: ['medical', 'counseling'],
      mapTag: D('병원'),
      routeSteps: [
        { imageLabel: D('병원 외관'), caption: D('응급실 표시가 보이는 정문으로 들어가세요.') },
        { imageLabel: D('접수처'), caption: D('접수처 오른쪽 줄에서 요청 카드를 보여주세요.') },
        { imageLabel: D('대기석'), caption: D('이름을 부를 때까지 안내판 근처에서 기다리면 됩니다.') }
      ]
    },
    {
      id: 'ansan-edu',
      name: D('학교생활 지원 데스크'),
      category: 'education',
      address: D('안산시 단원구 광덕서로 60, 교육지원관 1층'),
      hours: D('평일 09:00 - 17:00'),
      phoneDisplay: '031-490-3300',
      phoneDial: '0314903300',
      languages: D('한국어, 영어, 다문화 학부모 지원'),
      distance: D('도보 18분'),
      summary: D('학교 안내문 해석, 준비물 확인, 보호자 상담 연결을 도와주는 교육 창구입니다.'),
      requestCardCategories: ['education', 'admin'],
      mapTag: D('교육'),
      routeSteps: [
        { imageLabel: D('학교 정문'), caption: D('정문 왼쪽 교육지원관 방향 표지판을 따라가세요.') },
        { imageLabel: D('복도'), caption: D('1층 끝 상담실 앞에서 번호표를 받으세요.') },
        { imageLabel: D('상담실'), caption: D('학교 안내문을 이해하지 못했다고 카드로 보여주세요.') }
      ]
    }
  ];

  const requestCardData = [
    {
      id: 'medical-interpret',
      category: 'medical',
      title: D('통역 요청'),
      korean: '통역이 필요합니다.',
      translated: { ko: '통역이 필요합니다.', en: 'I need an interpreter.', zh: '我需要翻译。', vi: 'Tôi cần thông dịch viên.', ru: 'Мне нужен переводчик.', uz: 'Menga tarjimon kerak.' }
    },
    {
      id: 'medical-treatment',
      category: 'medical',
      title: D('진료 요청'),
      korean: '병원 진료를 받고 싶습니다.',
      translated: { ko: '병원 진료를 받고 싶습니다.', en: 'I want medical treatment.', zh: '我想接受诊疗。', vi: 'Tôi muốn được khám bệnh.', ru: 'Я хочу получить медицинскую помощь.', uz: 'Men tibbiy ko‘rikdan o‘tmoqchiman.' }
    },
    {
      id: 'admin-document',
      category: 'admin',
      title: D('서류 이해 도움'),
      korean: '이 문서를 이해하지 못했습니다.',
      translated: { ko: '이 문서를 이해하지 못했습니다.', en: 'I do not understand this document.', zh: '我看不懂这份文件。', vi: 'Tôi không hiểu tài liệu này.', ru: 'Я не понимаю этот документ.', uz: 'Men bu hujjatni tushunmadim.' }
    },
    {
      id: 'admin-service',
      category: 'admin',
      title: D('행정 도움 요청'),
      korean: '어디로 가야 하는지 알려주세요.',
      translated: { ko: '어디로 가야 하는지 알려주세요.', en: 'Please tell me where I should go.', zh: '请告诉我该去哪里。', vi: 'Xin hãy cho tôi biết tôi phải đi đâu.', ru: 'Подскажите, куда мне нужно идти.', uz: 'Qayerga borishim kerakligini ayting.' }
    },
    {
      id: 'education-notice',
      category: 'education',
      title: D('학교 안내문 도움'),
      korean: '학교 안내문을 이해하고 싶습니다.',
      translated: { ko: '학교 안내문을 이해하고 싶습니다.', en: 'I need help understanding the school notice.', zh: '我需要帮助理解学校通知。', vi: 'Tôi cần giúp hiểu thông báo của trường.', ru: 'Мне нужна помощь с пониманием школьного уведомления.', uz: 'Menga maktab xabarnomasini tushunishda yordam kerak.' }
    },
    {
      id: 'education-supplies',
      category: 'education',
      title: D('준비물 확인'),
      korean: '준비물을 확인해 주세요.',
      translated: { ko: '준비물을 확인해 주세요.', en: 'Please help me check the supplies.', zh: '请帮我确认需要准备的物品。', vi: 'Xin hãy giúp tôi kiểm tra đồ cần chuẩn bị.', ru: 'Пожалуйста, помогите проверить, что нужно подготовить.', uz: 'Kerakli narsalarni tekshirishga yordam bering.' }
    },
    {
      id: 'labor-unpaid',
      category: 'labor',
      title: D('임금 미지급'),
      korean: '임금을 받지 못했습니다.',
      translated: { ko: '임금을 받지 못했습니다.', en: 'I did not get paid.', zh: '我没有收到工资。', vi: 'Tôi chưa được trả lương.', ru: 'Мне не выплатили зарплату.', uz: 'Menga ish haqi berilmadi.' }
    },
    {
      id: 'labor-counsel',
      category: 'labor',
      title: D('노동 상담 요청'),
      korean: '노동 상담이 필요합니다.',
      translated: { ko: '노동 상담이 필요합니다.', en: 'I need labor counseling.', zh: '我需要劳动咨询。', vi: 'Tôi cần tư vấn lao động.', ru: 'Мне нужна консультация по трудовым вопросам.', uz: 'Menga mehnat bo‘yicha maslahat kerak.' }
    },
    {
      id: 'counseling-help',
      category: 'counseling',
      title: D('상담 요청'),
      korean: '상담이 필요합니다.',
      translated: { ko: '상담이 필요합니다.', en: 'I need counseling.', zh: '我需要咨询。', vi: 'Tôi cần được tư vấn.', ru: 'Мне нужна консультация.', uz: 'Menga maslahat kerak.' }
    },
    {
      id: 'counseling-safe',
      category: 'counseling',
      title: D('안전 도움 요청'),
      korean: '지금 위험한 상황입니다.',
      translated: { ko: '지금 위험한 상황입니다.', en: 'I am in danger now.', zh: '我现在处于危险中。', vi: 'Bây giờ tôi đang ở trong tình huống nguy hiểm.', ru: 'Сейчас я в опасности.', uz: 'Men hozir xavfli vaziyatdaman.' }
    }
  ];

  const emergencyAlertData = [
    {
      id: 'heatwave',
      color: 'red',
      icon: 'SUN',
      title: D('폭염 알림'),
      summary: D('물을 자주 마시고 가장 더운 시간에는 밖에서 오래 있지 마세요.'),
      actions: [D('물을 자주 마시세요.'), D('시원한 곳으로 이동하세요.'), D('어지럽거나 쓰러질 것 같으면 119를 누르세요.')],
      cta: D('대처 방법 보기')
    },
    {
      id: 'heavy-rain',
      color: 'blue',
      icon: 'RAIN',
      title: D('폭우 알림'),
      summary: D('지하차도나 낮은 길은 피하고 안전한 건물 안으로 먼저 이동하세요.'),
      actions: [D('낮은 길을 피하세요.'), D('우산보다 안전한 건물 안으로 먼저 이동하세요.'), D('침수 위험이 있으면 112나 119에 도움을 요청하세요.')],
      cta: D('대처 방법 보기')
    },
    {
      id: 'fine-dust',
      color: 'orange',
      icon: 'MASK',
      title: D('미세먼지 알림'),
      summary: D('마스크를 쓰고 오래 밖에 있지 않는 것이 좋습니다.'),
      actions: [D('외출 시간을 줄이세요.'), D('마스크를 준비하세요.'), D('호흡이 불편하면 병원 도움을 받으세요.')],
      cta: D('대처 방법 보기')
    },
    {
      id: 'cold-wave',
      color: 'slate',
      icon: 'COLD',
      title: D('한파 알림'),
      summary: D('따뜻한 옷을 여러 겹 입고 오래 밖에 있지 않도록 하세요.'),
      actions: [D('모자와 장갑을 챙기세요.'), D('실내 난방이 어려우면 복지 기관 도움을 요청하세요.'), D('몸이 떨리거나 아프면 병원이나 129에 문의하세요.')],
      cta: D('대처 방법 보기')
    }
  ];

  const ambassadorPostData = [
      {
        id: 'amb-1',
        name: D('린 응우옌'),
        country: D('베트남 커뮤니티 리더'),
        badge: D('인증 리더'),
        context: D('주민센터 / 서류 발급'),
        tip: D('서류 발급은 오전 일찍 가면 더 빠른 편입니다.'),
        detail: D('기계가 어렵다면 요청 카드를 먼저 보여주세요.'),
        language: D('베트남어 / 한국어')
      },
      {
        id: 'amb-2',
        name: D('알리 셰리프'),
        country: D('중앙아시아 커뮤니티 리더'),
        badge: D('인증 리더'),
        context: D('병원 / 접수'),
        tip: D('접수처에서는 예약 문자와 신분증을 먼저 보여주세요.'),
        detail: D('말이 어렵다면 통역 요청 카드를 먼저 보여주세요.'),
        language: D('러시아어 / 한국어')
      },
      {
        id: 'amb-3',
        name: D('마리아 첸'),
        country: D('중국 커뮤니티 리더'),
        badge: D('인증 리더'),
        context: D('학교 / 학부모 상담'),
        tip: D('학교 안내문 사진을 먼저 정리해 가면 상담이 쉬워집니다.'),
        detail: D('준비물, 날짜, 제출 장소부터 확인하면 됩니다.'),
        language: D('중국어 / 한국어')
      },
      {
        id: 'amb-4',
        name: D('누르볼 이스마일'),
        country: D('우즈베키스탄 커뮤니티 리더'),
        badge: D('인증 리더'),
        context: D('복지 / 생활 안내'),
        tip: D('복지 신청은 필요한 서류 이름을 먼저 적어 가면 설명이 더 쉬워집니다.'),
        detail: D('모르는 서류가 있으면 주민센터에서 하나씩 확인해도 됩니다.'),
        language: D('우즈베크어 / 한국어')
      }
    ];

  const walkWithMeProfileData = [
      {
        id: 'walk-1',
        name: D('장 티엔'),
        country: D('베트남'),
        badge: D('활동 배지 12회'),
        yearsInKorea: D('한국 생활 7년'),
        supportLanguage: D('베트남어 / 한국어'),
        imageLabel: D('동행 선배 1'),
        summary: D('병원과 주민센터를 함께 가 본 경험이 많은 생활 선배입니다.'),
        availability: D('평일 오전 가능'),
        purpose: D('병원 / 행정 동행')
      },
      {
        id: 'walk-2',
        name: D('굴나라 압둘라'),
        country: D('우즈베키스탄'),
        badge: D('활동 배지 8회'),
        yearsInKorea: D('한국 생활 5년'),
        supportLanguage: D('우즈베크어 / 한국어'),
        imageLabel: D('동행 선배 2'),
        summary: D('학교 행사와 예방접종 방문에 함께 갈 수 있는 학부모 선배입니다.'),
        availability: D('평일 오후 가능'),
        purpose: D('학교 / 보건소 동행')
      },
      {
        id: 'walk-3',
        name: D('예카테리나'),
        country: D('러시아'),
        badge: D('활동 배지 5회'),
        yearsInKorea: D('한국 생활 9년'),
        supportLanguage: D('러시아어 / 한국어'),
        imageLabel: D('동행 선배 3'),
        summary: D('노동 상담과 생활지원 기관 방문을 차분하게 함께 도와줄 수 있습니다.'),
        availability: D('토요일 가능'),
        purpose: D('상담 / 복지기관 동행')
      }
  ];

  const visualDictionaryData = [
    {
      id: 'desk',
      name: D('접수처'),
      translated: { ko: '접수처', en: 'Registration desk', zh: '接待处', vi: 'Quầy tiếp nhận', ru: 'Стойка регистрации', uz: 'Ro‘yxatga olish bo‘limi' },
      usage: D('여기에서 이름을 말하거나 요청 카드를 먼저 보여주면 됩니다.'),
      imageLabel: D('접수처'),
      videoHint: D('접수처 이용 순서')
    },
    {
      id: 'machine',
      name: D('무인민원발급기'),
      translated: { ko: '무인민원발급기', en: 'Document kiosk', zh: '自助证件机', vi: 'Máy cấp giấy tờ tự động', ru: 'Автомат выдачи документов', uz: 'Hujjat berish kioski' },
      usage: D('화면이 어려우면 창구로 가도 됩니다. 반드시 혼자 할 필요는 없습니다.'),
      imageLabel: D('민원 기계'),
      videoHint: D('민원 기계 사용하는 순서')
    },
    {
      id: 'payment',
      name: D('수납'),
      translated: { ko: '수납', en: 'Payment desk', zh: '缴费处', vi: 'Quầy thanh toán', ru: 'Касса', uz: 'To‘lov bo‘limi' },
      usage: D('진료나 서류가 끝난 뒤 비용을 내는 곳입니다.'),
      imageLabel: D('수납 창구'),
      videoHint: D('수납 순서')
    },
    {
      id: 'window3',
      name: D('3번 창구'),
      translated: { ko: '3번 창구', en: 'Window 3', zh: '3号窗口', vi: 'Quầy số 3', ru: 'Окно 3', uz: '3-oyna' },
      usage: D('앰배서더 팁에서 자주 보이는 표현입니다. 번호표를 들고 해당 창구 앞에서 기다리면 됩니다.'),
      imageLabel: D('창구 번호'),
      videoHint: D('창구 찾는 방법')
    }
  ];

  const culturePlaceData = [
    {
      id: 'culture-food-1',
      category: 'food',
      name: D('고향 밥상 식당'),
      cultureTag: D('베트남 / 동남아'),
      description: D('익숙한 맛으로 마음이 편해지는 동네 식당입니다.'),
      location: D('안산 원곡동 다문화거리'),
      recommendation: D('혼자 와도 편하고 메뉴 사진이 잘 정리돼 있어요.')
    },
    {
      id: 'culture-market-1',
      category: 'market',
      name: D('글로벌 마트'),
      cultureTag: D('할랄 / 중앙아시아'),
      description: D('고향 식재료와 향신료를 찾기 쉬운 마트입니다.'),
      location: D('안산 선부동 시장 근처'),
      recommendation: D('가족과 함께 장보기 좋은 장소입니다.')
    },
    {
      id: 'culture-community-1',
      category: 'community',
      name: D('함께 모이는 커뮤니티 라운지'),
      cultureTag: D('모임 / 상담 / 정보교류'),
      description: D('생활 팁과 행사 정보를 나누는 열린 모임 공간입니다.'),
      location: D('안산 중앙역 인근'),
      recommendation: D('처음 온 사람도 안내받기 쉬워요.')
    },
    {
      id: 'culture-faith-1',
      category: 'religion',
      name: D('평화 예배 공간'),
      cultureTag: D('종교 / 모임'),
      description: D('예배와 지역 모임이 함께 열리는 익숙한 공동체 공간입니다.'),
      location: D('안산 원곡동'),
      recommendation: D('주말마다 커뮤니티 식사도 함께 열립니다.')
    }
  ];

  const documentData = {
    school: {
      label: D('학교 안내문', 'School notice'),
      summary: D('이 문서는 준비물과 날짜를 알려주는 안내문입니다.'),
      simple: D('무엇을 가져가야 하는지, 언제까지 내야 하는지를 먼저 보면 됩니다.'),
      actions: [D('준비물 확인'), D('날짜 저장'), D('보호자와 공유')],
      requestCategory: 'education',
      agencyFilter: 'education',
      videoHint: D('학교 준비물 확인 방법')
    },
    medical: {
      label: D('병원 안내문', 'Hospital notice'),
      summary: D('이 문서는 검사 준비와 방문 시간을 설명합니다.'),
      simple: D('금식 여부, 방문 시간, 가져갈 서류부터 확인하면 됩니다.'),
      actions: [D('방문 시간 확인'), D('가져갈 것 확인'), D('약 복용 여부 문의')],
      requestCategory: 'medical',
      agencyFilter: 'medical',
      videoHint: D('병원 접수 순서')
    },
    immigration: {
      label: D('출입국 공지', 'Immigration notice'),
      summary: D('이 문서는 방문 날짜와 필요한 서류를 안내합니다.'),
      simple: D('마감 날짜와 서류 목록부터 확인하면 됩니다.'),
      actions: [D('기한 확인'), D('예약 확인'), D('원본 서류 준비')],
      requestCategory: 'admin',
      agencyFilter: 'counseling',
      videoHint: D('출입국 방문 준비')
    },
    community: {
      label: D('주민센터 안내', 'Community center notice'),
      summary: D('이 문서는 신청 방법과 제출 서류를 설명합니다.'),
      simple: D('신청 조건과 증빙 서류부터 보면 됩니다.'),
      actions: [D('자격 확인'), D('증빙 준비'), D('제출처 확인')],
      requestCategory: 'admin',
      agencyFilter: 'welfare',
      videoHint: D('주민센터 신청 순서')
    }
  };

  const emergencyQuickCalls = [
    { key: 'police', title: D('긴급 신고'), number: '112', description: D('폭력, 범죄, 위험 상황'), urgent: true },
    { key: 'fire', title: D('응급 / 화재'), number: '119', description: D('응급실, 화재, 구조'), urgent: true },
    { key: 'danuri', title: D('다국어 상담'), number: '1577-1366', description: D('다국어 생활 상담') },
    { key: 'women', title: D('보호 지원'), number: '1366', description: D('폭력 피해 상담 / 보호') },
    { key: 'labor', title: D('노동 상담'), number: '1350', description: D('임금, 해고, 산재') },
    { key: 'welfare', title: D('복지 / 건강'), number: '129', description: D('건강, 복지, 생활지원') },
    { key: 'immigration', title: D('출입국 민원'), number: '1345', description: D('비자, 체류, 등록') },
    { key: 'government', title: D('정부 안내'), number: '110', description: D('어느 기관으로 가야 하는지 안내') }
  ];

  const phraseData = [
    D('통역이 필요합니다.'),
    D('상담이 필요합니다.'),
    D('이 문서를 이해하지 못했습니다.'),
    D('병원 진료를 받고 싶습니다.'),
    D('지금 위험한 상황입니다.')
  ];

  return {
    categoryMeta,
    scenarioData,
    easyReadArticleData,
    voiceGuideData,
    quickActionData,
    agencyData,
    requestCardData,
    emergencyAlertData,
    ambassadorPostData,
    walkWithMeProfileData,
    visualDictionaryData,
    culturePlaceData,
    documentData,
    emergencyQuickCalls,
    phraseData
  };
})();
