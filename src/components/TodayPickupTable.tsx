import { Package, MoreVertical, Clock } from 'lucide-react';

interface PickupOrder {
  id: string;
  orderId: string;
  productName: string;
  productImage?: string;
  quantity: number;
  status: 'ready' | 'pending' | 'processing';
}

interface TodayPickupTableProps {
  orders: PickupOrder[];
}

export default function TodayPickupTable({ orders }: TodayPickupTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-500 text-white';
      case 'processing':
        return 'bg-brand text-white';
      case 'pending':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready':
        return 'Ready for Pickup';
      case 'processing':
        return 'Processing';
      case 'pending':
        return 'Pending';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#00666B] to-[#008A91]">
              <Clock size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Today's Pickup</h3>
              <p className="text-xs text-gray-500 mt-0.5">{orders.length} orders ready for pickup</p>
            </div>
          </div>
          <button className="text-xs font-medium hover:underline" style={{ color: '#00666B' }}>
            View all pickups →
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Order Qty</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`hover:bg-gray-50 transition-colors ${
                  index !== orders.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Package size={14} style={{ color: '#00666B' }} />
                    <span className="text-sm font-medium text-gray-900">{order.orderId}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                      {order.productImage ? (
                        <img src={order.productImage} alt={order.productName} className="w-full h-full object-cover" />
                      ) : (
                        <Package size={16} className="text-gray-400" />
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-900">{order.productName}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-gray-900">{order.quantity}</span>
                    <span className="text-xs text-gray-500">units</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 hover:bg-gray-100 rounded-xl transition-colors">
                    <MoreVertical size={16} className="text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className="px-6 py-12 text-center">
          <Clock size={48} className="text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-500">No pickup orders scheduled for today</p>
        </div>
      )}
    </div>
  );
}
