import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white text-gray-800 shadow-md py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Company Logo */}
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="focus:outline-none"
            >
              <img 
                src="342424324.png" 
                alt="El&K株式会社" 
                className="h-8 w-auto cursor-pointer"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: '業務内容', href: '#業務内容' },
              { name: '会社概要', href: '#会社概要' },
              { name: '施工実績', href: '#施工実績' },
              { name: 'リクルート', href: '#リクルート' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`font-medium hover:text-amber-500 transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { name: '業務内容', href: '#業務内容' },
              { name: '会社概要', href: '#会社概要' },
              { name: '施工実績', href: '#施工実績' },
              { name: 'リクルート', href: '#リクルート' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-gray-700 hover:text-amber-500 transition-colors py-2 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;