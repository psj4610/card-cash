export default function Reviews() {
  const reviews = [
    {
      name: "김**",
      rating: 5,
      comment: "급하게 필요한 돈이 있었는데 빠르게 처리해주셔서 정말 감사합니다. 5분만에 입금 완료!",
      date: "2024.11"
    },
    {
      name: "이**",
      rating: 5,
      comment: "수수료도 합리적이고 상담도 친절하게 해주셔서 좋았습니다. 다음에도 이용하겠습니다.",
      date: "2024.11"
    },
    {
      name: "박**",
      rating: 5,
      comment: "처음 이용해봤는데 생각보다 간단하고 안전했어요. 믿을 수 있는 곳입니다.",
      date: "2024.11"
    },
    {
      name: "최**",
      rating: 5,
      comment: "24시간 상담 가능해서 새벽에 급하게 연락했는데도 바로 처리해주셨어요.",
      date: "2024.11"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">고객 후기</h2>
        <p className="text-center text-gray-600 mb-12">실제 이용하신 고객님들의 생생한 후기</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-3">
                <div className="flex text-primary-yellow text-xl">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-3">{review.comment}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="font-semibold">{review.name}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
