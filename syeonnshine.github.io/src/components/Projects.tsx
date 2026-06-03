// Projects.tsx — 사이드 프로젝트 섹션
import { projects, type Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-bg border border-border rounded-lg overflow-hidden">

      {/* 이미지 영역 — imageUrl이 있을 때만 표시 */}
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={`${project.name} 스크린샷`}
          className="w-full h-48 object-cover border-b border-border"
        />
      )}

      <div className="p-5">

        {/* 헤더: 프로젝트명 + 기간 */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-text">{project.name}</h3>
          <span className="text-xs text-text-muted shrink-0">{project.period}</span>
        </div>

        {/* 한 줄 요약 */}
        <p className="text-sm text-text-muted mb-4">{project.summary}</p>

        {/* 태그 */}
        <ul className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <li key={tag} className="px-2 py-0.5 text-xs border border-border rounded text-text-muted">
              {tag}
            </li>
          ))}
        </ul>

        {/* 핵심 내용 불릿 */}
        <ul className="space-y-1.5">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-text leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* 링크 — 있을 때만 표시 */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-border">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent hover:text-accent-hover hover:underline transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default function Projects() {
  return (
    // bg-surface — Experience(bg-bg)와 교번하여 섹션 구분
    <section id="projects" className="bg-surface px-6 py-20 sm:px-12">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text mb-2">Projects</h2>
          <div className="w-8 h-0.5 bg-accent" />
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
