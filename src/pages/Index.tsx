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
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse-glow" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-flame" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-flame" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-heading text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              НОВОГОДНЯЯ НОЧЬ<br />ОГНЕННОЙ ЛОШАДИ
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Sparkles" className="text-accent animate-pulse-glow" size={32} />
              <p className="font-heading text-3xl md:text-4xl font-semibold text-accent">
                2026
              </p>
              <Icon name="Sparkles" className="text-accent animate-pulse-glow" size={32} />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Icon name="Star" className="text-accent" size={28} />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Валерий Пономаренко
                  </h2>
                  <Icon name="Star" className="text-accent" size={28} />
                </div>
                <p className="text-xl text-muted-foreground mb-2">в санатории «Белая Русь»</p>
                <p className="text-lg text-foreground/90">
                  Телеведущий, шоумен, человек-праздник — его харизма и энергия зададут темп всей ночи и превратят праздник в незабываемое шоу.
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
              <Icon name="Calendar" className="text-primary" size={40} />
              <h2 className="font-heading text-5xl font-bold text-foreground">31 декабря</h2>
            </div>
            <p className="text-2xl text-accent font-heading font-semibold">Главная ночь года</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">Предпраздничная встреча гостей</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Camera" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Элегантная фотозона для ярких кадров</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Wine" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Каскад фужеров и бокал игристого каждому гостю</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Music2" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Скрипач-виртуоз Валерий Белокуров — музыка, рождающая настроение праздника</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="PartyPopper" className="text-secondary flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">Первые впечатления</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Flame" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Шоу-балет «Фиеста» — вихрь ярких костюмов и энергии</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Drum" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Барабанное шоу — ритм, свет и драйв</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Mic2" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span>Песни, тосты, поздравления и море веселья!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/40">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Utensils" className="text-primary" size={36} />
                <h3 className="font-heading text-3xl font-bold text-foreground">Новогодний банкет в ресторане</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">Когда часы приближаются к полуночи, праздник засияет ещё ярче!</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Music" className="text-accent" size={20} />
                    Вас ждёт:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Guitar" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Кавер-группа «Михаил Светлов» — любимые хиты и зажигательные ритмы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Sparkles" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Шоу-балет «Фиеста» — новые грандиозные номера</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Wine" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Bar Show Up — бармен-шоу, крутые трюки, весёлые конкурсы</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" size={20} />
                    Кульминация:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Snowflake" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Поздравления Деда Мороза и Снегурочки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Tv" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Новогоднее обращение Президента РФ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Flame" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Финальный огненный салют</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Music4" className="text-accent flex-shrink-0 mt-1" size={16} />
                      <span>Дискотека до утра!</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                <p className="text-center font-heading text-lg font-semibold text-foreground">
                  И всё это под невероятную харизму Валерия Пономаренко!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Icon name="Sun" className="text-accent" size={40} />
              <h2 className="font-heading text-5xl font-bold text-foreground">1 января</h2>
            </div>
            <p className="text-2xl text-accent font-heading font-semibold">Праздник продолжается</p>
            <p className="text-lg text-muted-foreground mt-3">Начните год весело и с улыбкой!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/20 rounded-full">
                      <Icon name="Coffee" className="text-primary" size={40} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Утренняя «РеАнимация»</h3>
                  <p className="text-muted-foreground">Для тех, кто готов праздновать по-взрослому</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-accent/20 rounded-full">
                      <Icon name="Gamepad2" className="text-accent" size={40} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">Дневная программа</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Мастер-классы и квизы</li>
                    <li>Розыгрыши призов</li>
                    <li>Танцевальные активности и игры</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-secondary/20 rounded-full">
                      <Icon name="Music4" className="text-secondary" size={40} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">Вечером</h3>
                  <p className="text-muted-foreground">Танцевальный драйв с кавер-группой «Михаил Светлов»</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl font-bold text-foreground mb-4">
              Проведите Новый год в «Белой Руси»
            </h2>
            <p className="text-xl text-muted-foreground">
              Где праздник живёт в каждом мгновении, а воспоминания остаются с вами навсегда!
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl font-bold text-foreground mb-4">
              Бронируйте сейчас!
            </h2>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 border-2 border-secondary rounded-full">
              <Icon name="AlertCircle" className="text-secondary" size={24} />
              <p className="text-lg font-heading font-semibold text-foreground">
                Количество мест ограничено
              </p>
            </div>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-heading">Ваше имя</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground font-heading">Телефон</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground font-heading">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="guests" className="text-foreground font-heading">Количество гостей</Label>
                  <Input 
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={handleChange}
                    className="mt-2 bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg py-6 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Санаторий «Белая Русь» • Новогодняя ночь 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
