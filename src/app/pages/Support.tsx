import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Bug, Lightbulb, CreditCard, HelpCircle } from 'lucide-react';
import { apps } from '../data/apps';

const SUPPORT_EMAIL = 'support@frostedbyte.thedigimavericks.com';

const appIds = new Set(apps.map((app) => app.id));
const hashValue = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
const defaultApp = appIds.has(hashValue) ? hashValue : '';

export function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    app: defaultApp,
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedApp = formData.app === 'general'
      ? 'General Inquiry'
      : apps.find((app) => app.id === formData.app)?.name || formData.app;

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `App: ${selectedApp || 'Not specified'}`,
      '',
      formData.message
    ].join('\n');

    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      icon: <HelpCircle size={24} />,
      question: 'App not working properly?',
      answer: 'Try closing and reopening the app. If the issue persists, restart your device. Make sure you have the latest version of the app installed.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb size={24} />,
      question: 'How do I request a new feature?',
      answer: 'We love hearing your ideas. Use the support form to send feature requests and we review them regularly.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Bug size={24} />,
      question: 'Found a bug?',
      answer: 'Please include your device model, OS version, and steps to reproduce. Screenshots are very helpful.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: <CreditCard size={24} />,
      question: 'Subscription or payment issues?',
      answer: 'Subscriptions are managed in Apple App Store or Google Play account settings, depending on your purchase platform.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-gray-900 to-purple-950/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <MessageCircle className="text-blue-400" size={18} />
            <span className="text-blue-400 text-sm font-medium">Support Center</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">How can we help?</h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions or contact our support team.
          </p>
        </motion.div>

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-white mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${faq.gradient} rounded-xl flex items-center justify-center text-white`}>
                    {faq.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">{faq.question}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Contact Support</h2>
                <p className="text-sm text-gray-400">Opens your default email app with prefilled details.</p>
              </div>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm"
              >
                Draft created. If your email app did not open, send your request directly to {SUPPORT_EMAIL}.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="app" className="block text-sm font-medium text-gray-300 mb-2">Which app?</label>
                <select
                  id="app"
                  name="app"
                  value={formData.app}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all"
                >
                  <option value="">Select an app</option>
                  {apps.map((app) => (
                    <option key={app.id} value={app.id}>{app.name}</option>
                  ))}
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 resize-none transition-all"
                  placeholder="Tell us more about your question or issue..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium"
              >
                Send via Email App
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Mail size={20} />
                <span className="text-sm">
                  Or email us directly at{' '}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
