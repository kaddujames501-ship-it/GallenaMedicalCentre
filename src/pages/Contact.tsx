import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;
    if (!payload.fullName || !payload.email || !payload.message) {
      setMsg('Please fill out all required fields.');
      setStatus('err');
      return;
    }
    try {
      await new Promise((r) => setTimeout(r, 500));
      setMsg('Message sent. We will get back to you shortly.');
      setStatus('ok');
      e.currentTarget.reset();
    } catch {
      setMsg('Failed to send. Please try again.');
      setStatus('err');
    }
  }
  return (
    <section className="py-16">
      <Helmet>
        <title>Contact Us | Gallena Medical Centre</title>
      </Helmet>
      <div className="container-1120">
        <div className="max-w-3xl mx-auto text-center mb-7">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="muted">We’re here to help. Reach out via the form or the channels below.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <form onSubmit={onSubmit} className="card" noValidate>
            <label className="flex flex-col gap-2">
              <span>Full Name</span>
              <input
                name="fullName"
                required
                className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500"
              />
            </label>
            <label className="flex flex-col gap-2 mt-3">
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500"
              />
            </label>
            <label className="flex flex-col gap-2 mt-3">
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500"
              />
            </label>
            <div className="mt-3">
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </div>
            {status !== 'idle' && (
              <p
                className={`mt-3 font-medium ${status === 'ok' ? 'text-brand-navy' : 'text-red-700'}`}
              >
                {msg}
              </p>
            )}
          </form>
          <div className="card">
            <h3 className="font-semibold text-lg">Get in touch</h3>
            <p className="flex items-center gap-2">
              <strong>Email:</strong>{' '}
              <a
                className="inline-flex items-center gap-1 text-white bg-brand-navy rounded-lg px-2 py-1"
                href="mailto:gallenamedicalcentre@gmail.com"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>{' '}
                gallenamedicalcentre@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <strong>WhatsApp:</strong>{' '}
              <a
                className="inline-flex items-center gap-1 text-white bg-brand-navy rounded-lg px-2 py-1"
                href="https://wa.me/256787992588"
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.17 1.6 5.98L0 24l6.26-1.64a11.87 11.87 0 0 0 5.78 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.18-1.24-6.17-3.47-8.43zM12.05 21.2h-.01a9.9 9.9 0 0 1-5.03-1.37l-.36-.21-3.72.98.99-3.63-.24-.37a9.9 9.9 0 0 1-1.55-5.35c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.91 7.01c0 5.47-4.45 9.92-9.92 9.92zm5.64-7.44c-.31-.15-1.84-.9-2.13-1-.29-.1-.5-.15-.71.15-.21.31-.82 1-.99 1.21-.18.21-.36.23-.67.08-.31-.15-1.34-.49-2.55-1.56-.94-.84-1.58-1.88-1.76-2.19-.18-.31-.02-.48.13-.63.13-.13.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.21 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36z" />
                </svg>{' '}
                Chat on WhatsApp
              </a>
            </p>
            <p>
              <strong>Facebook:</strong>{' '}
              <a
                className="text-brand-navy"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener"
              >
                Visit our page
              </a>
            </p>
            <p>
              <strong>Address:</strong> Valley View Estate - Kitagobwa, Buwambo Rd, Wakiso, Uganda
            </p>
            <div className="mt-3 border border-slate-200 rounded-xl overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127670.45903231614!2d32.47907342490039!3d0.43780384724524285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x177db117412d78eb%3A0x661fe967add4b853!2sValley%20View%20estate%2C%20Kampala!3m2!1d0.4378043!2d32.5614754!5e0!3m2!1sen!2sug!4v1762115863796!5m2!1sen!2sug"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
