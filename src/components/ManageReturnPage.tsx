import { useState } from 'react';
import { Filter, Eye, ChevronDown } from 'lucide-react';

interface ReturnRequest {
  id: string;
  rmaId: string;
  orderRef: string;
  customerName: string;
  rmaStatus: string;
  createdAt: string;
}

const mockReturns: ReturnRequest[] = [
  {
    id: '1',
    rmaId: '2',
    orderRef: '#000000044',
    customerName: 'test test',
    rmaStatus: 'Pending',
    createdAt: '2025-10-31 11:07:05',
  },
  {
    id: '2',
    rmaId: '1',
    orderRef: '#000000045',
    customerName: 'test test',
    rmaStatus: 'Pending',
    createdAt: '2025-10-27 10:31:10',
  },
];

interface ManageReturnPageProps {
  onViewReturn: (returnId: string) => void;
  onClose?: () => void;
}

export default function ManageReturnPage({ onViewReturn, onClose }: ManageReturnPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        <div className="mb-4">
          {onClose && (
            <button
              onClick={onClose}
              className="mb-3 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              ← Back to Dashboard
            </button>
          )}
          <h1 className="text-2xl font-semibold text-gray-900">Manage Returns</h1>
          <p className="text-sm text-gray-600 mt-1">View and manage customer return requests</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <Filter size={16} />
                Filters
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <Eye size={16} />
                Default View
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                Columns
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <select
                  value={perPage}
                  onChange={(e) => setPerPage(Number(e.target.value))}
                  className="px-3 py-2 text-sm border border-gray-300 rounded bg-white"
                >
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-600">per page</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                >
                  ‹
                </button>
                <span className="text-sm text-gray-700">
                  <input
                    type="number"
                    value={currentPage}
                    onChange={(e) => setCurrentPage(Number(e.target.value))}
                    className="w-12 px-2 py-1 text-center border border-gray-300 rounded"
                  />
                  <span className="ml-1">of 1</span>
                </span>
                <button
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={currentPage >= 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">{mockReturns.length} records found</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Created At</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">RMA Id</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Order Ref</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Customer Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">RMA Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockReturns.map((returnItem) => (
                  <tr key={returnItem.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{returnItem.createdAt}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{returnItem.rmaId}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{returnItem.orderRef}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{returnItem.customerName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{returnItem.rmaStatus}</td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        onClick={() => onViewReturn(returnItem.id)}
                        className="text-brand hover:text-brand font-medium"
                      >
                        View
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
}
