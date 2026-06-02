// App.tsx — 애플리케이션의 최상위 컴포넌트
// 여기서 각 섹션 컴포넌트를 순서대로 배치합니다.
// 섹션이 늘어날수록 이 파일에 import 하나, <컴포넌트> 하나씩 추가하면 됩니다.

import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      {/* 다음 섹션은 여기에 추가: <Projects />, <Skills />, <Contact /> */}
    </main>
  )
}

export default App
