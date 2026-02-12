import React, { useState } from 'react';
import { Filter, Columns, ChevronDown, Star } from 'lucide-react';

const Reviews: React.FC = () => {
    const [recordsPerPage, setRecordsPerPage] = useState(20);

    const productReviews = [
        {
            id: 1,
            customer: 'Alice Brown',
            product: 'Wireless Earbuds',
            rating: 5,
            comment: 'Great product! Fast shipping and excellent quality.',
            status: 'Approved',
            created: 'Feb 28, 2024 3:20:15 PM'
        },
        {
            id: 2,
            customer: 'Bob Wilson',
            product: 'Phone Case',
            rating: 4,
            comment: 'Good quality case, fits perfectly.',
            status: 'Pending',
            created: 'Feb 27, 2024 1:45:30 PM'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-800';
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Rejected': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Product Reviews</h2>
                        <p className="text-gray-600 mt-1">Manage customer feedback and reviews</p>
                    </div>
                </div>

                {/* Product Reviews */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header with controls */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm text-gray-600">
                                {productReviews.length} records found
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

                    {/* Cards Layout for Product Reviews */}
                    <div className="p-6">
                        <div className="space-y-4">
                            {productReviews.map((review) => (
                                <div key={review.id} className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-4 mb-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                    <span className="text-sm font-medium text-gray-600">
                                                        {review.customer.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{review.customer}</p>
                                                    <p className="text-sm text-gray-600">{review.product}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 mb-3">
                                                {renderStars(review.rating)}
                                                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                                                    {review.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 mb-2">{review.comment}</p>
                                            <p className="text-sm text-gray-500">{review.created}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
