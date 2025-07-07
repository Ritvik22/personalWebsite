'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/images/WhatsApp_Image_2025-07-06_at_11.49.46_PM__1_-removebg-preview.png"
        alt="Ritvik Shah"
        fill
        className="object-cover"
        priority
      />
    </main>
  );
} 