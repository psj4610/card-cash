'use client';
import { motion } from 'framer-motion';
import { responsive, microInteractions } from '@/app/config';

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
    <section id="features" className={`bg-gray-50 ${responsive.mobile.padding} ${responsive.sm.padding} ${responsive.md.padding} ${responsive.lg.padding}`}>
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          서비스 소개
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          신뢰할 수 있는 카드현금화 서비스
        </motion.p>

        <motion.div
          className={`grid gap-8 ${responsive.mobile.grid} ${responsive.md.grid} ${responsive.lg.grid}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group bg-white p-8 rounded-lg shadow-lg text-center ${microInteractions.card.hover} ${microInteractions.card.border} ${microInteractions.card.glow} transition-all duration-300 border border-gray-200`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className={`text-5xl mb-4 ${microInteractions.icon.hover} transition-all duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
