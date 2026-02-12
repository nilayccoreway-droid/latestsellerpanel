import { useState, useEffect } from 'react';
import { ChevronDown, Menu, MoreVertical, Calendar, Package } from 'lucide-react';

interface PhotoshootRequest {
  id: string;
  requestName: string;
  pickupSchedule: string;
  totalProducts: number;
  status: 'pending' | 'completed' | 'shipped';
}

function generatePhotoshootRequests(): PhotoshootRequest[] {
  const names = [
    'Spring Collection 2024',
    'Summer Jewelry Campaign',
    'New Ring Series',
    'Vintage Collection',
    'Modern Designs Showcase',
    'Holiday Special'
  ];

  const statuses: ('pending' | 'completed' | 'shipped')[] = ['pending', 'completed', 'shipped'];

  return names.map((name, index) => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 14));

    return {
      id: `PS-${index + 1}`,
      requestName: name,
      pickupSchedule: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      totalProducts: Math.floor(Math.random() * 15) + 3,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    };
  });
}

export default function PhotoshootPage() {
  const [requests, setRequests] = useState<PhotoshootRequest[]>([]);

  useEffect(() => {
    setRequests(generatePhotoshootRequests());
  }, []);

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const completedCount = requests.filter(r => r.status === 'completed').length;
  const shippedCount = requests.filter(r => r.status === 'shipped').length;

  const maxCount = Math.max(pendingCount, completedCount, shippedCount, 1);

  const statusItems = [
    { label: 'Pending', count: pendingCount, percentage: (pendingCount / maxCount) * 100, color: 'bg-yellow-500' },
    { label: 'Completed', count: completedCount, percentage: (completedCount / maxCount) * 100, color: 'bg-green-500' },
    { label: 'Shipped', count: shippedCount, percentage: (shippedCount / maxCount) * 100, color: 'bg-brand' },
  ];

  const todayPickups = requests.filter(r => {
    const pickupDate = new Date(r.pickupSchedule);
    const today = new Date();
    return pickupDate.toDateString() === today.toDateString();
  });

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        <div className="bg-white border border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
              Manage Photoshoot
              <ChevronDown size={16} />
            </button>

            <button className="px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded hover:bg-brand transition-colors">
              Create photoshoot request
            </button>
          </div>
        </div>

        <div className="mt-4 bg-white border border-gray-200 rounded">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Menu size={18} className="text-gray-600" />
              <h3 className="text-base font-semibold text-gray-900">Status</h3>
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <MoreVertical size={18} />
            </button>
          </div>

          <div className="px-4 py-4">
            {statusItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-3 last:mb-0">
                <div className="w-32 text-right">
                  <span className="text-sm text-brand hover:text-brand cursor-pointer">
                    {item.label}
                  </span>
                </div>
                <div className="flex-1 relative">
                  <div className="h-6 bg-gray-100 rounded overflow-hidden">
                    {item.count > 0 && (
                      <div
                        className={`h-full ${item.color}`}
                        style={{ width: `${(item.count / maxCount) * 100}%` }}
                      />
                    )}
                  </div>
                </div>
                <div className="w-8 text-right">
                  <span className="text-sm text-gray-900 font-medium">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 mb-4 bg-white border border-gray-200 rounded">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-600" />
              <h3 className="text-base font-semibold text-gray-900">Pickup today</h3>
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <MoreVertical size={18} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                    Request name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                    Pickup schedule
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                    Total Products
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.length > 0 ? (
                  requests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Package size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-900 font-medium">
                            {request.requestName}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {request.pickupSchedule}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-gray-900">
                          {request.totalProducts}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="px-3 py-1 bg-brand text-white text-xs font-medium rounded hover:bg-brand-dark transition-colors">
                            View Details
                          </button>
                          <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs font-medium rounded hover:bg-gray-50 transition-colors">
                            Edit
                          </button>
                          {request.status === 'pending' && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                              Pending
                            </span>
                          )}
                          {request.status === 'completed' && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                              Completed
                            </span>
                          )}
                          {request.status === 'shipped' && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                              Shipped
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-sm text-gray-500">
                      No photoshoot requests scheduled for today
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {requests.length > 0 && (
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {requests.length} request{requests.length !== 1 ? 's' : ''}
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
