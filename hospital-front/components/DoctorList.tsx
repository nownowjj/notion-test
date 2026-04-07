'use client';

import { HospitalItem } from '@/hooks/useHospitalData';
import { CheckCircle2 } from 'lucide-react'; // 약력 앞에 붙일 아이콘

export default function DoctorList({ data }: { data?: HospitalItem }) {
    if (!data || !data.imageUrl) return null;

    // 약력 텍스트를 줄바꿈 기준으로 나누어 배열로 만듭니다 (노션 설명란 활용)
    const bioList = data.description.split('\n').filter(line => line.trim() !== '');

    return (
        <section id="doctors" className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* 섹션 타이틀 영역 */}
                <div className="text-center mb-20" data-aos="fade-down" data-aos-duration="800">
                    <h4 className="text-blue-600 font-bold tracking-widest text-sm mb-3">
                        DONGHAE TEUNTEUN PAIN CLINIC
                    </h4>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        병원이름 마취통증의학과 <span className="text-blue-600">의료진</span>을 소개합니다.
                    </h3>
                    <p className="text-slate-500 text-lg max-w-3xl mx-auto break-keep">
                        다양한 수술적, 비수술적치료 경험을 바탕으로 환자분들에게
                        <span className="text-slate-800 font-medium"> 꼭 필요하고 안전한 치료</span>만 고집합니다.
                    </p>
                </div>

                {/* 의료진 리스트 (이미지 수만큼 반복) */}
                <div className="space-y-32">
                    {data.imageUrl.map((url, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-start`}
                        >
                            {/* 의료진 이미지 영역 */}
                            <div
                                className="w-full lg:w-1/2"
                                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-duration="1000"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                                    <img
                                        src={url}
                                        alt={`의료진 ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* 의료진 약력 텍스트 영역 */}
                            <div
                                className="w-full lg:w-1/2 space-y-8"
                                data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                                data-aos-duration="1200"
                            >
                                <div>
                                    <h3 className="text-4xl font-bold text-slate-900 mb-2">{data.name.split(',')[idx] || data.name}</h3>
                                    <h4 className="text-xl text-blue-600 font-semibold tracking-tight">
                                        대표원장 | 마취통증의학과 전문의
                                    </h4>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {bioList.map((bio, bioIdx) => (
                                        <div key={bioIdx} className="flex items-start gap-3 group">
                                            <CheckCircle2 className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                            <p className="text-slate-700 text-lg leading-snug break-keep">
                                                {bio}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <div className="inline-block px-6 py-3 border-2 border-slate-200 rounded-2xl text-slate-400 font-medium italic">
                                        Trusted Medical Specialist
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}