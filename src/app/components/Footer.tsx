import { Link } from 'react-router';
import { Mail, Github, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const showSocialComingSoon = (network: 'GitHub' | 'Twitter/X') => {
    toast.info(`${network} profile is coming soon.`);
  };

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                FB
              </div>
              <span className="font-semibold text-white">FrostedByte</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Simple apps. Powerful tools.
              <br />
              Mobile apps designed to simplify everyday life.
            </p>

            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => showSocialComingSoon('GitHub')}
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="GitHub profile coming soon"
              >
                <Github size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => showSocialComingSoon('Twitter/X')}
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Twitter/X profile coming soon"
              >
                <Twitter size={18} />
              </motion.button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/policies" className="hover:text-blue-400 transition-colors">Policy Center</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="/data-deletion" className="hover:text-blue-400 transition-colors">Data Deletion</Link></li>
              <li><Link to="/support" className="hover:text-blue-400 transition-colors">Support</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Contact</h3>
            <div className="flex items-center space-x-2 text-sm">
              <Mail size={16} />
              <a
                href="mailto:support@frostedbyte.thedigimavericks.com"
                className="hover:text-blue-400 transition-colors"
              >
                support@frostedbyte.thedigimavericks.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} FrostedByte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
