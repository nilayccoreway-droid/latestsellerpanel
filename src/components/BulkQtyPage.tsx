import { useState } from 'react';
import { mockProducts } from '../data/mockData';

export default function BulkQtyPage({ onBack }: { onBack: () => void }) {
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantityValue, setQuantityValue] = useState('');
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = mockProducts.slice(startIndex, endIndex);

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAllProducts = () => {
    if (selectedProducts.length === currentProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(currentProducts.map(p => p.id));
    }
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        <div className="mb-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ← Back to Products
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Bulk Quantity Management</h1>
        </div>

        <div className="bg-white border border-gray-300 rounded">
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors"
            >
              FILTERS
            </button>
          </div>

          {showFilters && (
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-xs text-gray-700 mb-1">Quantity Value</label>
                  <input
                    type="number"
                    value={quantityValue}
                    onChange={(e) => setQuantityValue(e.target.value)}
                    className="px-3 py-2 text-sm border border-gray-300 rounded min-w-[200px]"
                  />
                </div>
                <div className="pt-5">
                  <button className="px-6 py-2 bg-brand text-white text-sm font-medium rounded hover:bg-brand-hover transition-colors">
                    Update Quantity
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === currentProducts.length}
                      onChange={toggleAllProducts}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Image</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Product Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">SKU</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Current Qty</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductSelection(product.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-12 h-12 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                        {product.thumbnail ? (
                          <img src={product.thumbnail} alt={product.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-8 h-8 bg-brand rounded-full" />
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{product.sku}</td>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                      {product.stock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded bg-gray-900 text-white disabled:opacity-50 disabled:bg-gray-300"
            >
              1
            </button>
            {[2, 3, 4, 5].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={page > totalPages}
                className={`px-3 py-1 text-sm border border-gray-300 rounded ${
                  currentPage === page
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } disabled:opacity-50`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
