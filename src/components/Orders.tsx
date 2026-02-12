import React, { useState } from 'react';
import { Eye, Filter, Download } from 'lucide-react';
import OrderDetails from './OrderDetails';

const Orders: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const orders = [
    {
      id: '#100000001',
      date: 'Jun 14, 2024 8:45 PM',
      customer: 'John Doe',
      products: ['Ring - Accessories', 'Bag - Women Product', 'Bracelet 1', 'Bracelet 2'],
      baseTotal: '$140.00',
      purchaseTotal: '$150.00',
      tax: '$10.00',
      commission: '$15.00',
      status: 'Processing'
    },
    {
      id: '#100000002',
      date: 'Jun 14, 2024 7:30 PM',
      customer: 'Jane Smith',
      products: ['Smartphone Case', 'Screen Protector'],
      baseTotal: '$40.00',
      purchaseTotal: '$45.99',
      tax: '$3.59',
      commission: '$4.60',
      status: 'Completed'
    },
    {
      id: '#100000003',
      date: 'Jun 14, 2024 6:15 PM',
      customer: 'Mike Johnson',
      products: ['Bluetooth Headphones'],
      baseTotal: '$80.00',
      purchaseTotal: '$89.99',
      tax: '$7.20',
      commission: '$9.00',
      status: 'Shipped'
    },
    {
      id: '#100000004',
      date: 'Jun 14, 2024 5:20 PM',
      customer: 'Sarah Wilson',
      products: ['Wireless Charger', 'USB Cable', 'Phone Stand'],
      baseTotal: '$65.00',
      purchaseTotal: '$72.50',
      tax: '$5.80',
      commission: '$7.25',
      status: 'Cancelled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status.toLowerCase() === filterStatus;
    return matchesStatus;
  });

  if (selectedOrderId) {
    return (
      <OrderDetails
        orderId={selectedOrderId.replace('#', '')}
        onBack={() => setSelectedOrderId(null)}
      />
    );
  }

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
            <p className="text-gray-600 mt-1">Manage and track all your customer orders</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-4">
          <div className="flex items-center justify-end space-x-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="shipped">Shipped</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <Filter size={16} className="mr-2" />
              More Filters
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Total</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Total</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tax</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {order.products.slice(0, 2).map((product, idx) => (
                          <p key={idx} className="text-sm text-gray-600">{product}</p>
                        ))}
                        {order.products.length > 2 && (
                          <p className="text-sm text-gray-400">+{order.products.length - 2} more</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.baseTotal}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.purchaseTotal}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.tax}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.commission}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedOrderId(order.id)}
                        className="text-brand hover:text-brand-dark transition-colors"
                        title="View Order Details"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
