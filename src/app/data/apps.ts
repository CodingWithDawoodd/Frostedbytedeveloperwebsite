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
    id: 'budget-financial-tracker',
    name: 'Budget and Financial Tracker',
    description: 'Track expenses, monitor cash flow, and stay on top of monthly budgets with a simple dashboard.',
    icon: '💰',
    appStoreUrl: 'https://apps.apple.com/',
    playStoreUrl: 'https://play.google.com/',
    privacyPolicyUrl: '/privacy/budget-financial-tracker',
    supportUrl: '/support#budget-financial-tracker'
  }
];
