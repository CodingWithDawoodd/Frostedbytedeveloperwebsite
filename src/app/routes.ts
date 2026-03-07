import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Support } from './pages/Support';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'privacy', Component: Privacy },
      { path: 'privacy/:appId', Component: Privacy },
      { path: 'support', Component: Support },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound }
    ]
  }
]);
