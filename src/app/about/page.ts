'use client'

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          About Youth Ignition Hub
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Youth Ignition Hub is a Christ-centered nonprofit focused on igniting purpose,
          building resilience, and equipping young Africans with life, leadership,
          and entrepreneurial skills. Our goal is to raise a generation that transforms
          barriers into launchpads and leads with intention and impact.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow mb-12 text-center max-w-3xl mx-auto">
          <p className="text-xl text-dark font-semibold mb-2">
            “Ignite Purpose. Impact Communities. Transform Africa.”
          </p>
          <p className="text-gray-600">
            Empowering youth to discover their God-given potential and lead with purpose.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-dark text-center mb-10">
          Our 5 Ignition Pathways
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'SPARK',
              desc: 'Purpose Discovery & Self-Awareness: Self-assessment, life purpose statement, goal setting, resilience building.',
              color: 'accent'
            },
            {
              title: 'FORGE',
              desc: 'Essential Life Skills: Grocery planning, cooking, transportation, car care, and habit formation.',
              color: 'earth'
            },
            {
              title: 'FLAME',
              desc: 'Financial & Legal Literacy: Budgeting, taxes, credit, avoiding debt, and legal awareness.',
              color: 'danger'
            },
            {
              title: 'BLAZE',
              desc: 'Entrepreneurship & Self-Development: Public speaking, leadership, starting a business, emotional intelligence.',
              color: 'primary'
            },
            {
              title: 'WILDFIRE',
              desc: 'Community & Global Impact: Mentorship, innovation, social and environmental responsibility.',
              color: 'dark'
            }
          ].map((item) => (
            <div
              key={item.title}
              className={`bg-white p-6 rounded-lg border-l-4 border-${item.color} shadow-md`}
            >
              <h3 className={`text-xl font-bold text-${item.color} mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
