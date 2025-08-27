import React from 'react';
import { Button } from '@/components/ui/button';
import heroAltai from '@/assets/hero-altai.jpg';

const MainContent: React.FC = () => {
  return (
    <main className="pt-[88px]"> {/* Account for fixed header */}
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-luxury-light to-luxury-cream">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroAltai})` }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Алтайский Букет
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Натуральные продукты функционального питания из экологически чистых регионов Алтая
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-luxury text-lg px-8 py-4">
              Каталог продукции
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              О компании
            </Button>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Наша продукция
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент натуральных продуктов для здорового образа жизни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Products */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-accent/30 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Для бизнеса</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Качественное сырье и полуфабрикаты для производителей пищевой продукции
              </p>
              <Button variant="outline" className="w-full">
                Подробнее
              </Button>
            </div>

            {/* Consumer Products */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-accent/30 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Покупателям</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Готовые продукты функционального питания, чаи и бальзамы
              </p>
              <Button variant="outline" className="w-full">
                Перейти в каталог
              </Button>
            </div>

            {/* Private Label */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-accent/30 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">СТМ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Производство продукции под собственной торговой маркой
              </p>
              <Button variant="outline" className="w-full">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroAltai})`
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Сила природы Алтая
            </h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Мы используем только экологически чистые ингредиенты, собранные в заповедных 
              уголках Алтайского края. Наши продукты сохраняют всю пользу и силу природы 
              для вашего здоровья и благополучия.
            </p>
            <Button size="lg" className="btn-luxury">
              История компании
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Качество и безопасность
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Вся наша продукция проходит строгий контроль качества на каждом этапе производства. 
                  Мы имеем все необходимые сертификаты и лицензии.
                </p>
                <ul className="space-y-2">
                  <li>✓ Сертификат соответствия ГОСТ</li>
                  <li>✓ Декларация о соответствии ТР ТС</li>
                  <li>✓ Санитарно-эпидемиологическое заключение</li>
                  <li>✓ ISO 22000 - система менеджмента безопасности</li>
                </ul>
              </div>
            </div>
            <div className="bg-accent/5 rounded-xl p-8 text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-accent/40 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">100% натурально</h3>
              <p className="text-muted-foreground">
                Без искусственных красителей, консервантов и ароматизаторов
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MainContent;