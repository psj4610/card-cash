export default function Hero() {
  return (
    <section className="pt-32 pb-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
          <span className="text-lg font-semibold">현금화율 90%~95% 보장</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          빠르고 안전한<br />카드현금화 서비스
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          365일 24시간 상담 가능 | 최저 수수료 | 5분 이내 입금
        </p>
        <p className="text-lg mb-8 opacity-80">
          신용카드, 체크카드 모두 가능 · 신용등급 영향 없음
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:1588-0000"
            className="bg-white text-primary-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition shadow-lg"
          >
            📞 전화 상담하기
          </a>
          <a
            href="#contact"
            className="bg-primary-yellow text-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition shadow-lg"
          >
            💬 카톡 상담하기
          </a>
          <a
            href="#process"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-blue transition"
          >
            이용방법 보기
          </a>
        </div>
      </div>
    </section>
  );
}
