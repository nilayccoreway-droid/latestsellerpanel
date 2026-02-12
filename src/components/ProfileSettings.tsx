import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const ProfileSettings: React.FC = () => {
  const [profileData, setProfileData] = useState({
    sellerId: 'Z-JP-37576',
    returnPolicy: '',
    shippingPolicy: '',
    privacyPolicy: '',
    businessName: 'Ns-Collection',
    businessRegistrationNumber: '0000',
    sellerNameInJapanese: 'エヌエスコレクション',
    taxIdentificationNumber: '0000',
    registeredBusinessAddress: '25-6 Sasazuka',
    city: 'Kofu',
    country: 'Japan',
    state: 'Yamanashi',
    pincode: '4000367',
    registeredShippingAddress: '25-6 Sasazuka',
    shippingAddressCity: 'Kofu',
    shippingAddressCountry: 'Japan',
    shippingAddressState: 'Yamanashi',
    shippingAddressPincode: '4000367',
    mailingAddress: 'hirohayashi@selectbest.jp',
    phoneNumber: '0522224870',
    emailAddress: 'hirohayashi@selectbest.jp',
    bankName: 'mizuho',
    bankBranch: 'omachi',
    accountNumber: '0',
    swiftCode: '0',
    twitterId: '',
    facebookId: '',
    instagramId: '',
    youtubeId: '',
    vimeoId: '',
    pinterestId: ''
  });

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Hirohayashi Miho',
      contact: '0522224870',
      email: 'hirohayashi@selectbest.jp'
    }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const addContact = () => {
    setContacts(prev => [...prev, {
      id: Date.now(),
      name: '',
      contact: '',
      email: ''
    }]);
  };

  const removeContact = (id: number) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const updateContact = (id: number, field: string, value: string) => {
    setContacts(prev => prev.map(contact =>
      contact.id === id ? { ...contact, [field]: value } : contact
    ));
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Edit Profile Information</h2>
            <button className="px-6 py-2 bg-brand text-white rounded-xl hover:bg-brand-dark">
              Save Profile
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 space-y-8">
              {/* Seller ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seller ID</label>
                <input
                  type="text"
                  value={profileData.sellerId}
                  readOnly
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50 text-gray-600"
                />
              </div>

              {/* Policies */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Policy</label>
                  <div className="border border-gray-300 rounded-xl">
                    <div className="border-b border-gray-300 p-2 bg-gray-50">
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-gray-200 rounded font-bold">B</button>
                        <button className="p-1 hover:bg-gray-200 rounded italic">I</button>
                        <button className="p-1 hover:bg-gray-200 rounded underline">U</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">•</button>
                        <button className="p-1 hover:bg-gray-200 rounded">1.</button>
                        <button className="p-1 hover:bg-gray-200 rounded">🔗</button>
                        <button className="p-1 hover:bg-gray-200 rounded">📷</button>
                        <button className="p-1 hover:bg-gray-200 rounded">📊</button>
                      </div>
                    </div>
                    <textarea
                      rows={4}
                      value={profileData.returnPolicy}
                      onChange={(e) => handleInputChange('returnPolicy', e.target.value)}
                      className="w-full p-4 resize-none focus:outline-none"
                      placeholder="Enter return policy..."
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-1">POWERED BY TINY</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Policy</label>
                  <div className="border border-gray-300 rounded-xl">
                    <div className="border-b border-gray-300 p-2 bg-gray-50">
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-gray-200 rounded font-bold">B</button>
                        <button className="p-1 hover:bg-gray-200 rounded italic">I</button>
                        <button className="p-1 hover:bg-gray-200 rounded underline">U</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">•</button>
                        <button className="p-1 hover:bg-gray-200 rounded">1.</button>
                        <button className="p-1 hover:bg-gray-200 rounded">🔗</button>
                        <button className="p-1 hover:bg-gray-200 rounded">📷</button>
                        <button className="p-1 hover:bg-gray-200 rounded">📊</button>
                      </div>
                    </div>
                    <textarea
                      rows={4}
                      value={profileData.shippingPolicy}
                      onChange={(e) => handleInputChange('shippingPolicy', e.target.value)}
                      className="w-full p-4 resize-none focus:outline-none"
                      placeholder="Enter shipping policy..."
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-1">POWERED BY TINY</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Privacy Policy</label>
                  <div className="border border-gray-300 rounded-xl">
                    <div className="border-b border-gray-300 p-2 bg-gray-50">
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-gray-200 rounded font-bold">B</button>
                        <button className="p-1 hover:bg-gray-200 rounded italic">I</button>
                        <button className="p-1 hover:bg-gray-200 rounded underline">U</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">≡</button>
                        <button className="p-1 hover:bg-gray-200 rounded">•</button>
                        <button className="p-1 hover:bg-gray-200 rounded">1.</button>
                        <button className="p-1 hover:bg-gray-200 rounded">🔗</button>
                        <button className="p-1 hover:bg-gray-200 rounded">📷</button>
                        <button className="p-1 hover:bg-gray-200 rounded">📊</button>
                      </div>
                    </div>
                    <textarea
                      rows={4}
                      value={profileData.privacyPolicy}
                      onChange={(e) => handleInputChange('privacyPolicy', e.target.value)}
                      className="w-full p-4 resize-none focus:outline-none"
                      placeholder="Enter privacy policy..."
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 mt-1">POWERED BY TINY</div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input
                      type="text"
                      value={profileData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Registration Number</label>
                    <input
                      type="text"
                      value={profileData.businessRegistrationNumber}
                      onChange={(e) => handleInputChange('businessRegistrationNumber', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Seller Name in Japanese</label>
                    <input
                      type="text"
                      value={profileData.sellerNameInJapanese}
                      onChange={(e) => handleInputChange('sellerNameInJapanese', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax Identification number (TIN)</label>
                    <input
                      type="text"
                      value={profileData.taxIdentificationNumber}
                      onChange={(e) => handleInputChange('taxIdentificationNumber', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Registered Business Address</label>
                    <textarea
                      rows={3}
                      value={profileData.registeredBusinessAddress}
                      onChange={(e) => handleInputChange('registeredBusinessAddress', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={profileData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      value={profileData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Japan">Japan</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      value={profileData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                    <input
                      type="text"
                      value={profileData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Registered Shipping Address</label>
                    <textarea
                      rows={3}
                      value={profileData.registeredShippingAddress}
                      onChange={(e) => handleInputChange('registeredShippingAddress', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Address City</label>
                    <input
                      type="text"
                      value={profileData.shippingAddressCity}
                      onChange={(e) => handleInputChange('shippingAddressCity', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Address Country</label>
                    <select
                      value={profileData.shippingAddressCountry}
                      onChange={(e) => handleInputChange('shippingAddressCountry', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Japan">Japan</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Address State</label>
                    <input
                      type="text"
                      value={profileData.shippingAddressState}
                      onChange={(e) => handleInputChange('shippingAddressState', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Address Pincode</label>
                    <input
                      type="text"
                      value={profileData.shippingAddressPincode}
                      onChange={(e) => handleInputChange('shippingAddressPincode', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mailing address</label>
                    <input
                      type="email"
                      value={profileData.mailingAddress}
                      onChange={(e) => handleInputChange('mailingAddress', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                    <input
                      type="tel"
                      value={profileData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input
                    type="email"
                    value={profileData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Names and contacts details of business owners/partners</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={addContact}
                      className="text-brand hover:text-brand-dark text-sm"
                    >
                      Add More +
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm">
                      Remove -
                    </button>
                  </div>
                </div>

                {contacts.map((contact, index) => (
                  <div key={contact.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => updateContact(contact.id, 'name', e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact</label>
                      <input
                        type="tel"
                        value={contact.contact}
                        onChange={(e) => updateContact(contact.id, 'contact', e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => updateContact(contact.id, 'email', e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bank Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Bank account details for receiving payments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <input
                      type="text"
                      value={profileData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Branch</label>
                    <input
                      type="text"
                      value={profileData.bankBranch}
                      onChange={(e) => handleInputChange('bankBranch', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={profileData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Swift Code</label>
                    <input
                      type="text"
                      value={profileData.swiftCode}
                      onChange={(e) => handleInputChange('swiftCode', e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media */}


              {/* Action Buttons */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;