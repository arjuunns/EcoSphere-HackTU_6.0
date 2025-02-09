import React from "react";

const GreenHeroes = () => {
  return (
    <section id="greenHeroes" className="py-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] p-6 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="animate__animated animate__fadeIn mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-800">
            Green Heroes
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Celebrating individuals and organizations making India cleaner and greener
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {heroes.map((hero, index) => (
            <div
              key={index}
              className={`animate__animated animate__fadeInUp overflow-hidden rounded-xl bg-white shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-2 bg-green-700"></div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 pb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200">
                    <hero.icon className="h-8 w-8 text-neutral-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{hero.name}</h3>
                    <p className="text-green-600">{hero.role}</p>
                  </div>
                </div>
                <p className="mb-4 text-neutral-600">{hero.description}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  {hero.stats.map((stat, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <div className="w-10 h-10"><stat.icon className="h-4 w-4" /></div>
                      {stat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const heroes = [
  {
    name: "Amit Verma",
    role: "River Cleanup Activist",
    description:
      "Organized large-scale cleanups along the Yamuna river, removing over 5 tons of plastic waste and educating locals on waste segregation.",
    icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    stats: [
      { label: "500+ Volunteers", icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857" /></svg> },
      { label: "5 Tons of Waste Removed", icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    ],
  },
  {
    name: "Neha Sharma",
    role: "Sustainable Farming Advocate",
    description:
      "Trained over 1,000 farmers in Delhi on organic farming techniques, reducing pesticide use and increasing crop sustainability.",
    icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    stats: [
      { label: "1,000+ Farmers Trained", icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
      { label: "30% Less Pesticide Use", icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857" /></svg> },
    ],
  },
  {
    name: "Rajiv Nair",
    role: "Urban Green Spaces Champion",
    description:
      "Planted 10,000 trees across Delhi's public spaces, transforming barren land into thriving urban forests and parks.",
    icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    stats: [
      { label: "10,000+ Trees Planted", icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
      { label: "50+ Parks Revitalized", icon: () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857" /></svg> },
    ],
  },
];

export default GreenHeroes;
