import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import type { App } from '../data/apps';

interface AppCardProps {
  app: App;
}

const isLiveStoreUrl = (url?: string) => {
  if (!url) {
    return false;
  }

  return ![
    'https://apps.apple.com/',
    'https://play.google.com/'
  ].includes(url);
};

export function AppCard({ app }: AppCardProps) {
  const appStoreLive = isLiveStoreUrl(app.appStoreUrl);
  const playStoreLive = isLiveStoreUrl(app.playStoreUrl);

  const showComingSoon = (store: 'App Store' | 'Google Play') => {
    toast.info(`${app.name} is coming soon on ${store}.`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg shadow-blue-500/30"
      >
        {app.icon}
      </motion.div>

      <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{app.name}</h3>
      <p className="text-sm text-gray-400 mb-4">{app.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {app.appStoreUrl && (
          appStoreLive ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg hover:bg-gray-950 transition-colors border border-gray-700"
            >
              <ExternalLink size={12} className="mr-1.5" />
              App Store
            </motion.a>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => showComingSoon('App Store')}
              className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg hover:bg-gray-950 transition-colors border border-gray-700"
            >
              <ExternalLink size={12} className="mr-1.5" />
              App Store (Soon)
            </motion.button>
          )
        )}

        {app.playStoreUrl && (
          playStoreLive ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors"
            >
              <ExternalLink size={12} className="mr-1.5" />
              Play Store
            </motion.a>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => showComingSoon('Google Play')}
              className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition-colors"
            >
              <ExternalLink size={12} className="mr-1.5" />
              Play Store (Soon)
            </motion.button>
          )
        )}
      </div>

      <div className="flex gap-4 text-sm border-t border-gray-700 pt-4">
        <Link
          to={app.privacyPolicyUrl}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Privacy
        </Link>
        <Link
          to={app.supportUrl}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Support
        </Link>
      </div>
    </motion.div>
  );
}
