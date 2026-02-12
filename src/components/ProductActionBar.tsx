import { Plus, Package } from 'lucide-react';

interface ProductActionBarProps {
  onManageProducts: () => void;
}

export default function ProductActionBar({ onManageProducts }: ProductActionBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-[#00666B] to-[#008A91]">
          <Package size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">Product Management</h3>
          <p className="text-xs text-gray-500 mt-0.5">Manage your inventory and listings</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onManageProducts}
          className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
        >
          Manage Products
        </button>

        <button
          className="flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md transition-all"
          style={{
            background: 'linear-gradient(135deg, #00666B 0%, #008A91 100%)'
          }}
        >
          <Plus size={18} />
          Create Product
        </button>
      </div>
    </div>
  );
}
