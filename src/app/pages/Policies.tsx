import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, FileText, Database, Mail } from 'lucide-react';

export function Policies() {
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
            <Shield className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">App Policies</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Policy Center</h1>
          <p className="text-xl text-gray-400">
            Everything related to privacy, terms, and data rights in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/privacy"
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-7 border border-gray-700 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="text-blue-400" size={22} />
              <h2 className="text-2xl font-semibold text-white">Privacy Policy</h2>
            </div>
            <p className="text-gray-400">
              How FrostedByte apps collect, use, and protect information.
            </p>
          </Link>

          <Link
            to="/terms"
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-7 border border-gray-700 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="text-blue-400" size={22} />
              <h2 className="text-2xl font-semibold text-white">Terms of Use</h2>
            </div>
            <p className="text-gray-400">
              Rules, license terms, and limitations for using our apps and website.
            </p>
          </Link>

          <Link
            to="/data-deletion"
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-7 border border-gray-700 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Database className="text-blue-400" size={22} />
              <h2 className="text-2xl font-semibold text-white">Data Deletion</h2>
            </div>
            <p className="text-gray-400">
              Instructions for requesting account/data deletion for supported apps.
            </p>
          </Link>

          <Link
            to="/support"
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-7 border border-gray-700 hover:border-blue-500/50 transition-all"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="text-blue-400" size={22} />
              <h2 className="text-2xl font-semibold text-white">Support & Contact</h2>
            </div>
            <p className="text-gray-400">
              Reach out for support, legal questions, or policy clarification.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
