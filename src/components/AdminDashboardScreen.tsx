import React from 'react';
import { Header } from './Header';
import { Card } from './Card';
import { Users, MapPin, TrendingUp, Calendar, Building2, Settings } from 'lucide-react';

interface AdminDashboardScreenProps {
  onBack: () => void;
}

export function AdminDashboardScreen({ onBack }: AdminDashboardScreenProps) {
  const stats = [
    { label: 'Total Seats', value: '240', icon: MapPin, color: 'bg-primary/10', iconColor: 'text-primary' },
    { label: 'Occupied Today', value: '182', icon: Users, color: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    { label: 'Occupancy Rate', value: '76%', icon: TrendingUp, color: 'bg-purple-100', iconColor: 'text-purple-600' },
    { label: 'Bookings Today', value: '195', icon: Calendar, color: 'bg-amber-100', iconColor: 'text-amber-600' }
  ];
  
  const floorUtilization = [
    { floor: 'Floor 1', occupied: 42, total: 60, percentage: 70 },
    { floor: 'Floor 2', occupied: 48, total: 60, percentage: 80 },
    { floor: 'Floor 3', occupied: 52, total: 60, percentage: 87 },
    { floor: 'Floor 4', occupied: 40, total: 60, percentage: 67 }
  ];
  
  const recentActivity = [
    { user: 'Sarah Chen', action: 'booked', seat: 'S24', floor: 'Floor 3', time: '2 min ago' },
    { user: 'Mike Johnson', action: 'checked in', seat: 'S12', floor: 'Floor 2', time: '5 min ago' },
    { user: 'Emma Davis', action: 'cancelled', seat: 'S45', floor: 'Floor 4', time: '12 min ago' },
    { user: 'Alex Kumar', action: 'booked', seat: 'S08', floor: 'Floor 1', time: '18 min ago' }
  ];
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header 
        title="Admin Dashboard" 
        onBack={onBack}
      />
      
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Stats Grid */}
        <div className="px-6 py-6">
          <h3 
            className="text-gray-900 mb-4 title-small-heavy" 
          >
            Today&apos;s Overview
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {stats.map(stat => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label}>
                  <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                  <p className="title-medium-heavy text-gray-900 mb-1">{stat.value}</p>
                  <p className="label-sm-normal text-gray-600">{stat.label}</p>
                </Card>
              );
            })}
          </div>
          
          {/* Floor Utilization */}
          <div className="mb-6">
            <h3 
              className="text-gray-900 mb-4 title-small-heavy" 
            >
              Floor Utilization
            </h3>
            <Card>
              <div className="space-y-4">
                {floorUtilization.map(floor => (
                  <div key={floor.floor}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-sm-normal text-gray-900">{floor.floor}</span>
                      <span className="body-sm-normal text-gray-600">
                        {floor.occupied}/{floor.total} seats
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          floor.percentage >= 80 ? 'bg-red-500' : 
                          floor.percentage >= 60 ? 'bg-amber-500' : 
                          'bg-emerald-500'
                        }`}
                        style={{ width: `${floor.percentage}%` }}
                      />
                    </div>
                    <p className="label-sm-normal text-gray-600 mt-1 text-right">{floor.percentage}% occupied</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Weekly Trend Chart */}
          <div className="mb-6">
            <h3 
              className="text-gray-900 mb-4 title-small-heavy" 
            >
              Weekly Trend
            </h3>
            <Card>
              <div className="flex items-end justify-between gap-2 h-40">
                {[65, 72, 68, 80, 76, 45, 38].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-primary/20 hover:bg-primary/30 rounded-t transition-colors cursor-pointer relative group">
                      <div 
                        className="bg-primary rounded-t transition-all"
                        style={{ height: `${height * 1.5}px` }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white label-sm-normal px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {height}%
                      </div>
                    </div>
                    <span className="label-sm-normal text-gray-600">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <div className="mb-6">
            <h3 
              className="text-gray-900 mb-4 title-small-heavy" 
            >
              Recent Activity
            </h3>
            <Card>
              <div className="space-y-4">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="body-sm-heavy">{activity.user.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="body-sm-normal text-gray-900">
                        <span>{activity.user}</span>{' '}
                        <span className="text-gray-600">{activity.action}</span>{' '}
                        <span>{activity.seat}</span>
                      </p>
                      <p className="label-sm-normal text-gray-600 mt-1">
                        {activity.floor} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Quick Actions */}
          <div className="mb-6">
            <h3 
              className="text-gray-900 mb-4 title-small-heavy" 
            >
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Card className="text-center cursor-pointer hover:shadow-md transition-shadow">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="body-sm-normal text-gray-900">Manage Floors</p>
              </Card>
              <Card className="text-center cursor-pointer hover:shadow-md transition-shadow">
                <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="body-sm-normal text-gray-900">Manage Seats</p>
              </Card>
              <Card className="text-center cursor-pointer hover:shadow-md transition-shadow">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="body-sm-normal text-gray-900">View Users</p>
              </Card>
              <Card className="text-center cursor-pointer hover:shadow-md transition-shadow">
                <Settings className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="body-sm-normal text-gray-900">Settings</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}