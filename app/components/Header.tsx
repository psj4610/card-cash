'use client';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
          빠른현금화
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-primary-blue transition">서비스 소개</a>
          <a href="#process" className="hover:text-primary-blue transition">이용방법</a>
          <a href="#benefits" className="hover:text-primary-blue transition">특징</a>
          <a href="#contact" className="hover:text-primary-blue transition">문의하기</a>
        </div>
        <a
          href="#contact"
          className="bg-primary-red text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
        >
          상담신청
        </a>
      </nav>
    </header>
  );
}
