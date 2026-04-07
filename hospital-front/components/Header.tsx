'use client';

import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[100] h-20 flex items-center justify-between px-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            {/* 로고: 처음부터 검은색, 호버 시 파란색 */}
            <Link href="/" className="text-2xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                병원 로고
            </Link>

            {/* 메뉴 영역 */}
            <nav className="hidden md:flex gap-10 text-slate-800 font-medium">
                <Link
                    href="/#intro"
                    className="hover:text-blue-600 transition-colors duration-200"
                >
                    병원소개
                </Link>
                <Link
                    href="/#info"
                    className="hover:text-blue-600 transition-colors duration-200"
                >
                    진료안내
                </Link>
                <Link
                    href="/#doctors"
                    className="hover:text-blue-600 transition-colors duration-200"
                >
                    의료진
                </Link>

                {/* 비급여고지는 강조를 위해 font-bold 유지 */}
                <Link
                    href="/non-covered"
                    className="text-slate-900 font-bold hover:text-blue-600 transition-colors duration-200 border-l pl-10 border-slate-200"
                >
                    비급여고지
                </Link>
            </nav>

            {/* <nav className="hidden md:flex gap-10 text-black group-hover:text-slate-800 font-medium">
                <a href="#intro" className="hover:text-blue-500 transition-colors">병원소개</a>
                <a href="#info" className="hover:text-blue-500 transition-colors">진료안내</a>
                <a href="#doctors" className="hover:text-blue-500 transition-colors">의료진</a>
                <a href="#doctors" className="hover:text-blue-500 transition-colors">비급여고지</a>
            </nav> */}

            {/* 예약 버튼 */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all">
                버튼 위치
            </button>
        </header >
    );
}