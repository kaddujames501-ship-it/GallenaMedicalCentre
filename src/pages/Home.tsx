import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function useCarousel(length: number, intervalMs = 4500) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);
  return index;
}

export default function Home() {
  const testimonials = [
    { q: 'Professional and kind. My surgery and recovery were smooth.', a: '— Ama K.' },
    { q: 'The pediatric team made my child feel safe and happy.', a: '— Joseph N.' },
    { q: 'Easy booking and excellent dental care. Highly recommended!', a: '— Lydia A.' },
  ];
  const tIndex = useCarousel(testimonials.length);

  // simple intersection reveal
  const revealRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = revealRef.current?.querySelectorAll('.reveal-up');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('!opacity-100', '!translate-y-0');
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={revealRef}>
      <Helmet>
        <title>Gallena Medical Centre | Healthcare with Trust</title>
      </Helmet>

      <section className="py-16">
        <div className="container-1120 grid md:grid-cols-[1.1fr_.9fr] gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold reveal-up opacity-0 translate-y-3 transition">
              Compassionate Care, Modern Medicine
            </h1>
            <p className="text-brand-navy font-semibold reveal-up opacity-0 translate-y-3 transition">
              We Care to Heal !
            </p>
            <p className="muted reveal-up opacity-0 translate-y-3 transition">
              At Gallena Medical Centre, we deliver trusted, patient-centered healthcare across
              general medicine, dental, maternity, surgery, and more.
            </p>
            <div className="flex gap-3 reveal-up opacity-0 translate-y-3 transition">
              <a href="#consultation" className="btn btn-primary">
                Book Consultation
              </a>
              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
          <div aria-hidden className="reveal-up opacity-0 translate-y-3 transition">
            <div className="w-full h-[280px] rounded-2xl border border-slate-200 shadow-soft bg-[radial-gradient(1200px_300px_at_-10%_-10%,#e6fffb_10%,transparent_40%),conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,.15),rgba(14,165,233,.15),rgba(14,165,233,.06),rgba(16,185,129,.06))] dark:hidden"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container-1120">
          <div className="max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition">
            <h2 className="btn btn-primary text-2xl mb-[0.5cm] border border-brand-blue shadow-[0_8px_20px_rgba(14,165,233,.35)]">
              About Us
            </h2>
            <p className="muted">
              Gallena Medical Centre is committed to clinical excellence, safety, and compassionate
              service. Our multi-disciplinary team leverages modern technology to deliver reliable
              outcomes and a comfortable patient experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                t: 'Modern Facilities',
                d: 'State-of-the-art diagnostics and surgical suites for better, faster care.',
              },
              {
                t: 'Expert Team',
                d: 'Board-certified doctors, experienced nurses, and caring support staff.',
              },
              {
                t: 'Patient First',
                d: 'Personalized treatment plans and transparent communication at every step.',
              },
            ].map((i, idx) => (
              <div key={idx} className="card reveal-up opacity-0 translate-y-3 transition">
                <h3 className="font-semibold text-lg">{i.t}</h3>
                <p>{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-16 bg-gradient-to-b from-[#f4fbfb] to-transparent dark:bg-transparent dark:bg-black"
      >
        <div className="container-1120">
          <div className="max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition">
            <h2 className="btn btn-primary text-2xl mb-[0.5cm] border border-brand-blue shadow-[0_8px_20px_rgba(14,165,233,.35)]">
              Medical Services
            </h2>
            <p className="muted">
              Comprehensive services delivered by specialists across key disciplines.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              'General Medicine',
              'Dental',
              'Maternity',
              'Surgery',
              'Pediatrics',
              'Cardiology',
              'Orthopedics',
              'Laboratory',
            ].map((s, idx) => (
              <article key={idx} className="card reveal-up opacity-0 translate-y-3 transition">
                <h3 className="font-semibold text-lg">{s}</h3>
                <p className="muted">Learn more about our {s.toLowerCase()} services.</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-6 reveal-up opacity-0 translate-y-3 transition">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-16">
        <div className="container-1120">
          <div className="max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition">
            <h2 className="btn btn-primary text-2xl mb-[0.5cm] border border-brand-blue shadow-[0_8px_20px_rgba(14,165,233,.35)]">
              Book a Consultation
            </h2>
            <p className="muted">
              Complete the form and our team will contact you to confirm your appointment.
            </p>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <section
        id="staff"
        className="py-16 bg-gradient-to-b from-[#f4fbfb] to-transparent dark:bg-transparent dark:bg-black"
      >
        <div className="container-1120">
          <div className="max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition">
            <h2 className="btn btn-primary text-2xl mb-[0.5cm] border border-brand-blue shadow-[0_8px_20px_rgba(14,165,233,.35)]">
              Our Team
            </h2>
            <p className="muted">Dedicated professionals delivering exceptional care.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                n: 'Dr. Aisha Mensah',
                t: 'Consultant Physician',
                d: '15+ years in internal medicine with focus on preventive care.',
              },
              {
                n: 'Dr. David Ofori',
                t: 'Dental Surgeon',
                d: 'Comprehensive dental care and cosmetic dentistry specialist.',
              },
              {
                n: 'Matilda Owusu',
                t: 'Senior Midwife',
                d: 'Compassionate maternity support from antenatal to postnatal.',
              },
              {
                n: 'Samuel Tetteh',
                t: 'Head Nurse',
                d: 'Patient advocacy and quality assurance across wards.',
              },
            ].map((p, idx) => (
              <article key={idx} className="card reveal-up opacity-0 translate-y-3 transition">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-100 to-cyan-100 border border-slate-200 mb-2 dark:bg-slate-800 dark:border-slate-700" />
                <h3 className="font-semibold">{p.n}</h3>
                <p className="muted">{p.t}</p>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-6 reveal-up opacity-0 translate-y-3 transition">
            <Link to="/staff" className="btn btn-outline">
              Meet All Staff
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="py-16">
        <div className="container-1120">
          <div className="max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition">
            <h2 className="btn btn-primary text-2xl mb-[0.5cm] border border-brand-blue shadow-[0_8px_20px_rgba(14,165,233,.35)]">
              From Our Blog
            </h2>
            <p className="muted">Health tips, hospital news, and community updates.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                t: '5 Habits for a Healthier Heart',
                d: 'Small lifestyle changes that make a big difference.',
              },
              {
                t: 'What to Expect in Prenatal Care',
                d: 'Your guide to a safe and informed pregnancy journey.',
              },
              {
                t: 'Dental Checkups: Why Twice a Year?',
                d: 'Prevention and early detection keep you smiling.',
              },
            ].map((p, idx) => (
              <article key={idx} className="card reveal-up opacity-0 translate-y-3 transition">
                <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 border border-slate-200 mb-2" />
                <h3 className="font-semibold">{p.t}</h3>
                <p className="muted">{p.d}</p>
                <Link to="/blog" className="text-brand-navy font-semibold">
                  Read more
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-6 reveal-up opacity-0 translate-y-3 transition">
            <Link to="/blog" className="btn btn-outline">
              View Blog
            </Link>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-16 bg-gradient-to-b from-[#f4fbfb] to-transparent dark:bg-transparent dark:bg-black"
      >
        <div className="container-1120">
          <div className="max-w-3xl mx-auto text-center mb-7 reveal-up opacity-0 translate-y-3 transition">
            <h2 className="btn btn-primary text-2xl mb-[0.5cm] border border-brand-blue shadow-[0_8px_20px_rgba(14,165,233,.35)]">
              Patient Testimonials
            </h2>
            <p className="muted">Real stories from those we serve.</p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1">
              {testimonials.map((t, idx) => (
                <figure
                  key={idx}
                  className={`transition-opacity duration-300 ${idx === tIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
                >
                  <blockquote className="text-lg font-medium">{t.q}</blockquote>
                  <figcaption className="muted">{t.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries()) as Record<string, string>;
    if (
      !payload.fullName ||
      !payload.email ||
      !payload.phone ||
      !payload.preferredDateTime ||
      !payload.department
    ) {
      setMsg('Please complete all required fields.');
      setStatus('err');
      return;
    }
    try {
      // Replace with real API endpoint
      await new Promise((r) => setTimeout(r, 600));
      setMsg('Appointment request sent. We will contact you shortly.');
      setStatus('ok');
      e.currentTarget.reset();
    } catch {
      setMsg('Something went wrong. Please try again later or contact us.');
      setStatus('err');
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card reveal-up opacity-0 translate-y-3 transition"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span>Full Name</span>
          <input
            name="fullName"
            required
            className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]"
            placeholder="Your full name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Phone Number</span>
          <input
            name="phone"
            required
            className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]"
            placeholder="e.g. +1 555 123 4567"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Preferred Date &amp; Time</span>
          <input
            type="datetime-local"
            name="preferredDateTime"
            required
            className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]"
          />
        </label>
        <label className="flex flex-col gap-2 md:col-span-2 md:max-w-md">
          <span>Department / Service</span>
          <select
            name="department"
            required
            className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]"
          >
            <option value="" disabled selected>
              Select a department
            </option>
            {[
              'General Medicine',
              'Dental',
              'Maternity',
              'Surgery',
              'Pediatrics',
              'Cardiology',
              'Orthopedics',
              'Laboratory',
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 md:col-span-2">
          <span>Message (optional)</span>
          <textarea
            name="message"
            rows={4}
            className="w-full px-3 py-3 rounded-lg border border-slate-200 text-black bg-white placeholder:text-slate-500 focus:outline-2 focus:outline-offset-0 focus:outline-[rgba(14,165,163,.25)]"
            placeholder="Any additional details"
          />
        </label>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <button type="submit" className="btn btn-primary">
          Book Appointment
        </button>
        <p className="muted m-0 text-sm">By submitting, you agree to be contacted by our team.</p>
      </div>
      {status !== 'idle' && (
        <p className={`mt-3 font-medium ${status === 'ok' ? 'text-brand-navy' : 'text-red-700'}`}>
          {msg}
        </p>
      )}
    </form>
  );
}
