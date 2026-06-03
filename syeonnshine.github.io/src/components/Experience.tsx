// Experience.tsx — 경력 섹션
import { experiences, type Experience, type Project } from '../data/experience'

// 프로젝트 카드 — 각 프로젝트를 별도 컴포넌트로 분리해 Experience를 간결하게 유지합니다.
// props: 부모 컴포넌트에서 자식으로 데이터를 전달하는 방식입니다.
function ProjectCard({ project }: { project: Project }) {
  return (
    // isFeatured면 accent 보더, 아니면 일반 보더
    <div className={`
      rounded-lg border p-5
      ${project.isFeatured
        ? 'border-accent bg-surface'
        : 'border-border bg-surface'}
    `}>
      {/* 카드 헤더: 이름 + 대표 배지 + 기간 */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <div className="flex flex-wrap items-center gap-2">
          {project.isFeatured && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-accent text-bg rounded">
              대표
            </span>
          )}
          <h3 className="text-base font-semibold text-text">{project.name}</h3>
        </div>
        <span className="text-xs text-text-muted shrink-0">{project.period}</span>
      </div>

      {/* 역할 */}
      <p className="text-sm text-text-muted mb-3">{project.role}</p>

      {/* 스택 배지 목록 */}
      <ul className="flex flex-wrap gap-1.5 mb-4">
        {project.stacks.map((stack) => (
          <li key={stack} className="px-2 py-0.5 text-xs border border-border rounded text-text-muted">
            {stack}
          </li>
        ))}
      </ul>

      {/* 성과 불릿 목록 */}
      <ul className="space-y-1.5">
        {project.achievements.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-text leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {/* 시연 GIF — 있을 때만 표시 */}
      {project.demoUrl && (
        <div className="mt-5 pt-4 border-t border-border">
          <p className="text-xs text-text-muted mb-2 tracking-widest uppercase">Demo</p>
          <video
            src={project.demoUrl}
            controls
            muted
            playsInline
            className="w-full rounded-md border border-border"
          />
        </div>
      )}
    </div>
  )
}

// 회사 블록 — 회사 헤더 + 그 안의 프로젝트/불릿 렌더
function CompanyBlock({ exp }: { exp: Experience }) {
  return (
    <div>
      {/* 회사 헤더 */}
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-lg font-bold text-text">{exp.company}</h3>
          {exp.type && (
            <span className="text-sm text-text-muted">{exp.type}</span>
          )}
        </div>
        <span className="text-sm text-text-muted">{exp.period}</span>
      </div>

      {/* 프로젝트 카드 방식 */}
      {exp.projects && (
        <div className="space-y-3">
          {exp.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}

      {/* 불릿 방식 (엑시아소프트 등 간결하게 표현할 회사) */}
      {exp.bullets && (
        <div>
          {/* 스택 배지 */}
          {exp.stacks && (
            <ul className="flex flex-wrap gap-1.5 mb-3">
              {exp.stacks.map((stack) => (
                <li key={stack} className="px-2 py-0.5 text-xs border border-border rounded text-text-muted">
                  {stack}
                </li>
              ))}
            </ul>
          )}
          {/* 불릿 목록 */}
          <ul className="space-y-1.5">
            {exp.bullets.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-text leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-border shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    // bg-bg — About(bg-surface)와 교번하여 섹션 구분
    <section id="experience" className="bg-bg px-6 py-20 sm:px-12">
      <div className="max-w-3xl mx-auto">

        {/* 섹션 타이틀 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text mb-2">Experience</h2>
          <div className="w-8 h-0.5 bg-accent" />
        </div>

        {/* 회사 목록 — experiences 배열을 .map()으로 CompanyBlock으로 변환 */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <CompanyBlock key={exp.company} exp={exp} />
          ))}
        </div>

      </div>
    </section>
  )
}
