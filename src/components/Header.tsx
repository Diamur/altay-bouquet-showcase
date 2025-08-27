import React, { useState, useEffect } from 'react';
import { Menu, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 header-luxury ${
        isScrolled ? 'header-scrolled' : ''
      }`}
      style={{ height: '88px' }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        {/* Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="hover:bg-secondary transition-colors"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-2xl font-bold text-primary tracking-wide">
            Алтайский Букет
          </h1>
        </div>

        {/* Search & Phone */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по сайту..."
              className="pl-10 w-64 bg-background/50 border-border"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-accent" />
            <span className="hidden lg:inline text-foreground font-medium">
              +7 (800) 123-45-67
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;