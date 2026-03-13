import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© 2025 {personalInfo.name}. All rights reserved.</p>
        <p className="text-gray-400 text-sm">Backend Developer Portfolio</p>
      </div>
    </footer>
  );
}
