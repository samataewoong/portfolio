import { useState } from 'react'

function App() {
  const projects = [
    { img: '', title: '배달모아2', desc: '배달모아의 Spring BE 리팩토링ver.', link: 'https://samataewoong.github.io/Development-log/delivery-moa2.pdf', image: 'images/dm2.png' },
    { img: '', title: '배달모아', desc: '배달+공구 컨셉의 웹사이트', link: 'https://samataewoong.github.io/Development-log/Delivery-moA.pdf', image: 'images/dm1.png' },
    { img: '', title: 'OneMall', desc: 'JSP기반의 의류 쇼핑몰', link: 'https://samataewoong.github.io/Development-log/OneMall.pdf', image: 'images/om.png' },
  ]

  // 가운데 카드 인덱스
  const [center, setCenter] = useState(0)

  // 위치 계산용
  const getIndex = (offset: number) =>
    (center + offset + projects.length) % projects.length

  const next = () =>
    setCenter((prev) => (prev + 1) % projects.length)

  const prev = () =>
    setCenter((prev) => (prev - 1 + projects.length) % projects.length)

  // 카드 위치 스타일
  const positions = [
    '-translate-x-[360px] scale-90 opacity-50',
    'translate-x-0 scale-100 opacity-100',
    'translate-x-[360px] scale-90 opacity-50',
  ]

  return (
    <main className="min-h-screen bg-amber-50 text-zinc-900 pt-16">
      {/* 프로필 섹션 */}
      <section className="mb-10 text-center">
        <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden">
          <img
            src="../public/images/profile.jpeg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>


        <h1 className="text-3xl font-bold mb-2 text-gray-900">이태웅</h1>

        <div className="text-zinc-900 space-y-1 mb-2">
          <p>1999 | Developer</p>
          <p>📞 010-9699-8845 &nbsp;✉️ ltwng99@naver.com</p>
          <p></p>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/samataewoong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              samataewoong
            </a>
            &nbsp; Dev Log:{' '}
            <a
              href="https://samataewoong.github.io/Development-log/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Development Log
            </a>
          </p>
          <p>

          </p>
        </div>

        <p className="max-w-md mx-auto text-zinc-900 leading-relaxed">
          끊임없는 사고를 통해 상황을 판단하고, 배운 것을 자신의 것으로 만들어가는 개발자 지망생입니다.
        </p>
      </section>

      {/* 프로젝트 섹션 */}
      <section>
        <h2 className="text-2xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          {/* 카드 영역 */}
          <div className="relative h-64 w-full flex justify-center items-center">
            {[-1, 0, 1].map((offset, i) => {
              const project = projects[getIndex(offset)]

              return (
                <div
                  className={`
    absolute w-80 h-64 rounded-2xl
   bg-[#fffbf5]  backdrop-blur
    border border-zinc-200
    shadow-lg shadow-gray-300
    overflow-hidden
    transition-all duration-300
hover:-translate-y-2
hover:shadow-lg hover:shadow-blue-400/40

    ${positions[i]}
  `}
                >
                  <div className="relative h-32">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" />
                  </div>

                  <div className="p-5 text-left">
                    <h3 className="text-lg text-gray-900 font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    <a className="text-sm text-blue-500 hover:text-blue-600">
                      PDF 보기 →
                    </a>
                  </div>
                </div>


              )
            })}
          </div>

          {/* 왼쪽 버튼 */}
          <button
            onClick={prev}
            className="
              absolute left-[-60px] top-1/2 -translate-y-1/2
              text-[50px] font-bold text-orange-400
              bg-transparent border-0 appearance-none
              hover:text-orange-600 transition-colors
            "
          >
            ‹
          </button>

          {/* 오른쪽 버튼 */}
          <button
            onClick={next}
            className="
              absolute right-[-60px] top-1/2 -translate-y-1/2
              text-[50px] font-bold text-orange-400
              bg-transparent border-0 appearance-none
              hover:text-orange-600 transition-colors
            "
          >
            ›
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
