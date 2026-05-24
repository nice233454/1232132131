import { useState, useEffect, useCallback } from 'react';
import {
  CheckCircle,
  Truck,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Leaf,
  Clock,
  Users,
  Heart,
  Dumbbell,
  Sparkles,
  Moon,
  Bone,
  Zap,
  Pill,
  Award,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Fingerprint,
} from 'lucide-react';

const LOGO_URL =
  'https://i.postimg.cc/pdsXwN9D/a-bold-geometric-wordmark-with-now-in-he-j-Hs-Tax-JOVy-CWrn-Fm-Ixbkhw-8Po-ZMBHSj-WAXb-Ucw8Aa-XA-cove.png';

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/3683103/pexels-photo-3683103.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    image: 'https://images.pexels.com/photos/17820735/pexels-photo-17820735.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    image: 'https://images.pexels.com/photos/7615570/pexels-photo-7615570.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    image: 'https://images.pexels.com/photos/13013778/pexels-photo-13013778.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

const brandLogos = [
  { name: 'NOW Foods', url: 'https://nowfoodsegypt.com/wp-content/uploads/2023/04/now-foods-egypt.svg' },
  { name: 'Sambucol', url: 'https://sambucol.co.uk/wp-content/uploads/2019/03/Sambucol-Logo-200px.svg' },
  { name: 'Life Extension', url: 'https://www.lifeextension.com/-/media/project/lifeextension/images/logo/le-logo-svg.svg?rev=87127ddb108648aa9bf71c9ed237f8ef&h=75&w=200&la=en&hash=D8E7AC0CF5E35466F65C3FE531322CD8' },
  { name: "Doctor's Best", url: 'https://www.doctorsbest.com/cdn/shop/files/Dr_Best_Logo-01.png?v=1717125120&width=600' },
];

const brandDetails = [
  {
    name: 'NOW Foods',
    description:
      'Один из самых известных мировых производителей витаминов и добавок. Широкий ассортимент: омега-3, магний, витамин D3, коллаген, аминокислоты, спортивное питание и многое другое.',
    gradient: 'from-sky-500/20 to-sky-600/5',
    accent: 'text-sky-600',
    iconBg: 'bg-sky-500',
  },
  {
    name: 'Sambucol',
    description:
      'Известный бренд на основе черной бузины для поддержки иммунитета взрослых и детей. Особенно популярен в сезон простуд и вирусных нагрузок.',
    gradient: 'from-emerald-500/20 to-emerald-600/5',
    accent: 'text-emerald-600',
    iconBg: 'bg-emerald-500',
  },
  {
    name: 'Life Extension',
    description:
      'Премиальные формулы для поддержки долголетия, здоровья сердца, мозга, сосудов и общего качества жизни. Высокие стандарты исследований и состава.',
    gradient: 'from-amber-500/20 to-amber-600/5',
    accent: 'text-amber-600',
    iconBg: 'bg-amber-500',
  },
  {
    name: "Doctor's Best",
    description:
      'Научный подход и эффективные формулы для суставов, нервной системы, сна, энергии и восстановления организма.',
    gradient: 'from-rose-500/20 to-rose-600/5',
    accent: 'text-rose-600',
    iconBg: 'bg-rose-500',
  },
];

const categories = [
  { icon: Pill, name: 'Витамин D3 и K2', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Zap, name: 'Магний и цинк', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Heart, name: 'Омега-3', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Sparkles, name: 'Коллаген', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Shield, name: 'Иммунитет', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Bone, name: 'Суставы', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Moon, name: 'Сон и нервы', color: 'bg-stone-100', iconColor: 'text-stone-500' },
  { icon: Dumbbell, name: 'Энергия', color: 'bg-stone-100', iconColor: 'text-stone-500' },
];

const audiences = [
  {
    icon: Leaf,
    title: 'Здоровье и энергия',
    desc: 'Для тех, кто хочет чувствовать себя бодрым и полным сил каждый день',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Dumbbell,
    title: 'Спорт и активность',
    desc: 'Для спортсменов и людей, ведущих активный образ жизни',
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Иммунитет семьи',
    desc: 'Для поддержки здоровья всех членов семьи — от детей до старшего поколения',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'Восстановление',
    desc: 'Для организма после нагрузок, стрессов и перенесённых заболеваний',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Красота',
    desc: 'Для кожи, волос и ногтей — поддерживайте красоту изнутри',
    gradient: 'from-fuchsia-500 to-purple-500',
  },
];

const advantages = [
  {
    icon: Shield,
    title: 'Оригинальная продукция',
    desc: 'Только настоящие БАДы из США, без подделок и копий',
  },
  {
    icon: Star,
    title: 'Мировые бренды',
    desc: 'NOW, Sambucol, Life Extension, Doctor\'s Best',
  },
  {
    icon: FlaskConical,
    title: 'Сертификаты качества',
    desc: 'Каждая партия проходит лабораторный контроль',
  },
  {
    icon: Truck,
    title: 'Быстрая доставка',
    desc: 'Оперативная отправка по всему Казахстану',
  },
  {
    icon: Clock,
    title: 'Свежие сроки',
    desc: 'Актуальные сроки годности на всю продукцию',
  },
  {
    icon: Fingerprint,
    title: 'Индивидуальный подбор',
    desc: 'Консультация по выбору витаминов под ваши цели',
  },
];

const qualityFeatures = [
  {
    icon: Shield,
    title: 'Проверенные поставщики',
    desc: 'Работаем только с официальными дистрибьюторами в США',
  },
  {
    icon: FlaskConical,
    title: 'Лабораторный контроль',
    desc: 'Каждая партия проходит проверку на подлинность и качество',
  },
  {
    icon: Award,
    title: 'Международные стандарты',
    desc: 'GMP, NSF, FDA — продукция соответствует высшим стандартам',
  },
  {
    icon: CheckCircle,
    title: 'Оригинальность гарантирована',
    desc: 'Защищаем наших клиентов от контрафакта и подделок',
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Заявка отправлена!</h3>
        <p className="text-gray-500">Наш менеджер свяжется с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
          placeholder="Иван Иванов"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон или WhatsApp</label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
          placeholder="+7 777 000 00 00"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ваш вопрос (необязательно)</label>
        <textarea
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-gray-900 placeholder-gray-400 resize-none"
          placeholder="Подбор витаминов для..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        {loading ? (
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            Отправить заявку <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full" style={{ height: 'min(800px, 100vh)' }}>
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-2.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Marquee() {
  const doubled = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      <div className="flex items-center gap-20 animate-marquee">
        {doubled.map((brand, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center h-20 min-w-[220px]">
            <img
              src={brand.url}
              alt={brand.name}
              className="max-h-14 max-w-[200px] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="NOW KZ" className="h-9 w-auto object-contain" />
              <span className="text-xl font-extrabold tracking-tight text-gray-900 hidden sm:block">
                NOW <span className="text-sky-600">KZ</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <button onClick={() => scrollTo('brands')} className="hover:text-sky-600 transition">Бренды</button>
              <button onClick={() => scrollTo('categories')} className="hover:text-sky-600 transition">Каталог</button>
              <button onClick={() => scrollTo('delivery')} className="hover:text-sky-600 transition">Доставка</button>
              <button
                onClick={() => scrollTo('contact')}
                className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl transition shadow-sm font-semibold"
              >
                Оставить заявку
              </button>
            </nav>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
            <button onClick={() => scrollTo('brands')} className="text-left py-2 hover:text-sky-600 transition">Бренды</button>
            <button onClick={() => scrollTo('categories')} className="text-left py-2 hover:text-sky-600 transition">Каталог</button>
            <button onClick={() => scrollTo('delivery')} className="text-left py-2 hover:text-sky-600 transition">Доставка</button>
            <button onClick={() => scrollTo('contact')} className="bg-sky-600 text-white px-4 py-2.5 rounded-xl text-center font-semibold">
              Оставить заявку
            </button>
          </div>
        )}
      </header>

      {/* Hero with slider */}
      <section className="relative overflow-hidden">
        <HeroSlider />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 z-10" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl py-16">
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 text-sky-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                Официальные поставки из США
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight text-white">
                Оригинальные<br />
                БАДы из США<br />
                <span className="text-sky-400">в Казахстане</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed mb-10 font-light">
                NOW, Sambucol, Life Extension, Doctor's Best — проверенные бренды для иммунитета, энергии, сердца, суставов, сна и красоты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo('contact')}
                  className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2 text-lg"
                >
                  Получить консультацию <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollTo('categories')}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                >
                  Смотреть каталог
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10" />
      </section>

      {/* Why Us — Premium cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Star className="w-4 h-4" /> Наши преимущества
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Почему выбирают нас?</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Качество, надёжность и забота о каждом клиенте</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-sky-600 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands — Marquee + Cards */}
      <section id="brands" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Award className="w-4 h-4" /> Мировые бренды
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Бренды, которым доверяют</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Ведущие американские производители с мировым признанием</p>
          </div>
        </div>
        <Marquee />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brandDetails.map((brand) => (
              <div
                key={brand.name}
                className={`relative p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${brand.iconBg}`} />
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl ${brand.gradient} rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
                <h3 className={`text-xl font-bold ${brand.accent} mb-3 relative z-10`}>{brand.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm relative z-10">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories — Rich cards */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Pill className="w-4 h-4" /> Каталог
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Популярные категории</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Подберите добавки под вашу цель</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map(({ icon: Icon, name, color, iconColor }) => (
              <div
                key={name}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${iconColor} group-hover:text-sky-600 transition-colors duration-300`} />
                </div>
                <p className="text-sm font-bold text-gray-800 leading-snug">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom — Rich audience cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Users className="w-4 h-4" /> Целевая аудитория
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Для кого наши БАДы?</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Подходят людям с разными целями и образом жизни</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map(({ icon: Icon, title, desc, gradient }) => (
              <div key={title} className="group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality — 4 feature cards in unified style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" /> Надёжность
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Гарантия качества</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Мы тщательно контролируем каждую партию, чтобы вы получали только лучшее</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {qualityFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" />
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <Truck className="w-4 h-4" /> Логистика
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Доставка по Казахстану</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Оперативная доставка в Алматы, Астану, Шымкент и другие города Казахстана. Удобная оплата и помощь в подборе продукции под ваши цели.
              </p>
              <div className="space-y-3">
                {['Алматы', 'Астана', 'Шымкент', 'Другие города Казахстана'].map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Truck, title: 'Быстрая доставка', desc: 'Оперативная отправка после оформления заказа', gradient: 'from-sky-500 to-blue-600' },
                { icon: Shield, title: 'Оригинальность', desc: 'Каждая партия проходит контроль качества', gradient: 'from-emerald-500 to-teal-600' },
                { icon: CheckCircle, title: 'Сертификаты', desc: 'Вся продукция сертифицирована', gradient: 'from-amber-500 to-orange-600' },
                { icon: Phone, title: 'Поддержка', desc: 'Консультируем по подбору витаминов', gradient: 'from-rose-500 to-pink-600' },
              ].map(({ icon: Icon, title, desc, gradient }) => (
                <div key={title} className="group relative bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <Mail className="w-4 h-4" /> Свяжитесь с нами
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Оставьте заявку прямо сейчас</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Наш менеджер поможет подобрать подходящие витамины и ответит на все вопросы. Заботьтесь о здоровье с качественными витаминами от мировых брендов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span>Консультация по телефону или WhatsApp</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span>Ответим в течение нескольких часов</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span>Доставка по всему Казахстану</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center">
              Оригинальные БАДы из США в Казахстане — NOW, Sambucol, Life Extension, Doctor's Best
            </p>
            <p className="text-sm">&copy; {new Date().getFullYear()} NOW KZ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
