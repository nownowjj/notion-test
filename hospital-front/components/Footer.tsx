'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* 로고 영역 */}
                    <div className="shrink-0">
                        <div className="text-2xl font-bold text-white tracking-tighter">
                            DONGHAE <span className="text-blue-500">TEUNTEUN</span>
                        </div>
                        <p className="mt-2 text-xs opacity-50 uppercase tracking-widest">Pain Clinic</p>
                    </div>

                    {/* 정보 영역 */}
                    <div className="flex-1 space-y-6">
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <Link
                                href="/non-covered"
                                className="text-white font-bold hover:text-blue-400 transition-colors underline underline-offset-4"
                            >
                                비급여고지
                            </Link>
                            <span className="text-slate-300">동해튼튼마취통증의학과의원</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 text-sm leading-relaxed">
                            <div className="flex gap-2">
                                <span className="text-slate-500 shrink-0">대표자</span>
                                <span className="text-slate-300">홍진범</span>
                            </div>
                            <div className="flex gap-2 lg:col-span-2">
                                <span className="text-slate-500 shrink-0">주소</span>
                                <span className="text-slate-300">강원도 동해시 한섬로 111-7, (롯데시네마 2층)</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-slate-500 shrink-0">TEL</span>
                                <a href="tel:033-531-8275" className="text-slate-300 hover:text-blue-400">033-531-8275</a>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-slate-500 shrink-0">FAX</span>
                                <span className="text-slate-300">033-531-8277</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-slate-500 shrink-0">사업자번호</span>
                                <span className="text-slate-300">538-92-01493</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 카피라이트 영역 */}
                <div className="mt-16 pt-8 border-t border-slate-800 text-xs tracking-wider opacity-40">
                    COPYRIGHT © {currentYear} DONGHAE TEUNTEUN PAIN CLINIC. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}