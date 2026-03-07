import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { apps } from '../data/apps';

export function Privacy() {
  const { appId } = useParams();
  const app = apps.find(a => a.id === appId);

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-purple-950/20 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Shield className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">Legal</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          {app && (
            <p className="text-xl text-gray-400 mb-4">
              for {app.name}
            </p>
          )}
          <p className="text-sm text-gray-500 mb-12">
            Last updated: March 7, 2026
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Introduction */}
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Introduction
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  FrostedByte ("we," "our," or "us") operates mobile applications available 
                  on the Apple App Store and Google Play Store. This Privacy Policy explains 
                  how we collect, use, and protect your information when you use our apps.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Information Collection */}
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Information Collection
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>Device information (model, operating system version)</li>
                  <li>App usage statistics and analytics</li>
                  <li>Crash reports and diagnostic data</li>
                  <li>Information you provide when contacting support</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Use of Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Use of Information
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Improve app performance and user experience</li>
              <li>Fix bugs and technical issues</li>
              <li>Provide customer support</li>
              <li>Analyze usage patterns to develop new features</li>
            </ul>
          </motion.section>

          {/* Third Party Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Third Party Services
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our apps may use third-party services that collect information:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Google Analytics for Firebase</li>
              <li>Crashlytics for crash reporting</li>
              <li>Cloud storage providers for data backup (optional)</li>
            </ul>
          </motion.section>

          {/* Advertising */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Advertising
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Some of our apps may display advertisements through Google AdMob. AdMob may 
              collect device identifiers and usage data to provide personalized ads. You 
              can opt out of personalized advertising in your device settings.
            </p>
          </motion.section>

          {/* Data Security */}
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
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Data Security
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement industry-standard security measures to protect your information. 
                  However, no method of transmission over the internet is 100% secure. Most app 
                  data is stored locally on your device.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Children's Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Children's Information
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our apps are not directed to children under 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected 
              such information, please contact us immediately.
            </p>
          </motion.section>

          {/* Changes to Policy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of 
              any changes by posting the new policy on this page and updating the "Last 
              updated" date.
            </p>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 mb-3">
                <strong className="text-white">Email:</strong>{' '}
                <a
                  href="mailto:support@frostedbyte.thedigimavericks.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@frostedbyte.thedigimavericks.com
                </a>
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