'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // 메뉴 항목 데이터 (반복 방지)
    const menuItems = [
        { name: '병원소개', href: '/#intro' },
        { name: '진료안내', href: '/#info' },
        { name: '의료진', href: '/#doctors' },
        { name: '비급여고지', href: '/non-covered' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[100] h-20 flex items-center justify-between px-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-slate-100">
                {/* 로고 */}
                <Link href="/" className="text-2xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors z-[110]">
                    병원 로고
                </Link>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex gap-10 text-slate-800 font-medium">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`hover:text-blue-600 transition-colors ${item.name === '비급여고지' ? 'font-bold border-l pl-10 border-slate-200' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* 우측 버튼 영역 (모바일에서는 햄버거 버튼 포함) */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all">
                        예약하기
                    </button>

                    {/* 햄버거 버튼 (모바일 전용) */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden z-[110] p-2 text-slate-900 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* 모바일 전체 화면 메뉴 Overlay */}
            <div
                className={`fixed inset-0 z-[105] bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className="flex flex-col h-full pt-24 px-8">
                    <ul className="space-y-6">
                        {menuItems.map((item) => (
                            <li key={item.href} className="border-b border-slate-100 pb-4">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)} // 클릭 시 메뉴 닫기
                                    className="text-2xl font-bold text-slate-900 hover:text-blue-600 block w-full"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12">
                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg">
                            온라인 예약
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}