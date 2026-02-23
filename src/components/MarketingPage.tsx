import { Megaphone, Monitor, CalendarClock, PlayCircle, CheckCircle2, Users, LayoutGrid, BookMarked, TrendingUp, ArrowRight } from 'lucide-react';

export default function MarketingPage() {
    const promotionData = {
        upcoming: 0,
        running: 0,
        complete: 0,
        participation: 0,
    };

    const advertisementData = {
        totalBlocks: 0,
        totalBookPosition: 0,
        runningAdvertisement: 0,
    };

    return (
        <div className="flex-1 bg-[#F8FAFB] overflow-auto">
            {/* Top Header */}
            <div className="bg-white border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] px-8 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-extrabold text-[#1A1C21] tracking-tight">Marketing</h1>
                        <p className="text-sm font-medium text-gray-500 mt-1">Manage your promotions and advertisements</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                            View Reports
                        </button>
                        <button
                            className="px-5 py-2.5 text-white text-sm font-bold rounded-xl hover:shadow-lg transition-all"
                            style={{ background: 'linear-gradient(135deg, #00666B, #008A91)' }}
                        >
                            Create Campaign
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-8 py-8">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* ── Promotion Widget ── */}
                    <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        {/* Widget Header */}
                        <div className="px-6 py-5 border-b border-gray-100 bg-[#FBFCFD]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00666B] to-[#008A91] shadow-lg shadow-brand/10">
                                        <Megaphone size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1A1C21]">Promotion</h3>
                                        <p className="text-xs font-bold text-gray-400 mt-0.5 tracking-tight uppercase">Status of Campaign</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-1.5 text-xs font-bold text-brand hover:underline">
                                    View all <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Widget Body */}
                        <div className="p-6">
                            <div className="bg-[#FCFDFF] rounded-2xl p-5 border border-gray-100/50 shadow-inner shadow-gray-50/50">
                                <div className="grid grid-cols-2 gap-4">

                                    {/* Upcoming */}
                                    <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                                                <CalendarClock size={16} className="text-amber-600" />
                                            </div>
                                            <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Upcoming</div>
                                        </div>
                                        <div className="text-3xl font-black text-amber-600 tabular-nums">{promotionData.upcoming}</div>
                                    </div>

                                    {/* Running */}
                                    <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-brand/5 rounded-xl group-hover:bg-brand/10 transition-colors">
                                                <PlayCircle size={16} className="text-brand" />
                                            </div>
                                            <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Running</div>
                                        </div>
                                        <div className="text-3xl font-black text-brand tabular-nums">{promotionData.running}</div>
                                    </div>

                                    {/* Complete */}
                                    <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors">
                                                <CheckCircle2 size={16} className="text-green-600" />
                                            </div>
                                            <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Complete</div>
                                        </div>
                                        <div className="text-3xl font-black text-green-600 tabular-nums">{promotionData.complete}</div>
                                    </div>

                                    {/* Participation */}
                                    <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                                                <Users size={16} className="text-purple-600" />
                                            </div>
                                            <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Participation</div>
                                        </div>
                                        <div className="text-3xl font-black text-purple-600 tabular-nums">{promotionData.participation}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Advertisement Widget ── */}
                    <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        {/* Widget Header */}
                        <div className="px-6 py-5 border-b border-gray-100 bg-[#FBFCFD]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-100">
                                        <Monitor size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1A1C21]">Advertisement</h3>
                                        <p className="text-xs font-bold text-gray-400 mt-0.5 tracking-tight uppercase">Ad Block Overview</p>
                                    </div>
                                </div>
                                <button className="flex items-center gap-1.5 text-xs font-bold hover:underline" style={{ color: '#4F46E5' }}>
                                    Manage ads <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Widget Body */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                                {/* Total Blocks */}
                                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 bg-indigo-50 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-indigo-100/50">
                                            <LayoutGrid size={20} className="text-indigo-600" />
                                        </div>
                                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Blocks</div>
                                    </div>
                                    <div className="text-4xl font-black text-[#1A1C21]">{advertisementData.totalBlocks}</div>
                                    <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 w-[0%]"></div>
                                    </div>
                                </div>

                                {/* Total Book Position */}
                                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-amber-100 transition-all group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 bg-amber-50 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-amber-100/50">
                                            <BookMarked size={20} className="text-amber-600" />
                                        </div>
                                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Book Position</div>
                                    </div>
                                    <div className="text-4xl font-black text-[#1A1C21]">{advertisementData.totalBookPosition}</div>
                                    <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 w-[0%]"></div>
                                    </div>
                                </div>

                                {/* Running Advertisement */}
                                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 bg-green-50 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-green-100/50">
                                            <TrendingUp size={20} className="text-green-600" />
                                        </div>
                                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Running Ads</div>
                                    </div>
                                    <div className="text-4xl font-black text-[#1A1C21]">{advertisementData.runningAdvertisement}</div>
                                    <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 tracking-tighter uppercase italic">
                                        <span>Live Now</span>
                                        <span>Active</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
