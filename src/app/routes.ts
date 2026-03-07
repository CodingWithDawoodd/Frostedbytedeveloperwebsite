import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { DataDeletion } from './pages/DataDeletion';
import { Policies } from './pages/Policies';
import { Support } from './pages/Support';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'policies', Component: Policies },
      { path: 'privacy', Component: Privacy },
      { path: 'privacy/:appId', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: 'data-deletion', Component: DataDeletion },
      { path: 'support', Component: Support },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound }
    ]
  }
]);
