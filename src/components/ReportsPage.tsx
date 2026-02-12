import { Calendar, Download, ChevronDown, TrendingUp, Globe, Package } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SalesDataPoint {
  month: string;
  value: number;
}

interface OrderReport {
  date: string;
  totalOrders: number;
  totalItems: number;
  revenue: number;
}

interface GeoData {
  country: string;
  sales: number;
  percentage: number;
}

interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
}

function generateSalesData(): SalesDataPoint[] {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months.map(month => ({
    month,
    value: Math.random() * 0.8 + 0.1
  }));
}

function generateOrderReports(): OrderReport[] {
  const dates = ['2/29/24', '4/15/24', '5/30/25'];
  return dates.map(date => ({
    date,
    totalOrders: Math.floor(Math.random() * 5) + 1,
    totalItems: Math.floor(Math.random() * 5) + 1,
    revenue: Math.floor(Math.random() * 40000) + 40000
  }));
}

function generateGeoData(): GeoData[] {
  const countries = ['Japan', 'United States', 'China', 'United Kingdom', 'Germany'];
  return countries.map(country => ({
    country,
    sales: Math.floor(Math.random() * 100000) + 50000,
    percentage: Math.random() * 30 + 10
  }));
}

function generateTopProducts(): TopProduct[] {
  const products = [
    'Sterling Silver Ring - Classic Design',
    'Gold Plated Ring - Vintage Style',
    'Diamond Accent Ring - Modern',
    'Rose Gold Ring - Elegant',
    'Titanium Ring - Contemporary'
  ];
  return products.map(name => ({
    name,
    sales: Math.floor(Math.random() * 200) + 50,
    revenue: Math.floor(Math.random() * 50000) + 20000
  }));
}

export default function ReportsPage() {
  const [salesData, setSalesData] = useState<SalesDataPoint[]>([]);
  const [orderReports, setOrderReports] = useState<OrderReport[]>([]);
  const [geoData, setGeoData] = useState<GeoData[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [geoYear, setGeoYear] = useState('2024');
  const [productsYear, setProductsYear] = useState('2024');

  useEffect(() => {
    setSalesData(generateSalesData());
    setOrderReports(generateOrderReports());
    setGeoData(generateGeoData());
    setTopProducts(generateTopProducts());
  }, []);

  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const maxValue = Math.max(...salesData.map(d => d.value));
  const chartHeight = 320;
  // Use a standard large viewBox width for responsiveness
  const chartWidth = 1200;
  const padding = { top: 20, right: 40, bottom: 60, left: 40 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  // Function to create smooth cubic bezier path for the chart
  const getSmoothPath = (data: SalesDataPoint[]) => {
    if (data.length === 0) return '';
    const points = data.map((point, i) => {
      const x = (i / (data.length - 1)) * innerWidth;
      const y = innerHeight - (point.value / maxValue) * innerHeight;
      return { x, y };
    });

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cp1x = curr.x + (next.x - curr.x) / 2;
      const cp1y = curr.y;
      const cp2x = curr.x + (next.x - curr.x) / 2;
      const cp2y = next.y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    return path;
  };

  const linePath = getSmoothPath(salesData);
  const areaPath = `${linePath} L ${innerWidth} ${innerHeight} L 0 ${innerHeight} Z`;

  return (
    <div className="flex-1 bg-[#F8FAFB] overflow-auto">
      {/* Modern Header */}
      <div className="bg-white border-b border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1A1C21] tracking-tight">Sales & Reports</h1>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
              <p className="text-sm font-medium text-gray-500">Live business insights dashboard</p>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 flex items-center gap-2.5">
            <Download size={18} />
            Export Data
          </button>
        </div>
      </div>

      <div className="px-8 py-8">
        {/* Modern Filters Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-6 mb-8">
          <div className="flex items-center gap-5">
            <div className="flex-1 group">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Product Category</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-3 text-sm font-medium border border-gray-100 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand focus:bg-white transition-all appearance-none cursor-pointer">
                  <option>All Jewelry Categories</option>
                  <option>Premium Rings</option>
                  <option>Luxury Necklaces</option>
                  <option>Diamond Bracelets</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-brand transition-colors" />
              </div>
            </div>
            <div className="flex-1 group">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Order Status</label>
              <div className="relative">
                <select className="w-full pl-4 pr-10 py-3 text-sm font-medium border border-gray-100 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand focus:bg-white transition-all appearance-none cursor-pointer">
                  <option>Show All Status</option>
                  <option>Processing</option>
                  <option>Dispatched</option>
                  <option>Delivered</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-brand transition-colors" />
              </div>
            </div>
            <div className="pt-6">
              <button className="px-8 py-3 bg-[#1A1C21] text-white text-sm font-bold rounded-xl hover:bg-black transition-all shadow-md active:scale-95">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Modern Sales overview Chart Card - Expanded Width */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand/5 rounded-2xl">
                <TrendingUp size={24} className="text-brand" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A1C21]">Performance Overview</h2>
                <p className="text-sm font-medium text-gray-400 mt-0.5">Annual revenue analysis across all months</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-50/80 p-1.5 rounded-xl border border-gray-100">
              {(['day', 'week', 'month', 'year'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-5 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${timeRange === range
                      ? 'bg-white text-brand shadow-sm border border-brand/5'
                      : 'text-gray-400 hover:text-gray-600'
                    }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="relative bg-[#FCFDFF] border border-gray-50 rounded-2xl p-4 sm:p-8 overflow-hidden" style={{ minHeight: chartHeight + 100 }}>
            {/* Full-width responsive SVG */}
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight + 20}`}
              className="w-full h-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="modernSalesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00666B" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#00666B" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#00666B" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <g transform={`translate(${padding.left}, ${padding.top})`}>
                {/* Horizontal Grid lines */}
                {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map((tick, i) => (
                  <g key={i}>
                    <line
                      x1={0}
                      y1={innerHeight - tick * innerHeight}
                      x2={innerWidth}
                      y2={innerHeight - tick * innerHeight}
                      stroke="#F1F3F5"
                      strokeWidth="1.5"
                    />
                    <text
                      x={-15}
                      y={innerHeight - tick * innerHeight}
                      textAnchor="end"
                      alignmentBaseline="middle"
                      className="text-[12px] font-bold fill-gray-300"
                    >
                      {tick.toFixed(1)}
                    </text>
                  </g>
                ))}

                {/* Vertical labels - All 12 Months */}
                {salesData.map((point, i) => {
                  const x = (i / (salesData.length - 1)) * innerWidth;
                  return (
                    <text
                      key={i}
                      x={x}
                      y={innerHeight + 30}
                      textAnchor="middle"
                      className="text-[12px] font-bold fill-gray-400 uppercase tracking-tighter"
                    >
                      {point.month.substring(0, 3)}
                    </text>
                  );
                })}

                {/* Area under the curve */}
                <path
                  d={areaPath}
                  fill="url(#modernSalesGradient)"
                />

                {/* The main curve */}
                <path
                  d={linePath}
                  fill="none"
                  stroke="#00666B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                  className="opacity-90"
                />

                {/* Data point markers */}
                {salesData.map((point, i) => {
                  const x = (i / (salesData.length - 1)) * innerWidth;
                  const y = innerHeight - (point.value / maxValue) * innerHeight;
                  return (
                    <g key={i} className="group cursor-pointer">
                      <circle
                        cx={x}
                        cy={y}
                        r="10"
                        fill="#00666B"
                        className="opacity-0 group-hover:opacity-10 transition-opacity"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="5"
                        fill="#00666B"
                        stroke="white"
                        strokeWidth="2.5"
                        className="shadow-sm"
                      />
                    </g>
                  );
                })}
              </g>

              {/* Legend */}
              <g transform={`translate(${chartWidth - 100}, 0)`}>
                <circle cx="0" cy="0" r="5" fill="#00666B" />
                <text x="15" y="5" className="text-sm font-bold fill-gray-500">Sales</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Modern Date Range and Table Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden mb-8">
          <div className="p-8 border-b border-gray-50">
            <div className="flex items-end gap-6">
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Period Start</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus-within:ring-2 focus-within:ring-brand/10 focus-within:border-brand transition-all">
                  <input type="text" placeholder="MM/DD/YYYY" className="bg-transparent text-sm font-semibold outline-none w-28 text-[#1A1C21]" />
                  <Calendar size={18} className="text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Period End</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus-within:ring-2 focus-within:ring-brand/10 focus-within:border-brand transition-all">
                  <input type="text" placeholder="MM/DD/YYYY" className="bg-transparent text-sm font-semibold outline-none w-28 text-[#1A1C21]" />
                  <Calendar size={18} className="text-gray-400" />
                </div>
              </div>
              <button className="px-10 py-3.5 bg-brand text-white text-sm font-bold rounded-xl hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/20 transition-all active:scale-95">
                Generate View
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#FBFCFD]">
                  <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Transaction Date</th>
                  <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Orders</th>
                  <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Items Volume</th>
                  <th className="text-right py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Gross Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {orderReports.map((report, index) => (
                  <tr key={index} className="hover:bg-brand/[0.02] transition-colors group">
                    <td className="py-5 px-8">
                      <span className="text-sm font-semibold text-[#1A1C21]">{report.date}</span>
                    </td>
                    <td className="py-5 px-8">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                        {report.totalOrders} Units
                      </span>
                    </td>
                    <td className="py-5 px-8">
                      <span className="text-sm font-medium text-gray-500">{report.totalItems} Items</span>
                    </td>
                    <td className="py-5 px-8 text-right">
                      <span className="text-sm font-extrabold text-[#1A1C21]">{formatCurrency(report.revenue)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-[#FBFCFD] border-t border-gray-50 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-400">{orderReports.length} results identified</span>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase">Per Page</span>
              <select className="px-3 py-1.5 text-xs font-bold border border-gray-200 rounded-lg bg-white outline-none focus:ring-2 focus:ring-brand/10">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>

        {/* Modern Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Geolocation Insights */}
          <div className="bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand/5 rounded-2xl">
                  <Globe size={24} className="text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1C21]">Global Market Share</h3>
                  <p className="text-xs font-medium text-gray-400 mt-0.5">Top performing territories</p>
                </div>
              </div>
              <select
                value={geoYear}
                onChange={(e) => setGeoYear(e.target.value)}
                className="pl-4 pr-10 py-2.5 text-xs font-bold border border-gray-100 rounded-xl bg-gray-50/50 outline-none focus:ring-2 focus:ring-brand/10 cursor-pointer"
              >
                <option>Fiscal 2024</option>
                <option>Fiscal 2023</option>
              </select>
            </div>

            <div className="relative bg-[#FCFDFF] border border-gray-50 rounded-2xl p-6 mb-8 flex items-center justify-center min-h-[300px]">
              <svg width="400" height="200" viewBox="0 0 1000 500" className="opacity-80">
                <defs>
                  <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#E5E7EB" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#dotPattern)" />
                <ellipse cx="200" cy="150" rx="90" ry="70" fill="#00666B" className="opacity-15 animate-pulse" />
                <ellipse cx="450" cy="180" rx="110" ry="90" fill="#00666B" className="opacity-25" />
                <ellipse cx="700" cy="200" rx="130" ry="100" fill="#00666B" className="opacity-20 translate-y-2" />
                <ellipse cx="350" cy="350" rx="100" ry="80" fill="#00666B" className="opacity-15" />
              </svg>
            </div>

            <div className="space-y-4">
              {geoData.slice(0, 3).map((geo, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-2xl border border-gray-50 hover:bg-gray-50/50 transition-all group">
                  <div className="w-12 h-12 flex items-center justify-center font-black text-brand bg-brand/5 rounded-xl group-hover:bg-brand group-hover:text-white transition-all">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#1A1C21]">{geo.country}</div>
                    <div className="text-xs font-bold text-gray-400 mt-0.5 tracking-tight">{geo.percentage.toFixed(1)}% Market Weight</div>
                  </div>
                  <div className="text-sm font-black text-brand">{formatCurrency(geo.sales)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products Insights */}
          <div className="bg-white rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand/5 rounded-2xl">
                  <Package size={24} className="text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1C21]">Bestseller Analytics</h3>
                  <p className="text-xs font-medium text-gray-400 mt-0.5">Top ranking product catalogs</p>
                </div>
              </div>
              <select
                value={productsYear}
                onChange={(e) => setProductsYear(e.target.value)}
                className="pl-4 pr-10 py-2.5 text-xs font-bold border border-gray-100 rounded-xl bg-gray-50/50 outline-none focus:ring-2 focus:ring-brand/10 cursor-pointer"
              >
                <option>Current Year</option>
                <option>Last Year</option>
              </select>
            </div>

            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-brand/20 transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-50 group-hover:border-brand/10 transition-colors">
                      <Package size={20} className="text-gray-300 group-hover:text-brand transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A1C21] text-white text-[10px] font-black rounded-lg flex items-center justify-center shadow-lg">
                      #{index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[#1A1C21] truncate">{product.name}</div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-black text-brand bg-brand/5 px-2 py-0.5 rounded-md uppercase tracking-wide">{product.sales} Sold</span>
                      <span className="text-[10px] font-bold text-gray-400">Inventory Premium</span>
                    </div>
                  </div>
                  <div className="text-base font-black text-[#1A1C21] group-hover:text-brand transition-colors">
                    {formatCurrency(product.revenue)}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-4 border border-dashed border-gray-200 rounded-2xl text-xs font-bold text-gray-400 hover:border-brand hover:text-brand hover:bg-brand/[0.02] transition-all uppercase tracking-widest">
              View Detailed Inventory Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
