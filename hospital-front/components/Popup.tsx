'use client';

import { useState, useEffect } from 'react';
import { useHospital } from '@/context/HospitalContext'; // 경로에 맞게 수정
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function MainPopup() {
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여줄 팝업 인덱스
    const [closedPopups, setClosedPopups] = useState<string[]>([]); // '오늘 보지 않기' 클릭한 팝업 ID 저장

    const { getPopups } = useHospital();
    const allPopups = getPopups();

    useEffect(() => {
        setMounted(true);
        // 로컬스토리지에서 숨김 처리된 팝업 ID 목록 가져오기
        const hiddenIds = localStorage.getItem('hide_popups_ids');
        if (hiddenIds) {
            setClosedPopups(JSON.parse(hiddenIds));
        }
    }, []);

    // 1. 노출 가능한 팝업 필터링 (로컬스토리지에 저장된 ID 제외)
    const visiblePopups = allPopups.filter(popup => !closedPopups.includes(popup.id));

    // 현재 보여줄 데이터
    const currentPopup = visiblePopups[currentIndex];

    // 팝업 닫기 (그냥 닫기)
    const closePopup = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    // 오늘 하루 보지 않기
    const closeToday = (id: string) => {
        const updatedClosedIds = [...closedPopups, id];
        setClosedPopups(updatedClosedIds);
        localStorage.setItem('hide_popups_ids', JSON.stringify(updatedClosedIds));
        setCurrentIndex((prev) => prev + 1);
    };

    if (!mounted || !currentPopup) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentPopup.id} // ID가 바뀌면 애니메이션 다시 실행
                className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[400px] w-full flex flex-col"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                >
                    {/* 상단 이미지 영역 */}
                    {currentPopup.imageUrl[0] && (
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={currentPopup.imageUrl[0]}
                                alt={currentPopup.popupTitle}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    {/* 텍스트 영역 */}
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-bold mb-2">{currentPopup.name}</h2>
                        <div
                            className="text-gray-600 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: currentPopup.text }}
                        />
                    </div>

                    {/* 하단 버튼 영역 (50/50) */}
                    <div className="flex border-t border-gray-100">
                        <button
                            onClick={() => closeToday(currentPopup.id)}
                            className="flex-1 px-4 py-4 text-sm text-gray-500 border-r border-gray-100 hover:bg-gray-50"
                        >
                            오늘 다시 보지 않기
                        </button>
                        <button
                            onClick={closePopup}
                            className="flex-1 px-4 py-4 text-sm text-blue-600 font-bold hover:bg-gray-50"
                        >
                            닫기 ({currentIndex + 1}/{visiblePopups.length})
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}