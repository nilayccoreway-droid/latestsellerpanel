import { Bell, AlertCircle, Info, ChevronRight } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'alert' | 'notification' | 'update';
  is_read: boolean;
  created_at: string;
}

interface ActivitiesPanelProps {
  activities: Activity[];
}

function ActivityIcon({ type }: { type: Activity['type'] }) {
  const iconProps = { size: 18, className: 'flex-shrink-0' };

  switch (type) {
    case 'alert':
      return (
        <div className="p-2 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl">
          <AlertCircle {...iconProps} className="text-orange-600" />
        </div>
      );
    case 'notification':
      return (
        <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl">
          <Bell {...iconProps} className="text-brand" />
        </div>
      );
    case 'update':
      return (
        <div className="p-2 bg-gradient-to-br from-green-100 to-green-50 rounded-xl">
          <Info {...iconProps} className="text-green-600" />
        </div>
      );
  }
}

export default function ActivitiesPanel({ activities }: ActivitiesPanelProps) {
  const unreadCount = activities.filter(a => !a.is_read).length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="border-b border-gray-100 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#00666B] to-[#008A91]">
              <Bell size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">Notifications</h2>
              {unreadCount > 0 && (
                <p className="text-xs text-gray-500 mt-0.5">{unreadCount} unread</p>
              )}
            </div>
          </div>
          <button className="text-xs font-medium hover:underline" style={{ color: '#00666B' }}>
            View all →
          </button>
        </div>
      </div>

      {activities.length === 0 ? (
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bell size={24} className="text-gray-400" />
            </div>
            <p className="text-sm text-gray-500">No notifications yet</p>
            <p className="text-xs text-gray-400 mt-1">You're all caught up!</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`px-6 py-4 hover:bg-gray-50 cursor-pointer transition-all group ${
                  !activity.is_read ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <ActivityIcon type={activity.type} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1.5">
                          {new Date(activity.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                        <div className={`text-sm mb-1 ${!activity.is_read ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                          {activity.title}
                        </div>
                        {activity.description && (
                          <div className="text-xs text-gray-600 line-clamp-2">
                            {activity.description}
                          </div>
                        )}
                      </div>
                      <ChevronRight size={16} className="text-gray-400 flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    {!activity.is_read && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00666B] to-[#008A91]"></div>
                        <span className="text-xs font-medium" style={{ color: '#00666B' }}>New</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
