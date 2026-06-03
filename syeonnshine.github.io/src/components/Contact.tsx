// Contact.tsx — 연락처 섹션 (푸터 겸용)
import { contactItems } from '../data/contact'

export default function Contact() {
  return (
    // bg-surface — Skills(bg-bg)와 교번, 페이지 마지막 섹션
    <section id="contact" className="bg-surface px-6 py-20 sm:px-12">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text mb-2">Contact</h2>
          <div className="w-8 h-0.5 bg-accent" />
        </div>

        <ul className="space-y-4">
          {contactItems.map((item) => (
            <li key={item.label} className="flex items-center gap-4">
              <span className="text-xs text-text-muted w-12 shrink-0 tracking-widest uppercase">
                {item.label}
              </span>
              <a
                href={item.href}
                target={item.label === 'GitHub' ? '_blank' : undefined}
                rel={item.label === 'GitHub' ? 'noreferrer' : undefined}
                className="text-sm text-text hover:text-accent transition-colors duration-150"
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>

        {/* 하단 크레딧 */}
        <p className="mt-16 text-xs text-text-muted">
          이 사이트는 React + TypeScript를 새로 익히며 직접 만들었습니다.
        </p>

      </div>
    </section>
  )
}
