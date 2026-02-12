import React, { useState } from 'react';
import { Filter, Columns, ChevronDown, CreditCard, Lock } from 'lucide-react';

interface CreditCardManagementProps {
    onBack?: () => void;
}

const CreditCardManagement: React.FC<CreditCardManagementProps> = ({ onBack }) => {
    const [cardNumber, setCardNumber] = useState('1234 1234 1234 1234');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [recordsPerPage, setRecordsPerPage] = useState(20);

    const creditCards = [
        {
            id: 1,
            cardNumber: 'XXXX XXXX XXXX 4242',
            expiryDate: '12/2030',
            isDefault: 'Yes'
        }
    ];

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return v;
        }
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatCardNumber(e.target.value);
        setCardNumber(formatted);
    };

    const handleSave = () => {
        console.log('Saving card data:', { cardNumber, expiryDate, cvv });
        // Handle save logic
    };

    return (
        <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
                {/* Back button */}
                {onBack && (
                    <button
                        onClick={onBack}
                        className="text-sm text-gray-600 hover:text-gray-900 mb-4 flex items-center"
                    >
                        ← Back to Payments
                    </button>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <CreditCard size={24} className="text-gray-700" />
                        <h2 className="text-2xl font-bold text-gray-900">Credit Card</h2>
                    </div>
                </div>

                {/* Add New Credit Card Form */}
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Add New Credit Card Data</h3>
                        <div className="flex space-x-3">
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors font-medium"
                            >
                                Save Card Data
                            </button>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Credit Card Number
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={cardNumber}
                                        onChange={handleCardNumberChange}
                                        maxLength={19}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="1234 1234 1234 1234"
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
                                            Autofill link
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        MM/YY
                                    </label>
                                    <input
                                        type="text"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                        placeholder="MM / YY"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        placeholder="CVC"
                                        maxLength={4}
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
                            <Lock size={16} className="mr-2" />
                            Your card details are protected using PCI DSS v3.2 security standards.
                        </div>
                    </div>
                </div>

                {/* Credit Cards List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header with controls */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <select className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option>Actions</option>
                                    <option>Delete Selected</option>
                                    <option>Set as Default</option>
                                </select>
                                <div className="text-sm text-gray-600">
                                    {creditCards.length} records found
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    <Filter size={16} className="mr-2" />
                                    Filters
                                </button>
                                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    <Columns size={16} className="mr-2" />
                                    Columns
                                    <ChevronDown size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="flex items-center space-x-2">
                                <select
                                    value={recordsPerPage}
                                    onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                                <span className="text-sm text-gray-600">per page</span>
                                <div className="flex items-center space-x-2 ml-4">
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
                                    <span className="text-sm text-gray-600">1 of 1</span>
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <input type="checkbox" className="rounded" />
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Card Number</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Is Default</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {creditCards.map((card) => (
                                    <tr key={card.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" className="rounded" />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{card.cardNumber}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{card.expiryDate}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{card.isDefault}</td>
                                        <td className="px-6 py-4">
                                            <button className="text-brand hover:text-brand-dark text-sm font-medium">
                                                Edit
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

export default CreditCardManagement;
