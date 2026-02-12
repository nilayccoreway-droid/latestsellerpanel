import { useEffect, useState } from 'react';
import { mockProducts, mockOrders, mockSalesData } from './data/mockData';
import Header from './components/Header';
import TabNavigation, { TabType } from './components/TabNavigation';
import SalesAnalytics from './components/SalesAnalytics';
import ActivitiesPanel from './components/ActivitiesPanel';
import WidgetCards from './components/WidgetCards';
import ProductActionBar from './components/ProductActionBar';
import OrderWidget from './components/OrderWidget';
import ProductManagementPage from './components/ProductManagementPage';
import Sidebar from './components/Sidebar';
import OrdersPage from './components/OrdersPage';
import PaymentsPage from './components/PaymentsPage';
import ReportsPage from './components/ReportsPage';
import PhotoshootPage from './components/PhotoshootPage';
import TodayPickupTable from './components/TodayPickupTable';
import Orders from './components/Orders';
import Transactions from './components/Transactions';
import CreditCardManagement from './components/CreditCardManagement';
import Reviews from './components/Reviews';
import Support from './components/Support';
import Help from './components/Help';
import Membership from './components/Membership';
import Promotion from './components/Promotion';
import ProfileSettings from './components/ProfileSettings';
import ManageReturnPage from './components/ManageReturnPage';
import ReturnDetailsPage from './components/ReturnDetailsPage';
import BulkPricePage from './components/BulkPricePage';
import BulkQtyPage from './components/BulkQtyPage';
import SellingFeesCalculator from './components/SellingFeesCalculator';
import ManageSubAccountPage from './components/ManageSubAccountPage';
import SubAccountEditPage, { SubAccountFormData } from './components/SubAccountEditPage';
import ProductImportPage from './components/ProductImportPage';
import ProductExportPage from './components/ProductExportPage';
import ManageRequestForQuotePage from './components/ManageRequestForQuotePage';
import RequestForQuoteDetailsPage from './components/RequestForQuoteDetailsPage';
import ManageAdvertisementPage from './components/ManageAdvertisementPage';
import AdvertisementEditPage from './components/AdvertisementEditPage';

type MenuItem = 'dashboard' | 'orders' | 'products' | 'payments' | 'reports';

interface DashboardData {
  ordersCount: number;
  productsCount: number;
  transactionsCount: number;
  lifetimeSales: number;
  salesData: Array<{ date: string; amount: number }>;
  orders: Array<{
    id: string;
    order_number: string;
    order_date: string;
    customer_name: string;
    total_amount: number;
    status: string;
  }>;
  activities: Array<{
    id: string;
    title: string;
    description: string;
    type: 'alert' | 'notification' | 'update';
    is_read: boolean;
    created_at: string;
  }>;
  returnsCount: number;
  shipmentsCount: number;
  averageRating: number;
  reviewsCount: number;
}

function App() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
  const [activeTab, setActiveTab] = useState<TabType>('my-business');
  const [showOrders, setShowOrders] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showMembership, setShowMembership] = useState(false);
  const [showPromotion, setShowPromotion] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showManageReturns, setShowManageReturns] = useState(false);
  const [selectedReturnId, setSelectedReturnId] = useState<string | null>(null);
  const [showBulkPrice, setShowBulkPrice] = useState(false);
  const [showBulkQty, setShowBulkQty] = useState(false);
  const [showSellingFees, setShowSellingFees] = useState(false);
  const [showManageSubAccount, setShowManageSubAccount] = useState(false);
  const [editingSubAccount, setEditingSubAccount] = useState<any | null>(null);
  const [showProductImport, setShowProductImport] = useState(false);
  const [showProductExport, setShowProductExport] = useState(false);
  const [showManageRequestForQuote, setShowManageRequestForQuote] = useState(false);
  const [selectedQuoteId, setSelectedQuoteId] = useState<string | null>(null);
  const [showManageAdvertisement, setShowManageAdvertisement] = useState(false);
  const [editingAdBlockId, setEditingAdBlockId] = useState<number | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  function fetchDashboardData() {
    setLoading(true);

    setTimeout(() => {
      const orders = mockOrders;
      const ordersCount = orders.length;
      const productsCount = mockProducts.length;
      const transactionsCount = 124;
      const lifetimeSales = mockOrders.reduce((sum, order) => sum + order.amount, 0);

      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return date.toISOString().split('T')[0];
      });

      const salesData = last7Days.map((date, index) => {
        const baseAmount = Math.random() * 5000000 + 3000000;
        const amount = Math.round(baseAmount * (1 + index * 0.1));
        return {
          date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          amount,
        };
      });

      const mockActivities = [
        {
          id: '1',
          title: 'New Order Received',
          description: 'Order #ORD-2024-001 has been placed',
          type: 'notification' as const,
          is_read: false,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Product Stock Alert',
          description: 'Several products are running low on stock',
          type: 'alert' as const,
          is_read: false,
          created_at: new Date(Date.now() - 3600000).toISOString(),
        }
      ];

      setDashboardData({
        ordersCount,
        productsCount,
        transactionsCount,
        lifetimeSales,
        salesData,
        orders: orders.map(order => ({
          id: order.id,
          order_number: order.order_id,
          order_date: order.created_at,
          customer_name: order.customer_name,
          total_amount: order.amount,
          status: order.status,
        })),
        activities: mockActivities,
        returnsCount: 3,
        shipmentsCount: 8,
        averageRating: 4.7,
        reviewsCount: 42,
      });

      setLoading(false);
    }, 800);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Failed to load dashboard data</p>
      </div>
    );
  }

  const tabs = [
    { id: 'my-business' as TabType, title: 'My Business', subtitle: "Today's Global Sales", value: '¥0' },
    { id: 'products' as TabType, title: 'Products', subtitle: 'Active', value: '2/2', hasCheckmark: true },
    { id: 'orders' as TabType, title: 'Orders', subtitle: 'Open Orders', value: '--' },
    { id: 'payments' as TabType, title: 'Payments', subtitle: 'Proceeds (06/02-Today)', value: '¥0' },
    { id: 'report' as TabType, title: 'Report', subtitle: 'Monthly Report', value: '--' },
    { id: 'photoshoot' as TabType, title: 'Photoshoot', subtitle: 'Scheduled', value: '--' },
  ];

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
        onManageProducts={() => setActiveTab('products')}
        onManageReturn={() => {
          setShowManageReturns(true);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onSellingFees={() => {
          setShowSellingFees(true);
          setShowManageReturns(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onManageSubAccount={() => {
          setShowManageSubAccount(true);
          setShowManageReturns(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onProductImport={() => {
          setShowProductImport(true);
          setShowManageReturns(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onProductExport={() => {
          setShowProductExport(true);
          setShowManageReturns(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onManageRequestForQuote={() => {
          setShowManageRequestForQuote(true);
          setShowManageReturns(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onManageAdvertisement={() => {
          setShowManageAdvertisement(true);
          setShowManageRequestForQuote(false);
          setShowManageReturns(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setSelectedQuoteId(null);
          setEditingAdBlockId(null);
        }}
        onBulkPrice={() => {
          setShowBulkPrice(true);
          setShowBulkQty(false);
          setShowManageAdvertisement(false);
          setShowManageRequestForQuote(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setSelectedQuoteId(null);
          setEditingAdBlockId(null);
        }}
        onBulkQty={() => {
          setShowBulkQty(true);
          setShowBulkPrice(false);
          setShowManageAdvertisement(false);
          setShowManageRequestForQuote(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setSelectedQuoteId(null);
          setEditingAdBlockId(null);
        }}
        onManageOrders={() => {
          setShowOrders(true);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onManagePayments={() => {
          setShowOrders(false);
          setShowTransactions(true);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onManageCreditCard={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(true);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onFeedbacks={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(true);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onSupport={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(true);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onHelp={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(true);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onMembership={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(true);
          setShowPromotion(false);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onPromotion={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(true);
          setShowSettings(false);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        onSettings={() => {
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(true);
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
      />

      <TabNavigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          // Reset all legacy page states
          setShowOrders(false);
          setShowTransactions(false);
          setShowCreditCard(false);
          setShowReviews(false);
          setShowSupport(false);
          setShowHelp(false);
          setShowMembership(false);
          setShowPromotion(false);
          setShowSettings(false);
          // Reset all new page states
          setShowBulkPrice(false);
          setShowBulkQty(false);
          setShowManageReturns(false);
          setSelectedReturnId(null);
          setShowSellingFees(false);
          setShowManageSubAccount(false);
          setEditingSubAccount(null);
          setShowProductImport(false);
          setShowProductExport(false);
          setShowManageRequestForQuote(false);
          setSelectedQuoteId(null);
          setShowManageAdvertisement(false);
          setEditingAdBlockId(null);
        }}
        tabs={tabs}
      />

      <main className="flex h-[calc(100vh-120px)]">
        <Sidebar />

        {showManageAdvertisement ? (
          editingAdBlockId !== null ? (
            <AdvertisementEditPage
              blockId={editingAdBlockId === -1 ? undefined : editingAdBlockId}
              onBack={() => setEditingAdBlockId(null)}
            />
          ) : (
            <ManageAdvertisementPage
              onBack={() => setShowManageAdvertisement(false)}
              onEdit={(id) => setEditingAdBlockId(id)}
              onAddNew={() => setEditingAdBlockId(-1)}
            />
          )
        ) : showProductImport ? (
          <ProductImportPage />
        ) : showProductExport ? (
          <ProductExportPage />
        ) : showManageRequestForQuote ? (
          selectedQuoteId ? (
            <RequestForQuoteDetailsPage
              quoteId={selectedQuoteId}
              onBack={() => setSelectedQuoteId(null)}
            />
          ) : (
            <ManageRequestForQuotePage
              onViewQuote={(quoteId) => setSelectedQuoteId(quoteId)}
            />
          )
        ) : showSellingFees ? (
          <SellingFeesCalculator />
        ) : showManageSubAccount ? (
          editingSubAccount ? (
            <SubAccountEditPage
              initialData={editingSubAccount}
              onBack={() => setEditingSubAccount(null)}
              onSave={(data: SubAccountFormData) => {
                console.log('Saving sub account:', data);
                setEditingSubAccount(null);
              }}
            />
          ) : (
            <ManageSubAccountPage
              onEdit={(account) => setEditingSubAccount(account)}
              onAddNew={() => setEditingSubAccount({
                firstName: '',
                lastName: '',
                email: '',
                permissions: [],
                active: 'Yes'
              })}
            />
          )
        ) : showBulkPrice ? (
          <BulkPricePage onBack={() => {
            setShowBulkPrice(false);
          }} />
        ) : showBulkQty ? (
          <BulkQtyPage onBack={() => {
            setShowBulkQty(false);
          }} />
        ) : showManageReturns && selectedReturnId ? (
          <ReturnDetailsPage
            returnId={selectedReturnId}
            onBack={() => setSelectedReturnId(null)}
          />
        ) : showManageReturns ? (
          <ManageReturnPage
            onViewReturn={(returnId) => setSelectedReturnId(returnId)}
            onClose={() => {
              setShowManageReturns(false);
              setSelectedReturnId(null);
            }}
          />
        ) : showOrders ? (
          <Orders />
        ) : showTransactions ? (
          <Transactions onBack={() => {
            setShowTransactions(false);
            setActiveTab('payments');
          }} />
        ) : showCreditCard ? (
          <CreditCardManagement onBack={() => {
            setShowCreditCard(false);
            setActiveTab('payments');
          }} />
        ) : showReviews ? (
          <Reviews />
        ) : showSupport ? (
          <Support />
        ) : showHelp ? (
          <Help />
        ) : showMembership ? (
          <Membership />
        ) : showPromotion ? (
          <Promotion />
        ) : showSettings ? (
          <ProfileSettings />
        ) : activeTab === 'products' ? (
          <div className="flex-1 overflow-auto">
            <ProductManagementPage onBack={() => setActiveTab('my-business')} />
          </div>
        ) : activeTab === 'orders' ? (
          <OrdersPage />
        ) : activeTab === 'payments' ? (
          <PaymentsPage onManagePayments={() => {
            setShowTransactions(true);
          }} />
        ) : activeTab === 'report' ? (
          <ReportsPage />
        ) : activeTab === 'photoshoot' ? (
          <PhotoshootPage />
        ) : activeTab === 'my-business' ? (
          <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
              <ProductActionBar onManageProducts={() => setActiveTab('products')} />

              <div className="mt-4">
                <SalesAnalytics salesData={dashboardData.salesData} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mb-4">
                <div className="lg:col-span-2">
                  <OrderWidget
                    sellerFulfilled={{
                      pending: 12,
                      unshipped: 8,
                      canceled: 2,
                      shipped: 45
                    }}
                  />
                </div>
                <div className="lg:col-span-1">
                  <ActivitiesPanel activities={dashboardData.activities} />
                </div>
              </div>

              <WidgetCards
                returnsCount={dashboardData.returnsCount}
                shipmentsCount={dashboardData.shipmentsCount}
                averageRating={dashboardData.averageRating}
                reviewsCount={dashboardData.reviewsCount}
              />

              <TodayPickupTable
                orders={[
                  {
                    id: '1',
                    orderId: 'ORD-2024-145',
                    productName: 'Oval Blue Sapphire Ring',
                    productImage: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=100',
                    quantity: 2,
                    status: 'ready'
                  },
                  {
                    id: '2',
                    orderId: 'ORD-2024-146',
                    productName: 'Princess Cut Diamond Ring',
                    productImage: 'https://images.pexels.com/photos/1131305/pexels-photo-1131305.jpeg?auto=compress&cs=tinysrgb&w=100',
                    quantity: 1,
                    status: 'ready'
                  },
                  {
                    id: '3',
                    orderId: 'ORD-2024-147',
                    productName: 'Emerald Engagement Ring',
                    quantity: 3,
                    status: 'processing'
                  },
                  {
                    id: '4',
                    orderId: 'ORD-2024-148',
                    productName: 'Ruby Solitaire Ring',
                    productImage: 'https://images.pexels.com/photos/1454177/pexels-photo-1454177.jpeg?auto=compress&cs=tinysrgb&w=100',
                    quantity: 1,
                    status: 'ready'
                  },
                  {
                    id: '5',
                    orderId: 'ORD-2024-149',
                    productName: 'Vintage Gold Band',
                    quantity: 2,
                    status: 'pending'
                  }
                ]}
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
              <div className="bg-white border border-gray-200 rounded p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 capitalize">
                  {tabs.find(t => t.id === activeTab)?.title}
                </h2>
                <p className="text-gray-600">This section is under development</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
