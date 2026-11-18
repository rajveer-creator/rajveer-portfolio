import { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, ArrowUpRight } from 'lucide-react';
import personal from '../data/personal';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsReady(false);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Client-side validated mailto preparation (honest, no fake backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsReady(true);
      // Attempt opening mailto directly
      window.location.href = mailtoLink;
    }, 200);
  };

  return (
    <div className="section-padding relative">
      <div className="section-container-wide">
        {/* Editorial Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 border-b border-paper-border pb-8 sm:pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
            Contact
          </p>
          <h1 className="font-display font-extrabold tracking-tight text-ink uppercase text-[clamp(2.15rem,6.5vw,5.5rem)] leading-[0.95] sm:leading-[0.88] select-none">
            <span className="block whitespace-nowrap">Get in</span>
            <span className="block whitespace-nowrap text-stroke text-stroke-hover">
              Touch.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed">
            Whether you want to discuss an internship, technical collaboration, open-source projects, or simply say hello &mdash; my inbox is open.
          </p>
        </div>

        {/* Asymmetric Contact Grid */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-paper-border bg-paper-card p-6 sm:p-8 shadow-xs">
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink mb-6">
                Direct Channels
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-muted border border-paper-border text-ink">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-ink-muted uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="block truncate text-sm sm:text-base font-semibold text-ink hover:underline mt-0.5"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-muted border border-paper-border text-ink">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-ink-muted uppercase">
                      LinkedIn
                    </p>
                    <a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-ink hover:underline mt-0.5"
                    >
                      <span>Rajveer Gurjar</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper-muted border border-paper-border text-ink">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-ink-muted uppercase">
                      Location
                    </p>
                    <p className="text-sm sm:text-base text-ink-soft mt-0.5 font-medium">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-paper-border">
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  I typically respond to inquiries within 24 to 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-composed Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-paper-border bg-paper p-6 sm:p-8 md:p-10">
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-1 mb-6">
                Fill in the details below. Submitting validates your message and prepares it in your email application.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                  >
                    Your Name <span className="text-ink-muted">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className={`w-full rounded-lg border bg-paper-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-hidden focus:ring-2 focus:ring-ink ${
                      errors.name ? 'border-red-500' : 'border-paper-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                  >
                    Email Address <span className="text-ink-muted">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`w-full rounded-lg border bg-paper-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-hidden focus:ring-2 focus:ring-ink ${
                      errors.email ? 'border-red-500' : 'border-paper-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                  >
                    Subject <span className="text-ink-muted">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship inquiry or project collaboration"
                    className={`w-full rounded-lg border bg-paper-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-hidden focus:ring-2 focus:ring-ink ${
                      errors.subject ? 'border-red-500' : 'border-paper-border'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 font-mono text-xs text-red-500">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-ink mb-1.5"
                  >
                    Message <span className="text-ink-muted">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or question here..."
                    className={`w-full rounded-lg border bg-paper-card px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-hidden focus:ring-2 focus:ring-ink ${
                      errors.message ? 'border-red-500' : 'border-paper-border'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="lime"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto justify-center"
                  >
                    <Send size={14} />
                    <span>{isSubmitting ? 'Preparing...' : 'Compose Email'}</span>
                  </Button>
                </div>

                {/* Direct mailto backup if automatic redirect is blocked */}
                {isReady && (
                  <div className="mt-4 rounded-lg border border-paper-border bg-paper-muted p-4 text-xs text-ink-soft">
                    <p className="font-semibold text-ink">Email client ready:</p>
                    <p className="mt-1 text-ink-muted">
                      If your default email app did not open automatically,{' '}
                      <a
                        href={mailtoLink}
                        className="underline font-semibold text-ink hover:text-accent-dark"
                      >
                        click here to open it directly
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
