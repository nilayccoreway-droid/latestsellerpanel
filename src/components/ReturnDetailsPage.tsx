import { useState } from 'react';

interface ReturnDetailsPageProps {
  returnId: string;
  onBack: () => void;
}

interface ConversationMessage {
  id: string;
  timestamp: string;
  sender: 'admin' | 'seller' | 'customer';
  senderName: string;
  message: string;
}

export default function ReturnDetailsPage({ returnId, onBack }: ReturnDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'conversation'>('details');
  const [rmaStatus, setRmaStatus] = useState('not-receive-package-yet');
  const [paymentType, setPaymentType] = useState('full-amount');
  const [message, setMessage] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const rmaData = {
    orderId: '#000000044',
    rmaStatus: 'Pending',
    orderStatus: 'Not Delivered',
    resolutionType: 'Refund',
    additionalInfo: 'sdffhsj jsd',
    refundableAmount: 121111.00,
  };

  const items = [
    {
      id: '1',
      productName: 'Ring',
      sku: 'ZLPS14439-011-07HG3833',
      price: 121111.00,
      qty: 1,
      reason: 'Test',
    },
  ];

  const conversations: ConversationMessage[] = [
    {
      id: '1',
      timestamp: 'Oct 31, 2025, 8:12:02 PM',
      sender: 'admin',
      senderName: 'Administrator',
      message: 'here is admin',
    },
    {
      id: '2',
      timestamp: 'Oct 31, 2025, 8:10:48 PM',
      sender: 'seller',
      senderName: 'Seller : test test',
      message: 'Test',
    },
    {
      id: '3',
      timestamp: 'Oct 31, 2025, 8:09:19 PM',
      sender: 'seller',
      senderName: 'Seller : test test',
      message: 'RMA status has been changed to Pending.',
    },
    {
      id: '4',
      timestamp: 'Oct 31, 2025, 8:07:05 PM',
      sender: 'customer',
      senderName: 'Customer : test test',
      message: 'New RMA request generated.',
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        <div className="mb-4">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ← Back to Manage Returns
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded mb-4">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'details'
                  ? 'text-brand border-b-2 border-brand'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              RMA Details
            </button>
            <button
              onClick={() => setActiveTab('conversation')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'conversation'
                  ? 'text-brand border-b-2 border-brand'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Admin Conversation
            </button>
          </div>

          {activeTab === 'details' && (
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">RMA Details</h2>
              <p className="text-sm text-gray-600 mb-6">Oct 31, 2025, 8:07:06 PM</p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Order Id</h3>
                  <p className="text-sm text-gray-700">{rmaData.orderId}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Status</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">RMA Status :</span> {rmaData.rmaStatus}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Order Status :</span> {rmaData.orderStatus}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Resolution Type</h3>
                  <p className="text-sm text-gray-700">{rmaData.resolutionType}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Additional Information</h3>
                  <p className="text-sm text-gray-700">{rmaData.additionalInfo}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Refund Details</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-medium">Refundable Amount :</span> ¥{rmaData.refundableAmount.toLocaleString()}
                </p>
              </div>

              <div className="bg-white border border-gray-300 rounded p-6 mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Change RMA Status</h3>
                <select
                  value={rmaStatus}
                  onChange={(e) => setRmaStatus(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded mb-4"
                >
                  <option value="not-receive-package-yet">Not Receive Package yet</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <button className="px-6 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors">
                  Save
                </button>
              </div>

              <div className="bg-white border border-gray-300 rounded p-6 mb-8">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Refund Amount</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Type</label>
                  <select
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded"
                  >
                    <option value="full-amount">Full Amount</option>
                    <option value="partial-amount">Partial Amount</option>
                  </select>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-medium">Total Refundable Amount :</span> ¥{rmaData.refundableAmount.toLocaleString()}
                </p>
                <button className="px-6 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors">
                  Refund Offline
                </button>
              </div>

              <div className="bg-white border border-gray-300 rounded p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Item(s) Requested for RMA</h3>
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Product Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Sku</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Price</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Qty</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.productName}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{item.sku}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">¥{item.price.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.qty}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-white border border-gray-300 rounded p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-gray-900">Conversations</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Show</span>
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="px-3 py-1 text-sm border border-gray-300 rounded"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    <span className="text-sm text-gray-600">per page</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {conversations.map((conv) => {
                    const bgColor =
                      conv.sender === 'admin'
                        ? 'bg-orange-100'
                        : conv.sender === 'seller'
                        ? 'bg-green-100'
                        : 'bg-blue-100';

                    const senderColor =
                      conv.sender === 'admin'
                        ? 'text-orange-900'
                        : conv.sender === 'seller'
                        ? 'text-green-900'
                        : 'text-blue-900';

                    return (
                      <div key={conv.id} className={`${bgColor} rounded p-4`}>
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs text-gray-700">{conv.timestamp}</span>
                          <span className={`text-sm font-medium ${senderColor}`}>
                            {conv.senderName}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900">{conv.message}</p>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-gray-600 mt-4">{conversations.length} item(s)</p>
              </div>

              <div className="mt-8 bg-white border border-gray-300 rounded p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Send Message</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded resize-none"
                  />
                  <button className="mt-4 px-6 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
