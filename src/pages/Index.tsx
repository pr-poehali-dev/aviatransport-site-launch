import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [flightNumber, setFlightNumber] = useState('');
  const [flightStatus, setFlightStatus] = useState<any>(null);

  const handleFlightSearch = () => {
    // Симуляция поиска рейса
    const mockFlights = [
      {
        flightNumber: 'SU101',
        status: 'В полете',
        departure: 'Москва (SVO)',
        arrival: 'Санкт-Петербург (LED)',
        departureTime: '14:30',
        arrivalTime: '16:15',
        gate: 'A12',
        statusColor: 'bg-blue-500'
      },
      {
        flightNumber: 'SU205',
        status: 'Посадка завершена',
        departure: 'Екатеринбург (SVX)',
        arrival: 'Москва (SVO)',
        departureTime: '10:45',
        arrivalTime: '12:30',
        gate: 'B7',
        statusColor: 'bg-green-500'
      },
      {
        flightNumber: 'SU350',
        status: 'Задержка',
        departure: 'Новосибирск (OVB)',
        arrival: 'Москва (SVO)',
        departureTime: '18:20',
        arrivalTime: '20:45',
        gate: 'C15',
        statusColor: 'bg-orange-500'
      }
    ];

    const foundFlight = mockFlights.find(f => 
      f.flightNumber.toLowerCase().includes(flightNumber.toLowerCase())
    ) || mockFlights[0];
    
    setFlightStatus(foundFlight);
  };

  const fleetData = [
    {
      model: 'Boeing 737-800',
      capacity: 189,
      range: '5,765 км',
      speed: '842 км/ч',
      count: 12,
      features: ['WiFi на борту', 'Развлекательная система', 'USB зарядка']
    },
    {
      model: 'Airbus A320neo',
      capacity: 180,
      range: '6,300 км',
      speed: '833 км/ч',
      count: 8,
      features: ['Экономичные двигатели', 'Просторная кабина', 'LED освещение']
    },
    {
      model: 'Boeing 777-300ER',
      capacity: 396,
      range: '14,685 км',
      speed: '892 км/ч',
      count: 4,
      features: ['Премиум класс', 'Лежачие кресла', 'Дальние маршруты']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Icon name="Plane" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">SkyTrans</h1>
                <p className="text-sm text-gray-600">Авиационные перевозки</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#flights" className="text-gray-700 hover:text-primary transition-colors">Рейсы</a>
              <a href="#fleet" className="text-gray-700 hover:text-primary transition-colors">Флот</a>
              <a href="#safety" className="text-gray-700 hover:text-primary transition-colors">Безопасность</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-aviation-900 via-primary to-aviation-600 text-white">
        <div className="absolute inset-0">
          <img 
            src="/img/e1a40aef-58f0-4564-bfca-21501e13ec88.jpg" 
            alt="Aircraft in sky" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aviation-900/90 to-primary/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary/20 text-white border-secondary/30 px-4 py-2">
                <Icon name="Shield" size={16} className="mr-2" />
                Безопасные полеты с 1995 года
              </Badge>
              <h1 className="text-5xl font-bold leading-tight">
                Современная авиация
                <span className="block text-secondary">нового поколения</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Профессиональные авиационные перевозки с современным флотом 
                и высочайшими стандартами безопасности
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти рейс
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Icon name="Navigation" size={24} className="mr-2" />
                    Отслеживание рейса
                  </CardTitle>
                  <CardDescription>
                    Введите номер рейса для получения актуальной информации
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Например: SU101"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={handleFlightSearch}>
                      <Icon name="Search" size={16} />
                    </Button>
                  </div>
                  
                  {flightStatus && (
                    <div className="space-y-3 p-4 bg-gray-50 rounded-lg animate-in fade-in-50 duration-300">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg">{flightStatus.flightNumber}</h4>
                        <Badge className={`${flightStatus.statusColor} text-white`}>
                          {flightStatus.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Вылет</p>
                          <p className="font-medium">{flightStatus.departure}</p>
                          <p className="text-primary font-semibold">{flightStatus.departureTime}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Прилет</p>
                          <p className="font-medium">{flightStatus.arrival}</p>
                          <p className="text-primary font-semibold">{flightStatus.arrivalTime}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-sm text-gray-600">Терминал: {flightStatus.gate}</span>
                        <Icon name="Plane" size={16} className="text-aviation-600" />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Современный флот</Badge>
            <h2 className="text-4xl font-bold mb-6">Наша авиационная техника</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              В нашем флоте — только современные воздушные суда ведущих мировых производителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((aircraft, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{aircraft.model}</CardTitle>
                    <Badge variant="secondary">{aircraft.count} ед.</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icon name="Users" size={16} className="text-aviation-600 mr-2" />
                        <span className="text-gray-600">Вместимость:</span>
                      </div>
                      <p className="font-semibold pl-6">{aircraft.capacity} пас.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icon name="MapPin" size={16} className="text-aviation-600 mr-2" />
                        <span className="text-gray-600">Дальность:</span>
                      </div>
                      <p className="font-semibold pl-6">{aircraft.range}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Gauge" size={16} className="text-aviation-600 mr-2" />
                    <span className="text-gray-600 mr-2">Скорость:</span>
                    <span className="font-semibold">{aircraft.speed}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Особенности:</p>
                    <div className="flex flex-wrap gap-2">
                      {aircraft.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Services Section */}
      <section id="safety" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Безопасность превыше всего</Badge>
            <h2 className="text-4xl font-bold mb-6">Наши стандарты и услуги</h2>
          </div>
          
          <Tabs defaultValue="safety" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="safety" className="flex items-center space-x-2">
                <Icon name="Shield" size={18} />
                <span>Безопасность</span>
              </TabsTrigger>
              <TabsTrigger value="services" className="flex items-center space-x-2">
                <Icon name="Star" size={18} />
                <span>Услуги</span>
              </TabsTrigger>
              <TabsTrigger value="routes" className="flex items-center space-x-2">
                <Icon name="Globe" size={18} />
                <span>Маршруты</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="safety" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "Award", title: "IATA сертификат", desc: "Международные стандарты безопасности" },
                  { icon: "CheckCircle", title: "100% техосмотр", desc: "Регулярная проверка всех систем" },
                  { icon: "Users", title: "Опытные пилоты", desc: "Средний опыт более 8000 часов" },
                  { icon: "Radar", title: "Современное оборудование", desc: "Навигация последнего поколения" }
                ].map((item, index) => (
                  <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Бизнес-класс", features: ["Просторные кресла", "Премиум питание", "Приоритетная регистрация"], icon: "Crown" },
                  { title: "Эконом-класс", features: ["Удобные места", "Горячее питание", "Развлекательная система"], icon: "Plane" },
                  { title: "Грузовые перевозки", features: ["Специальная упаковка", "Страхование груза", "Отслеживание 24/7"], icon: "Package" }
                ].map((service, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon name={service.icon as any} size={24} className="text-secondary mr-3" />
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="routes">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                    Внутренние рейсы
                  </h3>
                  <div className="space-y-3">
                    {["Москва ↔ Санкт-Петербург", "Москва ↔ Екатеринбург", "Москва ↔ Новосибирск", "Москва ↔ Краснодар"].map((route, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>{route}</span>
                        <Badge variant="outline">Ежедневно</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Icon name="Globe" size={20} className="mr-2 text-secondary" />
                    Международные рейсы
                  </h3>
                  <div className="space-y-3">
                    {["Москва ↔ Тбилиси", "Москва ↔ Ереван", "Санкт-Петербург ↔ Хельсинки", "Екатеринбург ↔ Франкфурт"].map((route, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span>{route}</span>
                        <Badge variant="outline">3-4 раза в неделю</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">О компании SkyTrans</Badge>
              <h2 className="text-4xl font-bold mb-6">Надежность, проверенная временем</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  С 1995 года компания SkyTrans обеспечивает безопасные и комфортные 
                  авиационные перевозки по России и странам ближнего зарубежья.
                </p>
                <p>
                  За годы работы мы перевезли более 2 миллионов пассажиров, 
                  поддерживая высочайшие стандарты безопасности и качества обслуживания.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { number: "28", label: "лет на рынке", icon: "Calendar" },
                    { number: "24", label: "воздушных судна", icon: "Plane" },
                    { number: "150+", label: "рейсов в месяц", icon: "BarChart" },
                    { number: "99.2%", label: "рейсов вовремя", icon: "Clock" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <Icon name={stat.icon as any} size={24} className="text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="p-8" id="contacts">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center">
                  <Icon name="Phone" size={24} className="mr-2 text-secondary" />
                  Связаться с нами
                </CardTitle>
                <CardDescription>
                  Наши специалисты готовы ответить на любые вопросы
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <div>
                      <p className="font-medium">+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-600">Круглосуточно</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={18} className="text-primary" />
                    <div>
                      <p className="font-medium">info@skytrans.ru</p>
                      <p className="text-sm text-gray-600">Ответим в течение часа</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={18} className="text-primary" />
                    <div>
                      <p className="font-medium">Москва, Ленинградский пр-т, 68</p>
                      <p className="text-sm text-gray-600">Главный офис</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-4">Часы работы офиса:</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Пн-Пт:</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Сб-Вс:</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aviation-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-secondary rounded-lg p-2">
                  <Icon name="Plane" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">SkyTrans</span>
              </div>
              <p className="text-blue-200 text-sm">
                Современная авиакомпания с высочайшими стандартами безопасности и качества обслуживания.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>Пассажирские перевозки</li>
                <li>Грузовые перевозки</li>
                <li>Чартерные рейсы</li>
                <li>Корпоративные перевозки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>О компании</li>
                <li>Наш флот</li>
                <li>Безопасность</li>
                <li>Пресс-центр</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>+7 (495) 123-45-67</li>
                <li>info@skytrans.ru</li>
                <li>Онлайн-чат</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              © 2024 SkyTrans. Все права защищены. Лицензия на авиационные перевозки №12345
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}