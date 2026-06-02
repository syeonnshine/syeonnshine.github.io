// Experience 섹션 데이터
// 회사 → 프로젝트 2단계 구조로 관리합니다.

export type Project = {
  name: string
  period: string
  role: string
  stacks: string[]
  achievements: string[]
  isFeatured?: boolean  // true면 "대표 프로젝트" 배지 표시
}

export type Experience = {
  company: string
  type?: string         // "파견직" 등 고용 형태
  period: string
  projects?: Project[]  // 프로젝트 단위로 나뉘는 회사
  bullets?: string[]    // 간결하게 불릿으로만 표현하는 회사
  stacks?: string[]     // bullets 방식일 때 스택 배열
}

export const experiences: Experience[] = [
  {
    company: '현대글로비스',
    type: '파견직',
    period: '2024.01 – 2026.01',
    projects: [
      {
        name: 'VPLAN · 자동차선 배선계획 디지털화 시스템',
        period: '2025.05 – 2026.01',
        role: '프론트엔드 신규 구축',
        stacks: ['Vue 3', 'TypeScript', 'Vite', 'Vuestic UI', 'AG-Grid'],
        achievements: [
          'Vite 기반 FE 개발 환경 구축 + Vuestic UI 통합으로 빌드·개발 효율 향상',
          'AG-Grid로 대용량 배선 데이터 그리드 커스터마이징 및 실시간 편집 구현',
          'API 기반 SearchFilter 컴포넌트 설계로 다양한 검색 조건 연동 로직 재사용성 확보',
        ],
        isFeatured: true,
      },
      {
        name: '방선신청 및 안전관리시스템',
        period: '2024.01 – 2024.10',
        role: '프론트엔드 신규 구축 및 유지보수',
        stacks: ['Spring Boot', 'Thymeleaf', 'Alpine.js', 'MySQL'],
        achievements: [
          'Thymeleaf + Alpine.js로 Spring Boot 서버와 연동한 운영 화면 구현',
          '반응형 UI로 PC·모바일 환경 최적화',
        ],
      },
    ],
  },
  {
    company: '엑시아소프트',
    period: '(기간 비공개)',
    stacks: ['Java', 'Spring Boot', 'Vue', 'JSP', 'MySQL'],
    bullets: [
      'ISMS(정보보호관리체계) 인증심사 기간 대응 지원',
      '운영 중인 거래소 서비스 풀스택 유지보수 — 모던(Vue) + 레거시(JSP) 환경 모두 경험',
    ],
  },
]
