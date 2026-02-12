import { useState } from 'react';
import { ChevronDown, TrendingUp, DollarSign, Package } from 'lucide-react';

interface SalesDataPoint {
  date: string;
  amount: number;
}

interface SalesAnalyticsProps {
  salesData: SalesDataPoint[];
}

type TimeFilter = 'today' | '7days' | '30days' | 'custom';

export default function SalesAnalytics({ salesData }: SalesAnalyticsProps) {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('7days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalSales = salesData.reduce((sum, point) => sum + point.amount, 0);
  const maxValue = Math.max(...salesData.map(d => d.amount), 1);
  const avgSales = totalSales / salesData.length;

  const filterOptions = [
    { value: 'today' as TimeFilter, label: 'Today' },
    { value: '7days' as TimeFilter, label: '7 Days' },
    { value: '30days' as TimeFilter, label: '30 Days' },
    { value: 'custom' as TimeFilter, label: 'Custom' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#00666B] to-[#008A91] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Sales Analytics</h2>
            <p className="text-xs text-white/80">Track your revenue and performance</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all"
            >
              {filterOptions.find(opt => opt.value === timeFilter)?.label}
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 min-w-[140px] overflow-hidden">
                {filterOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTimeFilter(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <DollarSign size={20} className="text-emerald-600" />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                <TrendingUp size={12} />
                +12.5%
              </div>
            </div>
            <div className="text-xs font-medium text-emerald-700 mb-1">Total Revenue</div>
            <div className="text-2xl font-bold text-emerald-900">¥{totalSales.toLocaleString()}</div>
            <div className="text-xs text-emerald-600 mt-1">From last period</div>
          </div>

          <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200/50">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <Package size={20} className="text-brand" />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-brand text-white text-xs font-semibold rounded-full">
                <TrendingUp size={12} />
                +8.2%
              </div>
            </div>
            <div className="text-xs font-medium text-teal-800 mb-1">Units Sold</div>
            <div className="text-2xl font-bold text-teal-900">{salesData.length * 15}</div>
            <div className="text-xs text-brand mt-1">From last period</div>
          </div>

          <div className="relative overflow-hidden rounded-xl p-5 bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-white rounded-xl shadow-sm">
                <TrendingUp size={20} className="text-purple-600" />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                <TrendingUp size={12} />
                +5.3%
              </div>
            </div>
            <div className="text-xs font-medium text-purple-700 mb-1">Average Order</div>
            <div className="text-2xl font-bold text-purple-900">¥{Math.round(avgSales).toLocaleString()}</div>
            <div className="text-xs text-purple-600 mt-1">Per transaction</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900">Revenue Trend</h3>
              <p className="text-xs text-gray-500 mt-1">Daily sales performance</p>
            </div>
          </div>

          <div className="relative bg-gray-50/50 rounded-xl p-4" style={{ height: '320px' }}>
            <div className="absolute inset-4 flex items-end justify-between gap-3 pb-10">
              {salesData.map((point, index) => {
                const height = (point.amount / maxValue) * 100;
                const barColors = [
                  '#3B82F6',
                  '#F97316',
                  '#6B7280',
                  '#FBBF24',
                  '#60A5FA',
                  '#10B981',
                  '#1E40AF'
                ];
                const barColor = barColors[index % barColors.length];

                return (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end group relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-20">
                      <div className="px-3 py-2 bg-gray-900 text-white text-xs rounded-xl shadow-xl whitespace-nowrap">
                        <div className="font-bold">¥{point.amount.toLocaleString()}</div>
                        <div className="text-[10px] text-gray-300 mt-0.5">{point.date}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full rounded-t-sm transition-all duration-300 relative group-hover:scale-105"
                      style={{
                        height: `${height}px`,
                        minHeight: '12px',
                        backgroundColor: barColor,
                        boxShadow: `0 -2px 8px ${barColor}40`
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {[0, 25, 50, 75, 100].map((percent) => (
              <div
                key={percent}
                className="absolute left-4 right-4 border-t border-gray-200/50"
                style={{ bottom: `${percent * 0.8 + 10}%` }}
              />
            ))}

            <div className="absolute bottom-8 left-4 right-4 h-0.5 bg-gray-300 rounded-full" />
            <div className="absolute left-4 top-4 bottom-10 w-0.5 bg-gray-300 rounded-full" />

            <div className="absolute bottom-0 left-4 right-4 flex justify-between text-[10px] text-gray-600 pt-2">
              {salesData.map((point, index) => (
                <div key={index} className="flex-1 text-center font-semibold">
                  {point.date}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleString()}
          </div>
          <button className="text-xs font-medium hover:underline" style={{ color: '#00666B' }}>
            View detailed report →
          </button>
        </div>
      </div>
    </div>
  );
}
