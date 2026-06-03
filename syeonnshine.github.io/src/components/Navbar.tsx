// Navbar.tsx — 상단 고정 네비게이션
// 스크롤하면 배경에 blur 효과가 생겨 콘텐츠와 분리됩니다.

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-3xl mx-auto px-6 sm:px-12 h-14 flex items-center justify-between">

        {/* 로고 — 이름 클릭 시 페이지 최상단으로 */}
        <a
          href="#"
          className="text-sm font-semibold text-text hover:text-accent transition-colors duration-150"
        >
          박시연
        </a>

        {/* 섹션 링크 */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}
