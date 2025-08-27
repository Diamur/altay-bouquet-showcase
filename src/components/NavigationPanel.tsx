import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SubPanelState {
  isOpen: boolean;
  type: string;
  level: number;
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
  const [subPanels, setSubPanels] = useState<SubPanelState[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close sub-panels when main panel closes
  useEffect(() => {
    if (!isOpen) {
      setSubPanels([]);
    }
  }, [isOpen]);

  const handleItemClick = (item: any, level: number = 0) => {
    if (item.hasSubmenu) {
      // Open sub-panel
      const newSubPanel: SubPanelState = {
        isOpen: true,
        type: item.id,
        level: level + 1
      };
      
      // Replace or add sub-panel at this level
      const newSubPanels = subPanels.slice(0, level);
      newSubPanels.push(newSubPanel);
      setSubPanels(newSubPanels);
    } else {
      // Navigate to page
      console.log('Navigate to:', item.id || item.title);
      onClose();
    }
  };

  const closeSubPanelsFromLevel = (level: number) => {
    setSubPanels(prev => prev.slice(0, level));
  };

  const renderMainPanel = () => (
    <div className="p-4">
      {navigationData.main.map((item, index) => (
        <div 
          key={index}
          className="nav-item flex items-center justify-between"
          onClick={() => handleItemClick(item, 0)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span>{item.title}</span>
          {item.hasSubmenu && <ChevronRight className="h-4 w-4" />}
        </div>
      ))}
    </div>
  );

  const renderSubPanel = (panelType: string, level: number) => {
    switch (panelType) {
      case 'business':
        return (
          <div className="product-grid">
            {navigationData.business.map((item, index) => (
              <div 
                key={index}
                className="product-card p-4 text-center cursor-pointer"
                onClick={() => handleItemClick(item, level)}
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
                onClick={() => handleItemClick(item, level)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{item.title}</span>
                {item.hasSubmenu && <ChevronRight className="h-4 w-4" />}
              </div>
            ))}
          </div>
        );
      
      case 'functional-food':
      case 'herbal-tea':
      case 'balms':
        const dataKey = panelType === 'functional-food' ? 'functionalFood' : 
                       panelType === 'herbal-tea' ? 'herbalTea' : 'balms';
        const items = navigationData[dataKey as keyof typeof navigationData] as { title: string }[];
        return (
          <div className="product-grid">
            {items.map((item, index) => (
              <div 
                key={index}
                className="product-card p-4 text-center cursor-pointer"
                onClick={() => handleItemClick(item, level)}
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
        return <div></div>;
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
      
      {/* Main Navigation Panel */}
      <div 
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-1/4 nav-panel z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onMouseLeave={() => closeSubPanelsFromLevel(0)}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold text-lg">Меню</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {renderMainPanel()}
        </div>
      </div>

      {/* Sub Panels */}
      {subPanels.map((panel, index) => (
        <div
          key={`${panel.type}-${index}`}
          className={`fixed top-0 h-full w-1/4 nav-panel z-50 transform transition-transform duration-300`}
          style={{ 
            left: `${25 * (panel.level)}%`,
            transform: panel.isOpen ? 'translateX(0)' : 'translateX(-100%)'
          }}
          onMouseEnter={() => {/* Keep panel open */}}
          onMouseLeave={() => closeSubPanelsFromLevel(panel.level - 1)}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-semibold text-lg">
              {panel.type === 'business' ? 'Бизнесу' :
               panel.type === 'customers' ? 'Покупателям' :
               panel.type === 'functional-food' ? 'Функциональное питание' :
               panel.type === 'herbal-tea' ? 'Травяной чай' :
               panel.type === 'balms' ? 'Бальзамы' : 'Подменю'}
            </h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => closeSubPanelsFromLevel(panel.level - 1)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {renderSubPanel(panel.type, panel.level)}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavigationPanel;