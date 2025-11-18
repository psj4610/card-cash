export default function Stats() {
  const stats = [
    { number: "10,000+", label: "누적 고객" },
    { number: "90~95%", label: "현금화율" },
    { number: "5분", label: "평균 처리시간" },
    { number: "24/7", label: "연중무휴" },
  ];

  return (
    <section className="py-16 bg-primary-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-black">{stat.number}</div>
              <div className="text-lg text-gray-800">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
