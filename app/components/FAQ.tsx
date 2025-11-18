'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "카드현금화는 안전한가요?",
      answer: "저희는 안전한 결제 시스템을 통해 진행하며, 개인정보는 철저히 보호됩니다. 신용등급에도 영향을 주지 않습니다."
    },
    {
      question: "얼마나 빨리 입금되나요?",
      answer: "신청 후 승인이 완료되면 5분 이내에 지정하신 계좌로 입금됩니다. 365일 24시간 처리 가능합니다."
    },
    {
      question: "수수료는 얼마인가요?",
      answer: "현금화율은 90%~95%로 진행되며, 카드 종류와 금액에 따라 다를 수 있습니다. 상담 시 정확한 수수료를 안내해드립니다."
    },
    {
      question: "어떤 카드를 사용할 수 있나요?",
      answer: "신용카드와 체크카드 모두 이용 가능합니다. 대부분의 카드사를 지원하며, 한도 내에서 자유롭게 이용하실 수 있습니다."
    },
    {
      question: "필요한 서류가 있나요?",
      answer: "복잡한 서류는 필요 없습니다. 본인 확인을 위한 기본 정보만 있으면 바로 진행 가능합니다."
    },
    {
      question: "취소나 환불이 가능한가요?",
      answer: "거래 진행 전까지는 언제든지 취소 가능합니다. 상담 단계에서도 부담 없이 문의하실 수 있습니다."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">자주 묻는 질문</h2>
        <p className="text-center text-gray-600 mb-12">궁금하신 내용을 확인해보세요</p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl text-primary-blue">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
