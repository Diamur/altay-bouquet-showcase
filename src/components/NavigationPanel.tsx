import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationData = {
  main: [
    { id: 'about', title: 'О компании', hasSubmenu: false },
    { id: 'business', title: 'Бизнесу', hasSubmenu: true },
    { id: 'customers', title: 'Покупателям', hasSubmenu: true },
    { id: 'stm', title: 'СТМ', hasSubmenu: false },
    { id: 'contacts', title: 'Контакты', hasSubmenu: false },
  ],
  
  business: [
    { id: 'crushed-berry', title: 'Дробленая ягода и пюре' },
    { id: 'direct-juice', title: 'Сок прямого отжима' },
    { id: 'pulp', title: 'Жмых (Жом) фруктовый и ягодный' },
    { id: 'seabuckthorn-oil', title: 'Концентрат масла облепихового' },
  ],
  
  customers: [
    { id: 'functional-food', title: 'Продукты функционального питания', hasSubmenu: true },
    { id: 'herbal-tea', title: 'Травяной чай', hasSubmenu: true },
    { id: 'balms', title: 'Бальзамы и фитобальзамы', hasSubmenu: true },
  ],
  
  functionalFood: [
    { title: 'Пищевой гель «Будь в тонусе» с соком яблока' },
    { title: 'Пищевой гель «Будь в тонусе» с соком лимона' },
    { title: 'Пищевой гель "Вита+"' },
    { title: 'Пищевой гель "Энтеро+"' },
    { title: 'Пищевой гель "Седатив+"' },
    { title: 'Пищевой гель "Кардио+"' },
  ],
  
  herbalTea: [
    { title: 'Иван чай с чабрецом' },
    { title: 'Иван чай со смородиной' },
    { title: 'Иван чай с облепихой' },
    { title: 'Иван чай с цветками Иван-чая' },
    { title: 'Иван чай ферментированный' },
    { title: 'Чай "Хан Алтай"' },
    { title: 'Чай «Заповедный»' },
    { title: 'Чай «Таежный»' },
    { title: 'Чай «Горноалтайский»' },
    { title: 'Чай «После баньки»' },
  ],
  
  balms: [
    { title: 'Бальзам «Вита-Вишня»' },
    { title: 'Бальзам «Спокойствие»' },
    { title: 'Бальзам «Дыхание»' },
    { title: 'Бальзам «Друг сердечный»' },
    { title: 'Бальзам «Алтайский букет» Печёночный' },
    { title: 'Бальзам «Алтайский букет» Очищающий' },
    { title: 'Бальзам «Алтайский букет» Желудочный' },
    { title: 'Бальзам «Алтайский букет» Витаминный' },
    { title: 'Бальзам «Алтайский букет» Успокаивающий' },
    { title: 'Бальзам «Алтайский букет» Антистрессовый' },
  ],
};

const NavigationPanel: React.FC<NavigationPanelProps> = ({ isOpen, onClose }) => {
  const [activePanel, setActivePanel] = useState<string>('main');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = (item: any) => {
    if (item.hasSubmenu) {
      if (item.id === 'business') {
        setActivePanel('business');
      } else if (item.id === 'customers') {
        setActivePanel('customers');
      }
    } else {
      // Navigate to page
      console.log('Navigate to:', item.id);
      onClose();
    }
  };

  const handleSubItemClick = (item: any) => {
    if (item.hasSubmenu) {
      if (item.id === 'functional-food') {
        setActivePanel('functionalFood');
      } else if (item.id === 'herbal-tea') {
        setActivePanel('herbalTea');
      } else if (item.id === 'balms') {
        setActivePanel('balms');
      }
    } else {
      console.log('Navigate to product:', item.title);
      onClose();
    }
  };

  const renderPanel = () => {
    switch (activePanel) {
      case 'business':
        return (
          <div className="product-grid">
            {navigationData.business.map((item, index) => (
              <div 
                key={index}
                className="product-card p-4 text-center cursor-pointer"
                onClick={() => handleSubItemClick(item)}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent/20 rounded"></div>
                </div>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        );
      
      case 'customers':
        return (
          <div className="p-4">
            {navigationData.customers.map((item, index) => (
              <div 
                key={index}
                className="nav-item flex items-center justify-between"
                onClick={() => handleSubItemClick(item)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{item.title}</span>
                {item.hasSubmenu && <ChevronRight className="h-4 w-4" />}
              </div>
            ))}
          </div>
        );
      
      case 'functionalFood':
      case 'herbalTea':
      case 'balms':
        const items = navigationData[activePanel as keyof typeof navigationData] as { title: string }[];
        return (
          <div className="product-grid">
            {items.map((item, index) => (
              <div 
                key={index}
                className="product-card p-4 text-center cursor-pointer"
                onClick={() => handleSubItemClick(item)}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-accent/20 rounded"></div>
                </div>
                <p className="text-xs font-medium leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="p-4">
            {navigationData.main.map((item, index) => (
              <div 
                key={index}
                className="nav-item flex items-center justify-between"
                onClick={() => handleItemClick(item)}
              >
                <span>{item.title}</span>
                {item.hasSubmenu && <ChevronRight className="h-4 w-4" />}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Navigation Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-1/4 nav-panel z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold text-lg">Меню</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {renderPanel()}
        </div>
        
        {activePanel !== 'main' && (
          <div className="p-4 border-t border-border">
            <Button 
              variant="ghost" 
              onClick={() => setActivePanel('main')}
              className="w-full justify-start"
            >
              ← Назад
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavigationPanel;