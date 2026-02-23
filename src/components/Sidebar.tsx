import { useState } from 'react';
import { ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
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
  onMembership?: () => void;
  onPromotion?: () => void;
  onSettings?: () => void;
  onReport?: () => void;
  onPhotoshoot?: () => void;
}

interface MenuGroup {
  category: string;
  items: { label: string; handler?: () => void }[];
}

export default function Sidebar({
  isOpen = true,
  onToggle,
  onManageProducts,
  onManageReturn,
  onManageSubAccount,
  onSellingFees,
  onProductImport,
  onProductExport,
  onManageRequestForQuote,
  onManageAdvertisement,
  onBulkPrice,
  onBulkQty,
  onManageOrders,
  onManagePayments,
  onManageCreditCard,
  onFeedbacks,
  onMembership,
  onPromotion,
  onSettings,
  onReport,
  onPhotoshoot,
}: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (category: string) => {
    setOpenGroups((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const menuGroups: MenuGroup[] = [
    {
      category: 'Products',
      items: [
        { label: 'Manage products', handler: onManageProducts },
        { label: 'Bulk Price', handler: onBulkPrice },
        { label: 'Bulk Qty', handler: onBulkQty },
        { label: 'Import', handler: onProductImport },
        { label: 'Export', handler: onProductExport },
        { label: 'Feedbacks', handler: onFeedbacks },
      ],
    },
    {
      category: 'Orders',
      items: [
        { label: 'Manage Order', handler: onManageOrders },
        { label: 'Manage Return', handler: onManageReturn },
      ],
    },
    {
      category: 'Payments',
      items: [
        { label: 'Manage Payments', handler: onManagePayments },
        { label: 'Manage Credit Card', handler: onManageCreditCard },
      ],
    },
    {
      category: 'Marketing',
      items: [
        { label: 'Manage Advertisement', handler: onManageAdvertisement },
        { label: 'Promotion', handler: onPromotion },
        { label: 'Report', handler: onReport },
      ],
    },
    {
      category: 'PhotoShoot',
      items: [
        { label: 'Manage Photoshoot', handler: onPhotoshoot },
      ],
    },
    {
      category: 'Users',
      items: [
        { label: 'Manage Sub Account', handler: onManageSubAccount },
      ],
    },
    {
      category: 'Others',
      items: [
        { label: 'Selling Fees Calculator', handler: onSellingFees },
        { label: 'Manage seller membership', handler: onMembership },
        { label: 'Scoring', handler: onSettings },
        { label: 'Manage Request for Quote', handler: onManageRequestForQuote },
      ],
    },
  ];

  /* ── Collapsed state: slim icon strip ── */
  if (!isOpen) {
    return (
      <div className="flex-shrink-0 w-8 bg-white border-r border-gray-200 flex flex-col items-center py-3 gap-3 shadow-sm sticky top-[112px] self-start h-[calc(100vh-112px)] overflow-y-auto">
        {/* Re-open button */}
        <button
          onClick={() => onToggle && onToggle()}
          className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
          title="Expand sidebar"
        >
          <PanelLeftOpen size={16} />
        </button>
      </div>
    );
  }

  /* ── Open state: full sidebar ── */
  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col sticky top-[112px] self-start h-[calc(100vh-112px)] shadow-sm flex-shrink-0">
      <div className="flex-1 overflow-y-auto">
        <div className="py-2">
          {/* Header row with MANAGE label + collapse button */}
          <div className="flex items-center justify-between px-4 py-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Manage</p>
            <button
              onClick={() => onToggle && onToggle()}
              className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              title="Collapse sidebar"
            >
              <PanelLeftClose size={16} />
            </button>
          </div>

          {menuGroups.map((group) => {
            const isGroupOpen = !!openGroups[group.category];
            return (
              <div key={group.category} className="border-b border-gray-100 last:border-b-0">
                {/* Group header */}
                <button
                  onClick={() => toggleGroup(group.category)}
                  className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-800">{group.category}</span>
                  {isGroupOpen ? (
                    <ChevronDown size={14} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={14} className="text-gray-500" />
                  )}
                </button>

                {/* Sub-items */}
                {isGroupOpen && (
                  <div className="bg-gray-50">
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => item.handler && item.handler()}
                        className="block w-full text-left px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
