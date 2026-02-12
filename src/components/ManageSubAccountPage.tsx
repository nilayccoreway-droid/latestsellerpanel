import { ChevronDown, Filter, Eye, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SubAccount {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  permissions: string[];
  active: boolean;
  accountSince: string;
}

interface ManageSubAccountPageProps {
  onEdit?: (account: SubAccount) => void;
  onAddNew?: () => void;
}

export default function ManageSubAccountPage({ onEdit, onAddNew }: ManageSubAccountPageProps) {
  const [subAccounts] = useState<SubAccount[]>([
    {
      id: 1,
      firstName: 'Test',
      lastName: 'SubAccount',
      email: 'subac_d.developer001@mailinator.com',
      permissions: [
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
      ],
      active: true,
      accountSince: 'Sep 3, 2025 6:53:48 PM'
    }
  ]);

  const [selectedAccounts, setSelectedAccounts] = useState<number[]>([]);
  const [currentPage] = useState(1);
  const [recordsPerPage] = useState(20);

  const handleSelectAll = () => {
    if (selectedAccounts.length === subAccounts.length) {
      setSelectedAccounts([]);
    } else {
      setSelectedAccounts(subAccounts.map(acc => acc.id));
    }
  };

  const handleSelectAccount = (id: number) => {
    if (selectedAccounts.includes(id)) {
      setSelectedAccounts(selectedAccounts.filter(accId => accId !== id));
    } else {
      setSelectedAccounts([...selectedAccounts, id]);
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-end">
        <button
          onClick={onAddNew}
          className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded hover:bg-orange-700"
        >
          Add New Sub Account
        </button>
      </div>

      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  Actions
                  <ChevronDown size={14} />
                </button>
              </div>
              <div className="text-sm text-gray-600">
                {subAccounts.length} {subAccounts.length === 1 ? 'record' : 'records'} found
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Filter size={14} />
                Filters
              </button>
              <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Eye size={14} />
                Default View
                <ChevronDown size={14} />
              </button>
              <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Settings size={14} />
                Columns
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedAccounts.length === subAccounts.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-400"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Permission</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Active</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Account Since</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {subAccounts.map((account) => (
                  <tr key={account.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedAccounts.includes(account.id)}
                        onChange={() => handleSelectAccount(account.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{account.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {account.firstName} {account.lastName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{account.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      <div className="max-w-md">
                        {account.permissions.join(', ')}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      {account.active ? 'Yes' : 'No'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{account.accountSince}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => onEdit?.(account)}
                        className="text-sm text-brand hover:text-teal-800 hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <select
                value={recordsPerPage}
                className="px-2 py-1 border border-gray-300 rounded text-sm"
              >
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600">per page</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={currentPage}
                  readOnly
                  className="w-12 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                />
                <span className="text-sm text-gray-600">of 1</span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50" disabled>
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
