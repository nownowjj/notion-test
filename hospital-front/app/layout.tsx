// app/layout.tsx
'use client'; // 클라이언트 구성 요소로 변경 (AOS 초기화 위해 필요)

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS 필수 import
import './globals.css';
import { HospitalProvider } from '@/context/HospitalContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. AOS 초기화 (한 번만 실행)
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (ms)
      once: true,     // 스크롤 올렸다 내릴 때 다시 실행 안 함 (성능 유리)
      offset: 100,    // 화면 하단에서 100px 위로 올라왔을 때 실행
      easing: 'ease-out-cubic', // 애니메이션 효과 종류
    });
  }, []);

return (
    <html>
      <body>
        <HospitalProvider>
          {children}
        </HospitalProvider>
      </body>
    </html>
  );
}