import React, { useState } from 'react';
import { Search, Filter, Eye, Columns, ChevronDown, ArrowLeft } from 'lucide-react';

interface Promotion {
  id: string;
  name: string;
  period: string;
  discount: number;
  products: number;
  status: 'Active' | 'Expired' | 'Live';
  runningStatus?: 'Live' | 'Expired';
  manage?: string;
}

interface Product {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  price: string;
  promotionPrice: string;
  status?: 'Joined';
  thumbnail: string;
}

const Promotion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'participation'>('all');
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<'information' | 'add-product' | 'status'>('information');
  const [participationSubTab, setParticipationSubTab] = useState<'all' | 'coming-soon' | 'during' | 'finish'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(20);

  const allPromotions: Promotion[] = [
    {
      id: '1',
      name: 'Summer Sale',
      period: '2025-07-01 12:27:00 To 2025-07-31 12:27:00',
      discount: 5,
      products: 0,
      status: 'Expired',
      manage: 'Expired'
    }
  ];

  const participationPromotions: Promotion[] = [
    {
      id: '2',
      name: 'Test',
      period: '2025-09-18 19:16:00 To 2025-09-30 19:16:00',
      discount: 0,
      products: 1,
      status: 'Live',
      runningStatus: 'Live',
      manage: 'Joined'
    }
  ];

  const promotionProducts: Product[] = [
    {
      id: '1',
      name: 'Aolite Ring',
      sku: 'ringtest123',
      quantity: 1,
      price: '¥325,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '2',
      name: 'Aquamarine White Gold Ring',
      sku: '56436ssss',
      quantity: 1,
      price: '¥10,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '3',
      name: 'Actinolite Rose Gold Ring',
      sku: 'teststring789w',
      quantity: 1,
      price: '¥325,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '4',
      name: 'Amblygonite Platinum Ring',
      sku: '6728021289',
      quantity: 10,
      price: '¥100,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '5',
      name: 'Andalusite Rose Gold Ring',
      sku: '564363333',
      quantity: 1,
      price: '¥10,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '6',
      name: 'Adamite Silver Ring',
      sku: '7868712ew91',
      quantity: 1,
      price: '¥10,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      id: '7',
      name: 'Yellow Gold Ring',
      sku: 'no-diamond-ring',
      quantity: 10,
      price: '¥10,000',
      promotionPrice: '¥0.00',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    }
  ];

  const statusProducts: Product[] = [
    {
      id: '1',
      name: 'Demo Product 2',
      sku: 'demo_product_2',
      quantity: 1000,
      price: '¥80',
      promotionPrice: '¥72',
      status: 'Joined',
      thumbnail: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Joined': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handlePromotionClick = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
  };

  const handleBackToList = () => {
    setSelectedPromotion(null);
    setActiveSubTab('information');
  };

  const renderPromotionList = () => {
    const currentPromotions = activeTab === 'all' ? allPromotions : participationPromotions;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Campaigns</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-3 px-6 font-medium text-sm transition-colors border-b-2 ${activeTab === 'all'
                  ? 'border-brand text-brand bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 bg-gray-100'
                  }`}
              >
                All Promotion
              </button>
              <button
                onClick={() => setActiveTab('participation')}
                className={`py-3 px-6 font-medium text-sm transition-colors border-b-2 ${activeTab === 'participation'
                  ? 'border-brand text-brand bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 bg-gray-100'
                  }`}
              >
                Participation Promotion
              </button>
            </nav>
          </div>

          {/* Participation Sub-tabs */}
          {activeTab === 'participation' && (
            <div className="px-6 py-3 border-b border-gray-200">
              <div className="flex space-x-6">
                <button
                  onClick={() => setParticipationSubTab('all')}
                  className={`text-sm font-medium ${participationSubTab === 'all' ? 'text-brand' : 'text-gray-500'
                    }`}
                >
                  All(1)
                </button>
                <button
                  onClick={() => setParticipationSubTab('coming-soon')}
                  className={`text-sm font-medium ${participationSubTab === 'coming-soon' ? 'text-brand' : 'text-gray-500'
                    }`}
                >
                  Coming Soon (0)
                </button>
                <button
                  onClick={() => setParticipationSubTab('during')}
                  className={`text-sm font-medium ${participationSubTab === 'during' ? 'text-brand' : 'text-gray-500'
                    }`}
                >
                  During Promotion (1)
                </button>
                <button
                  onClick={() => setParticipationSubTab('finish')}
                  className={`text-sm font-medium ${participationSubTab === 'finish' ? 'text-brand' : 'text-gray-500'
                    }`}
                >
                  Finish(0)
                </button>
              </div>
            </div>
          )}

          {/* Search and Controls */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-3 ml-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <Eye size={16} className="mr-2" />
                  Default View
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <Columns size={16} className="mr-2" />
                  Columns
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {currentPromotions.length} records found
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={recordsPerPage}
                  onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
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
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium">Promotion Banner</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium">Period</th>
                  {activeTab === 'all' && <th className="px-6 py-4 text-left text-sm font-medium">Discount(%)</th>}
                  <th className="px-6 py-4 text-left text-sm font-medium">Product(s)</th>
                  {activeTab === 'participation' && <th className="px-6 py-4 text-left text-sm font-medium">Running Status</th>}
                  <th className="px-6 py-4 text-left text-sm font-medium">Manage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentPromotions.map((promotion) => (
                  <tr key={promotion.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-500">Banner</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{promotion.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{promotion.period}</td>
                    {activeTab === 'all' && <td className="px-6 py-4 text-sm text-gray-900">{promotion.discount}</td>}
                    <td className="px-6 py-4 text-sm text-gray-900">{promotion.products}</td>
                    {activeTab === 'participation' && (
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-900">{promotion.runningStatus}</span>
                        </div>
                      </td>
                    )}
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handlePromotionClick(promotion)}
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(promotion.manage || promotion.status)}`}
                      >
                        {promotion.manage || promotion.status}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderPromotionDetail = () => {
    if (!selectedPromotion) return null;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{selectedPromotion.name}</h2>
          </div>
          <button
            onClick={handleBackToList}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </button>
        </div>

        {/* Sub Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveSubTab('information')}
                className={`py-3 px-6 font-medium text-sm transition-colors border-b-2 ${activeSubTab === 'information'
                  ? 'border-brand text-brand bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 bg-gray-100'
                  }`}
              >
                Information
              </button>
              <button
                onClick={() => setActiveSubTab('add-product')}
                className={`py-3 px-6 font-medium text-sm transition-colors border-b-2 ${activeSubTab === 'add-product'
                  ? 'border-brand text-brand bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 bg-gray-100'
                  }`}
              >
                Add New Product
              </button>
              <button
                onClick={() => setActiveSubTab('status')}
                className={`py-3 px-6 font-medium text-sm transition-colors border-b-2 ${activeSubTab === 'status'
                  ? 'border-brand text-brand bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700 bg-gray-100'
                  }`}
              >
                Status
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeSubTab === 'information' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Promotion Period</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start</span>
                      <span className="text-gray-900">2025-07-01 12:27:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">End</span>
                      <span className="text-gray-900">2025-07-31 12:27:00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Total</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Seller</span>
                      <span className="text-gray-900">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Product</span>
                      <span className="text-gray-900">0</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-600">No description available</p>
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === 'add-product' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Actions</option>
                    </select>
                    <div className="text-sm text-gray-600">
                      32 records found
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                      <Filter size={16} className="mr-2" />
                      Filters
                    </button>
                    <div className="flex items-center space-x-2">
                      <select
                        value={recordsPerPage}
                        onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                      </select>
                      <span className="text-sm text-gray-600">per page</span>
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
                        <span className="text-sm text-gray-600">1 of 2</span>
                        <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          <input type="checkbox" className="rounded" />
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Thumbnail</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Sku</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Quantity</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Price</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Promotion Price</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {promotionProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              src={product.thumbnail}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.quantity}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.price}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.promotionPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSubTab === 'status' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Actions</option>
                    </select>
                    <div className="text-sm text-gray-600">
                      1 records found
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                      <Filter size={16} className="mr-2" />
                      Filters
                    </button>
                    <div className="flex items-center space-x-2">
                      <select
                        value={recordsPerPage}
                        onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
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

                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          <input type="checkbox" className="rounded" />
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Thumbnail</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Sku</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Quantity</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Price</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Promotion Price</th>
                        <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {statusProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="px-6 py-4">
                            <img
                              src={product.thumbnail}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.quantity}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.price}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{product.promotionPrice}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status || 'Active')}`}>
                              {product.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        {selectedPromotion ? renderPromotionDetail() : renderPromotionList()}
      </div>
    </div>
  );
};

export default Promotion;