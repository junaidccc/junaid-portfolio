import { useState } from 'react';
import { personalData } from '../data/personal';
import { GithubIcon, InstagramIcon } from './Icons';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MessageSquare,
} from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/10 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-3">
              <span className="text-white font-bold">05</span>
              <span>//</span>
              <span>INITIATE CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-extrabold text-white uppercase tracking-tight">
              GET IN TOUCH
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            Have a project in mind or looking for a developer? Feel free to reach out directly through email, phone, or socials.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-2">
              COMMUNICATION CHANNELS
            </h3>

            {/* Email Card */}
            <div className="p-6 bg-[#09090c] border border-white/15 hover:border-white/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-accent text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>DIRECT EMAIL</span>
                </span>
                <button
                  onClick={() => copyToClipboard(personalData.email, 'email')}
                  className="text-xs font-mono-accent text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                  aria-label="Copy email"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-base sm:text-lg font-editorial font-semibold text-white hover:text-neutral-300 transition-colors block break-all"
              >
                {personalData.email}
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 bg-[#09090c] border border-white/15 hover:border-white/30 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-accent text-[11px] uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>DIRECT PHONE &amp; WHATSAPP</span>
                </span>
                <button
                  onClick={() => copyToClipboard(personalData.phone, 'phone')}
                  className="text-xs font-mono-accent text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                  aria-label="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <a
                  href={`tel:${personalData.phone}`}
                  className="text-lg font-editorial font-semibold text-white hover:text-neutral-300 transition-colors"
                >
                  {personalData.phoneFormatted}
                </a>
                <a
                  href={`https://wa.me/91${personalData.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono-accent text-neutral-300 hover:text-white flex items-center gap-1 underline underline-offset-4"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Social Grid (GitHub & Instagram) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-[#09090c] border border-white/15 hover:border-white/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <GithubIcon className="w-5 h-5 text-white" />
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="font-mono-accent text-[10px] uppercase text-neutral-400 block mb-0.5">
                    CODE REPOSITORY
                  </span>
                  <span className="text-sm font-editorial font-bold text-white uppercase group-hover:text-neutral-200">
                    {personalData.githubHandle}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={personalData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-[#09090c] border border-white/15 hover:border-white/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <InstagramIcon className="w-5 h-5 text-white" />
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <span className="font-mono-accent text-[10px] uppercase text-neutral-400 block mb-0.5">
                    SOCIAL FEED
                  </span>
                  <span className="text-sm font-editorial font-bold text-white uppercase truncate block group-hover:text-neutral-200">
                    {personalData.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

            {/* Location Tag */}
            <div className="p-4 bg-white/[0.02] border border-white/10 font-mono-accent text-xs text-neutral-400 flex items-center justify-between">
              <span>LOCATION BASE:</span>
              <span className="text-white uppercase font-semibold">{personalData.location}</span>
            </div>
          </div>

          {/* Right Column: Quick Dispatch Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#09090c] border border-white/15">
              <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-editorial text-xl font-bold text-white uppercase">
                  DISPATCH DIRECT MESSAGE
                </h3>
                <span className="font-mono-accent text-xs text-neutral-400">
                  VIA MAIL CLIENT
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono-accent text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Your Name // Entity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-accent text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-accent text-xs uppercase tracking-wider text-neutral-400 mb-2">
                    Message // Project Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, timeline, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-mono-accent text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>SEND INQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>

                {formSubmitted && (
                  <p className="text-center font-mono-accent text-xs text-neutral-300 pt-2 animate-in fade-in">
                    Mail client triggered with your message details. Thank you!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
