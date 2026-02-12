import { ArrowLeft } from 'lucide-react';

interface RequestForQuoteDetailsPageProps {
  quoteId: string;
  onBack?: () => void;
}

export default function RequestForQuoteDetailsPage({ quoteId, onBack }: RequestForQuoteDetailsPageProps) {
  const quoteDetails = {
    id: quoteId,
    customerName: 'test test',
    customerEmail: 'test@example.com',
    productRequested: 'Silver ring with diamond',
    description: 'Looking for a silver ring with a small diamond in the center. Ring size 7.',
    status: 'Resolved',
    createdAt: '2025-09-12 20:19:22',
    updatedAt: '2025-09-13 10:30:15',
    quotedPrice: '$450.00',
    notes: 'Customer prefers white gold setting. Discussed pricing and delivery timeline.'
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Quote Request Details</h1>
      </div>

      <div className="p-6">
        <div className="max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Quote Information</h2>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Quote ID
                  </label>
                  <p className="text-sm text-gray-900">#{quoteDetails.id}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Status
                  </label>
                  <p className="text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {quoteDetails.status}
                    </span>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Customer Name
                  </label>
                  <p className="text-sm text-gray-900">{quoteDetails.customerName}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Customer Email
                  </label>
                  <p className="text-sm text-gray-900">{quoteDetails.customerEmail}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Created At
                  </label>
                  <p className="text-sm text-gray-900">{quoteDetails.createdAt}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Updated At
                  </label>
                  <p className="text-sm text-gray-900">{quoteDetails.updatedAt}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Requested Product
                </label>
                <p className="text-sm text-gray-900">{quoteDetails.productRequested}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Description
                </label>
                <p className="text-sm text-gray-900">{quoteDetails.description}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Quoted Price
                </label>
                <p className="text-lg font-semibold text-gray-900">{quoteDetails.quotedPrice}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Notes
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-900">{quoteDetails.notes}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={onBack}
              className="px-4 py-2 border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50"
            >
              Back to List
            </button>
            <button className="px-4 py-2 bg-brand text-white rounded-xl text-sm hover:bg-brand-hover">
              Send Response
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-xl text-sm hover:bg-orange-700">
              Mark as Resolved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
