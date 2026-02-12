import { Calculator } from 'lucide-react';
import { useState } from 'react';

export default function SellingFeesCalculator() {
  const [purchasePrice, setPurchasePrice] = useState('100');
  const [sellingPrice, setSellingPrice] = useState('1000');
  const [selectedPlan, setSelectedPlan] = useState('welcome');
  const [calculated, setCalculated] = useState(false);

  const plans = [
    { id: 'welcome', name: 'Welcome Plan', fee: 1 },
    { id: 'basic', name: 'Basic Plan', fee: 5 },
    { id: 'premium', name: 'Premium Plan', fee: 10 },
    { id: 'enterprise', name: 'Enterprise Plan', fee: 20 }
  ];

  const calculateFees = () => {
    setCalculated(true);
  };

  const getPlanFee = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    return plan ? plan.fee : 0;
  };

  const getTransactionFees = () => {
    return parseFloat(sellingPrice) * 0.01;
  };

  const getSiteCommission = () => {
    return parseFloat(sellingPrice) * 0.01;
  };

  const getProfit = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const selling = parseFloat(sellingPrice) || 0;
    const planFee = getPlanFee();
    const transactionFee = getTransactionFees();
    const commission = getSiteCommission();

    return selling - purchase - planFee - transactionFee - commission;
  };

  const getPlanName = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    return plan ? plan.name : '';
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <Calculator size={24} className="text-gray-700" />
          <h1 className="text-2xl font-semibold text-gray-900">Selling Fees Calculator</h1>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="max-w-2xl">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Purchase Price
            </label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Selling Price
            </label>
            <input
              type="number"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Plan
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand bg-white"
            >
              {plans.map(plan => (
                <option key={plan.id} value={plan.id}>{plan.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateFees}
            className="px-6 py-2.5 bg-gray-600 text-white rounded-xl hover:bg-gray-700 font-medium"
          >
            Calculate
          </button>
        </div>
      </div>

      {calculated && (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Selling Fees Calculation</h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Product Purchase Price</span>
              <span className="text-sm font-medium text-gray-900">₹{parseFloat(purchasePrice).toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Product Selling Price</span>
              <span className="text-sm font-medium text-gray-900">₹{parseFloat(sellingPrice).toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Selected Plan</span>
              <span className="text-sm font-medium text-gray-900">{getPlanName()}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Plan Fee (One Time)</span>
              <span className="text-sm font-medium text-gray-900">₹{getPlanFee().toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Transaction Fees (1.00%)</span>
              <span className="text-sm font-medium text-gray-900">₹{getTransactionFees().toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Site Commission (1.00%)</span>
              <span className="text-sm font-medium text-gray-900">₹{getSiteCommission().toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-3 mt-4">
              <span className="text-base font-semibold text-green-600">Profit</span>
              <span className="text-base font-bold text-green-600">₹{getProfit().toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
