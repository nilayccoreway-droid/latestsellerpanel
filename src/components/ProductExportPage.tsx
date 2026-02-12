import { useState } from 'react';

export default function ProductExportPage() {
  const [entityType, setEntityType] = useState('');

  const exportedFiles = [
    { name: 'product_export_1770871748.xlsx', timestamp: '1770871748' },
    { name: 'product_export_1770010976.xlsx', timestamp: '1770010976' },
    { name: 'product_export_1769978025.xlsx', timestamp: '1769978025' },
    { name: 'product_export_1769977517.xlsx', timestamp: '1769977517' },
    { name: 'product_export_1769974322.xlsx', timestamp: '1769974322' }
  ];

  const handleExport = () => {
    console.log('Exporting with entity type:', entityType);
  };

  const handleDownload = (fileName: string) => {
    console.log('Downloading:', fileName);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="max-w-6xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Product Export</h1>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Entity Type <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <select
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand bg-white"
              >
                <option value="">-- Please Select --</option>
                <option value="products">Products</option>
                <option value="categories">Categories</option>
                <option value="customers">Customers</option>
                <option value="orders">Orders</option>
              </select>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 4l-1.5 1.5L9 8l-2.5 2.5L8 12l4-4z"/>
                </svg>
              </button>
            </div>
          </div>

          <button
            onClick={handleExport}
            disabled={!entityType}
            className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Export
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Exported Files</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {exportedFiles.map((file, index) => (
              <div
                key={index}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >
                <span className="text-sm text-gray-900">{file.name}</span>
                <button
                  onClick={() => handleDownload(file.name)}
                  className="text-sm text-brand hover:text-teal-800 hover:underline"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
