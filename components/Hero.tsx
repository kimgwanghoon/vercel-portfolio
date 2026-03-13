import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {personalInfo.name}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
          {personalInfo.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          {personalInfo.introduction}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
          >
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}
