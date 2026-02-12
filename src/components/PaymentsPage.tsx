import { ChevronDown, Info, Search, FileText, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PaymentData {
  standardOrders: number;
  deferredTransactions: number;
  allAccounts: number;
  totalBalance: number;
  fundsAvailable: number;
  beginningBalance: number;
  amountCarriedForward: number;
  paidToAmazon: number;
  sales: number;
  expenses: number;
  accountLevelReserve: number;
  recentPayouts: Array<{
    date: string;
    amount: number;
  }>;
}

function generateRandomPaymentData(): PaymentData {
  const sales = Math.floor(Math.random() * 500000) + 100000;
  const expenses = Math.floor(Math.random() * 50000) + 10000;
  const paidToAmazon = Math.floor(Math.random() * 30000) + 5000;
  const amountCarriedForward = Math.floor(Math.random() * 20000) + 2000;
  const beginningBalance = Math.floor(Math.random() * 100000) + 20000;

  const netProceeds = beginningBalance - amountCarriedForward - paidToAmazon + sales - expenses;
  const fundsAvailable = Math.floor(netProceeds * 0.8);
  const totalBalance = netProceeds;

  const recentPayouts = Array.from({ length: 3 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i * 7 + 3));
    return {
      date: date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
      amount: Math.floor(Math.random() * 80000) + 20000
    };
  });

  return {
    standardOrders: Math.floor(netProceeds * 0.7),
    deferredTransactions: Math.floor(netProceeds * 0.2),
    allAccounts: netProceeds,
    totalBalance,
    fundsAvailable,
    beginningBalance,
    amountCarriedForward,
    paidToAmazon,
    sales,
    expenses,
    accountLevelReserve: Math.floor(Math.random() * 10000),
    recentPayouts
  };
}

interface PaymentsPageProps {
  onManagePayments?: () => void;
}

export default function PaymentsPage({ onManagePayments }: PaymentsPageProps) {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    setPaymentData(generateRandomPaymentData());
  }, []);

  if (!paymentData) {
    return <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>;
  }

  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString()}`;
  };

  const currentDate = new Date();
  const settlementStartDate = new Date(currentDate);
  settlementStartDate.setDate(1);
  const settlementPeriod = `${settlementStartDate.getMonth() + 1}/${settlementStartDate.getDate()}/${settlementStartDate.getFullYear()} - Present (Open)`;

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
      <div className="bg-white border-b border-gray-200 shadow-sm px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Payments Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Manage your payments and view transaction history</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onManagePayments}
              className="px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
            >
              Manage payments
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
              <FileText size={16} />
              <span>Reports</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-xl border border-teal-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Standard Orders</span>
                  <span className="text-lg font-bold text-gray-900">{formatCurrency(paymentData.standardOrders)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Deferred Transactions</span>
                  <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                </div>
                <span className="text-base font-semibold text-gray-900">{formatCurrency(paymentData.deferredTransactions)}</span>
              </div>
              <div className="flex items-center justify-between px-2 pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">All Accounts</span>
                <span className="text-base font-bold text-gray-900">{formatCurrency(paymentData.allAccounts)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-brand" />
                <span className="text-sm font-semibold text-gray-900">Total Balance</span>
                <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-6">{formatCurrency(paymentData.totalBalance)}</div>
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Standard Orders</span>
                <span className="font-semibold text-gray-900">{formatCurrency(paymentData.standardOrders)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Deferred Transactions</span>
                <span className="font-semibold text-gray-900">{formatCurrency(paymentData.deferredTransactions)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">Funds Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent">
                    <option>Now</option>
                    <option>Tomorrow</option>
                    <option>Next Week</option>
                  </select>
                  <button className="text-brand hover:text-brand-dark">
                    <Info size={16} />
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200">
                  <span className="text-base font-bold text-gray-900">{formatCurrency(paymentData.fundsAvailable)}</span>
                  <button className="px-4 py-2 text-sm font-medium text-brand bg-white border border-brand/30 rounded-xl hover:bg-brand-light/10 transition-all">
                    Request Payment
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(paymentData.fundsAvailable)}</span>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all">
                    Request Payment
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-gray-900">Recent Payouts</span>
                <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
              </div>
              {paymentData.recentPayouts.length > 0 ? (
                <div className="space-y-3">
                  {paymentData.recentPayouts.map((payout, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-brand transition-all">
                      <span className="text-sm text-gray-600">{payout.date}</span>
                      <span className="text-sm font-bold text-brand">{formatCurrency(payout.amount)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600">No recent fund transfers.</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Account Type</label>
                <select className="px-4 py-2.5 text-sm border border-gray-300 rounded-xl bg-white min-w-[200px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent">
                  <option>Standard Orders</option>
                  <option>Deferred Transactions</option>
                  <option>All Accounts</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Settlement Period</label>
                <select className="px-4 py-2.5 text-sm border border-gray-300 rounded-xl bg-white min-w-[280px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent">
                  <option>{settlementPeriod}</option>
                </select>
              </div>
              <div className="ml-auto">
                <label className="block text-xs font-medium text-gray-700 mb-2">Find a transaction</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter order number"
                      className="px-4 py-2.5 text-sm border border-gray-300 rounded-xl min-w-[220px] focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    />
                    <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  <button className="px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-sm hover:shadow-md">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={20} className="text-brand" />
                  <h3 className="text-lg font-bold text-gray-900">Net Proceeds</h3>
                  <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  {settlementStartDate.getMonth() + 1}/{settlementStartDate.getDate()}/{settlementStartDate.getFullYear()} - Present
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-6">{formatCurrency(paymentData.allAccounts)}</div>
              </div>

              <div className="space-y-1 bg-gradient-to-br from-teal-50 to-teal-100 px-6 py-5 rounded-xl border border-teal-200 shadow-sm">
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium text-gray-900">Beginning Balance</span>
                  <span className="text-base font-semibold text-gray-900">{formatCurrency(paymentData.beginningBalance)}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-teal-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Amount Carried Forward</span>
                    <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                  </div>
                  <span className="text-base font-semibold text-red-600">-{formatCurrency(paymentData.amountCarriedForward)}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-teal-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Paid to Zuuro</span>
                    <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                  </div>
                  <span className="text-base font-semibold text-brand">{formatCurrency(paymentData.paidToAmazon)}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Sales</span>
                    <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                  </div>
                  <span className="text-base font-semibold text-green-600">{formatCurrency(paymentData.sales)}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-teal-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Expenses</span>
                    <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                  </div>
                  <span className="text-base font-semibold text-orange-600">-{formatCurrency(paymentData.expenses)}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">Account Level Reserve</span>
                    <Info size={14} className="text-gray-400 hover:text-gray-600 cursor-help" />
                  </div>
                  <span className="text-base font-semibold text-gray-900">{formatCurrency(paymentData.accountLevelReserve)}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button className="flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark transition-colors">
                  <FileText size={16} />
                  Print Statement
                </button>
                <button className="px-6 py-2.5 bg-brand text-white text-sm font-medium rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-sm hover:shadow-md">
                  View transactions for this period
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
