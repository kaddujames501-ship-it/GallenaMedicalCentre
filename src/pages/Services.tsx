import { Helmet } from 'react-helmet-async'

export default function Services(){
  const services = [
    {t:'General Medicine', d:'Primary care, chronic disease management, annual physicals, preventive screening.'},
    {t:'Dental', d:'Exams, cleaning, fillings, root canals, crowns, cosmetic procedures, oral surgery.'},
    {t:'Maternity', d:'Antenatal classes, delivery, postnatal care; lactation support and mother-baby safety.'},
    {t:'Surgery', d:'General and minimally invasive procedures; pre-op to recovery support.'},
    {t:'Pediatrics', d:'Well-child visits, immunizations, acute and chronic condition management.'},
    {t:'Cardiology', d:'ECG, echocardiogram, risk assessment, medication management, ongoing follow-up.'},
    {t:'Orthopedics', d:'Fracture care, sports injuries, arthritis, joint replacement referrals, rehab.'},
    {t:'Laboratory & Imaging', d:'Blood tests, cultures, X-ray, ultrasound; accurate results supporting quick decisions.'},
  ]
  return (
    <section className="py-16">
      <Helmet><title>Services | Gallena Medical Centre</title></Helmet>
      <div className="container-1120">
        <div className="max-w-3xl mx-auto text-center mb-7"><h1 className="text-3xl font-semibold">Our Medical Services</h1><p className="muted">Comprehensive, patient-centered services delivered by experienced specialists.</p></div>
        <div className="grid gap-5 md:grid-cols-4">
          {services.map(s=> (
            <article key={s.t} className="card"><h3 className="font-semibold text-lg">{s.t}</h3><p>{s.d}</p></article>
          ))}
        </div>
      </div>
    </section>
  )
}


