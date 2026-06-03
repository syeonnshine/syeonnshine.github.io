// Skills.tsx — 기술 스택 섹션 (카테고리별 태그, 게이지바 없음)
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    // bg-bg — Projects(bg-surface)와 교번하여 섹션 구분
    <section id="skills" className="bg-bg px-6 py-20 sm:px-12">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text mb-2">Skills</h2>
          <div className="w-8 h-0.5 bg-accent" />
        </div>

        {/* 카테고리별 스택 목록 */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.label}>
              {/* 카테고리 레이블 */}
              <p className="text-xs text-text-muted mb-3 tracking-widest uppercase">
                {category.label}
              </p>

              {/* 스택 태그 목록 */}
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm border border-border rounded-md text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
