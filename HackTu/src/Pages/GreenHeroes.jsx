import React from "react";

const GreenHeroes = () => {
  return (
    <section id="greenHeroes" className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="animate__animated animate__fadeIn mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-800">Green Heroes</h2>
          <p className="mx-auto max-w-2xl text-neutral-600">
            Celebrating individuals and organizations making our city cleaner
            and greener
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
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200">
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
                      <stat.icon className="h-4 w-4" />
                      {stat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-3 text-white transition-colors hover:bg-green-500">
              Nominate a Green Hero
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-[10px] text-green-700 font-semibold border-green-700 border-2 hover:bg-gray-100 transition-colors">
              Add Another Hero
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const heroes = [
  {
    name: "Sarah Johnson",
    role: "Community Leader",
    description:
      "Led the riverside cleanup initiative, removing over 2 tons of waste and establishing a community recycling program.",
    icon: () => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
    ),
    stats: [
      {
        label: "200+ Hours",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        ),
      },
      {
        label: "50+ Volunteers",
        icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Michael Lee",
    role: "Sustainability Advocate",
    description:
      "Founded an urban gardening initiative that has transformed unused spaces into thriving green areas, benefiting local communities.",
    icon: () => (<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
    </svg>
    ),
    stats: [
      {
        label: "15 Community Gardens", icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        ),
      },
      {
        label: "500+ Trees Planted", icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Emily Davis",
    role: "Eco-Educator",
    description:
      "Developed educational programs for schools, teaching thousands of students about environmental conservation and sustainability.",
    icon: () => (<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
    </svg>
    ),
    stats: [
      {
        label: "100+ Schools Reached", icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        ),
      },
      {
        label: "10,000+ Students Educated", icon: () => (
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        ),
      },
    ],
  },
];

export default GreenHeroes;
