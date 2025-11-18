# 반응형 & 마이크로 인터랙션 사용 가이드

## 1. Responsive Breakpoints 사용법

```tsx
import { responsive } from '@/app/config';

// 제목에 반응형 폰트 적용
<h1 className={`${responsive.mobile.fontSize} ${responsive.sm.fontSize} ${responsive.md.fontSize} ${responsive.lg.fontSize} ${responsive.xl.fontSize}`}>
  카드현금화
</h1>

// 패딩 적용
<section className={`${responsive.mobile.padding} ${responsive.sm.padding} ${responsive.md.padding} ${responsive.lg.padding} ${responsive.xl.padding}`}>
  ...
</section>

// 그리드 레이아웃
<div className={`grid ${responsive.mobile.grid} ${responsive.md.grid} ${responsive.lg.grid} gap-6`}>
  {items.map(...)}
</div>
```

## 2. Button 인터랙션

```tsx
import { microInteractions } from '@/app/config';

<button
  className={`
    ${microInteractions.button.transition}
    hover:${microInteractions.button.hover}
    active:${microInteractions.button.active}
    bg-primary-red text-white px-6 py-3 rounded-lg
  `}
>
  신청하기
</button>
```

## 3. Card 인터랙션

```tsx
<div
  className={`
    ${microInteractions.card.hover}
    ${microInteractions.card.border}
    ${microInteractions.card.glow}
    transition-all duration-300
    p-6 rounded-xl border border-gray-200
  `}
>
  카드 콘텐츠
</div>
```

## 4. Icon 애니메이션 (with group)

```tsx
<a href="#" className="group flex items-center gap-2">
  <span>더 알아보기</span>
  <svg
    className={`
      ${microInteractions.icon.hover}
      ${microInteractions.icon.color}
      transition-all duration-300
    `}
  >
    <ArrowIcon />
  </svg>
</a>
```

## 5. Framer Motion 스크롤 애니메이션

```tsx
'use client';
import { motion } from 'framer-motion';
import { microInteractions } from '@/app/config';

// 단일 요소 Fade In Up
<motion.div {...microInteractions.scroll.fadeInUp}>
  <h2>제목</h2>
</motion.div>

// 카드 그리드 Stagger 애니메이션
<motion.div
  variants={microInteractions.scroll.stagger.container}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  className="grid grid-cols-3 gap-6"
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={microInteractions.scroll.fadeInUp}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 6. useCountUp Hook 사용법

```tsx
'use client';
import { useCountUp } from '@/app/hooks/useCountUp';

export default function Stats() {
  const users = useCountUp({ end: 10000, suffix: '+', duration: 2.5 });
  const rating = useCountUp({ end: 4.9, decimals: 1, duration: 2 });
  const success = useCountUp({ end: 99, suffix: '%', duration: 2 });

  return (
    <div className="grid grid-cols-3 gap-8">
      <div ref={users.ref}>
        <div className="text-4xl font-bold">{users.formattedCount}</div>
        <div>이용자</div>
      </div>
      <div ref={rating.ref}>
        <div className="text-4xl font-bold">{rating.formattedCount}</div>
        <div>평점</div>
      </div>
      <div ref={success.ref}>
        <div className="text-4xl font-bold">{success.formattedCount}</div>
        <div>성공률</div>
      </div>
    </div>
  );
}
```

## 7. Gradient Shift 애니메이션 (Hero 배경)

```tsx
<div
  className="
    bg-gradient-to-r from-primary-red via-primary-blue to-primary-yellow
    bg-[length:200%_100%]
    animate-gradient-shift
  "
>
  Hero 콘텐츠
</div>
```

## 조합 예시: 완전한 Feature Card

```tsx
'use client';
import { motion } from 'framer-motion';
import { responsive, microInteractions } from '@/app/config';

<motion.div
  {...microInteractions.scroll.fadeInUp}
  className={`
    group
    ${microInteractions.card.hover}
    ${microInteractions.card.border}
    ${microInteractions.card.glow}
    transition-all duration-300
    p-6 rounded-xl border border-gray-200
  `}
>
  <div
    className={`
      ${microInteractions.icon.hover}
      ${microInteractions.icon.color}
      mb-4
    `}
  >
    <IconComponent />
  </div>
  <h3 className={`${responsive.mobile.fontSize} ${responsive.md.fontSize} mb-2`}>
    빠른 송금
  </h3>
  <p>5분 이내 송금 완료</p>
</motion.div>
```
