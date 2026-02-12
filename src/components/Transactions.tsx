import React, { useState } from 'react';
import { Filter, Download, Columns, ChevronDown } from 'lucide-react';

interface TransactionsProps {
    onBack?: () => void;
}

const Transactions: React.FC<TransactionsProps> = ({ onBack }) => {
    const [activeSubTab, setActiveSubTab] = useState('transactions');
    const [recordsPerPage, setRecordsPerPage] = useState(20);

    const transactions = [
        {
            id: 1,
            transactionType: 'order',
            incomeAmount: '₹10,000',
            expenseAmount: '₹9,141',
            netAmount: '₹859',
            status: 'completed',
            createdDate: '2025-07-09 04:12:06'
        },
        {
            id: 2,
            transactionType: 'refund',
            incomeAmount: '₹0',
            expenseAmount: '₹2,500',
            netAmount: '-₹2,500',
            status: 'processed',
            createdDate: '2025-07-08 10:30:15'
        },
        {
            id: 3,
            transactionType: 'order',
            incomeAmount: '₹5,500',
            expenseAmount: '₹4,995',
            netAmount: '₹505',
            status: 'completed',
            createdDate: '2025-07-07 16:45:22'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'processed': return 'bg-blue-100 text-blue-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'failed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const renderTransactions = () => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header with controls */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                        {transactions.length} records found
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
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            <Download size={16} className="mr-2" />
                            Export
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
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income Amount</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Amount</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Amount</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">{transaction.transactionType}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{transaction.incomeAmount}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{transaction.expenseAmount}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{transaction.netAmount}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                                        {transaction.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{transaction.createdDate}</td>
                                <td className="px-6 py-4">
                                    <button className="text-brand hover:text-brand-dark text-sm font-medium">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderExportTransactions = () => (
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
            <Download size={48} className="text-brand mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Export Transactions</h2>
            <p className="text-gray-600 mb-6">Download your transaction data in various formats</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-lg font-medium text-gray-900 mb-1">CSV Export</div>
                    <div className="text-sm text-gray-600">Spreadsheet compatible</div>
                </button>
                <button className="p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-lg font-medium text-gray-900 mb-1">Excel Export</div>
                    <div className="text-sm text-gray-600">Advanced formatting</div>
                </button>
            </div>
        </div>
    );

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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Transactions</h2>
                        <p className="text-gray-600 mt-1">View and manage your transaction history</p>
                    </div>
                </div>

                {/* Sub Navigation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8 px-6">
                            <button
                                onClick={() => setActiveSubTab('transactions')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeSubTab === 'transactions'
                                        ? 'border-brand text-brand'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                Transactions
                            </button>
                            <button
                                onClick={() => setActiveSubTab('export')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeSubTab === 'export'
                                        ? 'border-brand text-brand'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                Export Transactions
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Content */}
                {activeSubTab === 'transactions' ? renderTransactions() : renderExportTransactions()}
            </div>
        </div>
    );
};

export default Transactions;
