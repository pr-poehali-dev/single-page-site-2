import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectScale, setProjectScale] = useState('medium');

  const services = [
    { id: 'consulting', name: 'Консалтинг', price: 50000 },
    { id: 'development', name: 'Разработка ПО', price: 150000 },
    { id: 'design', name: 'Дизайн', price: 80000 },
    { id: 'marketing', name: 'Маркетинг', price: 60000 },
    { id: 'support', name: 'Техподдержка', price: 40000 },
  ];

  const scaleMultipliers = {
    small: 0.7,
    medium: 1,
    large: 1.5,
  };

  const calculateTotal = () => {
    const basePrice = selectedServices.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.price || 0);
    }, 0);
    return Math.round(basePrice * scaleMultipliers[projectScale as keyof typeof scaleMultipliers]);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="min-h-screen bg-muted">
      <section className="relative bg-primary text-primary-foreground py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Эффективные бизнес-решения
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Профессиональный подход к развитию вашего бизнеса
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Начать сотрудничество
          </Button>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: 'Экспертность', desc: '15+ лет на рынке' },
              { icon: 'Users', title: 'Команда', desc: '50+ специалистов' },
              { icon: 'TrendingUp', title: 'Результат', desc: '200+ проектов' },
              { icon: 'Shield', title: 'Надёжность', desc: 'Гарантия качества' },
              { icon: 'Zap', title: 'Скорость', desc: 'Быстрая реализация' },
              { icon: 'Target', title: 'Точность', desc: 'Индивидуальный подход' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={item.icon} className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Финтех проект', type: 'Банковская платформа', result: '+140% ROI' },
              { title: 'E-commerce', type: 'Интернет-магазин', result: '+250% конверсия' },
              { title: 'Логистика', type: 'Система управления', result: '-60% времени' },
              { title: 'Ритейл', type: 'CRM система', result: '+180% продажи' },
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-semibold text-lg">
                    <Icon name="TrendingUp" className="mr-2" size={20} />
                    {project.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Briefcase', title: 'Консалтинг', desc: 'Стратегическое планирование и аудит бизнес-процессов' },
              { icon: 'Code', title: 'Разработка', desc: 'Создание корпоративных систем и веб-приложений' },
              { icon: 'Palette', title: 'Дизайн', desc: 'UX/UI дизайн и брендинг для вашего бизнеса' },
              { icon: 'Megaphone', title: 'Маркетинг', desc: 'Цифровой маркетинг и продвижение' },
              { icon: 'Headphones', title: 'Поддержка', desc: 'Техническая поддержка 24/7' },
              { icon: 'BarChart', title: 'Аналитика', desc: 'Бизнес-аналитика и отчётность' },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3">
                    <Icon name={service.icon} className="text-primary-foreground" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
            Калькулятор стоимости
          </h2>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Рассчитайте стоимость услуг</CardTitle>
              <CardDescription>Выберите необходимые услуги и масштаб проекта</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Выберите услуги:</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => toggleService(service.id)}
                      />
                      <Label
                        htmlFor={service.id}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {service.name}
                      </Label>
                      <span className="text-muted-foreground font-medium">
                        {service.price.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Масштаб проекта:</h3>
                <RadioGroup value={projectScale} onValueChange={setProjectScale}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <RadioGroupItem value="small" id="small" />
                      <Label htmlFor="small" className="flex-1 cursor-pointer">
                        <div className="font-medium">Малый проект</div>
                        <div className="text-sm text-muted-foreground">До 3 месяцев, небольшая команда</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium" className="flex-1 cursor-pointer">
                        <div className="font-medium">Средний проект</div>
                        <div className="text-sm text-muted-foreground">3-6 месяцев, стандартная команда</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <RadioGroupItem value="large" id="large" />
                      <Label htmlFor="large" className="flex-1 cursor-pointer">
                        <div className="font-medium">Крупный проект</div>
                        <div className="text-sm text-muted-foreground">6+ месяцев, расширенная команда</div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="pt-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-semibold">Итоговая стоимость:</span>
                  <span className="text-3xl font-bold text-primary">
                    {calculateTotal().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button className="w-full" size="lg" disabled={selectedServices.length === 0}>
                  Получить консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
            О нас
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Надёжный партнёр для вашего бизнеса</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на комплексных решениях для развития бизнеса. 
                Наша команда профессионалов имеет опыт работы с компаниями различных масштабов — 
                от стартапов до крупных корпораций.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Используем современные технологии и проверенные методологии для достижения 
                максимальных результатов в кратчайшие сроки.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '15+', label: 'Лет опыта' },
                { number: '200+', label: 'Проектов' },
                { number: '50+', label: 'Специалистов' },
                { number: '98%', label: 'Довольных клиентов' },
              ].map((stat, idx) => (
                <Card key={idx} className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-lg mb-8 opacity-90">Свяжитесь с нами для обсуждения вашего проекта</p>
          <Button size="lg" variant="outline" className="bg-transparent border-2 hover:bg-white/10">
            Связаться с нами
          </Button>
          <div className="mt-12 pt-8 border-t border-white/20 text-sm opacity-75">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
