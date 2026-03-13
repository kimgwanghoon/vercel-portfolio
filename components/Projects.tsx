"use client";

import { useState } from 'react';
import { mainProjects, otherProjects } from '@/data/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

        {/* Main Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">주요 프로젝트</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.period}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  {selectedProject === project.id && (
                    <div className="mt-4 space-y-4 border-t pt-4">
                      <div>
                        <h5 className="font-semibold mb-2">주요 기능</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {project.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">기술 스택</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">주요 성과</h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {selectedProject === project.id ? '접기 ▲' : '자세히 보기 ▼'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">기타 프로젝트</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <h4 className="font-bold mb-2">{project.title}</h4>
                {project.period && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
                )}
                {project.company && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{project.company}</p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
                {project.achievements && (
                  <ul className="list-disc list-inside text-xs text-gray-500 dark:text-gray-500">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
