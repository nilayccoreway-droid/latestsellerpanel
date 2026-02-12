import React, { useState } from 'react';
import { Plus, Filter, Columns, ChevronDown, Paperclip, ArrowLeft } from 'lucide-react';

interface Ticket {
    id: string;
    message: string;
    department: string;
    agentName: string;
    priority: 'Normal' | 'High' | 'Urgent';
    status: 'Open' | 'Closed' | 'New';
    issueType: string;
    submissionDate: string;
    subject: string;
    order?: string;
    description: string;
    replies: TicketReply[];
}

interface TicketReply {
    id: string;
    sender: string;
    message: string;
    timestamp: string;
    attachments?: string[];
}

const Support: React.FC = () => {
    const [activeView, setActiveView] = useState<'list' | 'create' | 'view'>('list');
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [recordsPerPage, setRecordsPerPage] = useState(20);

    // Form state
    const [formData, setFormData] = useState({
        issueType: '',
        priority: 'Normal',
        subject: '',
        order: 'N/A',
        description: '',
        attachments: [] as File[]
    });

    const tickets: Ticket[] = [
        {
            id: '10000016',
            message: 'Help Req',
            department: 'buyer_dept',
            agentName: 'admin',
            priority: 'Normal',
            status: 'Open',
            issueType: 'Buyer dept',
            submissionDate: '2:44 PM on Thursday 23rd January 2025',
            subject: 'Help Request',
            description: 'test buyer data',
            replies: [
                {
                    id: '1',
                    sender: 'admin',
                    message: 'test test',
                    timestamp: '5:53 AM on Thursday 23rd January 2025',
                    attachments: ['attachment.jpg']
                }
            ]
        },
        {
            id: '10000015',
            message: 'test',
            department: 'seller_dept',
            agentName: 'admin',
            priority: 'High',
            status: 'New',
            issueType: 'Seller dept',
            submissionDate: '1:30 PM on Wednesday 22nd January 2025',
            subject: 'Test Issue',
            description: 'Test description',
            replies: []
        },
        {
            id: '10000012',
            message: 'test',
            department: 'seller_dept',
            agentName: 'admin',
            priority: 'High',
            status: 'New',
            issueType: 'Seller dept',
            submissionDate: '11:15 AM on Tuesday 21st January 2025',
            subject: 'Another Test',
            description: 'Another test description',
            replies: []
        },
        {
            id: '10000011',
            message: 'test',
            department: 'buyer_dept',
            agentName: 'admin',
            priority: 'Urgent',
            status: 'Open',
            issueType: 'Buyer dept',
            submissionDate: '9:45 AM on Monday 20th January 2025',
            subject: 'Urgent Issue',
            description: 'Urgent issue description',
            replies: []
        },
        {
            id: '10000010',
            message: 'testing',
            department: 'seller_dept',
            agentName: 'admin',
            priority: 'Urgent',
            status: 'New',
            issueType: 'Seller dept',
            submissionDate: '4:20 PM on Sunday 19th January 2025',
            subject: 'Testing',
            description: 'Testing description',
            replies: []
        },
        {
            id: '10000009',
            message: 'hi',
            department: 'order',
            agentName: 'admin',
            priority: 'Urgent',
            status: 'New',
            issueType: 'Order',
            submissionDate: '2:10 PM on Saturday 18th January 2025',
            subject: 'Hi',
            description: 'Hi description',
            replies: []
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Open': return 'bg-green-100 text-green-800';
            case 'Closed': return 'bg-gray-100 text-gray-800';
            case 'New': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'Normal': return 'bg-gray-100 text-gray-800';
            case 'High': return 'bg-yellow-100 text-yellow-800';
            case 'Urgent': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Submitting ticket:', formData);
        // Reset form and go back to list
        setFormData({
            issueType: '',
            priority: 'Normal',
            subject: '',
            order: 'N/A',
            description: '',
            attachments: []
        });
        setActiveView('list');
    };

    const handleTicketView = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setActiveView('view');
    };

    const renderCreateTicket = () => (
        <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Seller Support</h2>
                        <p className="text-gray-600 mt-1">Having an issue?</p>
                    </div>
                    <button
                        onClick={() => setActiveView('list')}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Tickets
                    </button>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                * Issue Type
                            </label>
                            <select
                                value={formData.issueType}
                                onChange={(e) => handleInputChange('issueType', e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            >
                                <option value="">Select Issue Type</option>
                                <option value="buyer_dept">Buyer Department</option>
                                <option value="seller_dept">Seller Department</option>
                                <option value="order">Order Issue</option>
                                <option value="payment">Payment Issue</option>
                                <option value="technical">Technical Issue</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                * Priority
                            </label>
                            <select
                                value={formData.priority}
                                onChange={(e) => handleInputChange('priority', e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            >
                                <option value="Normal">Normal</option>
                                <option value="High">High</option>
                                <option value="Urgent">Urgent</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                * Subject
                            </label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) => handleInputChange('subject', e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Order
                            </label>
                            <select
                                value={formData.order}
                                onChange={(e) => handleInputChange('order', e.target.value)}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="N/A">N/A</option>
                                <option value="10000001">Order #10000001</option>
                                <option value="10000002">Order #10000002</option>
                                <option value="10000003">Order #10000003</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                * Issue Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                rows={6}
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                            >
                                <Paperclip size={16} className="mr-2" />
                                Add Attachment
                            </button>
                            <p className="text-sm text-gray-500 mt-2">
                                Allowed File Types are <strong>jpeg,png,jpg</strong> and maximum uploaded size is <strong>2MB</strong>
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors font-medium"
                            >
                                Submit Ticket
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    const renderTicketsList = () => (
        <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Seller Support</h2>
                        <p className="text-gray-600 mt-1">Manage your support tickets</p>
                    </div>
                    <button
                        onClick={() => setActiveView('create')}
                        className="inline-flex items-center px-4 py-2 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors"
                    >
                        <Plus size={16} className="mr-2" />
                        Create Ticket
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header with controls */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm text-gray-600">
                                {tickets.length} records found
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    <Filter size={16} className="mr-2" />
                                    Filters
                                </button>
                                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    <Columns size={16} className="mr-2" />
                                    Columns
                                    <ChevronDown size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-end">
                            <div className="flex items-center space-x-2">
                                <select
                                    value={recordsPerPage}
                                    onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                                <span className="text-sm text-gray-600">per page</span>
                                <div className="flex items-center space-x-2 ml-4">
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">‹</button>
                                    <span className="text-sm text-gray-600">1 of 1</span>
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">›</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <input type="checkbox" className="rounded" />
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket Id</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent Name</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tickets.map((ticket) => (
                                    <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" className="rounded" />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{ticket.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{ticket.message}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{ticket.department}</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">{ticket.agentName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                                                {ticket.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleTicketView(ticket)}
                                                className="text-brand hover:text-brand-dark text-sm font-medium"
                                            >
                                                Reply
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTicketView = () => {
        if (!selectedTicket) return null;

        return (
            <div className="flex-1 bg-gray-50 overflow-auto">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Ticket Details - {selectedTicket.id}</h2>
                        </div>
                        <button
                            onClick={() => setActiveView('list')}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Tickets
                        </button>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Issue Type:</h3>
                                <p className="text-gray-900">{selectedTicket.issueType}</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Status:</h3>
                                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedTicket.status)}`}>
                                    {selectedTicket.status}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-2">Submission Date:</h3>
                                <p className="text-gray-900">{selectedTicket.submissionDate}</p>
                            </div>

                            <div className="border-t pt-6">
                                <div className="bg-gray-100 p-4 rounded-xl mb-4">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">A</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">zuuroadmin</p>
                                            <p className="text-sm text-gray-600">{selectedTicket.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {selectedTicket.replies.map((reply) => (
                                    <div key={reply.id} className="bg-green-100 p-4 rounded-xl mb-4 ml-8">
                                        <div className="flex justify-between items-start mb-2">
                                            <p className="font-medium text-gray-900">{reply.message}</p>
                                            <p className="text-sm text-gray-600">{reply.timestamp}</p>
                                        </div>
                                        {reply.attachments && reply.attachments.length > 0 && (
                                            <div>
                                                <p className="text-sm font-medium text-gray-700 mb-2">Attachments:</p>
                                                {reply.attachments.map((attachment, idx) => (
                                                    <div key={idx} className="inline-block bg-white p-2 rounded border mr-2">
                                                        <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1" alt="attachment" className="w-12 h-12 object-cover rounded" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-sm font-medium text-gray-700 mb-4">Your Reply:</h3>
                                <textarea
                                    rows={6}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                                    placeholder="Type your reply here..."
                                />

                                <div className="flex items-center justify-between">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                                        >
                                            <Paperclip size={16} className="mr-2" />
                                            Add Attachment
                                        </button>
                                        <p className="text-sm text-gray-500 mt-2">
                                            Allowed File Types are <strong>jpeg,png,jpg</strong> and maximum uploaded size is <strong>2MB</strong>
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="px-6 py-2 bg-brand text-white rounded-xl hover:bg-brand-dark transition-colors font-medium"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {activeView === 'list' && renderTicketsList()}
            {activeView === 'create' && renderCreateTicket()}
            {activeView === 'view' && renderTicketView()}
        </>
    );
};

export default Support;
