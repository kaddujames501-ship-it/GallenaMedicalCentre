import { Helmet } from 'react-helmet-async';

export default function Blog() {
  const posts = [
    {
      t: 'Hydration and Heart Health',
      d: 'Why staying hydrated supports cardiovascular function.',
    },
    { t: 'Understanding Blood Pressure', d: 'Know your numbers and what they mean.' },
    { t: 'Childhood Vaccination Guide', d: 'Essential shots and schedules for kids.' },
    { t: 'Oral Hygiene Basics', d: 'Simple daily habits for healthier teeth.' },
    { t: 'Preparing for Surgery', d: 'What to expect from pre-op to recovery.' },
    { t: 'Managing Diabetes', d: 'Diet, exercise, and medication tips.' },
  ];
  return (
    <section className="py-16">
      <Helmet>
        <title>Blog | Gallena Medical Centre</title>
      </Helmet>
      <div className="container-1120">
        <div className="max-w-3xl mx-auto text-center mb-7">
          <h1 className="text-3xl font-semibold">Health Tips & News</h1>
          <p className="muted">Latest updates from our clinicians and community.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.t} className="card">
              <div className="w-full h-36 rounded-xl bg-gradient-to-tr from-sky-100 to-emerald-100 border border-slate-200 mb-2 dark:bg-black dark:border-slate-700" />
              <h3 className="font-semibold">{p.t}</h3>
              <p className="muted">{p.d}</p>
              <a className="text-brand-navy font-semibold" href="#">
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
