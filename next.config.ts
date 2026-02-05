import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 기본 설정 */
  reactStrictMode: true,

  /* 이미지 최적화 */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // 외부 이미지 소스 추가
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },

  /* 실험적 기능 (선택사항) */
  // experimental: {
  //   ppr: true, // Partial Prerendering
  //   dynamicIO: true, // Dynamic IO
  // },
};

export default nextConfig;
