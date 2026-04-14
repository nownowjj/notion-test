// hooks/useHospitalData.ts
import { useState, useEffect } from 'react';

// 데이터 타입 정의 (백엔드 서빙 데이터 구조와 일치)
// hooks/useHospitalData.ts 또는 types/index.ts
export interface HospitalItem {
  id: string;
  name: string;
  description: string;
  index: number;      // API Route에서 이미 Number() 처리를 했으므로 number 타입 유지
  imageUrl: string[];   // 단일 imageUrl 대신 문자열 배열(URL 리스트)로 변경
  text:string;
  useYn:boolean;
}

export function useHospitalData() {
  const [data, setData] = useState<HospitalItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 보장
    if (typeof window === 'undefined') return;

    async function fetchData() {
      try {
        setIsLoading(true);
        // 우리가 만든 API Route 호출
        const response = await fetch('/api/hospital');
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        
        const json = await response.json();
        // index 순서대로 미리 정렬해서 저장 (프론트 부담 줄임)
        const sortedData = json.sort((a: HospitalItem, b: HospitalItem) => a.index - b.index);
        
        setData(sortedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []); // 마운트 시 1번만 실행

  // 편리하게 꺼내 쓰기 위한 헬퍼 함수들
  const getByIndex = (index: number) => data.find(item => Number(item.index) === Number(index));
  const getByRange = (start: number, end: number) => data.filter(item => item.index >= start && item.index <= end);
  const getPopups = () => {
      return data.filter(item => 
      item.index >= 90 && 
      item.index <= 100 && 
      item.useYn === true
    );
  };

  return { data, isLoading, error, getByIndex, getByRange ,getPopups };
}