// Skills 섹션 데이터 — 카테고리별 스택 목록 (숙련도 게이지바 없음)

export type SkillCategory = {
  label: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    items: ['Vue 3', 'TypeScript', 'JavaScript (ES6)', 'HTML', 'CSS / SCSS', 'Tailwind CSS', 'Bootstrap', 'AG-Grid', 'Vuestic UI', 'Vite'],
  },
  {
    label: 'Backend / 연동',
    items: ['Spring Boot', 'Thymeleaf', 'Alpine.js', 'MySQL', 'PostgreSQL'],
  },
  {
    label: '자동화 / AI',
    items: ['n8n', 'AI API 연동', 'Claude Code'],
  },
  {
    label: 'Tool',
    items: ['Figma', 'Git'],
  },
]
