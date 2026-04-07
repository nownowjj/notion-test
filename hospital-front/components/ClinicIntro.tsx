'use client';

import {
    Activity,
    Hand,
    Bone,
    Syringe,
    Droplets
} from 'lucide-react';

export default function ClinicIntro() {
    // 진료 항목 데이터 (나중에 노션 DB의 특정 범위를 가져와서 map 돌려도 됩니다)
    const services = [
        { icon: <Bone size={40} />, title: "척추", desc: "허리 디스크, 척추 변형, 척추 압박 골절, 척추관협착증", duration: 1000 },
        { icon: <Activity size={40} />, title: "관절", desc: "관절손상, 테니스·골프엘보, 퇴행성 관절염, 고관절", duration: 1200 },
        { icon: <Hand size={40} />, title: "수족부", desc: "골절, 인대염좌, 아킬레스건염, 신경손상, 건초염", duration: 1400 },
        { icon: <Hand size={40} />, title: "목어깨", desc: "목디스크, 오십견, 회전근개파열, 석회성건염, 거북목", duration: 1600 },
        { icon: <Syringe size={40} />, title: "비수술치료", desc: "신경주사치료, 체외충격파치료, 도수치료, 프롤로테라피", duration: 1800 },
        { icon: <Droplets size={40} />, title: "영양수액", desc: "영양소 공급, 소화기능 문제, 신진대사 회복, 체력회복", duration: 2000 },
    ];

    return (
        <section id="info" className="w-full min-h-screen bg-white flex flex-col justify-center py-20 px-6">
            <div className="max-w-7xl mx-auto w-full">

                {/* 타이틀 영역 */}
                <div className="text-center mb-20 space-y-4" data-aos="fade-down" data-aos-duration="800">
                    <h4 className="text-blue-500 font-bold tracking-widest text-sm md:text-base">
                        DONGHAE TEUNTEUN PAIN CLINIC
                    </h4>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight break-keep">
                        비수술적치료를 중점으로 진료하는<br />
                        <span className="text-blue-600">병원이름 마취통증의학과</span>는
                        <span className="text-slate-700"> 더나은 진료</span>만을 추구합니다.
                    </h3>
                    <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto break-keep">
                        비수술적 치료 기술과 의료진의 지식을 활용하여 <br className="hidden md:block" />
                        환자 개개인에게 <b className="text-slate-800">맞춤형 진료</b>를 제공합니다.
                    </p>
                </div>

                {/* 진료 항목 그리드 */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-duration={item.duration}
                            className="group p-3 md:p-10 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:bg-blue-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="text-blue-600 group-hover:text-white mb-6 transition-colors duration-500 flex justify-center">
                                {item.icon}
                            </div>
                            <div className="text-2xl font-bold text-blue-600 group-hover:text-white mb-4 transition-colors duration-500 flex justify-center">
                                {item.title}
                            </div>
                            <p className="text-slate-600 group-hover:text-blue-50 leading-relaxed break-keep transition-colors duration-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}