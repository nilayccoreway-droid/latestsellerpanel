import React, { useState } from 'react';
import { Search, ChevronRight, Book, MessageCircle, Phone, Mail, FileText, Package, CreditCard, Truck, Star, BarChart3, Settings, HelpCircle, ShoppingCart, User } from 'lucide-react';

interface HelpTopic {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  topics: HelpTopic[];
}

const Help: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories: HelpCategory[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of using your seller dashboard',
      icon: Book,
      topics: [
        {
          id: 'account-setup',
          title: 'Setting Up Your Seller Account',
          content: `Welcome to the marketplace! Setting up your seller account is the first step to start selling your products online.

**Step 1: Complete Your Profile**
- Add your business information
- Upload a professional profile picture
- Verify your email address and phone number

**Step 2: Business Verification**
- Provide necessary business documents
- Complete tax information
- Set up your payment methods

**Step 3: Store Configuration**
- Choose your store name and URL
- Set up your store policies
- Configure shipping settings

**Step 4: First Product Upload**
- Add your first product with high-quality images
- Write compelling product descriptions
- Set competitive pricing

Once these steps are completed, your account will be ready to start receiving orders!`,
          lastUpdated: '2024-06-15'
        },
        {
          id: 'dashboard-overview',
          title: 'Understanding Your Dashboard',
          content: `Your seller dashboard is your command center for managing your online business. Here's what each section does:

**Dashboard Overview**
- View key performance metrics
- Monitor recent orders and reviews
- Track sales trends and revenue

**Navigation Menu**
- Orders: Manage all customer orders
- Products: Add, edit, and organize your inventory
- Transactions: View payment history
- Reviews: Monitor customer feedback
- Shipping: Manage delivery options
- Analytics: Detailed performance reports
- Settings: Account and store configuration

**Quick Actions**
- Use the notification bell for important updates
- Access your profile settings from the top-right menu
- Switch between different views using the sidebar

The dashboard is designed to give you everything you need at a glance while providing easy access to detailed management tools.`,
          lastUpdated: '2024-06-14'
        },
        {
          id: 'first-sale',
          title: 'Making Your First Sale',
          content: `Congratulations on setting up your seller account! Here's how to optimize for your first sale:

**Product Optimization**
- Use high-quality, well-lit product photos
- Write detailed, keyword-rich descriptions
- Set competitive prices based on market research
- Ensure accurate inventory counts

**Store Visibility**
- Complete all profile sections
- Respond quickly to customer inquiries
- Maintain high product quality standards
- Encourage customer reviews

**Order Fulfillment**
- Process orders within 24 hours
- Use reliable shipping methods
- Provide tracking information
- Communicate proactively with customers

**After the Sale**
- Follow up with customers
- Request reviews and feedback
- Address any issues promptly
- Use insights to improve your offerings

Remember, building a successful online business takes time and consistency. Focus on providing excellent customer service and quality products.`,
          lastUpdated: '2024-06-13'
        }
      ]
    },
    {
      id: 'orders',
      title: 'Order Management',
      description: 'Handle orders, processing, and customer communication',
      icon: Package,
      topics: [
        {
          id: 'order-processing',
          title: 'Processing Orders',
          content: `Efficient order processing is crucial for customer satisfaction and business success.

**Order Status Flow**
1. **New Order**: Customer places order, payment confirmed
2. **Processing**: You prepare the item for shipment
3. **Shipped**: Item is dispatched with tracking information
4. **Delivered**: Customer receives the order
5. **Completed**: Order is successfully fulfilled

**Processing Steps**
- Check inventory availability
- Verify customer information
- Prepare items for shipping
- Generate shipping labels
- Update order status
- Send tracking information to customer

**Best Practices**
- Process orders within 24 hours
- Double-check shipping addresses
- Use protective packaging
- Include order confirmation details
- Communicate any delays immediately

**Bulk Processing**
- Use filters to manage multiple orders
- Export order data for external processing
- Set up automated status updates
- Create shipping batches for efficiency`,
          lastUpdated: '2024-06-12'
        },
        {
          id: 'order-cancellation',
          title: 'Handling Cancellations and Returns',
          content: `Managing cancellations and returns professionally maintains customer trust and satisfaction.

**Cancellation Process**
- Review cancellation requests within 2 hours
- Check if order has already been shipped
- Process refunds according to your policy
- Update inventory if items haven't shipped
- Communicate clearly with customers

**Return Management**
- Establish clear return policies
- Provide return shipping labels when required
- Inspect returned items upon receipt
- Process refunds within 3-5 business days
- Update product listings if issues are identified

**Refund Guidelines**
- Full refunds for defective or damaged items
- Partial refunds for used items (if policy allows)
- No refunds for custom or personalized items
- Shipping costs typically non-refundable

**Communication Tips**
- Respond promptly to customer inquiries
- Be empathetic and professional
- Offer solutions when possible
- Document all interactions
- Follow up to ensure satisfaction`,
          lastUpdated: '2024-06-11'
        },
        {
          id: 'order-tracking',
          title: 'Order Tracking and Updates',
          content: `Keep customers informed throughout the order fulfillment process.

**Tracking Information**
- Provide tracking numbers immediately after shipping
- Use reliable shipping carriers with good tracking
- Send automated updates at key milestones
- Include estimated delivery dates

**Status Updates**
- Order Confirmed: Payment processed successfully
- Processing: Items being prepared for shipment
- Shipped: Package dispatched with tracking
- Out for Delivery: Package with local courier
- Delivered: Successfully received by customer

**Customer Communication**
- Send confirmation emails for each status change
- Provide clear tracking instructions
- Include carrier contact information
- Offer support for delivery issues

**Handling Delays**
- Notify customers immediately of any delays
- Provide updated delivery estimates
- Offer compensation when appropriate
- Maintain transparent communication

**Delivery Issues**
- Work with carriers to resolve problems
- Provide alternative delivery options
- Offer reshipment for lost packages
- Document all resolution efforts`,
          lastUpdated: '2024-06-10'
        }
      ]
    },
    {
      id: 'products',
      title: 'Product Management',
      description: 'Add, edit, and optimize your product listings',
      icon: Package,
      topics: [
        {
          id: 'adding-products',
          title: 'Adding New Products',
          content: `Create compelling product listings that attract customers and drive sales.

**Product Information**
- Choose a clear, descriptive product title
- Write detailed product descriptions
- Include key features and benefits
- Specify dimensions, weight, and materials
- Add care instructions when applicable

**Product Images**
- Use high-resolution images (minimum 1000x1000 pixels)
- Include multiple angles and close-up details
- Show products in use or lifestyle contexts
- Ensure consistent lighting and backgrounds
- Add zoom functionality for detail viewing

**Pricing Strategy**
- Research competitor pricing
- Consider your costs and desired profit margin
- Use psychological pricing techniques
- Offer volume discounts when appropriate
- Set up promotional pricing for special events

**Inventory Management**
- Set accurate stock quantities
- Enable low-stock alerts
- Use SKU codes for organization
- Track inventory across multiple channels
- Plan for seasonal demand fluctuations

**SEO Optimization**
- Use relevant keywords in titles and descriptions
- Add appropriate tags and categories
- Include size, color, and material variations
- Optimize for mobile search
- Monitor and improve search rankings`,
          lastUpdated: '2024-06-09'
        },
        {
          id: 'product-optimization',
          title: 'Optimizing Product Listings',
          content: `Improve your product visibility and conversion rates with these optimization techniques.

**Title Optimization**
- Include primary keywords naturally
- Mention brand, model, and key features
- Keep titles under 60 characters for mobile
- Use title case formatting
- Avoid keyword stuffing

**Description Best Practices**
- Start with key benefits and features
- Use bullet points for easy scanning
- Include technical specifications
- Address common customer questions
- Add size guides and compatibility info

**Image Optimization**
- Use consistent image dimensions
- Include lifestyle and detail shots
- Show product variations (colors, sizes)
- Add infographic-style feature callouts
- Ensure fast loading times

**Category and Tags**
- Choose the most specific category
- Add relevant tags and attributes
- Include seasonal and occasion tags
- Use brand and model tags
- Monitor tag performance

**Pricing Optimization**
- Test different price points
- Use competitive pricing tools
- Offer bundle deals
- Create urgency with limited-time offers
- Monitor price elasticity

**Performance Monitoring**
- Track view-to-purchase conversion rates
- Monitor search ranking positions
- Analyze customer feedback and reviews
- A/B test different elements
- Update listings based on performance data`,
          lastUpdated: '2024-06-08'
        },
        {
          id: 'inventory-management',
          title: 'Managing Inventory',
          content: `Keep track of your stock levels and avoid overselling with effective inventory management.

**Stock Tracking**
- Set up automatic inventory updates
- Use barcode scanning for accuracy
- Implement first-in-first-out (FIFO) rotation
- Track inventory across multiple locations
- Set reorder points for popular items

**Low Stock Alerts**
- Configure alerts for minimum stock levels
- Set up automatic reorder notifications
- Monitor fast-moving inventory
- Plan for seasonal demand spikes
- Maintain safety stock for bestsellers

**Inventory Organization**
- Use clear SKU naming conventions
- Organize by category and subcategory
- Implement location-based storage
- Use inventory management software
- Regular physical inventory counts

**Demand Forecasting**
- Analyze historical sales data
- Consider seasonal trends
- Monitor market demand indicators
- Plan for promotional periods
- Adjust for new product launches

**Supplier Management**
- Maintain relationships with reliable suppliers
- Negotiate favorable terms and pricing
- Have backup suppliers for critical items
- Monitor supplier performance metrics
- Plan for supply chain disruptions

**Inventory Reports**
- Generate regular inventory reports
- Track inventory turnover rates
- Monitor slow-moving stock
- Analyze profit margins by product
- Identify opportunities for optimization`,
          lastUpdated: '2024-06-07'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Transactions',
      description: 'Understand payments, fees, and financial reporting',
      icon: CreditCard,
      topics: [
        {
          id: 'payment-processing',
          title: 'How Payments Work',
          content: `Understand how payments are processed and when you receive your funds.

**Payment Flow**
1. Customer places order and pays
2. Payment is held in escrow
3. You ship the product
4. Customer receives and confirms delivery
5. Payment is released to your account
6. Funds are transferred to your bank account

**Payment Methods Accepted**
- Credit and debit cards (Visa, MasterCard, American Express)
- Digital wallets (PayPal, Apple Pay, Google Pay)
- Bank transfers and ACH payments
- Buy now, pay later options
- Cryptocurrency (where available)

**Payment Security**
- All transactions are encrypted and secure
- PCI DSS compliance for card processing
- Fraud detection and prevention systems
- Buyer and seller protection programs
- Secure data storage and handling

**Payment Timeline**
- Immediate: Payment authorization
- 1-2 days: Payment capture after shipping
- 3-5 days: Funds available in your account
- 1-3 days: Bank transfer processing
- Total: 5-10 business days from sale to bank

**International Payments**
- Multi-currency support
- Automatic currency conversion
- International wire transfer options
- Compliance with local regulations
- Tax handling for cross-border sales`,
          lastUpdated: '2024-06-06'
        },
        {
          id: 'fees-structure',
          title: 'Understanding Fees',
          content: `Learn about the different fees associated with selling on our marketplace.

**Transaction Fees**
- Base transaction fee: 3.5% of sale price
- Payment processing fee: 2.9% + $0.30 per transaction
- International transaction fee: Additional 1.5%
- Currency conversion fee: 2.5% when applicable

**Listing Fees**
- Basic listings: Free for first 50 items per month
- Additional listings: $0.20 per item
- Featured listings: $2.00 per item per month
- Premium store subscription: $39.99/month (unlimited listings)

**Optional Service Fees**
- Promoted listings: 2-20% of sale price (you set the rate)
- Professional photography: $25-50 per product
- Inventory management service: $1 per item per month
- Priority customer support: $19.99/month

**Fee Calculation Example**
- Product sale price: $100.00
- Transaction fee (3.5%): $3.50
- Payment processing (2.9% + $0.30): $3.20
- Total fees: $6.70
- Your earnings: $93.30

**Fee Optimization Tips**
- Price products to account for fees
- Use bulk listing tools to reduce per-item costs
- Consider premium subscriptions for high-volume sellers
- Monitor fee changes and adjust pricing accordingly
- Take advantage of promotional fee reductions`,
          lastUpdated: '2024-06-05'
        },
        {
          id: 'financial-reporting',
          title: 'Financial Reports and Tax Information',
          content: `Access detailed financial reports and tax documentation for your business.

**Available Reports**
- Sales summary reports (daily, weekly, monthly)
- Transaction detail reports
- Fee breakdown reports
- Tax summary reports
- Profit and loss statements
- Year-end tax documents (1099-K forms)

**Report Customization**
- Filter by date range
- Filter by product category
- Include/exclude refunds and returns
- Export to CSV, Excel, or PDF formats
- Schedule automatic report generation
- Set up email delivery for regular reports

**Tax Considerations**
- Track all business expenses
- Maintain records of inventory purchases
- Document shipping and packaging costs
- Keep receipts for business-related expenses
- Understand sales tax obligations by state/country

**Tax Documents**
- 1099-K forms for US sellers (if applicable)
- Monthly sales tax reports
- International tax compliance documents
- VAT documentation for EU sellers
- GST reports for applicable regions

**Accounting Integration**
- Export data to QuickBooks, Xero, or other accounting software
- API access for custom integrations
- Real-time financial data synchronization
- Automated expense categorization
- Integration with tax preparation software

**Financial Best Practices**
- Reconcile accounts monthly
- Set aside money for taxes (typically 25-30% of profits)
- Track business expenses separately
- Maintain detailed records for at least 7 years
- Consult with a tax professional for complex situations`,
          lastUpdated: '2024-06-04'
        }
      ]
    },
    {
      id: 'reviews',
      title: 'Reviews & Ratings',
      description: 'Manage customer feedback and improve your ratings',
      icon: Star,
      topics: [
        {
          id: 'managing-reviews',
          title: 'Managing Customer Reviews',
          content: `Build trust and improve your business through effective review management.

**Review System Overview**
- Customers can leave reviews after purchase
- Reviews include star ratings (1-5 stars)
- Written feedback provides detailed insights
- Photos can be included with reviews
- Reviews are publicly visible on product pages

**Encouraging Reviews**
- Follow up with customers after delivery
- Provide excellent customer service
- Include review request cards in packages
- Send automated review reminder emails
- Offer small incentives for honest reviews (where allowed)

**Responding to Reviews**
- Respond to all reviews, positive and negative
- Thank customers for positive feedback
- Address concerns raised in negative reviews
- Offer solutions publicly when appropriate
- Maintain a professional tone always

**Review Analytics**
- Monitor overall rating trends
- Track review volume over time
- Identify common themes in feedback
- Use insights to improve products and service
- Compare ratings with competitors

**Handling Negative Reviews**
- Respond quickly and professionally
- Acknowledge the customer's concerns
- Offer to resolve issues privately
- Learn from constructive criticism
- Don't take negative feedback personally

**Review Policy Compliance**
- Never pay for fake positive reviews
- Don't ask friends/family to leave reviews
- Report suspicious review activity
- Follow platform guidelines strictly
- Focus on earning reviews through great service`,
          lastUpdated: '2024-06-01'
        },
        {
          id: 'improving-ratings',
          title: 'Improving Your Seller Rating',
          content: `Strategies to maintain and improve your overall seller rating.

**Rating Factors**
- Product quality and description accuracy
- Shipping speed and packaging quality
- Customer service responsiveness
- Order accuracy and completeness
- Problem resolution effectiveness

**Quality Improvement**
- Regularly audit product quality
- Update product descriptions for accuracy
- Use high-quality product images
- Test products before listing
- Monitor customer feedback for issues

**Service Excellence**
- Respond to messages within 24 hours
- Process orders quickly and accurately
- Provide proactive order updates
- Go above and beyond customer expectations
- Maintain professional communication

**Shipping Performance**
- Ship orders within stated timeframes
- Use reliable shipping methods
- Package items securely and professionally
- Provide accurate tracking information
- Handle shipping issues promptly

**Problem Resolution**
- Address issues before they become problems
- Offer fair solutions to customer concerns
- Process returns and refunds quickly
- Learn from mistakes and improve processes
- Follow up to ensure customer satisfaction

**Long-term Strategy**
- Focus on sustainable business practices
- Build genuine customer relationships
- Continuously improve based on feedback
- Maintain consistent service standards
- Invest in quality products and processes

**Rating Recovery**
- If ratings drop, identify root causes
- Implement immediate improvements
- Communicate changes to customers
- Monitor progress closely
- Be patient as improvements take time to reflect`,
          lastUpdated: '2024-05-31'
        }
      ]
    },
    {
      id: 'supports',
      title: 'Support',
      description: 'Get help and contact our support team',
      icon: HelpCircle,
      topics: [
        {
          id: 'contact-support',
          title: 'Contacting Support',
          content: `Get help when you need it through multiple support channels.

**Support Channels**
- Live chat support (24/7)
- Email support with 24-hour response time
- Phone support during business hours
- Help center with comprehensive guides
- Community forum for peer support

**Before Contacting Support**
- Check our help center for quick answers
- Search the community forum
- Review your account settings
- Gather relevant information (order IDs, error messages)
- Try basic troubleshooting steps

**What to Include in Your Request**
- Detailed description of the issue
- Steps you've already tried
- Screenshots or error messages
- Your account information
- Urgency level of the request

**Response Times**
- Live chat: Immediate response
- Email: Within 24 hours
- Phone: Immediate during business hours
- Complex issues: 2-3 business days
- Account-related issues: Priority handling

**Support Categories**
- Technical issues and bugs
- Account and billing questions
- Product listing problems
- Order and shipping issues
- Policy clarifications`,
          lastUpdated: '2024-06-15'
        }
      ]
    },
    {
      id: 'selling-fees',
      title: 'Selling Fees Calculator',
      description: 'Calculate your selling fees and profit margins',
      icon: CreditCard,
      topics: [
        {
          id: 'fee-calculator',
          title: 'Using the Fee Calculator',
          content: `Calculate your exact fees and profit margins before listing products.

**Fee Calculator Features**
- Real-time fee calculations
- Profit margin analysis
- Break-even point calculation
- Comparison with competitors
- Bulk calculation for multiple products

**Fee Types Included**
- Transaction fees (3.5% of sale price)
- Payment processing fees (2.9% + $0.30)
- Listing fees (if applicable)
- International transaction fees
- Currency conversion fees

**How to Use**
1. Enter your product's sale price
2. Add any additional costs (shipping, materials)
3. View the fee breakdown
4. See your net profit
5. Adjust pricing as needed

**Optimization Tips**
- Factor in all costs including materials and time
- Consider seasonal demand fluctuations
- Compare with competitor pricing
- Account for return and refund rates
- Plan for promotional discounts`,
          lastUpdated: '2024-06-14'
        }
      ]
    },
    {
      id: 'credit-card',
      title: 'Credit Card Management',
      description: 'Manage your payment methods and billing',
      icon: CreditCard,
      topics: [
        {
          id: 'payment-methods',
          title: 'Managing Payment Methods',
          content: `Keep your payment information secure and up-to-date.

**Adding Payment Methods**
- Credit and debit cards
- Bank account information
- Digital wallet connections
- International payment options
- Backup payment methods

**Security Features**
- Encrypted data storage
- Two-factor authentication
- Fraud monitoring
- Secure payment processing
- Regular security audits

**Payment Settings**
- Default payment method selection
- Automatic payment scheduling
- Payment failure notifications
- Currency preferences
- Tax calculation settings

**Billing Management**
- View payment history
- Download invoices and receipts
- Set up automatic payments
- Manage billing addresses
- Update payment information`,
          lastUpdated: '2024-06-13'
        }
      ]
    },
    {
      id: 'scoring',
      title: 'Seller Scoring',
      description: 'Understand and improve your seller performance score',
      icon: Star,
      topics: [
        {
          id: 'seller-score',
          title: 'Understanding Your Seller Score',
          content: `Your seller score affects your visibility and success on the marketplace.

**Score Components**
- Customer satisfaction ratings
- Order fulfillment speed
- Product quality metrics
- Communication responsiveness
- Policy compliance

**Score Ranges**
- Excellent (90-100): Premium benefits and visibility
- Good (80-89): Standard marketplace features
- Fair (70-79): Limited promotional opportunities
- Poor (Below 70): Account review required

**Improving Your Score**
- Maintain high product quality
- Ship orders quickly and accurately
- Respond to customer messages promptly
- Handle returns and refunds fairly
- Follow all marketplace policies

**Score Benefits**
- Higher search ranking
- Featured product placement
- Reduced fees for top performers
- Priority customer support
- Access to beta features`,
          lastUpdated: '2024-06-12'
        }
      ]
    },
    {
      id: 'abandoned-cart',
      title: 'Abandoned Cart Recovery',
      description: 'Recover lost sales from abandoned shopping carts',
      icon: ShoppingCart,
      topics: [
        {
          id: 'cart-recovery',
          title: 'Abandoned Cart Strategies',
          content: `Recover potential sales from customers who left items in their cart.

**Understanding Abandonment**
- Common reasons for cart abandonment
- Timing patterns and trends
- Product-specific abandonment rates
- Customer behavior analysis
- Mobile vs desktop patterns

**Recovery Strategies**
- Automated email reminders
- Personalized discount offers
- Limited-time promotions
- Product availability alerts
- Social proof and reviews

**Email Campaign Setup**
- First reminder: 1 hour after abandonment
- Second reminder: 24 hours with incentive
- Final reminder: 72 hours with urgency
- Personalized product recommendations
- Mobile-optimized email templates

**Performance Tracking**
- Recovery rate monitoring
- Revenue attribution
- Campaign effectiveness
- A/B testing results
- Customer lifetime value impact`,
          lastUpdated: '2024-06-11'
        }
      ]
    },
    {
      id: 'sales-report',
      title: 'Sales Reports',
      description: 'Generate and analyze detailed sales reports',
      icon: BarChart3,
      topics: [
        {
          id: 'sales-reporting',
          title: 'Sales Report Generation',
          content: `Create comprehensive sales reports to track your business performance.

**Report Types**
- Daily sales summaries
- Weekly performance reports
- Monthly trend analysis
- Quarterly business reviews
- Annual performance reports

**Key Metrics Included**
- Total revenue and profit
- Units sold by product
- Average order value
- Customer acquisition costs
- Return and refund rates

**Customization Options**
- Date range selection
- Product category filtering
- Geographic segmentation
- Customer type analysis
- Payment method breakdown

**Export and Sharing**
- PDF report generation
- Excel/CSV data export
- Automated email delivery
- Dashboard integration
- API access for custom tools

**Using Reports for Growth**
- Identify top-performing products
- Spot seasonal trends
- Optimize pricing strategies
- Plan inventory purchases
- Set realistic sales targets`,
          lastUpdated: '2024-06-10'
        }
      ]
    },
    {
      id: 'promotion',
      title: 'Promotions & Marketing',
      description: 'Create and manage promotional campaigns',
      icon: Package,
      topics: [
        {
          id: 'promotional-campaigns',
          title: 'Creating Promotional Campaigns',
          content: `Boost your sales with effective promotional strategies.

**Promotion Types**
- Percentage discounts
- Fixed amount discounts
- Buy-one-get-one offers
- Free shipping promotions
- Bundle deals and packages

**Campaign Setup**
- Define promotion goals
- Set discount parameters
- Choose eligible products
- Set start and end dates
- Configure usage limits

**Targeting Options**
- New customer promotions
- Returning customer rewards
- Geographic targeting
- Product category focus
- Seasonal campaigns

**Performance Tracking**
- Promotion usage rates
- Revenue impact analysis
- Customer acquisition metrics
- Profit margin effects
- Long-term customer value

**Best Practices**
- Create urgency with limited-time offers
- Use clear and compelling messaging
- Test different discount levels
- Monitor competitor promotions
- Plan promotions around holidays and events`,
          lastUpdated: '2024-06-09'
        }
      ]
    },
    {
      id: 'membership',
      title: 'Membership & Subscriptions',
      description: 'Manage your seller membership and subscription benefits',
      icon: User,
      topics: [
        {
          id: 'membership-tiers',
          title: 'Membership Tiers and Benefits',
          content: `Understand the different membership levels and their benefits.

**Membership Tiers**
- Basic: Free tier with standard features
- Professional: $29/month with advanced tools
- Enterprise: $99/month with premium support
- Custom: Tailored solutions for large sellers

**Basic Tier Benefits**
- Up to 50 product listings
- Standard customer support
- Basic analytics and reports
- Standard transaction fees
- Mobile app access

**Professional Tier Benefits**
- Unlimited product listings
- Priority customer support
- Advanced analytics and insights
- Reduced transaction fees
- Promotional tools and campaigns
- Bulk listing and editing tools

**Enterprise Tier Benefits**
- All Professional features
- Dedicated account manager
- Custom integrations
- Advanced API access
- White-label options
- Custom reporting solutions

**Upgrading Your Membership**
- Compare tier benefits
- Calculate potential savings
- Upgrade process and billing
- Downgrade policies
- Trial periods for premium tiers`,
          lastUpdated: '2024-06-08'
        }
      ]
    },
    {
      id: 'settings',
      title: 'Account Settings',
      description: 'Manage your account, store settings, and preferences',
      icon: Settings,
      topics: [
        {
          id: 'account-management',
          title: 'Managing Your Account',
          content: `Keep your account information up-to-date and secure.

**Profile Information**
- Business name and description
- Contact information and addresses
- Tax identification numbers
- Bank account and payment details
- Profile photos and branding

**Security Settings**
- Password management and requirements
- Two-factor authentication setup
- Login activity monitoring
- API key management
- Account access permissions

**Notification Preferences**
- Email notification settings
- SMS alert preferences
- Push notification options
- Frequency settings for different types of alerts
- Unsubscribe options for marketing communications

**Privacy Settings**
- Data sharing preferences
- Public profile visibility
- Customer data handling
- Marketing opt-in/opt-out
- Third-party integrations

**Store Configuration**
- Store name and URL customization
- Store policies (return, shipping, privacy)
- Business hours and contact information
- Store categories and specializations
- Featured products and promotions

**Integration Settings**
- Third-party app connections
- Accounting software integration
- Inventory management systems
- Marketing tool connections
- Analytics platform setup

**Account Verification**
- Identity verification status
- Business license verification
- Tax document submission
- Bank account verification
- Address confirmation`,
          lastUpdated: '2024-05-28'
        },
        {
          id: 'store-customization',
          title: 'Customizing Your Store',
          content: `Create a unique brand experience for your customers.

**Store Branding**
- Upload your logo and brand colors
- Choose fonts and styling options
- Create a compelling store description
- Add your brand story and values
- Showcase your unique selling proposition

**Store Layout**
- Organize product categories
- Feature bestselling items
- Create seasonal collections
- Set up promotional banners
- Design an attractive storefront

**Product Organization**
- Create logical category structures
- Use consistent naming conventions
- Set up product filters and search
- Organize by price, popularity, or newness
- Create themed collections

**Store Policies**
- Return and refund policies
- Shipping and delivery terms
- Privacy policy and data handling
- Terms of service
- Customer service standards

**SEO Optimization**
- Optimize store and product titles
- Use relevant keywords in descriptions
- Set up meta descriptions
- Create SEO-friendly URLs
- Submit sitemap to search engines

**Mobile Optimization**
- Ensure responsive design
- Test mobile user experience
- Optimize images for mobile loading
- Simplify navigation for touch interfaces
- Test checkout process on mobile devices

**Performance Monitoring**
- Track store visit analytics
- Monitor page load speeds
- Analyze customer behavior
- Test different layouts and designs
- Measure conversion rates`,
          lastUpdated: '2024-05-27'
        }
      ]
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.topics.some(topic =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const selectedCategoryData = helpCategories.find(cat => cat.id === selectedCategory);
  const selectedTopicData = selectedCategoryData?.topics.find(topic => topic.id === selectedTopic);

  const renderContent = () => {
    if (selectedTopic && selectedTopicData) {
      return (
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="mb-6">
            <button
              onClick={() => setSelectedTopic(null)}
              className="text-brand hover:text-brand-dark text-sm font-medium mb-4 flex items-center"
            >
              ← Back to {selectedCategoryData?.title}
            </button>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedTopicData.title}</h1>
            <p className="text-sm text-gray-500">Last updated: {selectedTopicData.lastUpdated}</p>
          </div>
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {selectedTopicData.content}
            </div>
          </div>
        </div>
      );
    }

    if (selectedCategory && selectedCategoryData) {
      return (
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-brand hover:text-brand-dark text-sm font-medium mb-4"
            >
              ← Back to Help Categories
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <selectedCategoryData.icon size={32} className="text-brand" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{selectedCategoryData.title}</h1>
                <p className="text-gray-600">{selectedCategoryData.description}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {selectedCategoryData.topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className="text-left p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{topic.title}</h3>
                    <p className="text-sm text-gray-600">
                      {topic.content.substring(0, 120)}...
                    </p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Search */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-300 transition-all duration-200 text-left"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-brand" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {category.topics.length} topics
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="text-center">
            <HelpCircle size={48} className="text-brand mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need More Help?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                <Mail size={20} className="mr-2" />
                Email Support
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                <Phone size={20} className="mr-2" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="px-6 py-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600 mt-1">Find answers to your questions and get help with your seller account</p>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default Help;