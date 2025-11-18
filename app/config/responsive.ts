// Tailwind Breakpoints 전략
export const responsive = {
  // 375px~639px: Mobile
  mobile: {
    fontSize: "text-3xl",
    padding: "px-4 py-12",
    grid: "grid-cols-1",
  },

  // 640px~767px: Large Mobile
  sm: {
    fontSize: "sm:text-4xl",
    padding: "sm:px-6 sm:py-14",
  },

  // 768px~1023px: Tablet
  md: {
    fontSize: "md:text-5xl",
    padding: "md:px-8 md:py-16",
    grid: "md:grid-cols-2",
  },

  // 1024px~1279px: Desktop
  lg: {
    fontSize: "lg:text-6xl",
    padding: "lg:px-12 lg:py-20",
    grid: "lg:grid-cols-3",
  },

  // 1280px~: Large Desktop
  xl: {
    fontSize: "xl:text-7xl",
    padding: "xl:container xl:mx-auto",
  },
};
