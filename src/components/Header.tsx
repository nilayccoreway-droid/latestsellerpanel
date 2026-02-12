import { useState } from 'react';
import { ChevronDown, Mail, HelpCircle, User } from 'lucide-react';

type MenuItem = 'dashboard' | 'orders' | 'products' | 'payments' | 'reports';

interface HeaderProps {
  activeMenu: MenuItem;
  onMenuChange: (menu: MenuItem) => void;
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
  // Legacy handlers
  onManageOrders?: () => void;
  onManagePayments?: () => void;
  onManageCreditCard?: () => void;
  onFeedbacks?: () => void;
  onSupport?: () => void;
  onHelp?: () => void;
  onMembership?: () => void;
  onPromotion?: () => void;
  onSettings?: () => void;
}

export default function Header({ activeMenu, onMenuChange, onManageProducts, onManageReturn, onManageSubAccount, onSellingFees, onProductImport, onProductExport, onManageRequestForQuote, onManageAdvertisement, onBulkPrice, onBulkQty, onManageOrders, onManagePayments, onManageCreditCard, onFeedbacks, onSupport, onHelp, onMembership, onPromotion, onSettings }: HeaderProps) {
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const menuItems: { id: MenuItem; label: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'orders', label: 'Orders' },
    { id: 'products', label: 'Products' },
    { id: 'payments', label: 'Payments' },
    { id: 'reports', label: 'Reports' }
  ];

  const manageMenuItems = [
    {
      category: 'Products',
      items: [
        'Manage products',
        'Bulk Price',
        'Bulk Qty',
        'Import',
        'Export',
        'Feedbacks'
      ]
    },
    {
      category: 'Orders',
      items: [
        'Manage Order',
        'Manage Return'
      ]
    },
    {
      category: 'Payments',
      items: [
        'Manage Payments',
        'Manage Credit Card'
      ]
    },
    {
      category: 'Marketing',
      items: [
        'Manage Advertisement',
        'Promotion',
        'Report'
      ]
    },
    {
      category: 'PhotoShoot',
      items: [
        'Manage Photoshoot'
      ]
    },
    {
      category: 'Users',
      items: [
        'Manage Sub Account'
      ]
    },
    {
      category: 'Others',
      items: [
        'Selling Fees Calculator',
        'Manage seller membership',
        'Scoring',
        'Manage Request for Quote'
      ]
    }
  ];

  return (
    <header className="bg-[#232f3e] text-white border-b border-gray-700">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold">Zuuro</div>
            <div className="text-sm text-gray-300">N Collections</div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative">
              <button
                onClick={() => {
                  setIsManageOpen(!isManageOpen);
                  setIsCreateOpen(false);
                }}
                className="flex items-center gap-1 text-sm hover:text-gray-300"
              >
                <div className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded">
                  <span className="text-xs">≡</span>
                </div>
                Manage
                <ChevronDown size={14} />
              </button>

              {isManageOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsManageOpen(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 bg-white text-gray-900 rounded shadow-lg z-20 w-64 max-h-[80vh] overflow-y-auto">
                    {manageMenuItems.map((section, idx) => (
                      <div key={idx} className="border-b border-gray-200 last:border-b-0">
                        <div className="px-4 py-2 bg-gray-50 font-semibold text-sm">
                          {section.category}
                        </div>
                        {section.items.map((item, itemIdx) => (
                          <button
                            key={itemIdx}
                            onClick={() => {
                              if (item === 'Manage products' && onManageProducts) {
                                onManageProducts();
                              } else if (item === 'Bulk Price' && onBulkPrice) {
                                onBulkPrice();
                              } else if (item === 'Bulk Qty' && onBulkQty) {
                                onBulkQty();
                              } else if (item === 'Import' && onProductImport) {
                                onProductImport();
                              } else if (item === 'Export' && onProductExport) {
                                onProductExport();
                              } else if (item === 'Feedbacks' && onFeedbacks) {
                                onFeedbacks();
                              } else if (item === 'Manage Order' && onManageOrders) {
                                onManageOrders();
                              } else if (item === 'Manage Return' && onManageReturn) {
                                onManageReturn();
                              } else if (item === 'Manage Payments' && onManagePayments) {
                                onManagePayments();
                              } else if (item === 'Manage Credit Card' && onManageCreditCard) {
                                onManageCreditCard();
                              } else if (item === 'Manage Advertisement' && onManageAdvertisement) {
                                onManageAdvertisement();
                              } else if (item === 'Promotion' && onPromotion) {
                                onPromotion();
                              } else if (item === 'Report' && onPromotion) {
                                // Report uses same handler as Promotion for now
                                onPromotion();
                              } else if (item === 'Manage Photoshoot' && onPromotion) {
                                // Photoshoot uses same handler as Promotion for now
                                onPromotion();
                              } else if (item === 'Manage Sub Account' && onManageSubAccount) {
                                onManageSubAccount();
                              } else if (item === 'Selling Fees Calculator' && onSellingFees) {
                                onSellingFees();
                              } else if (item === 'Manage seller membership' && onMembership) {
                                onMembership();
                              } else if (item === 'Scoring' && onSettings) {
                                // Scoring uses Settings handler for now
                                onSettings();
                              } else if (item === 'Manage Request for Quote' && onManageRequestForQuote) {
                                onManageRequestForQuote();
                              }
                              setIsManageOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                            {item}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setIsCreateOpen(!isCreateOpen);
                  setIsManageOpen(false);
                }}
                className="flex items-center gap-1 text-sm hover:text-gray-300"
              >
                + Create
                <ChevronDown size={14} />
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

        <div className="flex items-center h-10 border-t border-gray-700 hidden" >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'products' && onManageProducts) {
                  onManageProducts();
                } else {
                  onMenuChange(item.id);
                }
              }}
              className={`px-4 h-full text-sm hover:bg-gray-700 transition-colors ${activeMenu === item.id ? 'bg-gray-700 font-medium' : ''
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
