import { Helmet } from 'react-helmet-async'

export default function Staff(){
  const team = [
    {n:'Dr. Aisha Mensah', t:'Consultant Physician', d:'Internal medicine, preventive care, chronic disease management.'},
    {n:'Dr. David Ofori', t:'Dental Surgeon', d:'Comprehensive dentistry and cosmetic procedures.'},
    {n:'Matilda Owusu', t:'Senior Midwife', d:'Maternal and newborn care with compassion.'},
    {n:'Samuel Tetteh', t:'Head Nurse', d:'Quality assurance and patient advocacy across wards.'},
    {n:'Grace Appiah', t:'Pediatric Nurse', d:'Child-centered care with a gentle approach.'},
    {n:'Dr. Kwame Boateng', t:'Cardiologist', d:'Heart health diagnostics and long-term cardiac care.'},
    {n:'Dr. Linda Owusu', t:'Orthopedic Specialist', d:'Joint and bone care; sports injury management.'},
    {n:'Kojo Nartey', t:'Lab Scientist', d:'Accurate lab diagnostics and timely reporting.'},
  ]
  return (
    <section className="py-16">
      <Helmet><title>Our Staff | Gallena Medical Centre</title></Helmet>
      <div className="container-1120">
        <div className="max-w-3xl mx-auto text-center mb-7"><h1 className="text-3xl font-semibold">Meet Our Team</h1><p className="muted">Highly skilled and compassionate professionals dedicated to your care.</p></div>
        <div className="grid gap-5 md:grid-cols-4">
          {team.map(p=> (
            <article key={p.n} className="card">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-100 to-cyan-100 border border-slate-200 mb-2"/>
              <h3 className="font-semibold">{p.n}</h3>
              <p className="muted">{p.t}</p>
              <p>{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


