import { MbtiType, Persona } from "@/types";

export const personas: Record<MbtiType, Persona> = {
  INTJ: {
    type: "INTJ",
    title: "독고다이 아키텍트 마스터",
    tagline: "계획 없는 배포는 재앙이다. 시스템 설계의 신",
    emoji: "🧠",
    gradient: "from-slate-800 to-indigo-900",
    traits: [
      "회의 전 이미 A안, B안, C안과 예상 리스크까지 시뮬레이션을 마친 상태로 등장한다.",
      "비효율적인 프로세스를 보면 '왜 이렇게 하지?'라는 생각에 자체적으로 자동화 스크립트부터 짠다.",
      "감정적인 설득보다 논리적인 근거 자료(레퍼런스, 데이터) 하나가 마음을 움직인다.",
    ],
    bestPartner: {
      type: "ENFP",
      title: "아이디어 폭발 스파크 기획자",
      reason:
        "치밀한 설계도 위에 ENFP의 반짝이는 아이디어가 얹히면 상상 이상의 서비스가 탄생해요. 딱딱한 논리에 말랑한 영감을 더해주는 최고의 파트너.",
    },
    worstPartner: {
      type: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason:
        "즉흥적인 결정과 감정적인 텐션을 우선시하는 ESFP 앞에서, 계획이 틀어질 때마다 INTJ의 스트레스 게이지는 서버 부하처럼 치솟아요.",
    },
  },
  INTP: {
    type: "INTP",
    title: "밤샘 분석 AI 연구원",
    tagline: "왜 대답을 못 하니... 알고리즘과 디버깅의 신",
    emoji: "🔬",
    gradient: "from-indigo-900 to-violet-700",
    traits: [
      "궁금한 알고리즘이 생기면 새벽 3시에도 논문과 깃허브 이슈를 뒤지며 파고든다.",
      "'일단 해보자'보다 '왜 그렇게 동작하는지' 원리를 이해해야 다음 단계로 넘어간다.",
      "잡담보다 심도 있는 기술 토론 한 판에서 눈이 반짝인다.",
    ],
    bestPartner: {
      type: "ENFJ",
      title: "팀의 성장을 이끄는 스크럼 마스터",
      reason:
        "혼자 파고들다 방향을 잃기 쉬운 INTP에게, 사람 마음을 잘 읽는 ENFJ가 팀과의 연결고리가 되어줘요. 연구 결과를 세상 밖으로 꺼내주는 든든한 통역사.",
    },
    worstPartner: {
      type: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason:
        "형식과 관계 중심의 ESFJ와, 논리와 효율만 따지는 INTP는 회식 자리 배치부터 보고서 형식까지 사사건건 결이 달라요.",
    },
  },
  ENTJ: {
    type: "ENTJ",
    title: "거침없는 빌드업 CPO",
    tagline: "방향성은 내가 정한다. 무결점 비즈니스 리더",
    emoji: "🚀",
    gradient: "from-blue-800 to-indigo-900",
    traits: [
      "목표가 정해지면 팀 전체를 로드맵에 태워 거침없이 밀어붙인다.",
      "비효율적인 회의는 3분 만에 정리하고 액션 아이템부터 뽑는다.",
      "'왜 안 되는지'보다 '어떻게 되게 할지'를 먼저 고민한다.",
    ],
    bestPartner: {
      type: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason:
        "INFP의 섬세한 유저 공감 능력이 ENTJ의 거대한 비전에 따뜻한 디테일을 채워줘요. 방향은 내가, 감성은 네가.",
    },
    worstPartner: {
      type: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason:
        "자유롭게 흘러가는 걸 좋아하는 ISFP에게 ENTJ의 강한 추진력과 촘촘한 데드라인은 숨 막히는 압박으로 느껴질 수 있어요.",
    },
  },
  ENTP: {
    type: "ENTP",
    title: "아이디어 뱅크 그로스 해커",
    tagline: "이거 바꾸면 대박 날 듯? 프로 불편러 혁신가",
    emoji: "💡",
    gradient: "from-cyan-500 to-blue-700",
    traits: [
      "'이거 이렇게 바꾸면 대박 나지 않아요?'라는 말을 하루에 세 번은 한다.",
      "정해진 프로세스보다 새로운 실험과 A/B 테스트에 눈이 먼저 간다.",
      "토론을 즐기며, 반박당해도 오히려 더 재밌어한다.",
    ],
    bestPartner: {
      type: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason:
        "휘발되기 쉬운 ENTP의 아이디어에 INFJ가 깊은 통찰과 철학을 더해 진짜 임팩트 있는 프로덕트로 완성시켜줘요.",
    },
    worstPartner: {
      type: "ISFJ",
      title: "든든한 백업 요정 서비스 운영자",
      reason:
        "안정과 루틴을 소중히 여기는 ISFJ에게 ENTP의 잦은 '이거 다 갈아엎죠'는 매번 새로운 재난 영화처럼 느껴져요.",
    },
  },
  INFJ: {
    type: "INFJ",
    title: "비전 제시형 프로덕트 전략가",
    tagline: "프로덕트의 철학을 만듭니다. 숨은 멘토",
    emoji: "🧭",
    gradient: "from-indigo-600 to-violet-800",
    traits: [
      "숫자 너머의 '이 프로덕트가 왜 필요한가'라는 본질적인 질문을 놓지 않는다.",
      "팀원 한 명 한 명의 강점을 조용히 파악해 최적의 자리를 찾아준다.",
      "겉으로는 차분하지만 머릿속엔 이미 3년 뒤 로드맵이 그려져 있다.",
    ],
    bestPartner: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason:
        "INFJ가 그린 큰 그림에 ENTP의 폭발적인 실행 아이디어가 더해지면, 비전이 순식간에 구체적인 프로젝트로 진화해요.",
    },
    worstPartner: {
      type: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason:
        "장기적인 철학과 의미를 중시하는 INFJ에게, 눈앞의 임기응변만 중시하는 ESTP의 즉흥성은 방향성을 잃게 만드는 스트레스예요.",
    },
  },
  INFP: {
    type: "INFP",
    title: "유저 빙의 감성 UI 디자이너",
    tagline: "한 픽셀의 UI에도 유저의 마음을 담습니다",
    emoji: "🎨",
    gradient: "from-violet-500 to-indigo-400",
    traits: [
      "버튼 하나의 색감과 애니메이션 타이밍에도 유저의 감정을 이입해 고민한다.",
      "숫자 지표보다 '이 화면을 보는 사람이 어떤 기분일까'를 먼저 상상한다.",
      "차가운 피드백보다 진심이 담긴 한마디에 며칠 치 의욕이 충전된다.",
    ],
    bestPartner: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason:
        "ENTJ의 명확한 방향 제시 덕분에 INFP는 흔들리지 않고 자신의 섬세한 감성을 마음껏 화면에 녹여낼 수 있어요.",
    },
    worstPartner: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason:
        "감정보다 규칙과 절차를 앞세우는 ESTJ의 직설적인 피드백은 섬세한 INFP에게 예상보다 깊은 생채기를 남길 수 있어요.",
    },
  },
  ENFJ: {
    type: "ENFJ",
    title: "팀의 성장을 이끄는 스크럼 마스터",
    tagline: "모두 할 수 있어요! 팀의 사기를 책임지는 치어리더",
    emoji: "📣",
    gradient: "from-teal-500 to-cyan-700",
    traits: [
      "매일 아침 스탠드업에서 팀원 컨디션까지 세심하게 챙긴다.",
      "'우리 팀이라면 할 수 있어요!'라는 응원을 습관처럼 건넨다.",
      "갈등이 생기면 누구보다 먼저 나서서 중재하고 분위기를 다잡는다.",
    ],
    bestPartner: {
      type: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason:
        "INTP의 깊이 있는 분석과 통찰을 ENFJ가 팀 전체가 이해할 수 있는 언어로 풀어주며 최고의 시너지를 만들어요.",
    },
    worstPartner: {
      type: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason:
        "감정 교류와 팀워크를 중시하는 ENFJ에게, 혼자 조용히 일을 처리하는 ISTP의 무뚝뚝함은 서운함으로 다가올 수 있어요.",
    },
  },
  ENFP: {
    type: "ENFP",
    title: "아이디어 폭발 스파크 기획자",
    tagline: "재미없는 서비스는 안 만들어요! 트렌드 세터",
    emoji: "✨",
    gradient: "from-cyan-400 to-indigo-500",
    traits: [
      "샤워하다가도 새 서비스 아이디어가 떠오르면 바로 메모 앱을 켠다.",
      "'재미없으면 의미 없다'는 마음으로 늘 트렌드와 밈을 스캔한다.",
      "다양한 사람과의 브레인스토밍에서 에너지가 폭발적으로 솟는다.",
    ],
    bestPartner: {
      type: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason:
        "INTJ가 ENFP의 반짝이는 아이디어를 탄탄한 설계와 로드맵으로 현실화시켜줘요. 상상력과 실행력의 완벽한 조합.",
    },
    worstPartner: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason:
        "즉흥적이고 변화무쌍한 ENFP의 스타일은, 원칙과 절차를 중시하는 ISTJ의 눈에는 예측 불가능한 리스크로 보일 수 있어요.",
    },
  },
  ISTJ: {
    type: "ISTJ",
    title: "팩트 체크 중심 QA 마스터",
    tagline: "제 눈에 버그가 걸렸습니다. 철두철미한 수문장",
    emoji: "🛡️",
    gradient: "from-slate-700 to-slate-900",
    traits: [
      "테스트 케이스 문서 없이는 배포 승인 버튼을 절대 누르지 않는다.",
      "'예전에도 이런 이슈 있었는데'라며 과거 사례를 정확히 기억해 재발을 막는다.",
      "규칙과 매뉴얼을 지키는 것이 곧 팀을 지키는 것이라 믿는다.",
    ],
    bestPartner: {
      type: "ESFP",
      title: "퍼포먼스 만렙 스타 마케터",
      reason:
        "ESFP의 밝은 에너지가 ISTJ의 꼼꼼함과 만나면, 원칙은 지키되 팀 분위기는 화기애애한 최고의 조합이 완성돼요.",
    },
    worstPartner: {
      type: "ENFP",
      title: "아이디어 폭발 스파크 기획자",
      reason:
        "매뉴얼과 절차 없이 즉흥적으로 움직이는 ENFP를 보면, ISTJ는 QA 체크리스트를 처음부터 다시 써야 할 것 같은 불안감을 느껴요.",
    },
  },
  ISFJ: {
    type: "ISFJ",
    title: "든든한 백업 요정 서비스 운영자",
    tagline: "이슈 발생? 제가 다 처리해 둘게요. 보이지 않는 영웅",
    emoji: "🧯",
    gradient: "from-sky-500 to-indigo-700",
    traits: [
      "장애 알림이 뜨면 누구보다 빠르게, 그리고 조용히 대응 매뉴얼을 실행한다.",
      "동료가 놓친 사소한 디테일까지 미리 챙겨 사고를 예방한다.",
      "생색내지 않지만, 사실 그 팀의 안정감은 이 사람 덕분인 경우가 많다.",
    ],
    bestPartner: {
      type: "ESTP",
      title: "위기 탈출 넘버원 소방수 개발자",
      reason:
        "ESTP가 앞장서서 위기를 정면 돌파하는 동안, ISFJ가 뒤에서 꼼꼼히 마무리하며 완벽한 팀플레이를 만들어요.",
    },
    worstPartner: {
      type: "ENTP",
      title: "아이디어 뱅크 그로스 해커",
      reason:
        "안정적인 루틴 속에서 신뢰를 쌓는 ISFJ에게, 매번 새로운 실험을 던지는 ENTP는 마음 편할 날이 없게 만드는 존재예요.",
    },
  },
  ESTJ: {
    type: "ESTJ",
    title: "폭풍 추진력의 PM 리더",
    tagline: "스프린트 지연은 없다. 철저한 일정과 실행력",
    emoji: "📊",
    gradient: "from-indigo-700 to-blue-800",
    traits: [
      "간트차트와 일정표를 손에서 놓지 않으며 스프린트 지연을 용납하지 않는다.",
      "회의는 정시에 시작해서 정시에 끝나야 직성이 풀린다.",
      "'해야 할 일'과 '담당자'를 명확히 나누는 것을 가장 중요하게 생각한다.",
    ],
    bestPartner: {
      type: "ISFP",
      title: "자유로운 영혼의 프론트엔드 아티스트",
      reason:
        "ISFP의 자유로운 감성이 ESTJ의 빡빡한 일정 속에 숨 쉴 틈을 만들어주고, ESTJ는 그 감성을 현실적인 결과물로 완성시켜줘요.",
    },
    worstPartner: {
      type: "INFP",
      title: "유저 빙의 감성 UI 디자이너",
      reason:
        "일정과 규칙을 최우선하는 ESTJ의 직진 화법은, 감정과 의미를 소중히 여기는 INFP에게는 다소 차갑게 느껴질 수 있어요.",
    },
  },
  ESFJ: {
    type: "ESFJ",
    title: "네트워킹 만렙 분위기 메이커",
    tagline: "팀원 간 불화 제로! 모두를 챙기는 마당발 올라운더",
    emoji: "🎉",
    gradient: "from-cyan-500 to-teal-600",
    traits: [
      "새로 온 팀원의 이름과 취향을 가장 먼저 외우고 살뜰히 챙긴다.",
      "팀 회식 장소부터 생일 케이크까지, 모두가 즐거운 자리를 기획하는 데 진심이다.",
      "갈등이 생기면 서운한 감정이 오래가기 전에 먼저 다가가 풀어낸다.",
    ],
    bestPartner: {
      type: "ISTP",
      title: "조용한 백엔드 버그 킬러",
      reason:
        "ISTP의 묵묵한 실력이 ESFJ의 살가운 관계 관리와 만나면, 실력과 팀워크를 모두 갖춘 완벽한 팀이 완성돼요.",
    },
    worstPartner: {
      type: "INTP",
      title: "밤샘 분석 AI 연구원",
      reason:
        "관계와 분위기를 중시하는 ESFJ에게, 사람보다 논리와 효율을 우선하는 INTP의 무심한 태도는 서운함으로 다가올 수 있어요.",
    },
  },
  ISTP: {
    type: "ISTP",
    title: "조용한 백엔드 버그 킬러",
    tagline: "말은 필요 없다. 코드로 증명하는 실력파 엔지니어",
    emoji: "🛠️",
    gradient: "from-slate-600 to-cyan-800",
    traits: [
      "말보다 커밋(commit)으로 증명하는 걸 선호한다.",
      "복잡하게 얽힌 레거시 코드일수록 오히려 눈이 반짝인다.",
      "필요한 말만 정확하게, 군더더기 없는 대화를 좋아한다.",
    ],
    bestPartner: {
      type: "ESFJ",
      title: "네트워킹 만렙 분위기 메이커",
      reason:
        "ESFJ가 팀 안팎의 커뮤니케이션과 관계를 챙기는 동안, ISTP는 뒤에서 묵묵히 기술적 난제를 해결하며 최고의 밸런스를 이뤄요.",
    },
    worstPartner: {
      type: "ENFJ",
      title: "팀의 성장을 이끄는 스크럼 마스터",
      reason:
        "잦은 감정 교류와 팀 빌딩 활동을 원하는 ENFJ에게, 혼자만의 시간을 중시하는 ISTP의 거리감은 아쉽게 느껴질 수 있어요.",
    },
  },
  ISFP: {
    type: "ISFP",
    title: "자유로운 영혼의 프론트엔드 아티스트",
    tagline: "화면 인터랙션은 예술이죠. 감각적인 개발자",
    emoji: "🎧",
    gradient: "from-violet-400 to-cyan-500",
    traits: [
      "0.1초의 인터랙션 애니메이션 타이밍까지 직접 손으로 다듬는다.",
      "정해진 디자인 시스템 안에서도 자신만의 감각적인 터치를 슬쩍 녹여낸다.",
      "시끄러운 논쟁보다 조용히 몰입해서 만드는 결과물로 답한다.",
    ],
    bestPartner: {
      type: "ESTJ",
      title: "폭풍 추진력의 PM 리더",
      reason:
        "ESTJ가 명확한 방향과 일정을 잡아주면, ISFP는 그 안에서 자유롭게 감각을 발휘해 완성도 높은 결과물을 만들어내요.",
    },
    worstPartner: {
      type: "ENTJ",
      title: "거침없는 빌드업 CPO",
      reason:
        "강하게 밀어붙이는 ENTJ의 스타일 앞에서, 자유롭고 유연하게 작업하고 싶은 ISFP는 위축되고 지칠 수 있어요.",
    },
  },
  ESTP: {
    type: "ESTP",
    title: "위기 탈출 넘버원 소방수 개발자",
    tagline: "라이브 서버 터졌다고요? 지금 당장 고칩니다",
    emoji: "🚒",
    gradient: "from-rose-500 to-indigo-700",
    traits: [
      "라이브 서버 장애 알림이 울리면 오히려 아드레날린이 솟구친다.",
      "매뉴얼을 정독하기보다 일단 부딪히며 빠르게 답을 찾는다.",
      "위기 상황에서 누구보다 침착하고 재빠른 의사결정을 내린다.",
    ],
    bestPartner: {
      type: "ISFJ",
      title: "든든한 백업 요정 서비스 운영자",
      reason:
        "ISFJ가 꼼꼼하게 재발 방지책을 챙기는 동안, ESTP는 최전선에서 화끈하게 불을 끄며 최고의 위기 대응 콤비를 이뤄요.",
    },
    worstPartner: {
      type: "INFJ",
      title: "비전 제시형 프로덕트 전략가",
      reason:
        "깊은 고민과 장기적 의미를 중시하는 INFJ에게, 즉흥적으로 빠르게 치고 나가는 ESTP의 스타일은 다소 가볍게 느껴질 수 있어요.",
    },
  },
  ESFP: {
    type: "ESFP",
    title: "퍼포먼스 만렙 스타 마케터",
    tagline: "우리 서비스 모르는 사람 없게 해 주세요. 바이럴 장인",
    emoji: "🎤",
    gradient: "from-amber-400 to-pink-500",
    traits: [
      "새로운 캠페인 아이디어만 생기면 일단 무대에 서고 본다.",
      "우리 서비스를 홍보할 수 있다면 어떤 채널이든 마다하지 않는다.",
      "팀 분위기가 가라앉아 있으면 못 참고 텐션을 끌어올린다.",
    ],
    bestPartner: {
      type: "ISTJ",
      title: "팩트 체크 중심 QA 마스터",
      reason:
        "ISTJ가 꼼꼼하게 데이터를 검증하고 리스크를 관리해주는 동안, ESFP는 마음껏 무대 위에서 바이럴을 만들어낼 수 있어요.",
    },
    worstPartner: {
      type: "INTJ",
      title: "독고다이 아키텍트 마스터",
      reason:
        "즉흥적이고 감각적인 ESFP의 스타일은, 철저한 계획과 논리를 중시하는 INTJ에게는 예측 불가능한 변수로 느껴질 수 있어요.",
    },
  },
};

export function getPersona(type: string | undefined | null): Persona | null {
  if (!type) return null;
  const normalized = type.toUpperCase();
  return (personas as Record<string, Persona>)[normalized] ?? null;
}
