import React from 'react';
import { Check } from 'lucide-react';

const Membership: React.FC = () => {
  const membershipDetails = {
    groupMembership: 'Platinum',
    allowedProducts: 500,
    paidAmount: '₹40000',
    assignedBy: 'Admin',
    paymentStatus: 'Paid'
  };

  const allowedFunctionalities = [
    'Marketplace Dashboard',
    'Seller Profile',
    'Create Attribute',
    'New Products',
    'My Products List',
    'My Review List',
    'My Order History',
    'Marketplace Promotion Campaign Grid',
    'Marketplace Promotion Campaign Edit',
    'Marketplace Promotion Campaign Join',
    'Marketplace Promotion Campaign Index',
    'Advance Report',
    'All Requested Quotes',
    'All Quoted Products',
    'Allowed Category List',
    'Manage Accounts'
  ];

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Manage Seller Membership</h2>
            </div>
          </div>

          {/* Membership Details */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Seller Membership Details</h3>

            <div className="space-y-6">
              {/* Basic Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Group Membership :
                  </label>
                  <p className="text-gray-900">{membershipDetails.groupMembership}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No of allowed products :
                  </label>
                  <p className="text-gray-900">{membershipDetails.allowedProducts}</p>
                </div>
              </div>

              {/* Allowed Functionalities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Allowed Functionalities :
                </label>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {allowedFunctionalities.map((functionality, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{functionality}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paid Amount :
                  </label>
                  <p className="text-gray-900">{membershipDetails.paidAmount}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assigned By :
                  </label>
                  <p className="text-gray-900">{membershipDetails.assignedBy}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Status :
                  </label>
                  <p className="text-gray-900">{membershipDetails.paymentStatus}</p>
                </div>
              </div>

              {/* Note */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> To switch to another membership, you have to cancel this membership.
                </p>
              </div>

              {/* Cancel Button */}
              <div className="flex justify-start">
                <button className="px-6 py-2 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors">
                  Cancel Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;