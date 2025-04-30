
const Experience = () => {
  const experiences = [
    {
      company: "Etisalat by e&",
      period: "2019 - Present",
      roles: [
        {
          title: "Engineer III",
          period: "2023 - Present",
          description: "Leading development of generative AI, MLOps, and scaling infra."
        },
        {
          title: "Project Lead",
          period: "2021 - 2023",
          description: "Led cross-functional teams to build and deploy AI products."
        },
        {
          title: "Engineer II",
          period: "2019 - 2021",
          description: "Worked on foundational AI models and infrastructure setup."
        },
      ]
    },
    {
      company: "Oracle.",
      period: "2013 - 2019",
      roles: [
        {
          title: "Project Lead",
          period: "2017 - 2019",
          description: "Managed a team delivering enterprise-grade applications."
        },
        {
          title: "Senior Applications Developer",
          period: "2015 - 2017",
          description: "Led feature development and mentored junior devs."
        },
        {
          title: "Applications Developer",
          period: "2013 - 2015",
          description: "Built internal tools and supported legacy systems."
        }
      ]
    }
  ];




  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="pb-4">
                <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <div className="space-y-6 pl-6 border-l-2 border-gray-200 ml-3">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    <div className="absolute -left-3 top-1.5 w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <div>
                      <h4 className="text-md font-semibold text-gray-800">{role.title}</h4>
                      <p className="text-sm text-gray-500 italic">{role.period}</p>
                      <p className="mt-1 text-gray-700 text-sm">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


};

export default Experience;