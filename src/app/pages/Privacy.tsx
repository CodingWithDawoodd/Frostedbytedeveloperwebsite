import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Link2 } from 'lucide-react';
import { apps } from '../data/apps';

const SITE_URL = 'https://frostedbyte.thedigimavericks.com';

export function Privacy() {
  const { appId } = useParams();
  const app = apps.find((a) => a.id === appId) || apps[0];

  const supportPath = app?.supportUrl || '/support';
  const privacyPath = app ? `/privacy/${app.id}` : '/privacy';
  const supportUrl = `${SITE_URL}${supportPath}`;
  const privacyUrl = `${SITE_URL}${privacyPath}`;

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-purple-950/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Shield className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">Legal</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-2">Privacy Policy</h1>
          {app && <p className="text-xl text-gray-400 mb-4">for {app.name}</p>}
          <p className="text-sm text-gray-500 mb-10">Last updated: March 8, 2026</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-8"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Link2 className="text-white" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Store Submission Links</h2>
              <p className="text-gray-300 mb-3">
                Use the links below in App Store Connect / Play Console:
              </p>
              <ul className="space-y-2 text-gray-200 break-all">
                <li>
                  <strong className="text-white">Privacy Policy URL:</strong>{' '}
                  <a href={privacyUrl} className="text-blue-300 hover:text-blue-200">{privacyUrl}</a>
                </li>
                <li>
                  <strong className="text-white">App Support URL:</strong>{' '}
                  <a href={supportUrl} className="text-blue-300 hover:text-blue-200">{supportUrl}</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  FrostedByte ("we," "our," or "us") publishes mobile applications including
                  Budget and Financial Tracker. This policy explains what data we process,
                  why we process it, and how to contact us.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We May Collect</h2>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>Basic device/app diagnostics (for stability and crash resolution)</li>
                  <li>Usage analytics (feature usage, session-level aggregate behavior)</li>
                  <li>Support communication data when you contact us by email</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Data</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Operate core features and maintain app reliability</li>
              <li>Investigate bugs and improve performance</li>
              <li>Respond to support requests</li>
              <li>Plan product improvements based on aggregate trends</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              If enabled in a release build, we may use analytics and crash-reporting services
              to understand app stability and usage patterns.
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Firebase Analytics (optional)</li>
              <li>Crashlytics (optional)</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Security and Retention</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use reasonable safeguards to protect information. Data provided for support
                  is kept only as long as needed to resolve requests and comply with legal obligations.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              Our apps are not directed to children under 13, and we do not knowingly collect
              personal data from children under 13.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Policy Updates</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this policy from time to time. Any updates will be posted on this page
              with the revised "Last updated" date.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Contact and Support</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              For privacy questions, support requests, or data deletion requests, contact us:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 space-y-3">
              <p className="text-gray-300">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:support@frostedbyte.thedigimavericks.com" className="text-blue-400 hover:text-blue-300">
                  support@frostedbyte.thedigimavericks.com
                </a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Support Page:</strong>{' '}
                <Link to={supportPath} className="text-blue-400 hover:text-blue-300">
                  {supportPath}
                </Link>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Developer:</strong> FrostedByte
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
