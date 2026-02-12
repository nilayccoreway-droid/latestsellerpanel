import { useState, useEffect } from 'react';
import { mockProducts } from '../data/mockData';

interface Product {
  id: string;
  name: string;
  sku: string;
}

interface AdvertisementEditPageProps {
  blockId?: number;
  onBack: () => void;
}

export default function AdvertisementEditPage({ blockId, onBack }: AdvertisementEditPageProps) {
  const [title, setTitle] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (blockId) {
      fetchBlockData();
    }
  }, [blockId]);

  const fetchBlockData = async () => {
    setLoading(true);
    try {
      // Mock data - will be replaced with Supabase
      setTitle('Test');
      // Mock: set some selected products
      setSelectedProducts([mockProducts[0].id, mockProducts[1].id]);
    } catch (error) {
      console.error('Error fetching block data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleProductSelection = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAllProducts = () => {
    if (selectedProducts.length === mockProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(mockProducts.map(p => p.id));
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      alert('Title is required');
      return;
    }

    setSaving(true);
    try {
      // TODO: Implement save to Supabase
      console.log('Saving:', { title, selectedProducts });
      alert('Saved successfully!');
      onBack();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving block');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!blockId) return;
    if (!confirm('Are you sure you want to delete this ad block?')) return;

    try {
      // TODO: Implement delete from Supabase
      console.log('Deleting block:', blockId);
      alert('Deleted successfully!');
      onBack();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error deleting block');
    }
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gray-50 overflow-auto flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Block Form</h1>
          <div className="flex items-center gap-3">
            {blockId && (
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-brand text-white rounded-xl text-sm font-medium hover:bg-brand-hover transition-colors"
              >
                Delete
              </button>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-brand text-white rounded-xl text-sm font-medium hover:bg-brand-hover transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Title Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Title: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand"
              required
            />
          </div>

          {/* Select Products Section */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-sm font-semibold text-gray-900">Select Products:</h2>
            </div>

            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm text-gray-700">
                {selectedProducts.length} Item(s)
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Show</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-2 py-1 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-700">per page</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-left w-12">
                      <input
                        type="checkbox"
                        checked={selectedProducts.length === mockProducts.length && mockProducts.length > 0}
                        onChange={toggleAllProducts}
                        className="rounded border-gray-300"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockProducts.slice(0, itemsPerPage).map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => toggleProductSelection(product.id)}
                          className="rounded border-gray-300"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">{product.id}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{product.sku}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
