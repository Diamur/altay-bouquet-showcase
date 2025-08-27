import React, { useState } from 'react';
import Header from '@/components/Header';
import NavigationPanel from '@/components/NavigationPanel';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <Header onMenuClick={handleMenuToggle} />
      
      {/* Navigation Panel */}
      <NavigationPanel isOpen={isMenuOpen} onClose={handleMenuClose} />
      
      {/* Main Content */}
      <MainContent />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
