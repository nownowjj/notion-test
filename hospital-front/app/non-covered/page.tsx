'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const NON_COVERED_DATA = {
    section1: [
        { category: "이학요법료", sub: "도수치료", code: "MX1220000", name: "도수치료", price: "70,000", note: "30분", date: "2021.08.09" },
        { category: "이학요법료", sub: "도수치료", code: "MX1220000", name: "도수치료", price: "130,000", note: "60분", date: "2021.08.09" },
        { category: "이학요법료", sub: "증식치료", code: "MY1420000", name: "증식치료 사지관절부위", minPrice: "10,000", maxPrice: "150,000", note: "부위별 상이함", date: "2022.08.01" },
        { category: "이학요법료", sub: "증식치료", code: "MY1430000", name: "증식치료 척추부위", minPrice: "30,000", maxPrice: "200,000", note: "부위별 상이함", date: "2022.08.01" },
        { category: "처치 및 수술료", sub: "체외충격파", code: "SZ0840000", name: "체외충격파치료", minPrice: "50,000", maxPrice: "80,000", note: "부위별 1부위 추가시 3만원", date: "2021.08.09" },
        { category: "주사료", sub: "주사료", code: "056400041", name: "대상포진 - 스카이조스타주", price: "140,000", drugIncl: "O", date: "2021.08.09" },
        { category: "주사료", sub: "주사료", code: "650003220", name: "대상포진 - 싱그릭스", price: "250,000", drugIncl: "O", date: "2023.07.13" },
        { category: "초음파 검사료", sub: "초음파 검사료", code: "EB4010000", name: "단순 초음파", minPrice: "10,000", maxPrice: "100,000", date: "2021.08.09" },
    ],
    section2: [
        { category: "일반재료군 Ⅰ", name: "무릎 보호대", price: "15,000", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "발목 보호대", price: "15,000", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "손목 보호대", price: "15,000", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "팔꿈치 보호대", price: "15,000", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "칼라슈즈", price: "10,000", note: "1족", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "손가락 보호대", minPrice: "10,000", maxPrice: "15,000", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "에어캐스트", price: "70,000", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "목발", price: "15,000", note: "1개", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "팔걸이", price: "5,000", note: "1개", date: "2021.08.09" },
        { category: "일반재료군 Ⅰ", name: "복대", price: "5,000", note: "1개", date: "2021.08.09" },
    ],
    section3: [
        { code: "681100040", name: "태반주사(라이넥/헤베스)", price: "20,000", note: "태반주사", date: "2021.08.09" },
        { code: "669904600", name: "리포라제", price: "10,000~100,000", note: "투여량에 따라 다름", date: "2021.08.09" },
        { code: "693202001", name: "통증수액(큐펜/파노펜)", price: "15,000", note: "아세트아미노펜", date: "2021.08.09" },
        { code: "645103360", name: "아미노산수액(100ml)", price: "30,000", note: "아미노산", date: "2021.08.09" },
        { code: "645100110", name: "아미노산수액(250ml)", price: "50,000", note: "아미노산", date: "2021.08.09" },
        { code: "645905861", name: "백옥주사", price: "30,000", note: "글루타티온", date: "2021.08.09" },
        { code: "653101811", name: "마늘주사", price: "30,000", note: "염산푸르설티아민", date: "2021.08.09" },
        { code: "654004501", name: "신데렐라주사", price: "30,000", note: "티옥트산", date: "2021.08.09" },
        { code: "626300010", name: "감초주사", price: "30,000", note: "L-시스테인", date: "2021.08.09" },
        { code: "653102271", name: "감기몸살수액", price: "50,000", note: "고농도 비타민C 등", date: "2021.08.09" },
        { code: "645404691", name: "고농축 비타민주사", price: "50,000", note: "고농축 비타민", date: "2021.08.09" },
        { code: "654802251", name: "비타민D주사", price: "30,000", note: "비타민D", date: "2021.08.09" },
    ],
    section4: [
        { code: "PDZ010000", name: "일반진단서", price: "10,000", date: "2021.08.09" },
        { code: "PDZ010001", name: "건강진단서", price: "10,000", date: "2021.08.09" },
        { code: "PDZ010002", name: "근로능력평가용", price: "15,000", date: "2021.08.09" },
        { code: "PDZ080000", name: "병무용진단서", price: "20,000", date: "2021.08.09" },
        { code: "PDZ020001", name: "상해진단서(3주미만)", price: "100,000", date: "2021.08.09" },
        { code: "PDZ020002", name: "상해진단서(3주이상)", price: "150,000", date: "2021.08.09" },
        { code: "PDE010001", name: "영문진단서", price: "20,000", date: "2021.08.09" },
        { code: "PDZ090002", name: "입퇴원확인서", price: "1,000", date: "2021.08.09" },
        { code: "PDZ090007", name: "진료확인서", price: "1,000", date: "2021.08.09" },
        { code: "PDZ110101", name: "진료기록사본(1~5매)", price: "1,000", date: "2021.08.09" },
        { code: "PDZ110102", name: "진료기록사본(6매~)", price: "100", date: "2021.08.09" },
        { code: "PDZ110004", name: "진료기록영상 CD", price: "5,000", date: "2021.08.09" },
        { code: "PDZ160000", name: "제증명서 사본", price: "1,000", date: "2021.08.09" },
        { name: "소견서", price: "5,000", date: "2021.08.09" },
    ]
};

export default function NonCoveredPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Header />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* 제목 섹션 */}
                    <div className="mb-12 text-center md:text-left">
                        <p className="text-blue-600 font-bold tracking-widest text-sm mb-2">NOTICE</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            동해튼튼 마취통증의학과 <span className="text-blue-600">비급여 고지</span>
                        </h2>
                        <p className="mt-4 text-slate-500 text-sm">의료법 제45조에 의거하여 비급여 진료비용을 공지합니다.</p>
                    </div>

                    <div className="space-y-16">
                        {/* 1. 행위료 */}
                        <TableSection title="1. 행위료">
                            <table className="w-full text-sm border-t-2 ">
                                <thead className="bg-slate-100 text-slate-700">
                                    <tr className="border-b border-slate-200">
                                        <th className="p-3 border-r" rowSpan={2}>중분류</th>
                                        <th className="p-3 border-r" rowSpan={2}>항목명</th>
                                        <th className="p-3 border-r" colSpan={2}>비용(원)</th>
                                        <th className="p-3 border-r" rowSpan={2}>특이사항</th>
                                        <th className="p-3" rowSpan={2}>최종변경</th>
                                    </tr>
                                    <tr className="bg-slate-50 text-[11px]">
                                        <th className="p-2 border-r border-slate-200">단일/최저</th>
                                        <th className="p-2 border-r border-slate-200">최고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {NON_COVERED_DATA.section1.map((item, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50/30 transition-colors">
                                            <td className="p-3 text-center border-r font-medium text-slate-500">{item.category}</td>
                                            <td className="p-3 border-r">
                                                <div className="font-bold text-slate-800">{item.name}</div>
                                                <div className="text-[10px] text-slate-400 font-mono">{item.code}</div>
                                            </td>
                                            <td className="p-3 text-right border-r font-bold text-blue-700">{item.price || item.minPrice}</td>
                                            <td className="p-3 text-right border-r text-slate-600">{item.maxPrice || "-"}</td>
                                            <td className="p-3 border-r text-xs text-slate-500">{item.note}</td>
                                            <td className="p-3 text-center text-[11px] text-slate-400">{item.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </TableSection>

                        {/* 2. 치료재료대 & 3. 약제비 (비슷한 구조) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <TableSection title="2. 치료재료대">
                                <SimpleTable data={NON_COVERED_DATA.section2} />
                            </TableSection>
                            <TableSection title="3. 약제비">
                                <SimpleTable data={NON_COVERED_DATA.section3} />
                            </TableSection>
                        </div>

                        {/* 4. 제증명수수료 */}
                        <TableSection title="4. 제증명수수료">
                            <SimpleTable data={NON_COVERED_DATA.section4} fullWidth />
                        </TableSection>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// 재사용을 위한 서브 컴포넌트들
function TableSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800">{title}</h3>
            </div>
            <div className="overflow-x-auto ">
                {children}
            </div>
        </div>
    );
}

function SimpleTable({ data, fullWidth }: { data: any[], fullWidth?: boolean }) {
    return (
        <table className="w-full text-sm border-t border-slate-200">
            <thead className="bg-slate-50 text-slate-600 font-bold">
                <tr className="border-b border-slate-200">
                    <th className="p-3 text-left">항목명</th>
                    <th className="p-3 text-right">비용(원)</th>
                    <th className="p-3 text-center">최종변경</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-3">
                            <div className="font-medium text-slate-800">{item.name}</div>
                            {item.code && <div className="text-[10px] text-slate-400 font-mono">{item.code}</div>}
                        </td>
                        <td className="p-3 text-right font-bold text-slate-900">{item.price || `${item.minPrice}~${item.maxPrice}`}</td>
                        <td className="p-3 text-center text-[11px] text-slate-400">{item.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}