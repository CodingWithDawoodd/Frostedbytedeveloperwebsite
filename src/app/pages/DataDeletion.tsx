import { motion } from 'motion/react';
import { DatabaseZap } from 'lucide-react';

export function DataDeletion() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-purple-950/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <DatabaseZap className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">User Rights</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-2">Data Deletion Request</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 7, 2026</p>
        </motion.div>

        <div className="space-y-6">
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">How to Request Deletion</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Send an email with the subject line
              {' '}
              <span className="text-gray-200">&quot;Data Deletion Request&quot;</span>
              {' '}
              to:
            </p>
            <a
              href="mailto:support@frostedbyte.thedigimavericks.com?subject=Data%20Deletion%20Request"
              className="text-blue-400 hover:text-blue-300 break-all"
            >
              support@frostedbyte.thedigimavericks.com
            </a>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Include These Details</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>App name and platform (iOS or Android)</li>
              <li>Account email or identifier (if applicable)</li>
              <li>Short description of the deletion request</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Processing Timeline</h2>
            <p className="text-gray-400 leading-relaxed">
              We acknowledge requests within 48 hours and complete deletion within 30 days,
              unless we are required to retain data by law or store policy.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">What Is Deleted</h2>
            <p className="text-gray-400 leading-relaxed">
              We delete personal identifiers and associated support records where applicable.
              Some aggregate analytics and legally required records may be retained in
              anonymized form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
