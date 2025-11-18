'use client';
import { motion } from 'framer-motion';
import { responsive, microInteractions } from '@/app/config';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-primary-beige-light to-yellow-100 bg-[length:200%_200%] animate-gradient-shift">
      <div className={`container mx-auto text-center ${responsive.mobile.padding} ${responsive.sm.padding} ${responsive.md.padding} ${responsive.lg.padding}`}>
        <motion.h1
          className={`font-black text-gray-800 mb-6 ${responsive.mobile.fontSize} ${responsive.sm.fontSize} ${responsive.md.fontSize} ${responsive.lg.fontSize}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          신용카드 현금화 90%
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          "고객만족도 최우선"
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-gray-500 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          더 이상 고민하지 마세요 :)
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <div className="w-32 h-32 bg-primary-yellow rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl">😊</span>
          </div>
          <div className="text-left space-y-4 max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-700">
              최저수수료는 기본, <span className="font-bold bg-primary-yellow px-2 py-1 rounded">12개월 부분무이자 할부도 OK</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              모든 신용카드 <span className="font-bold bg-primary-yellow px-2 py-1 rounded">무이자 할부로 부담없이 OK</span>
            </p>
            <p className="text-xl md:text-2xl text-gray-700">
              안전한 신용카드 결제 현금화 <span className="font-bold bg-primary-yellow px-2 py-1 rounded">한도 제한없이 OK</span>
            </p>
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="tel:1588-0000"
            className={`bg-black rounded-2xl p-6 shadow-xl text-white w-64 ${microInteractions.button.transition} hover:${microInteractions.button.hover} active:${microInteractions.button.active}`}
          >
            <p className="text-sm mb-2">365일 24시</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">📞</span>
              <p className="text-3xl font-bold">1588<br/>0000</p>
            </div>
          </a>

          <a
            href="#contact"
            className={`bg-primary-yellow rounded-2xl p-6 shadow-xl text-black w-64 font-bold ${microInteractions.button.transition} hover:${microInteractions.button.hover} active:${microInteractions.button.active}`}
          >
            <p className="text-sm mb-2">365일 24시</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">💬</span>
              <p className="text-3xl font-bold">1:1 카톡상담</p>
            </div>
          </a>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 text-lg font-bold text-gray-700">
          <span className="bg-primary-yellow px-4 py-2 rounded-full">상품권현금화</span>
          <span className="bg-primary-yellow px-4 py-2 rounded-full">신용카드현금화</span>
          <span className="bg-primary-yellow px-4 py-2 rounded-full">소액결제현금화</span>
        </div>
      </div>
    </section>
  );
}
