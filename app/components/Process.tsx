export default function Process() {
  const steps = [
    {
      step: "01",
      title: "상담 신청",
      description: "전화 또는 온라인으로 간편하게 상담 신청",
    },
    {
      step: "02",
      title: "정보 확인",
      description: "카드 정보 및 신청 내용 확인",
    },
    {
      step: "03",
      title: "승인 처리",
      description: "빠른 심사 및 승인 절차 진행",
    },
    {
      step: "04",
      title: "입금 완료",
      description: "지정 계좌로 즉시 입금 완료",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">이용 방법</h2>
        <p className="text-center text-gray-600 mb-12">간단한 4단계로 빠르게 진행됩니다</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-primary-blue to-primary-red text-white p-8 rounded-lg">
                <div className="text-5xl font-bold opacity-30 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 text-4xl text-primary-yellow">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
