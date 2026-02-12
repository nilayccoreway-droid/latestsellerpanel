import { ChevronDown, Package, Clock, X, CheckCircle, ShoppingBag, RotateCcw, AlertCircle, BarChart3, Truck, FastForward, ShieldCheck, ArrowRight } from 'lucide-react';

export default function OrdersPage() {
  // Mock data to match OrderWidget structure
  const ordersData = {
    pending: 0,
    unshipped: 0,
    canceled: 0,
    shipped: 0
  };

  const returnsData = {
    pending: 0,
    completed: 0,
    total: 0
  };

  const totalOrders = ordersData.pending + ordersData.unshipped + ordersData.shipped;

  return (
    <div className="flex-1 bg-[#F8FAFB] overflow-auto">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1A1C21] tracking-tight">Orders & Fulfillment</h1>
            <p className="text-sm font-medium text-gray-500 mt-1">Manage your storefront orders and customer returns</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm">
              Bulk Operations
            </button>
            <button className="px-5 py-2.5 bg-brand text-white text-sm font-bold rounded-xl hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/20 transition-all">
              Manage Orders
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Orders Management Section - Same design as Dashboard */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-[#FBFCFD]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00666B] to-[#008A91] shadow-lg shadow-brand/10">
                    <Package size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1C21]">Orders Management</h3>
                    <p className="text-xs font-bold text-gray-400 mt-0.5 tracking-tight uppercase">{totalOrders} Total Volume</p>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-brand hover:underline">
                  View full list <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-white hover:border-brand/20 transition-all group">
                  <span className="text-gray-400 group-hover:text-brand">Last 90 days</span>
                  <ChevronDown size={14} className="text-gray-300 group-hover:text-brand" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-white hover:border-brand/20 transition-all group">
                  <span className="text-brand">⇅</span>
                  <span className="text-gray-700">(1)</span>
                  <ChevronDown size={14} className="text-gray-300" />
                </button>
              </div>

              <div className="bg-[#FCFDFF] rounded-2xl p-5 border border-gray-100/50 shadow-inner shadow-gray-50/50">
                <div className="flex items-center gap-2 mb-5">
                  <ShoppingBag size={18} className="text-brand" />
                  <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Live Status</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                        <Clock size={16} className="text-amber-600" />
                      </div>
                      <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Pending</div>
                    </div>
                    <div className="text-3xl font-black text-amber-600 tabular-nums">{ordersData.pending}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-brand/5 rounded-xl group-hover:bg-brand/10 transition-colors">
                        <Package size={16} className="text-brand" />
                      </div>
                      <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Unshipped</div>
                    </div>
                    <div className="text-3xl font-black text-brand tabular-nums">{ordersData.unshipped}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                        <X size={16} className="text-red-500" />
                      </div>
                      <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Canceled</div>
                    </div>
                    <div className="text-3xl font-black text-red-500 tabular-nums">{ordersData.canceled}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors">
                        <CheckCircle size={16} className="text-green-600" />
                      </div>
                      <div className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Shipped</div>
                    </div>
                    <div className="text-3xl font-black text-green-600 tabular-nums">{ordersData.shipped}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Returns Section - Modernized design without legacy labels */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-[#FBFCFD]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-100">
                    <RotateCcw size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1C21]">Returns Processing</h3>
                    <p className="text-xs font-bold text-gray-400 mt-0.5 tracking-tight uppercase">Reverse Logistics Management</p>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold hover:underline" style={{ color: '#4F46E5' }}>
                  Manage returns <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-indigo-50 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-indigo-100/50">
                      <AlertCircle size={20} className="text-indigo-600" />
                    </div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Pending Actions</div>
                  </div>
                  <div className="text-4xl font-black text-[#1A1C21]">{returnsData.pending}</div>
                  <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[0%]"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-green-100 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-green-50 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-green-100/50">
                      <CheckCircle size={20} className="text-green-600" />
                    </div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Completed</div>
                  </div>
                  <div className="text-4xl font-black text-[#1A1C21]">{returnsData.completed}</div>
                  <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[100%]"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-hover/10 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-brand/5 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-brand/10">
                      <BarChart3 size={20} className="text-brand" />
                    </div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Returns</div>
                  </div>
                  <div className="text-4xl font-black text-[#1A1C21]">{returnsData.total}</div>
                  <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-400 tracking-tighter uppercase italic">
                    <span>Performance Stable</span>
                    <span>100% Resolved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Rates Section - Optimized Modern Design */}
        <div className="bg-white rounded-3xl shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100 bg-[#FBFCFD] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand/5 rounded-2xl">
                <Truck size={24} className="text-brand" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A1C21]">Delivery Performance Metrics</h2>
                <p className="text-xs font-medium text-gray-400 mt-0.5 uppercase tracking-wide">Logistics Health Check</p>
              </div>
            </div>
            <button className="px-6 py-2.5 border border-gray-200 text-[#1A1C21] text-xs font-extrabold rounded-xl hover:bg-gray-50 hover:border-brand/40 transition-all uppercase tracking-widest">
              View Shipping Insights
            </button>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#FCFDFF] to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
                    <FastForward size={28} className="text-green-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-green-600 tabular-nums">0%</div>
                    <div className="flex items-center gap-1 justify-end text-[10px] font-black text-green-600 mt-1 uppercase tracking-tighter">
                      <CheckCircle size={10} /> Optimal Range
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#1A1C21] mb-2">Late Shipment Rate</h4>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed mb-4">Percentage of orders shipped after the expected ship date.</p>
                  <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl border border-gray-100/50">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Benchmark Target</span>
                    <span className="text-sm font-black text-gray-700">Under 4.0%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FCFDFF] to-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
                    <ShieldCheck size={28} className="text-green-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-green-600 tabular-nums">0%</div>
                    <div className="flex items-center gap-1 justify-end text-[10px] font-black text-green-600 mt-1 uppercase tracking-tighter">
                      <CheckCircle size={10} /> Zero Impact
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-[#1A1C21] mb-2">Pre-fulfillment Cancel</h4>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed mb-4">Rate of seller-canceled orders before shipping began.</p>
                  <div className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl border border-gray-100/50">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Benchmark Target</span>
                    <span className="text-sm font-black text-gray-700">Under 2.5%</span>
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
