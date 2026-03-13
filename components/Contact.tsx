import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2>

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            프로젝트 문의나 협업 제안이 있으시다면 언제든지 연락주세요!
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              함께 성장하며 좋은 결과를 만들어가고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
