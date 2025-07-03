"use client";

import Image from "next/image";

export default function FullScreenImage() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image
        src="/home.jpeg"
        alt="Full Screen Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-4xl font-bold">Coming soon</p>
      </div>
    </div>
  );
}
