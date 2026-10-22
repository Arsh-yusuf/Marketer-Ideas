import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'SEO (Search Engine Optimization)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Social Media Marketing',
    'SEO (Search Engine Optimization)',
    'Content Writing',
    'Google Business Profile Optimization',
    'Website SEO',
    'Keyword Research',
    'Canva Design',
    'Digital Marketing Strategy',
    'Custom Agency Package',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.name.trim()) {
      setError('Please provide your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid business email address.');
      return;
    }

    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setError('Please provide a message describing your business goals (at least 10 characters).');
      return;
    }

    setLoading(true);

    // Simulate realistic asynchronous submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onClearPreselectedService) {
        onClearPreselectedService();
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'SEO (Search Engine Optimization)',
      message: '',
    });
    setSubmitted(false);
    setError(null);
  };

  return (
    <div id="contact" className="py-16 lg:py-24 bg-neutral-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-3">
            <span>Contact Us</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span>Start Your Growth</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Let&apos;s Build Your{' '}
            <span className="text-orange-600">Marketing Engine</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 text-balance leading-relaxed">
            Have a project in mind or need expert advice? Reach out to Marketer Ides today. We analyze your requirements and provide an actionable growth proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: “Get In Touch” Agency Contact Information */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-neutral-800">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
                  Get In Touch
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Marketer Ides Agency
                </h3>
                <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                  Direct communication with freelance digital marketing specialists ready to take your project from concept to top rankings.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-5 pt-4 border-t border-neutral-800">
                
                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 text-orange-400 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Official Website</div>
                    <a
                      href="https://marketerideas.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      marketerideas.online
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 text-orange-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Direct Inquiries</div>
                    <a
                      href="mailto:hello@marketerideas.online"
                      className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      hello@marketerideas.online
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 text-orange-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Phone &amp; WhatsApp</div>
                    <a
                      href="tel:+15553824337"
                      className="text-sm font-semibold text-white hover:text-orange-400 transition-colors font-mono tabular-nums"
                    >
                      +1 (555) 382-4337
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 text-orange-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Response Hours</div>
                    <div className="text-sm font-semibold text-white">
                      Mon – Sat: 9:00 AM – 7:00 PM EST
                    </div>
                    <div className="text-xs text-orange-400 mt-0.5">
                      Average response time: &lt; 2 hours
                    </div>
                  </div>
                </div>

              </div>

              {/* Agency Value Callout */}
              <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-xs text-neutral-300 leading-relaxed">
                <span className="font-bold text-white block mb-1">Freelance Commitment:</span>
                We treat every client with the personal care of an in-house partner. No outsourced overseas handoffs or ghosting.
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-neutral-200">
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900">
                  Thank You, {formData.name}!
                </h3>
                
                <p className="text-neutral-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Your message has been received by <strong>Marketer Ides</strong>. Our team will review your requirements for <strong>{formData.service}</strong> and get back to you at <strong>{formData.email}</strong> within 2 business hours.
                </p>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 text-sm font-semibold text-orange-600 hover:text-white bg-orange-50 hover:bg-orange-600 border border-orange-200 hover:border-orange-600 rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-neutral-900">Send Us a Message</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Fill out the form below and we will prepare a personalized marketing recommendation.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Your Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Business Email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Interested Service Dropdown */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 text-sm bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Your Message / Goals <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about your business, website URL, target audience, and current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-orange-500 hover:bg-orange-600 disabled:opacity-70 shadow-md shadow-orange-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry to Marketer Ides</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
