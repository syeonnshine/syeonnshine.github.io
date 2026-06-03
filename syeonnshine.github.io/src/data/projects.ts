// Projects 섹션 데이터 (사이드 프로젝트)

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  period: string
  summary: string        // 한 줄 설명
  tags: string[]         // 사용 기술 태그
  highlights: string[]   // 트리거→처리→결과 형태의 핵심 내용
  imageUrl?: string      // 스크린샷·다이어그램 이미지 (추가 시 경로 입력)
  links?: ProjectLink[]  // 관련 링크 (선택)
}

export const projects: Project[] = [
  {
    name: 'n8n + AI 업무 자동화',
    period: '2026 ~',
    summary: '반복 업무를 n8n 워크플로우 + AI로 자동화한 개인 프로젝트',
    tags: ['n8n', 'AI API 연동', 'Webhook', '업무 자동화'],
    highlights: [
      '특정 이벤트(트리거) 발생 시 AI가 내용을 분석·가공해 결과를 자동 발송하는 워크플로우 구성',
      '반복되는 수작업을 자동화해 처리 시간을 대폭 단축',
      '퇴사 후 스스로 최신 AI 도구를 학습하고 실제 동작하는 결과물로 만들어낸 프로젝트',
    ],
  },
  {
    name: 'AI 무드보드 생성기',
    period: '2026 ~',
    summary: '키워드 하나로 색상 팔레트·폰트·감성 이미지를 자동 생성하는 AI 디자인 도구',
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Claude API', 'Unsplash API', 'ColorThief'],
    highlights: [
      'Claude API로 키워드의 감성 온도를 분석해 5가지 색상 + 한국어 감성 설명 생성, 프롬프트 캐싱 적용으로 API 비용 절감',
      'Google Fonts 기반 헤딩·본문 폰트 2~3가지 조합 자동 제안',
      'Unsplash API로 이미지 30장 검색 → ColorThief로 픽셀 색상 추출 → 팔레트와 RGB 거리 계산해 가장 어울리는 6장 선별',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/syeonnshine/ai-mood-board' },
    ],
  },
]
