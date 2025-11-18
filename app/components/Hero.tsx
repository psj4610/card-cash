export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary-beige-light to-primary-beige">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-6">
          신용카드 현금화 90%
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-4">"고객만족도 최우선"</p>
        <p className="text-xl md:text-2xl text-gray-500 mb-16">더 이상 고민하지 마세요 :)</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <div className="w-32 h-32 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl">😊</span>
          </div>
          <div className="text-left space-y-4 max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-700">
              최저수수료는 기본, <span className="font-bold">12개월 부분무이자 할부도 OK</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              모든 신용카드 <span className="font-bold text-primary-yellow">무이자 할부로 부담없이 OK</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              안전한 신용카드 결제 현금화 <span className="font-bold text-primary-yellow">한도 제한없이 OK</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <a
            href="tel:1588-0000"
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform text-white w-64"
          >
            <p className="text-sm mb-2">365일 24시</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">📞</span>
              <p className="text-3xl font-bold">1588<br/>0000</p>
            </div>
          </a>

          <a
            href="#contact"
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform text-white w-64"
          >
            <p className="text-sm mb-2">365일 24시</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">💬</span>
              <p className="text-3xl font-bold">1:1 카톡상담</p>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-lg font-bold text-blue-600">
          <span>상품권현금화</span>
          <span>신용카드현금화</span>
          <span>소액결제현금화</span>
        </div>
      </div>
    </section>
  );
}
