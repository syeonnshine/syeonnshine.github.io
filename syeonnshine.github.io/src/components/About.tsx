// About.tsx — 자기소개 섹션
import { aboutParagraphs, aboutSoftSkill } from '../data/about'

export default function About() {
  return (
    // bg-surface: Hero(bg-bg)와 다른 표면색으로 섹션 구분
    <section id="about" className="bg-surface px-6 py-20 sm:px-12">
      <div className="max-w-3xl mx-auto">

        {/* 섹션 타이틀 + accent 언더바 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-text mb-2">About</h2>
          {/* accent 색의 짧은 바 — 섹션 타이틀 아래 정보 위계 강조 */}
          <div className="w-8 h-0.5 bg-accent" />
        </div>

        {/* 본문 단락
            aboutParagraphs 배열을 .map()으로 순서대로 <p>로 변환합니다.
            index를 key로 쓰는 건 순서가 바뀌지 않는 정적 배열이라 안전합니다. */}
        <div className="space-y-4 mb-8">
          {aboutParagraphs.map((text, index) => (
            <p key={index} className="text-base text-text leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {/* 소프트스킬 — 왼쪽 보더 인용 스타일로 본문보다 약하게 표현 */}
        <blockquote className="border-l-2 border-border pl-4 text-sm text-text-muted">
          {aboutSoftSkill}
        </blockquote>

      </div>
    </section>
  )
}
