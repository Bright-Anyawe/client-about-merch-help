'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Logo
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/about" className="flex items-center text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/merch" className="flex items-center text-gray-600 hover:text-gray-900">
              Merch
            </Link>
            <Link href="/help" className="flex items-center text-gray-600 hover:text-gray-900">
              Help
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 