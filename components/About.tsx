import { careers, education, certifications, stats } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.experience}</div>
            <div className="text-gray-600 dark:text-gray-400">경력</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.projectCount}</div>
            <div className="text-gray-600 dark:text-gray-400">프로젝트</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalCommits}</div>
            <div className="text-gray-600 dark:text-gray-400">커밋 수</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stats.paymentSuccessRate}</div>
            <div className="text-gray-600 dark:text-gray-400">결제 성공률</div>
          </div>
        </div>

        {/* Career */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">경력 사항</h3>
          <div className="space-y-6">
            {careers.map((career, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-semibold">{career.company}</h4>
                  <span className="text-gray-600 dark:text-gray-400 text-sm mt-1 md:mt-0">{career.period}</span>
                </div>
                {career.department && (
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{career.department}</p>
                )}
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{career.role}</p>
                {career.description && (
                  <p className="text-gray-600 dark:text-gray-400">{career.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">학력</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold">{edu.school}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.major}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">자격증</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{cert.level}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
