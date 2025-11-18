export default function InstallmentInfo() {
  const cardInfo = [
    { bank: "삼성카드", months: "3개월" },
    { bank: "현대카드", months: "3개월" },
    { bank: "국민카드", months: "5개월" },
    { bank: "하나카드", months: "4개월" },
    { bank: "비씨카드", months: "5개월" },
    { bank: "우리카드", months: "5개월" },
    { bank: "롯데카드", months: "5개월" },
    { bank: "신한카드", months: "3개월" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-black mb-8">모든 신용카드 무이자 할부 가능</h2>
        <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">무이자 할부 / 부분무이자 OK</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {cardInfo.map((card, index) => (
              <div key={index} className="text-center">
                <p className="font-bold">{card.bank}</p>
                <p className="text-sm text-gray-300">{card.months}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-600 pt-6 mt-6 text-center">
            <p className="text-lg mb-4">
              <span className="font-bold text-primary-yellow">신용카드 현금화 무이자 할부를 활용</span><br/>
              하시면 경제적 부담을 줄일 수 있습니다.
            </p>
            <p className="text-sm text-gray-300">
              부분 무이자 상담은 고객센터로 문의해 주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
