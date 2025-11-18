export default function FeatureGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-4">신뢰 받는 "빠른현금화"</h2>
        <p className="text-center text-gray-600 mb-16">연락주시면, 전문 상담원이 친절히 현금화 상담을 안내해 드립니다.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-black text-white p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-2xl font-bold mb-6 text-center">모든 신용카드<br/>현금화 OK</h3>
            <p className="text-sm leading-relaxed text-center text-gray-300">
              특정 신용카드는 결제할 수 없거나 일일 결제 한도가 제한이 되어있어 현금화 진행에 어려움을 겪은 경험이 있으셨나요?<br/><br/>
              <span className="font-bold text-white">모든 신용카드 결제가 가능합니다.</span><br/><br/>
              또한 결제 한도에 제한이 없습니다.<br/>
              필요한 자금만큼 신용카드 한도 전액 현금화 가능합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
            <div className="text-5xl mb-6">📢</div>
            <h3 className="text-2xl font-bold mb-6 text-center">무이자 할부<br/>부분무이자 OK</h3>
            <p className="text-sm leading-relaxed text-center text-gray-300">
              무이자 3~6개월<br/>
              유이자 12개월 할부 제공<br/><br/>
              매월 변경되는 카드사별<br/>
              할부 정책 프로모션으로<br/>
              카드사 정책에 따라<br/>
              할부 개월 수가 변동될 수 있습니다.<br/><br/>
              <span className="font-bold text-white">경제적 부담을 최소화</span>하는<br/>
              합리적인 할부 서비스를 제공합니다.
            </p>
          </div>

          <div className="bg-gray-200 text-gray-800 p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
            <div className="text-5xl mb-6">✋</div>
            <h3 className="text-2xl font-bold mb-6 text-center">현금서비스 <span className="text-red-500">STOP</span></h3>
            <div className="text-sm leading-relaxed space-y-4">
              <div>
                <p className="font-bold mb-2">현금서비스:</p>
                <p className="text-red-500">✓ 신용조회 기록</p>
                <p className="text-red-500">✓ 신용점수 하락</p>
                <p>✓ 일시불 상환</p>
              </div>
              <div className="border-t-2 border-gray-400 pt-4">
                <p className="font-bold mb-2 text-primary-blue">신용카드 현금화:</p>
                <p className="text-green-600">✗ 신용조회 기록 없음</p>
                <p className="text-green-600">✗ 신용점수 하락 없음</p>
                <p className="font-bold">✓ 12개월 할부 OK</p>
                <p className="font-bold">✓ 무이자 할부 OK</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
            <div className="text-5xl mb-6">💬</div>
            <h3 className="text-2xl font-bold mb-6 text-center">신용카드 현금화<br/>안전 업체</h3>
            <p className="text-sm leading-relaxed text-center">
              안전 등록업체 빠른현금화는<br/>
              불법적인 카드깡 서비스는<br/>
              절대 제공하지 않습니다.<br/><br/>
              <span className="font-bold">현금성이 높은 상품으로<br/>현금화 서비스를<br/>지원해 드리고 있습니다.</span><br/><br/>
              빠르고 간편하게<br/>
              신용카드현금화를 해주는 곳을<br/>
              찾고 계신다면,<br/><br/>
              365일 24시간 고객상담 센터로<br/>
              문의해 주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
