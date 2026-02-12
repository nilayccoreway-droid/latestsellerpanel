import { RotateCcw, Truck, Star, TrendingUp, ChevronRight } from 'lucide-react';

interface WidgetCardsProps {
  returnsCount: number;
  shipmentsCount: number;
  averageRating: number;
  reviewsCount: number;
  onViewReturns?: () => void;
}

export default function WidgetCards({ returnsCount, shipmentsCount, averageRating, reviewsCount, onViewReturns }: WidgetCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all group">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-orange-50 rounded-xl">
                <RotateCcw size={20} className="text-orange-600" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">Returns</h3>
            </div>
            <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-4xl font-bold text-gray-900">{returnsCount}</div>
            <div className="text-sm text-gray-500">pending</div>
          </div>
        </div>
        <div className="px-6 py-3 bg-gray-50">
          <button
            onClick={() => onViewReturns && onViewReturns()}
            className="text-xs font-medium hover:underline"
            style={{ color: '#00666B' }}
          >
            View all return requests
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <Truck size={24} className="text-brand" />
            </div>
            <div className="p-2 bg-white/80 backdrop-blur-sm rounded-xl">
              <TrendingUp size={14} className="text-green-600" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Shipments</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <div className="text-4xl font-bold text-gray-900">{shipmentsCount}</div>
            </div>
            <p className="text-xs text-gray-600 font-medium">In transit</p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#00666B] to-[#008A91]"></div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-amber-100/30 rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <Star size={24} className="text-amber-500" />
            </div>
            <div className="p-2 bg-white/80 backdrop-blur-sm rounded-xl">
              <TrendingUp size={14} className="text-green-600" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Reviews & Ratings</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <div className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
            </div>
            <p className="text-xs text-gray-600 font-medium">{reviewsCount} total reviews</p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#00666B] to-[#008A91]"></div>
      </div>
    </div>
  );
}
