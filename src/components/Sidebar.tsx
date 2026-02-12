import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [recommendationsOpen, setRecommendationsOpen] = useState(false);
  const [hiddenOpen, setHiddenOpen] = useState(false);

  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col h-full shadow-sm">
      <div className="flex-1 overflow-y-auto">
        <div className="border-b border-gray-200">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">Actions</span>
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded">
                1
              </span>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="text-center py-6 bg-gray-50 rounded">
              <p className="text-xs font-medium text-gray-900 mb-1">No actions required</p>
              <p className="text-xs text-gray-600 px-3">
                There are no actions in this workspace. However, you can use the filter above to check for other actions.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <button
            onClick={() => setRecommendationsOpen(!recommendationsOpen)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              {recommendationsOpen ? (
                <ChevronDown size={16} className="text-gray-600" />
              ) : (
                <ChevronRight size={16} className="text-gray-600" />
              )}
              <span className="text-sm font-medium text-gray-900">Recommendations</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-medium text-white bg-gray-600 rounded">
                0
              </span>
            </div>
          </button>
          {recommendationsOpen && (
            <div className="px-4 py-3 bg-gray-50">
              <p className="text-xs text-gray-600">No recommendations at this time</p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200">
          <button
            onClick={() => setHiddenOpen(!hiddenOpen)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              {hiddenOpen ? (
                <ChevronDown size={16} className="text-gray-600" />
              ) : (
                <ChevronRight size={16} className="text-gray-600" />
              )}
              <span className="text-sm font-medium text-gray-900">Hidden</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-medium text-white bg-gray-600 rounded">
                0
              </span>
            </div>
          </button>
          {hiddenOpen && (
            <div className="px-4 py-3 bg-gray-50">
              <p className="text-xs text-gray-600">No hidden items</p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <button className="flex items-center gap-2 text-sm hover:opacity-80 mb-3 transition-opacity" style={{ color: '#00666B' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
            <path d="M8 4c-.6 0-1 .4-1 1v2H5c-.6 0-1 .4-1 1s.4 1 1 1h2v2c0 .6.4 1 1 1s1-.4 1-1V9h2c.6 0 1-.4 1-1s-.4-1-1-1H9V5c0-.6-.4-1-1-1z"/>
          </svg>
          Ask Seller Assistant
        </button>
        <button className="flex items-center justify-between w-full text-sm text-gray-700 hover:text-gray-900">
          <span>Access canvas</span>
          <ChevronDown size={14} />
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Seller Assistant is still learning, double-check for mistakes.
        </p>
      </div>
    </div>
  );
}
