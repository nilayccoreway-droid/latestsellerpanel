import { Printer, Mail, X } from 'lucide-react';

interface OrderDetailsProps {
    orderId: string;
    onBack: () => void;
}

const OrderDetails = ({ orderId, onBack }: OrderDetailsProps) => {
    const orderData = {
        id: orderId,
        status: 'PROCESSING',
        date: 'May 12, 2025 11:56:54 AM',
        items: [
            {
                id: 1,
                name: 'Champagne Gold 14K Carnelian Ring 12 22',
                sku: 'ZUS14439-003-9228369',
                price: '¥100,000.00',
                orderedQty: 1,
                shippedQty: 1,
                totalPrice: '¥100,000.00',
                subtotal: '¥100,000.00'
            },
            {
                id: 2,
                name: 'Champagne Gold 14K Ring',
                sku: 'ZUS14439-003-5671213',
                price: '¥22,222.00',
                orderedQty: 1,
                shippedQty: 1,
                totalPrice: '¥22,222.00',
                subtotal: '¥22,222.00'
            }
        ],
        subtotal: '¥122,222.00',
        shipping: '¥0.00',
        discount: '¥0.00',
        tax: '¥0.00',
        total: '¥122,222.00',
        shippingMethod: 'Custom Shipping Title - Custom Shipping Method Name',
        paymentMethod: 'Pay online'
    };

    return (
        <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
                <div className="mb-6">
                    <button
                        onClick={onBack}
                        className="text-sm text-gray-600 hover:text-gray-900 mb-4 flex items-center"
                    >
                        ← Back to Orders
                    </button>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center space-x-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    Manage Order #{orderData.id}
                                </h1>
                                <span className="px-4 py-1 bg-brand text-white text-sm font-medium rounded">
                                    {orderData.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">{orderData.date}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                                Create Pickup
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                                Invoice
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors flex items-center space-x-2">
                                <Mail size={16} />
                                <span>Send Email</span>
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors flex items-center space-x-2">
                                <X size={16} />
                                <span>Cancel Order</span>
                            </button>
                            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors flex items-center space-x-2">
                                <Printer size={16} />
                                <span>Print</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="border-b border-gray-200">
                        <div className="px-6 py-3">
                            <button className="text-sm font-semibold text-gray-900 border-b-2 border-brand pb-3">
                                Items Ordered
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">SKU</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Price</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Qty</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Total Price</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Subtotal</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {orderData.items.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{item.sku}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">{item.price}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 text-right">
                                            <div>Ordered: {item.orderedQty}</div>
                                            <div>Shipped: {item.shippedQty}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">{item.totalPrice}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">{item.subtotal}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="text-brand hover:text-brand-dark text-sm font-medium">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-gray-50">
                                    <td colSpan={5}></td>
                                    <td className="px-6 py-3 text-right">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Subtotal</span>
                                                <span className="text-sm font-medium text-gray-900">{orderData.subtotal}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Shipping & Handling</span>
                                                <span className="text-sm font-medium text-gray-900">{orderData.shipping}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Discount</span>
                                                <span className="text-sm font-medium text-gray-900">{orderData.discount}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Total Tax</span>
                                                <span className="text-sm font-medium text-gray-900">{orderData.tax}</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-2 border-t border-gray-300">
                                                <span className="text-sm font-semibold text-gray-900">Total Ordered Amount</span>
                                                <span className="text-sm font-bold text-gray-900">{orderData.total}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                        Order Information
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Shipping Method</h3>
                            <p className="text-sm text-gray-600">{orderData.shippingMethod}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Payment Method</h3>
                            <p className="text-sm text-gray-600">{orderData.paymentMethod}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
