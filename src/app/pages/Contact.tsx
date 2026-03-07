import { motion } from 'motion/react';
import { Mail, ExternalLink, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';

export function Contact() {
  const showStoreComingSoon = (platform: 'Apple App Store' | 'Google Play Store') => {
    toast.info(`Our ${platform} profile is coming soon.`);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-purple-950/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Mail className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">Contact</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-400">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Developer</h3>
                  <p className="text-white">FrostedByte</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
                  <a
                    href="mailto:support@frostedbyte.thedigimavericks.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    support@frostedbyte.thedigimavericks.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Website</h3>
                  <a
                    href="https://frostedbyte.thedigimavericks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    frostedbyte.thedigimavericks.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Response Time</h3>
                  <p className="text-white">24-48 hours</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Find Us On</h2>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => showStoreComingSoon('Apple App Store')}
                className="w-full text-left block p-6 border border-gray-700 rounded-xl hover:border-blue-500/50 hover:bg-gray-800 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white mb-1 group-hover:text-blue-400 transition-colors">
                      Apple App Store
                    </h3>
                    <p className="text-sm text-gray-400">Developer profile coming soon</p>
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => showStoreComingSoon('Google Play Store')}
                className="w-full text-left block p-6 border border-gray-700 rounded-xl hover:border-green-500/50 hover:bg-gray-800 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-white mb-1 group-hover:text-green-400 transition-colors">
                      Google Play Store
                    </h3>
                    <p className="text-sm text-gray-400">Developer profile coming soon</p>
                  </div>
                  <ExternalLink className="text-gray-500 group-hover:text-green-400 transition-colors" size={20} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 text-center"
        >
          <p className="text-sm text-gray-300">
            <strong className="text-white">Response Time:</strong> We typically respond within 24-48 hours.
            For urgent issues, use our{' '}
            <Link to="/support" className="text-blue-400 hover:text-blue-300 underline">
              support page
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
