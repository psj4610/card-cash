export const microInteractions = {
  // 1. 버튼 호버
  button: {
    hover: "scale-105 shadow-lg shadow-primary/20",
    active: "scale-95",
    transition: "transition-all duration-300 ease-out",
  },

  // 2. 카드 인터랙션
  card: {
    hover: "hover:-translate-y-2 hover:shadow-2xl",
    border: "hover:border-primary/50",
    glow: "hover:ring-2 hover:ring-primary/20",
  },

  // 3. 아이콘 애니메이션
  icon: {
    hover: "group-hover:rotate-12 group-hover:scale-110",
    color: "group-hover:text-primary",
  },

  // 4. 스크롤 애니메이션 (Framer Motion)
  scroll: {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.6, ease: "easeOut" },
    },
    stagger: {
      // 카드 그리드용
      container: {
        staggerChildren: 0.1,
      },
    },
  },

  // 5. 숫자 카운트업 (Social Proof)
  countUp: "useCountUp hook or Framer Motion animate",

  // 6. Gradient 애니메이션 (Hero 배경)
  gradientShift: "animate-gradient-shift", // Tailwind keyframes
};
