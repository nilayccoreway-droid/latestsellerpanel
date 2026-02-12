import { useState, useEffect } from 'react';

interface AdBlock {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

interface ManageAdvertisementPageProps {
  onBack: () => void;
  onEdit: (id: number) => void;
  onAddNew: () => void;
}

export default function ManageAdvertisementPage({ onBack, onEdit, onAddNew }: ManageAdvertisementPageProps) {
  const [adBlocks, setAdBlocks] = useState<AdBlock[]>([]);
  const [selectedBlocks, setSelectedBlocks] = useState<number[]>([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdBlocks();
  }, []);

  const fetchAdBlocks = async () => {
    setLoading(true);
    try {
      // Mock data for now - will be replaced with Supabase
      const mockData: AdBlock[] = [
        {
          id: 1,
          title: 'Test',
          created_at: '2025-11-07 11:11:35',
          updated_at: ''
        }
      ];
      setAdBlocks(mockData);
    } catch (error) {
      console.error('Error fetching ad blocks:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleBlockSelection = (id: number) => {
    setSelectedBlocks(prev =>
      prev.includes(id) ? prev.filter(blockId => blockId !== id) : [...prev, id]
    );
  };

  const toggleAllBlocks = () => {
    if (selectedBlocks.length === adBlocks.length) {
      setSelectedBlocks([]);
    } else {
      setSelectedBlocks(adBlocks.map(block => block.id));
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedBlocks.length === 0) return;
    if (!confirm(`Delete ${selectedBlocks.length} ad block(s)?`)) return;

    // TODO: Implement deletion
    console.log('Deleting blocks:', selectedBlocks);
    setSelectedBlocks([]);
  };

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchTitle);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return dateStr;
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={onAddNew}
            className="px-4 py-2 bg-brand text-white rounded-xl text-sm font-medium hover:bg-brand-hover transition-colors"
          >
            Ads Blocks
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Block Title
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder="Search by product name"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl text-sm hover:bg-gray-300 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="p-4 border-b border-gray-200">
            <button
              onClick={handleDeleteSelected}
              disabled={selectedBlocks.length === 0}
              className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Delete Ad Blocks
            </button>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left w-12">
                        <input
                          type="checkbox"
                          checked={selectedBlocks.length === adBlocks.length && adBlocks.length > 0}
                          onChange={toggleAllBlocks}
                          className="rounded border-gray-300"
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Id</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Created At</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Updated At</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {adBlocks.map((block) => (
                      <tr key={block.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            checked={selectedBlocks.includes(block.id)}
                            onChange={() => toggleBlockSelection(block.id)}
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">{block.id}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{block.title}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{formatDate(block.created_at)}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{formatDate(block.updated_at)}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => onEdit(block.id)}
                            className="px-4 py-1.5 bg-brand text-white rounded-xl text-sm hover:bg-brand transition-colors"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-4 py-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {adBlocks.length} Item{adBlocks.length !== 1 ? 's' : ''}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
