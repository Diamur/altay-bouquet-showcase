import React from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="footer-luxury" style={{ minHeight: '300px' }}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Block 1: Logo */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-primary mb-4">
              Алтайский Букет
            </h3>
            <p className="text-sm text-muted-foreground">
              Натуральные продукты из экологически чистого региона Алтая
            </p>
          </div>

          {/* Block 2: Phone & Order Button */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-medium">+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-medium">+7 (383) 987-65-43</span>
              </div>
            </div>
            <Button className="btn-luxury w-fit">
              Заказать звонок
            </Button>
          </div>

          {/* Block 3: Company Description */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h4 className="font-semibold mb-2">О компании</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Производство натуральных продуктов функционального питания, 
                травяных чаев и фитобальзамов из алтайских трав и ягод.
              </p>
            </div>
            <a 
              href="/privacy" 
              className="text-sm text-accent hover:underline transition-colors"
            >
              Обработка персональных данных
            </a>
          </div>

          {/* Block 4: Social Networks & Contacts */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a 
                    href="mailto:info@altaybuket.ru" 
                    className="text-sm hover:text-accent transition-colors"
                  >
                    info@altaybuket.ru
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Send className="h-4 w-4 text-accent" />
                  <a 
                    href="https://t.me/altaybuket" 
                    className="text-sm hover:text-accent transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Networks */}
            <div>
              <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                  <div className="w-5 h-5 bg-accent/20 rounded"></div>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                  <div className="w-5 h-5 bg-accent/20 rounded"></div>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                  <div className="w-5 h-5 bg-accent/20 rounded"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 ALTAYBUKET.RU. Все права защищены.</p>
            <p className="mt-2 md:mt-0">Сделано с ❤️ на Алтае</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;