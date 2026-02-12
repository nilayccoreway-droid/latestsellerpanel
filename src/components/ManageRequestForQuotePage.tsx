import { Filter, Settings, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface RequestForQuote {
  id: string;
  customerName: string;
  productRequested: string;
  status: string;
  createdAt: string;
}

interface ManageRequestForQuotePageProps {
  onViewQuote?: (quoteId: string) => void;
}

export default function ManageRequestForQuotePage({ onViewQuote }: ManageRequestForQuotePageProps) {
  const [quotes] = useState<RequestForQuote[]>([
    {
      id: '1',
      customerName: 'test test',
      productRequested: 'Silver ring with diamond',
      status: 'Resolved',
      createdAt: '2025-09-12 20:19:22'
    },
    {
      id: '2',
      customerName: 'test test',
      productRequested: 'Gold ring with ruby diamond',
      status: 'Resolved',
      createdAt: '2025-09-12 19:29:45'
    }
  ]);

  const [currentPage] = useState(1);
  const [recordsPerPage] = useState(20);

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">All Requested Quotes</h1>
      </div>

      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {quotes.length} {quotes.length === 1 ? 'record' : 'records'} found
            </div>

            <div className="flex items-center gap-3">
              <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Filter size={14} />
                Filters
              </button>
              <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Settings size={14} />
                Columns
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Customer Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Requested Quote For Product</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Created At</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {quotes.map((quote) => (
                  <tr key={quote.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{quote.customerName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{quote.productRequested}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{quote.status}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{quote.createdAt}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => onViewQuote?.(quote.id)}
                        className="text-sm text-brand hover:text-teal-800 hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <select
                value={recordsPerPage}
                className="px-2 py-1 border border-gray-300 rounded text-sm"
              >
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600">per page</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={currentPage}
                  readOnly
                  className="w-12 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">of 1</span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
