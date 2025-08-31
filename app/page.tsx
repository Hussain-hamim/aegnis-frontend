'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Brain,
  Calendar,
  Mail,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Users,
  Target,
  Sparkles,
  Code,
  Database,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import Header from '@/components/Header';

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { user, logout } = useAuthContext();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className='min-h-screen night-sky-bg'>
      <Header />

      <section className='relative overflow-hidden py-20 lg:py-32'>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge
              variant='secondary'
              className='mb-6 animate-pulse-glow bg-white/10 text-white border-white/20 backdrop-blur-sm'
            >
              <Sparkles className='w-4 h-4 mr-2' />
              Your AI Chief of Staff
            </Badge>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6'>
              <span className='text-white'>AI Personal Assistant</span>
              <br />
              <span className='text-white'>That</span>{' '}
              <span className='bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent'>
                Thinks and Acts
              </span>
            </h1>
            <p className='text-xl text-gray-300 text-balance max-w-3xl mx-auto mb-8'>
              Aegnis is a "contact-center grade" AI stack for personal
              productivity. Write simple commands to build and orchestrate your
              entire digital workflow. We'll handle the complexity while you
              focus on what matters.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 font-medium'
              >
                Start Building
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm'
              >
                Apply for an AI-assistant workshop
              </Button>
            </div>
            <p className='text-sm text-gray-400 mt-4'>
              No credit card required • 14-day free trial
            </p>
          </div>

          <div className='mt-16 max-w-5xl mx-auto'>
            <div className='demo-mockup rounded-2xl p-8'>
              <div className='grid lg:grid-cols-2 gap-8 items-center'>
                <div className='space-y-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                    <span className='text-green-400 font-medium'>
                      Aegnis AI Active
                    </span>
                  </div>

                  <div className='space-y-4'>
                    <div className='bg-gray-900/50 rounded-lg p-4 border border-white/10'>
                      <div className='flex items-center space-x-2 mb-2'>
                        <Code className='w-4 h-4 text-purple-400' />
                        <span className='text-sm text-purple-300 font-mono'>
                          Function: manage_emails
                        </span>
                      </div>
                      <div className='text-xs text-gray-400 font-mono'>
                        Processing 47 unread emails...
                        <br />
                        Drafting 12 responses in your tone...
                        <br />
                        Scheduling 3 follow-ups...
                      </div>
                    </div>

                    <div className='bg-gray-900/50 rounded-lg p-4 border border-white/10'>
                      <div className='flex items-center space-x-2 mb-2'>
                        <Calendar className='w-4 h-4 text-blue-400' />
                        <span className='text-sm text-blue-300 font-mono'>
                          Function: optimize_calendar
                        </span>
                      </div>
                      <div className='text-xs text-gray-400 font-mono'>
                        Blocking 2 hours for deep work...
                        <br />
                        Rescheduling low-priority meetings...
                        <br />
                        Adding buffer time between calls...
                      </div>
                    </div>

                    <div className='bg-gray-900/50 rounded-lg p-4 border border-white/10'>
                      <div className='flex items-center space-x-2 mb-2'>
                        <Database className='w-4 h-4 text-green-400' />
                        <span className='text-sm text-green-300 font-mono'>
                          Function: sync_life_data
                        </span>
                      </div>
                      <div className='text-xs text-gray-400 font-mono'>
                        Updating health metrics...
                        <br />
                        Tracking expense patterns...
                        <br />
                        Analyzing productivity trends...
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-gray-900/30 rounded-lg p-6 border border-white/10'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-semibold text-white'>
                      Today's Impact
                    </h3>
                    <div className='flex items-center space-x-1'>
                      <Cpu className='w-4 h-4 text-purple-400' />
                      <span className='text-xs text-purple-300'>
                        AI Processing
                      </span>
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-300'>Emails processed</span>
                      <span className='text-white font-semibold'>47</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-300'>Meetings optimized</span>
                      <span className='text-white font-semibold'>8</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-300'>Tasks automated</span>
                      <span className='text-white font-semibold'>23</span>
                    </div>
                    <div className='border-t border-white/10 pt-3 mt-3'>
                      <div className='flex items-center justify-between'>
                        <span className='text-purple-300 font-medium'>
                          Time saved today
                        </span>
                        <span className='text-purple-300 font-bold text-lg'>
                          3.5 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='features' className='py-20 lg:py-32 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 scroll-animate'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
              The Magic Behind Aegnis
            </h2>
            <p className='text-xl text-gray-300 text-balance max-w-2xl mx-auto'>
              Powerful AI that learns your preferences and takes action on your
              behalf
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors'>
                  <Mail className='w-6 h-6 text-purple-400' />
                </div>
                <CardTitle className='text-white'>Intelligent Inbox</CardTitle>
                <CardDescription className='text-gray-300'>
                  Auto-triage emails and draft responses in your personal tone
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors'>
                  <Calendar className='w-6 h-6 text-blue-400' />
                </div>
                <CardTitle className='text-white'>
                  Autonomous Calendar
                </CardTitle>
                <CardDescription className='text-gray-300'>
                  Smart scheduling that protects your time and optimizes your
                  day
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors'>
                  <Target className='w-6 h-6 text-green-400' />
                </div>
                <CardTitle className='text-white'>Life Dashboard</CardTitle>
                <CardDescription className='text-gray-300'>
                  Unified view of tasks, health, finances, and goals in one
                  place
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors'>
                  <Shield className='w-6 h-6 text-yellow-400' />
                </div>
                <CardTitle className='text-white'>Total Transparency</CardTitle>
                <CardDescription className='text-gray-300'>
                  Every action is logged and explained. You're always in control
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors'>
                  <Zap className='w-6 h-6 text-pink-400' />
                </div>
                <CardTitle className='text-white'>
                  Continuous Learning
                </CardTitle>
                <CardDescription className='text-gray-300'>
                  Gets better over time by learning from your preferences and
                  feedback
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors'>
                  <CheckCircle className='w-6 h-6 text-indigo-400' />
                </div>
                <CardTitle className='text-white'>Proactive Actions</CardTitle>
                <CardDescription className='text-gray-300'>
                  Suggests and executes tasks before you even think about them
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 scroll-animate'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
              Trusted by Professionals Worldwide
            </h2>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center scroll-animate'>
              <div className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                10K+
              </div>
              <div className='text-gray-300'>Active Users</div>
            </div>
            <div className='text-center scroll-animate'>
              <div className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                2M+
              </div>
              <div className='text-gray-300'>Tasks Automated</div>
            </div>
            <div className='text-center scroll-animate'>
              <div className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                15hrs
              </div>
              <div className='text-gray-300'>Saved Per Week</div>
            </div>
            <div className='text-center scroll-animate'>
              <div className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                99.9%
              </div>
              <div className='text-gray-300'>Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonials' className='py-20 lg:py-32 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 scroll-animate'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
              Loved by Busy Professionals
            </h2>
            <p className='text-xl text-gray-300'>
              See how Aegnis transforms daily productivity
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardContent className='pt-6'>
                <div className='flex items-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-gray-300 mb-4'>
                  "Aegnis has completely transformed how I manage my day. It's
                  like having a personal assistant who never sleeps."
                </p>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3'>
                    <Users className='w-5 h-5 text-purple-400' />
                  </div>
                  <div>
                    <div className='font-semibold text-white'>Sarah Chen</div>
                    <div className='text-sm text-gray-400'>
                      Product Manager, TechCorp
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardContent className='pt-6'>
                <div className='flex items-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-gray-300 mb-4'>
                  "I save 3 hours every day on email management alone. The AI
                  drafts are so accurate, I rarely need to edit them."
                </p>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3'>
                    <Users className='w-5 h-5 text-blue-400' />
                  </div>
                  <div>
                    <div className='font-semibold text-white'>
                      Marcus Rodriguez
                    </div>
                    <div className='text-sm text-gray-400'>CEO, StartupXYZ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='scroll-animate bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardContent className='pt-6'>
                <div className='flex items-center mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <p className='text-gray-300 mb-4'>
                  "The calendar optimization is incredible. It automatically
                  blocks focus time and declines low-priority meetings."
                </p>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3'>
                    <Users className='w-5 h-5 text-green-400' />
                  </div>
                  <div>
                    <div className='font-semibold text-white'>Emily Watson</div>
                    <div className='text-sm text-gray-400'>
                      Designer, Creative Agency
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 lg:py-32 relative'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
            Ready to Transform Your Productivity?
          </h2>
          <p className='text-xl text-gray-300 mb-8'>
            Join thousands of professionals who've already made the switch to
            intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              className='text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 font-medium'
            >
              Start Your Free Trial
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm'
            >
              Schedule Demo
            </Button>
          </div>
          <p className='text-sm text-gray-400 mt-4'>
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/10 py-12 bg-black/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                  <Brain className='w-5 h-5 text-white' />
                </div>
                <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Aegnis
                </span>
              </div>
              <p className='text-gray-400'>
                Your AI-powered operating system for life and work.
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-4 text-white'>Product</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Security
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4 text-white'>Company</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4 text-white'>Support</h3>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Status
                  </Link>
                </li>
                <li>
                  <Link href='#' className='hover:text-white transition-colors'>
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='border-t border-white/10 mt-8 pt-8 text-center text-gray-400'>
            <p>&copy; 2024 Aegnis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
