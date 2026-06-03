// Contact 섹션 데이터

export type ContactItem = {
  label: string
  value: string
  href: string
}

export const contactItems: ContactItem[] = [
  {
    label: 'Email',
    value: 'siyeonz@naver.com',
    href: 'mailto:siyeonz@naver.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/syeonnshine',
    href: 'https://github.com/syeonnshine',
  },
  {
    label: 'Tel',
    value: '010-3367-8777',
    href: 'tel:01033678777',
  },
]
