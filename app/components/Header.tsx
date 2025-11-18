'use client';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-yellow rounded-full flex items-center justify-center">
            <span className="text-xl">💳</span>
          </div>
          <span className="text-xl font-bold text-gray-800">비상금이 필요할땐 빠른현금화</span>
        </div>
        <div className="flex gap-6">
          <a href="#top" className="text-gray-700 hover:text-gray-900 font-medium transition">메인</a>
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium transition">문의하기</a>
        </div>
      </div>
    </header>
  );
}
