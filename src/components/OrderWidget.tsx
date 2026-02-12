import { ChevronDown, Package, Clock, X, CheckCircle, ShoppingBag } from 'lucide-react';

interface OrderWidgetProps {
  sellerFulfilled: {
    pending: number;
    unshipped: number;
    canceled: number;
    shipped: number;
  };
}

export default function OrderWidget({ sellerFulfilled }: OrderWidgetProps) {
  const totalOrders = sellerFulfilled.pending + sellerFulfilled.unshipped + sellerFulfilled.shipped;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#00666B] to-[#008A91]">
              <Package size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Orders Management</h3>
              <p className="text-xs text-gray-500 mt-0.5">{totalOrders} total orders</p>
            </div>
          </div>
          <button className="text-xs font-medium hover:underline" style={{ color: '#00666B' }}>
            View all orders →
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors">
            Last 90 days
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors">
            <span className="text-gray-600">⇅</span>
            (1)
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag size={18} style={{ color: '#00666B' }} />
            <h4 className="text-sm font-bold text-gray-900">Order Status</h4>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-amber-100 rounded">
                  <Clock size={14} className="text-amber-600" />
                </div>
                <div className="text-xs font-medium text-gray-600">Pending</div>
              </div>
              <div className="text-3xl font-bold text-amber-600">{sellerFulfilled.pending}</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-teal-100 rounded">
                  <Package size={14} className="text-brand" />
                </div>
                <div className="text-xs font-medium text-gray-600">Unshipped</div>
              </div>
              <div className="text-3xl font-bold text-brand">{sellerFulfilled.unshipped}</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-red-100 rounded">
                  <X size={14} className="text-red-600" />
                </div>
                <div className="text-xs font-medium text-gray-600">Canceled</div>
              </div>
              <div className="text-3xl font-bold text-red-600">{sellerFulfilled.canceled}</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-green-100 rounded">
                  <CheckCircle size={14} className="text-green-600" />
                </div>
                <div className="text-xs font-medium text-gray-600">Shipped</div>
              </div>
              <div className="text-3xl font-bold text-green-600">{sellerFulfilled.shipped}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
