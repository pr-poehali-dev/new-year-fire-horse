import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "2"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо за бронирование, ${formData.name}! Мы свяжемся с вами в ближайшее время.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="fixed top-4 left-4 text-6xl animate-pulse-glow">🎄</div>
      <div className="fixed top-8 right-8 text-5xl animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
      <div className="fixed bottom-16 left-12 text-4xl animate-pulse-glow" style={{ animationDelay: '1s' }}>🎁</div>
      <div className="fixed bottom-32 right-16 text-5xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}>🔔</div>
      <div className="fixed top-1/3 left-1/4 text-3xl opacity-70 animate-pulse-glow" style={{ animationDelay: '0.3s' }}>❄️</div>
      <div className="fixed top-2/3 right-1/4 text-3xl opacity-70 animate-pulse-glow" style={{ animationDelay: '0.8s' }}>✨</div>
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-flame" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-flame" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-6xl animate-pulse-glow">🎄</span>
              <span className="text-5xl animate-pulse-glow" style={{ animationDelay: '0.3s' }}>🎅</span>
              <span className="text-6xl animate-pulse-glow" style={{ animationDelay: '0.6s' }}>🎄</span>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              НОВОГОДНЯЯ НОЧЬ<br />ОГНЕННОЙ ЛОШАДИ
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl animate-pulse-glow">✨</span>
              <p className="font-heading text-3xl md:text-4xl font-semibold text-accent">
                2026
              </p>
              <span className="text-4xl animate-pulse-glow">✨</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-white/95 backdrop-blur-sm border-primary/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl">⭐</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Валерий Пономаренко
                  </h2>
                  <span className="text-3xl">⭐</span>
                </div>
                <p className="text-xl text-muted-foreground mb-2">в санатории «Белая Русь»</p>
                <p className="text-lg text-foreground/90">
                  Телеведущий, шоумен, человек-праздник — его харизма и энергия зададут темп всей ночи!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
              Встречаем 2026 год ярко, красиво и со вкусом!
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Забудьте о буднях — ночь, когда воздух искрится от музыки, шампанского и волшебства, уже ждёт вас
            </p>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl px-12 py-6 rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Ticket" className="mr-2" size={24} />
              Забронировать место
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-6xl">🎉</span>
              <h2 className="font-heading text-5xl font-bold text-foreground">31 декабря</h2>
              <span className="text-6xl">🎉</span>
            </div>
            <p className="text-2xl text-accent font-heading font-semibold">Главная ночь года</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Music" className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">Предпраздничная встреча</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Sparkles" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Элегантная фотозона для ярких кадров</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Wine" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Каскад фужеров и бокал игристого каждому гостю</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Music2" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Скрипач-виртуоз Валерий Белокуров</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">🎊</span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">Шоу-программа</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Flame" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Шоу-балет «Фиеста» — вихрь энергии</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Drum" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Барабанное шоу — ритм, свет и драйв</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Mic2" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Песни, тосты, поздравления и море веселья</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-red-50 to-green-50 border-2 border-primary/40 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">🍽️</span>
                <h3 className="font-heading text-3xl font-bold text-foreground">Новогодний банкет</h3>
                <span className="text-5xl">🎄</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" size={20} />
                    До полуночи
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Guitar" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Кавер-группа «Михаил Светлов»</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Sparkles" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Новые номера шоу-балета «Фиеста»</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Trophy" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Bar Show Up — бармен-шоу и конкурсы</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Timer" className="text-accent" size={20} />
                    В полночь
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Snowflake" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Поздравления Деда Мороза и Снегурочки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Tv" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Обращение Президента РФ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Rocket" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Финальный огненный салют</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Disc3" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Дискотека до утра!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-6xl">🎊</span>
              <h2 className="font-heading text-5xl font-bold text-foreground">1 января</h2>
              <span className="text-6xl">🎁</span>
            </div>
            <p className="text-2xl text-accent font-heading font-semibold">Праздник продолжается</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <span className="text-7xl">☕</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Утро</h3>
                  <p className="text-muted-foreground">
                    Утренняя «РеАнимация» — для тех, кто готов праздновать по-взрослому
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <span className="text-7xl">🎮</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">День</h3>
                  <ul className="text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <Icon name="Paintbrush" className="text-accent flex-shrink-0" size={16} />
                      <span>Мастер-классы и квизы</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Gift" className="text-accent flex-shrink-0" size={16} />
                      <span>Розыгрыши призов</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Users" className="text-accent flex-shrink-0" size={16} />
                      <span>Танцевальные активности</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <span className="text-7xl">🎵</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Вечер</h3>
                  <p className="text-muted-foreground">
                    Танцевальный драйв с кавер-группой «Михаил Светлов»
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl">🎟️</span>
              <h2 className="font-heading text-5xl font-bold text-foreground">
                Бронируйте сейчас!
              </h2>
              <span className="text-5xl">🎟️</span>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 border-2 border-red-400 rounded-full">
              <span className="text-2xl">⚠️</span>
              <p className="text-lg font-heading font-semibold text-foreground">
                Количество мест ограничено
              </p>
            </div>
          </div>

          <Card className="bg-white border-2 border-primary/40 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-heading text-lg">
                    Ваше имя *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/30 text-foreground"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-heading text-lg">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/30 text-foreground"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-heading text-lg">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/30 text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="guests" className="text-foreground font-heading text-lg">
                    Количество гостей
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/30 text-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl py-6 rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Check" className="mr-2" size={24} />
                  Забронировать
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground">
                  Проведите Новый год в «Белой Руси» — где праздник живёт в каждом мгновении, а воспоминания остаются с вами навсегда!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Санаторий «Белая Русь». Встречаем 2026 — год Огненной Лошади
          </p>
        </div>
      </footer>
    </div>
  );
}