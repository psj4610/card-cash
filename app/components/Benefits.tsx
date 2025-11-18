export default function Benefits() {
  const benefits = [
    "신용카드 및 체크카드 모두 가능",
    "한도 내에서 자유롭게 이용",
    "신용등급에 영향 없음",
    "복잡한 서류 불필요",
    "당일 입금 가능",
    "전국 어디서나 이용 가능",
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">서비스 특징</h2>
        <p className="text-center text-gray-600 mb-12">왜 저희를 선택해야 할까요?</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-2xl text-primary-red">✓</div>
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-yellow text-black p-10 rounded-2xl text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">지금 바로 시작하세요!</h3>
          <p className="text-xl mb-6">빠르고 안전한 카드현금화 서비스</p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            무료 상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
