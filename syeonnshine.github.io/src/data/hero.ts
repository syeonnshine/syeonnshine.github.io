// Hero 섹션에서 사용하는 데이터를 여기서 관리합니다.

// 핵심 스택 배지 (5개 고정)
export const heroStacks = [
  'Vue 3',
  'TypeScript',
  'AG-Grid',
  'Spring Boot',
  'n8n',
] as const

export type LinkIcon = 'github' | 'email' | 'phone'

export type HeroContact = {
  icon: LinkIcon
  label: string
  value: string
  href?: string  // href가 있으면 링크, 없으면 텍스트로만 표시
}

export const heroContacts: HeroContact[] = [
  { icon: 'github', label: 'GitHub', value: 'syeonnshine',       href: 'https://github.com/syeonnshine'  },
  { icon: 'email',  label: 'Email',  value: 'siyeonz@naver.com', href: 'mailto:siyeonz@naver.com'        },
  { icon: 'phone',  label: 'Tel',    value: '010-3367-8777',     href: 'tel:010-3367-8777'               },
]
