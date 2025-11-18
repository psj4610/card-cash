'use client';
import { useCountUp } from '@/app/hooks/useCountUp';

export default function Stats() {
  const customers = useCountUp({ end: 10000, suffix: '+', duration: 2.5 });
  const rate = useCountUp({ end: 95, suffix: '%', duration: 2 });

  const stats = [
    { ref: customers.ref, number: customers.formattedCount, label: "누적 고객" },
    { ref: rate.ref, number: rate.formattedCount, label: "현금화율" },
    { ref: null, number: "5분", label: "평균 처리시간" },
    { ref: null, number: "24/7", label: "연중무휴" },
  ];

  return (
    <section className="py-16 bg-primary-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} ref={stat.ref} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-black">{stat.number}</div>
              <div className="text-lg text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
