import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface SubAccountEditPageProps {
  onBack?: () => void;
  onSave?: (data: SubAccountFormData) => void;
  initialData?: SubAccountFormData;
}

export interface SubAccountFormData {
  firstName: string;
  lastName: string;
  email: string;
  permissions: string[];
  active: string;
}

export default function SubAccountEditPage({ onBack, onSave, initialData }: SubAccountEditPageProps) {
  const [formData, setFormData] = useState<SubAccountFormData>(
    initialData || {
      firstName: '',
      lastName: '',
      email: '',
      permissions: [],
      active: 'Yes'
    }
  );

  const allPermissions = [
    'View Dashboard',
    'Manage Profile',
    'Manage Products',
    'View Products',
    'My Review List',
    'Manage Orders',
    'Marketplace Promotion Campaign Grid',
    'Marketplace Promotion Campaign Edit',
    'Marketplace Promotion Campaign Join',
    'Manage Promotion',
    'Marketplace Advance Report'
  ];

  const handlePermissionToggle = (permission: string) => {
    if (formData.permissions.includes(permission)) {
      setFormData({
        ...formData,
        permissions: formData.permissions.filter(p => p !== permission)
      });
    } else {
      setFormData({
        ...formData,
        permissions: [...formData.permissions, permission]
      });
    }
  };

  const handleReset = () => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        permissions: [],
        active: 'Yes'
      });
    }
  };

  const handleSave = () => {
    onSave?.(formData);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
        >
          Reset
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Save Sub Account
        </button>
      </div>

      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-4xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Allowed Permissions <span className="text-red-500">*</span>
              </label>
              <div className="border border-gray-300 rounded p-4 bg-gray-50 space-y-2 max-h-80 overflow-y-auto">
                {allPermissions.map((permission) => (
                  <label
                    key={permission}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(permission)}
                      onChange={() => handlePermissionToggle(permission)}
                      className="rounded border-gray-300"
                    />
                    {permission}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Active <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 max-w-4xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
