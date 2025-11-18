'use client';

export default function FloatingButtons() {
  return (
    <>
      {/* 데스크톱 플로팅 버튼 */}
      <div className="fixed right-6 bottom-6 z-40 hidden md:flex flex-col gap-3">
        <a
          href="tel:1588-0000"
          className="bg-primary-red text-white p-4 rounded-full shadow-lg hover:shadow-xl transition hover:scale-110"
          title="전화 상담"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
        <a
          href="#contact"
          className="bg-primary-yellow text-dark p-4 rounded-full shadow-lg hover:shadow-xl transition hover:scale-110"
          title="카카오톡 상담"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </a>
      </div>

      {/* 모바일 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href="tel:1588-0000"
            className="bg-primary-red text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-opacity-90 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            전화상담
          </a>
          <a
            href="#contact"
            className="bg-primary-yellow text-dark py-4 px-6 rounded-lg font-semibold text-center hover:bg-opacity-90 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
            카톡상담
          </a>
        </div>
      </div>
    </>
  );
}
