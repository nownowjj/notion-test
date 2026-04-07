export default function LoadingSkeleton() {
    return (
        <div className="w-full min-h-screen bg-white">
            {/* 헤더 부분 스켈레톤 */}
            <div className="h-20 w-full border-b border-slate-100 flex items-center justify-between px-12">
                <div className="h-8 w-40 bg-slate-200 animate-pulse rounded" />
                <div className="flex gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-4 w-20 bg-slate-100 animate-pulse rounded" />
                    ))}
                </div>
                <div className="h-10 w-32 bg-blue-100 animate-pulse rounded-full" />
            </div>

            {/* 메인 배너 섹션 스켈레톤 */}
            <div className="relative w-full h-[600px] bg-slate-50 flex flex-col justify-center px-12 overflow-hidden">
                <div className="space-y-4 max-w-2xl">
                    <div className="h-4 w-32 bg-blue-200 animate-pulse rounded" />
                    <div className="h-12 w-full bg-slate-200 animate-pulse rounded" />
                    <div className="h-12 w-3/4 bg-slate-200 animate-pulse rounded" />
                    <div className="h-20 w-full bg-slate-100 animate-pulse rounded mt-6" />
                </div>
                {/* 우측 이미지 자리 */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-slate-200/50 animate-pulse" />
            </div>

            {/* 하단 콘텐츠 그리드 스켈레톤 */}
            <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-4">
                        <div className="aspect-video w-full bg-slate-200 animate-pulse rounded-xl" />
                        <div className="h-6 w-1/2 bg-slate-200 animate-pulse rounded" />
                        <div className="h-4 w-full bg-slate-100 animate-pulse rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
}