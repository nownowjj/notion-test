

import { createContext, useContext, ReactNode } from 'react';
import { useHospitalData } from '@/hooks/useHospitalData';

const HospitalContext = createContext<any>(null);

export function HospitalProvider({ children }: { children: ReactNode }) {
    const hospitalData = useHospitalData(); // 기존 훅을 여기서 한 번만 실행
    return (
        <HospitalContext.Provider value={hospitalData}>
            {children}
        </HospitalContext.Provider>
    );
}

export const useHospital = () => useContext(HospitalContext);