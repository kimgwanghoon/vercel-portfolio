import { techStacks, keyCompetencies } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Competencies</h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">기술 스택</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStacks).map(([category, skills]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Competencies */}
        <div>
          <h3 className="text-2xl font-bold mb-8">핵심 역량</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {keyCompetencies.map((competency, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-lg mb-4 text-blue-600 dark:text-blue-400">
                  {competency.title}
                </h4>
                <ul className="space-y-2">
                  {competency.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
