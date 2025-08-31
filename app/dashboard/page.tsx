'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Calendar,
  Mail,
  Target,
  Users,
  Settings,
  Bell,
  ChevronRight,
  BarChart3,
  Clock,
  Zap,
  TrendingUp,
  MessageSquare,
  FileText,
  Shield,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, logout } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  // Mock data for dashboard
  const stats = {
    emailsProcessed: 47,
    timeSaved: '3.5h',
    tasksAutomated: 23,
    meetingsOptimized: 8,
  };

  const recentActivities = [
    {
      id: 1,
      action: 'Email drafted',
      description: 'Response to client meeting request',
      time: '2 min ago',
      icon: Mail,
    },
    {
      id: 2,
      action: 'Calendar optimized',
      description: 'Rescheduled low-priority meeting',
      time: '15 min ago',
      icon: Calendar,
    },
    {
      id: 3,
      action: 'Task completed',
      description: 'Weekly report generated automatically',
      time: '1 hour ago',
      icon: FileText,
    },
    {
      id: 4,
      action: 'Insight generated',
      description: 'Productivity patterns analysis',
      time: '3 hours ago',
      icon: BarChart3,
    },
  ];

  return (
    <div className='min-h-screen night-sky-bg p-6'>
      {/* Header */}
      <header className='glass-nav mb-8 p-4 rounded-xl'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse-glow'>
              <Brain className='w-6 h-6 text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>Dashboard</h1>
              <p className='text-gray-300'>
                Welcome back, {user?.username || 'User'}! 👋
              </p>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-300 hover:text-white hover:bg-white/10'
            >
              <Bell className='w-5 h-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-300 hover:text-white hover:bg-white/10'
            >
              <Settings className='w-5 h-5' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-300 hover:text-white hover:bg-white/10'
              onClick={handleLogout}
            >
              <LogOut className='w-5 h-5' />
            </Button>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Stats Overview */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card className='glass-card border-white/10'>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-300'>Emails Processed</p>
                  <p className='text-2xl font-bold text-white'>
                    {stats.emailsProcessed}
                  </p>
                </div>
                <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center'>
                  <Mail className='w-6 h-6 text-blue-400' />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <TrendingUp className='w-4 h-4 text-green-400 mr-1' />
                <span className='text-sm text-green-400'>+12% today</span>
              </div>
            </CardContent>
          </Card>

          <Card className='glass-card border-white/10'>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-300'>Time Saved</p>
                  <p className='text-2xl font-bold text-white'>
                    {stats.timeSaved}
                  </p>
                </div>
                <div className='w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center'>
                  <Clock className='w-6 h-6 text-green-400' />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <Zap className='w-4 h-4 text-yellow-400 mr-1' />
                <span className='text-sm text-yellow-400'>+2.1h this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className='glass-card border-white/10'>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-300'>Tasks Automated</p>
                  <p className='text-2xl font-bold text-white'>
                    {stats.tasksAutomated}
                  </p>
                </div>
                <div className='w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center'>
                  <Target className='w-6 h-6 text-purple-400' />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <TrendingUp className='w-4 h-4 text-green-400 mr-1' />
                <span className='text-sm text-green-400'>+8 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className='glass-card border-white/10'>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-300'>Meetings Optimized</p>
                  <p className='text-2xl font-bold text-white'>
                    {stats.meetingsOptimized}
                  </p>
                </div>
                <div className='w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center'>
                  <Calendar className='w-6 h-6 text-pink-400' />
                </div>
              </div>
              <div className='flex items-center mt-3'>
                <TrendingUp className='w-4 h-4 text-green-400 mr-1' />
                <span className='text-sm text-green-400'>+3 today</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column - Recent Activity */}
          <div className='lg:col-span-2 space-y-6'>
            <Card className='glass-card border-white/10'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <BarChart3 className='w-5 h-5 mr-2 text-purple-400' />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your AI assistant's latest actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  {recentActivities.map((activity) => {
                    const IconComponent = activity.icon;
                    return (
                      <div
                        key={activity.id}
                        className='flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors'
                      >
                        <div className='w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0'>
                          <IconComponent className='w-5 h-5 text-purple-400' />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-white font-medium truncate'>
                            {activity.action}
                          </p>
                          <p className='text-gray-400 text-sm truncate'>
                            {activity.description}
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='text-gray-400 text-sm whitespace-nowrap'>
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button
                  variant='ghost'
                  className='w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-white/5'
                >
                  View All Activity <ChevronRight className='w-4 h-4 ml-1' />
                </Button>
              </CardContent>
            </Card>

            {/* Email Management Card */}
            <Card className='glass-card border-white/10'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <Mail className='w-5 h-5 mr-2 text-blue-400' />
                  Email Management
                </CardTitle>
                <CardDescription>AI-powered inbox automation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div className='bg-white/5 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <div className='w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2'>
                        <MessageSquare className='w-4 h-4 text-blue-400' />
                      </div>
                      <span className='text-white font-medium'>
                        Unread Emails
                      </span>
                    </div>
                    <p className='text-2xl font-bold text-white'>12</p>
                    <p className='text-sm text-gray-400'>Waiting for review</p>
                  </div>
                  <div className='bg-white/5 p-4 rounded-lg'>
                    <div className='flex items-center mb-2'>
                      <div className='w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-2'>
                        <FileText className='w-4 h-4 text-green-400' />
                      </div>
                      <span className='text-white font-medium'>
                        Drafts Ready
                      </span>
                    </div>
                    <p className='text-2xl font-bold text-white'>5</p>
                    <p className='text-sm text-gray-400'>Awaiting approval</p>
                  </div>
                </div>
                <Button className='w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'>
                  Manage Emails
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Actions & AI Insights */}
          <div className='space-y-6'>
            {/* Quick Actions */}
            <Card className='glass-card border-white/10'>
              <CardHeader>
                <CardTitle className='text-white'>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className='space-y-3'>
                <Button
                  variant='outline'
                  className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                >
                  <Mail className='w-4 h-4 mr-2' />
                  Check Emails
                </Button>
                <Button
                  variant='outline'
                  className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                >
                  <Calendar className='w-4 h-4 mr-2' />
                  Schedule Meeting
                </Button>
                <Button
                  variant='outline'
                  className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                >
                  <Target className='w-4 h-4 mr-2' />
                  Set Goals
                </Button>
                <Button
                  variant='outline'
                  className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                >
                  <Settings className='w-4 h-4 mr-2' />
                  AI Settings
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className='glass-card border-white/10'>
              <CardHeader>
                <CardTitle className='text-white flex items-center'>
                  <Brain className='w-5 h-5 mr-2 text-purple-400' />
                  AI Insights
                </CardTitle>
                <CardDescription>Personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <div className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-3 rounded-lg'>
                    <p className='text-white font-medium'>Focus Time</p>
                    <p className='text-sm text-gray-300'>
                      You have 3 hours of meetings tomorrow. Consider blocking
                      focus time in the morning.
                    </p>
                  </div>
                  <div className='bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 rounded-lg'>
                    <p className='text-white font-medium'>Email Patterns</p>
                    <p className='text-sm text-gray-300'>
                      You receive most emails between 2-4 PM. Schedule email
                      reviews during this time.
                    </p>
                  </div>
                  <div className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-lg'>
                    <p className='text-white font-medium'>Productivity Peak</p>
                    <p className='text-sm text-gray-300'>
                      Your most productive hours are 9-11 AM. Schedule important
                      work during this window.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className='glass-card border-white/10'>
              <CardHeader>
                <CardTitle className='text-white'>Need Help?</CardTitle>
                <CardDescription>
                  Get support with your AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-3'>
                  <Button
                    variant='outline'
                    className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                  >
                    <HelpCircle className='w-4 h-4 mr-2' />
                    Documentation
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                  >
                    <Shield className='w-4 h-4 mr-2' />
                    Privacy Settings
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full justify-start bg-white/5 border-white/10 text-white hover:bg-white/10'
                  >
                    <Users className='w-4 h-4 mr-2' />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
