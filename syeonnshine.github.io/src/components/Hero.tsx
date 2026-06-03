// Hero.tsx — 페이지 최상단 섹션
import { heroStacks, heroContacts, type LinkIcon } from "../data/hero";
import profileImg from "../assets/profile.jpg";

const icons: Record<LinkIcon, (className: string) => React.ReactNode> = {
  github: (className) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  email: (className) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  phone: (className) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section className="bg-bg px-6 pt-28 pb-16 sm:px-12 sm:pt-36 sm:pb-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12 sm:flex-row sm:gap-16 sm:items-center">
        {/* 왼쪽: 프로필 사진 */}
        <div className="shrink-0 mx-auto sm:mx-0">
          <img
            src={profileImg}
            alt="박시연 프로필 사진"
            className="w-60 h-60 sm:w-64 sm:h-64 rounded-full object-cover border border-border"
          />
        </div>

        {/* 오른쪽: 텍스트 콘텐츠 */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-text mb-3">박시연</h1>

          <p className="text-lg sm:text-lg text-text-muted leading-relaxed mb-8">
            단순한 화면 구현을 넘어 <span className="text-accent font-bold">운영과 확장</span>까지
            <br className="hidden sm:block" />
            고려한 디지털 서비스를 만드는 개발자입니다.
          </p>
          {/* 연락처 정보 */}
          <ul className="flex flex-col gap-2">
            {heroContacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.icon === "github" ? "_blank" : undefined}
                  rel={contact.icon === "github" ? "noreferrer" : undefined}
                  // hover 시 accent 색으로 변경 + 왼쪽 기준으로 살짝 확대
                  className="inline-flex items-center gap-2 text-text-muted hover:text-accent hover:scale-105 transition-all duration-150 origin-left"
                >
                  {icons[contact.icon]("w-4 h-4 shrink-0")}
                  <span className="text-xs w-10 shrink-0">{contact.label}</span>
                  <span className="text-sm">{contact.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
