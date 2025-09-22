import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const NewFooter = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Akash Chawla. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://twitter.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;