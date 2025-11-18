export default function FraudWarning() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 bg-red-600 rounded-full"></div>
                </div>
              </div>
              <h2 className="text-4xl font-black text-red-500 mb-8 mt-8 text-center">사칭업체 주의하세요!</h2>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="bg-gray-50 rounded-2xl p-6 relative">
                  <div className="absolute top-4 right-4 text-red-500 text-6xl font-black transform rotate-12">✗</div>
                  <div className="space-y-4 text-gray-700 text-left">
                    <p className="font-bold text-lg">오픈채팅 사칭 주의!</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-white rounded border border-red-200">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="font-medium text-sm">비상금365 (사칭)</p>
                          <p className="text-xs text-gray-500">오픈채팅</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-white rounded border border-red-200">
                        <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                        <div>
                          <p className="font-medium text-sm">빠른현금화 (사칭)</p>
                          <p className="text-xs text-gray-500">오픈채팅</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl">
              <p className="text-xl font-bold mb-6">
                <span className="text-primary-yellow">빠른현금화</span>는<br/>
                <span className="text-red-500">본 페이지에서만</span><br/>
                카카오톡 연결이 가능!<br/>
                별도의 오픈채팅을<br/>
                운영하지 않습니다.
              </p>
              <div className="border-t-2 border-gray-200 pt-6 mt-6">
                <p className="text-sm leading-relaxed">
                  사칭 사기업체들로 인한<br/>
                  피해사례가 다수 접수되고<br/>
                  있습니다.<br/><br/>
                  절대 해당 오픈채팅에<br/>
                  접속하지 마세요!
                </p>
                <div className="mt-4 flex items-center justify-end gap-2">
                  <span className="text-sm font-medium">빠른현금화</span>
                  <div className="w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center">
                    <span className="text-xl">💳</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
