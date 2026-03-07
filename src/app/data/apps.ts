export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  privacyPolicyUrl: string;
  supportUrl: string;
}

export const apps: App[] = [
  {
    id: 'task-master',
    name: 'TaskMaster',
    description: 'Simple task management with smart reminders and productivity tracking.',
    icon: '📝',
    appStoreUrl: 'https://apps.apple.com/',
    playStoreUrl: 'https://play.google.com/',
    privacyPolicyUrl: '/privacy/task-master',
    supportUrl: '/support#task-master'
  },
  {
    id: 'budget-buddy',
    name: 'BudgetBuddy',
    description: 'Track expenses and manage your budget with ease.',
    icon: '💰',
    appStoreUrl: 'https://apps.apple.com/',
    playStoreUrl: 'https://play.google.com/',
    privacyPolicyUrl: '/privacy/budget-buddy',
    supportUrl: '/support#budget-buddy'
  },
  {
    id: 'habit-tracker',
    name: 'HabitFlow',
    description: 'Build better habits with daily tracking and motivational insights.',
    icon: '🎯',
    appStoreUrl: 'https://apps.apple.com/',
    privacyPolicyUrl: '/privacy/habit-tracker',
    supportUrl: '/support#habit-tracker'
  }
];
