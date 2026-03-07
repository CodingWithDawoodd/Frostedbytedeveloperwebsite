import { motion } from 'motion/react';
import { FileCheck } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-purple-950/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <FileCheck className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">Legal</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-2">Terms of Use</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: March 7, 2026</p>
        </motion.div>

        <div className="space-y-6">
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By using FrostedByte apps or this website, you agree to these Terms of Use.
              If you do not agree, do not use our services.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">License and Usage</h2>
            <p className="text-gray-400 leading-relaxed">
              FrostedByte grants you a limited, non-exclusive, non-transferable license to use
              our apps for personal or internal business use in accordance with platform rules
              (Apple App Store / Google Play).
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Prohibited Conduct</h2>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Reverse engineering, copying, or reselling the apps without authorization</li>
              <li>Using the services for unlawful, abusive, or fraudulent activities</li>
              <li>Attempting to disrupt app infrastructure, analytics, or security controls</li>
            </ul>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Disclaimers</h2>
            <p className="text-gray-400 leading-relaxed">
              The apps and website are provided on an &quot;as is&quot; and &quot;as available&quot;
              basis without warranties of any kind. We do not guarantee uninterrupted or error-free
              operation.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the maximum extent permitted by law, FrostedByte is not liable for indirect,
              incidental, special, or consequential damages resulting from use of our services.
            </p>
          </section>

          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-3">Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We may revise these terms at any time by updating this page. Continued use after
              updates means you accept the revised terms.
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p className="text-gray-400 leading-relaxed">
              For legal questions, contact
              {' '}
              <a
                href="mailto:support@frostedbyte.thedigimavericks.com"
                className="text-blue-400 hover:text-blue-300"
              >
                support@frostedbyte.thedigimavericks.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
