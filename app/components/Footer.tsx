export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              빠른현금화
            </h3>
            <p className="text-gray-400">
              안전하고 빠른 카드현금화 서비스
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">바로가기</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">서비스 소개</a></li>
              <li><a href="#process" className="hover:text-white transition">이용방법</a></li>
              <li><a href="#benefits" className="hover:text-white transition">특징</a></li>
              <li><a href="#contact" className="hover:text-white transition">문의하기</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">고객센터</h4>
            <ul className="space-y-2 text-gray-400">
              <li>전화: 1588-XXXX</li>
              <li>카카오톡: @빠른현금화</li>
              <li>운영시간: 365일 24시간</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 빠른현금화. All rights reserved.</p>
          <p className="mt-2">본 사이트는 샘플 랜딩페이지입니다.</p>
        </div>
      </div>
    </footer>
  );
}
