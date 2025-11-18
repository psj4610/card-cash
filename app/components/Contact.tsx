'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 실제 폼 제출 로직을 추가할 수 있습니다
    alert('상담 신청이 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">상담 신청</h2>
        <p className="text-center text-gray-600 mb-12">365일 24시간 상담 가능합니다</p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">전화 상담</h4>
                  <p className="text-gray-600">1588-XXXX</p>
                  <p className="text-sm text-gray-500">365일 24시간 상담 가능</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">카카오톡 상담</h4>
                  <p className="text-gray-600">@빠른현금화</p>
                  <p className="text-sm text-gray-500">실시간 채팅 상담</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">운영 시간</h4>
                  <p className="text-gray-600">연중무휴 24시간</p>
                  <p className="text-sm text-gray-500">빠른 답변 보장</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">연락처</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="010-0000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">문의 내용</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none resize-none"
                  placeholder="문의하실 내용을 입력하세요"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-yellow text-black py-4 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
