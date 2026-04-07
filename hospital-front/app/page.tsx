// app/page.tsx
'use client'; // 클라이언트 컴포넌트로 선언

import ClinicIntro from '@/components/ClinicIntro';
import DoctorList from '@/components/DoctorList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import MainBanner from '@/components/MainBanner';
import { useHospital } from '@/context/HospitalContext';


export default function Home() {
  // const { isLoading, error, getByIndex, getByRange } = useHospitalData();
  const { isLoading, error, getByIndex } = useHospital();
  // 1. 로딩 및 에러 처리 (방어적 코드)
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        데이터 로드 실패: {error}
      </div>
    );
  }
  const mainBannerData = getByIndex(1);

  return (
    <div className="relative">
      {/* 1. 최상단 Fixed Header */}
      <Header />

      {/* 2. 첫 화면을 가득 채우는 슬라이드 배너 */}
      <MainBanner data={mainBannerData as any} />

      <ClinicIntro />

      {/* index 3번 데이터를 넘겨줌 */}
      <DoctorList data={getByIndex(3)} />

      <Footer />
    </div>
  );
}