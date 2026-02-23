import { useState } from 'react';
import { Mail, HelpCircle, User, Bell } from 'lucide-react';

type MenuItem = 'dashboard' | 'orders' | 'products' | 'payments' | 'reports';

interface HeaderProps {
  activeMenu: MenuItem;
  onMenuChange: (menu: MenuItem) => void;
  onOpenNotificationPanel?: () => void;
  // Legacy handlers (kept for compatibility)
  onManageProducts?: () => void;
  onManageReturn?: () => void;
  onManageSubAccount?: () => void;
  onSellingFees?: () => void;
  onProductImport?: () => void;
  onProductExport?: () => void;
  onManageRequestForQuote?: () => void;
  onManageAdvertisement?: () => void;
  onBulkPrice?: () => void;
  onBulkQty?: () => void;
  onManageOrders?: () => void;
  onManagePayments?: () => void;
  onManageCreditCard?: () => void;
  onFeedbacks?: () => void;
  onSupport?: () => void;
  onHelp?: () => void;
  onMembership?: () => void;
  onPromotion?: () => void;
  onSettings?: () => void;
  onReport?: () => void;
  onPhotoshoot?: () => void;
}

export default function Header({
  activeMenu,
  onMenuChange,
  onOpenNotificationPanel,
  onSupport,
  onHelp,
  onSettings,
}: HeaderProps) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <header className="bg-[#232f3e] text-white border-b border-gray-700 sticky top-0 z-50">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold">Zuuro</div>
            <div className="text-sm text-gray-300">N Collections</div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Notification icon - replaces Manage */}
            <button
              onClick={() => onOpenNotificationPanel && onOpenNotificationPanel()}
              className="relative hover:text-gray-300 transition-colors"
              title="Notifications"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                1
              </span>
            </button>

            {/* Create dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCreateOpen(!isCreateOpen)}
                className="flex items-center gap-1 text-sm hover:text-gray-300"
              >
                + Create
              </button>

              {isCreateOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsCreateOpen(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 bg-white text-gray-900 rounded shadow-lg z-20 w-48">
                    <button
                      onClick={() => setIsCreateOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Create Product
                    </button>
                    <button
                      onClick={() => setIsCreateOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Create Order
                    </button>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => onSupport && onSupport()}
              className="hover:text-gray-300"
            >
              <Mail size={20} />
            </button>
            <button
              onClick={() => onHelp && onHelp()}
              className="hover:text-gray-300"
            >
              <HelpCircle size={20} />
            </button>
            <button
              onClick={() => onSettings && onSettings()}
              className="hover:text-gray-300"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
