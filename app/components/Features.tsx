export default function Features() {
  const features = [
    {
      title: "빠른 처리",
      description: "신청 후 5분 이내 입금 완료",
      icon: "⚡",
    },
    {
      title: "365일 24시간",
      description: "연중무휴 상담 및 처리 가능",
      icon: "🕐",
    },
    {
      title: "안전한 거래",
      description: "개인정보 보호 및 안전한 결제 시스템",
      icon: "🔒",
    },
    {
      title: "최저 수수료",
      description: "업계 최저 수수료로 합리적인 가격",
      icon: "💰",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">서비스 소개</h2>
        <p className="text-center text-gray-600 mb-12">신뢰할 수 있는 카드현금화 서비스</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
