import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  DollarSign, 
  BookOpen, 
  MessageSquare,
  Building,
  Star,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Resources() {
  const { t } = useLanguage();
  
  const services = t('hero.title').includes('школьников') ? [
    {
      icon: Users,
      title: 'Менторская поддержка',
      description: 'Персональные консультации с экспертами в различных областях бизнеса',
      features: ['1-на-1 встречи', 'Групповые воркшопы', 'Онлайн консультации']
    },
    {
      icon: TrendingUp,
      title: 'Развитие продукта',
      description: 'Помощь в создании MVP, тестировании гипотез и масштабировании',
      features: ['Валидация идей', 'Создание MVP', 'Аналитика и метрики']
    },
    {
      icon: Briefcase,
      title: 'Бизнес-планирование',
      description: 'Разработка стратегии, бизнес-модели и плана развития проекта',
      features: ['Бизнес-модель', 'Финансовое планирование', 'Go-to-market стратегия']
    },
    {
      icon: DollarSign,
      title: 'Поиск финансирования',
      description: 'Помощь в привлечении инвестиций и грантов для развития проекта',
      features: ['Питч-деки', 'Поиск инвесторов', 'Грантовые программы']
    },
    {
      icon: BookOpen,
      title: 'Образовательные материалы',
      description: 'Доступ к курсам, гайдам и лучшим практикам предпринимательства',
      features: ['Видео-курсы', 'Практические гайды', 'Кейсы и примеры']
    },
    {
      icon: MessageSquare,
      title: 'Сообщество',
      description: 'Нетворкинг с единомышленниками и обмен опытом',
      features: ['Чаты участников', 'Офлайн встречи', 'Совместные проекты']
    }
  ] : [
    {
      icon: Users,
      title: 'Mentor Support',
      description: 'Personal consultations with experts in various business fields',
      features: ['1-on-1 meetings', 'Group workshops', 'Online consultations']
    },
    {
      icon: TrendingUp,
      title: 'Product Development',
      description: 'Help with MVP creation, hypothesis testing and scaling',
      features: ['Idea validation', 'MVP creation', 'Analytics and metrics']
    },
    {
      icon: Briefcase,
      title: 'Business Planning',
      description: 'Strategy development, business model and project development plan',
      features: ['Business Model Canvas', 'Financial planning', 'Go-to-market strategy']
    },
    {
      icon: DollarSign,
      title: 'Funding Search',
      description: 'Help in attracting investments and grants for project development',
      features: ['Pitch decks', 'Investor search', 'Grant programs']
    },
    {
      icon: BookOpen,
      title: 'Educational Materials',
      description: 'Access to courses, guides and best practices in entrepreneurship',
      features: ['Video courses', 'Practical guides', 'Cases and examples']
    },
    {
      icon: MessageSquare,
      title: 'Community',
      description: 'Networking with like-minded people and experience exchange',
      features: ['Participant chats', 'Offline meetings', 'Joint projects']
    }
  ];

  // Mock partners data
  const partners = [
    { name: 'Летово', category: t('hero.title').includes('школьников') ? 'Образовательный партнер' : 'Educational Partner' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('resources.title').includes('ресурсы') ? (
                <>Наши <span className="text-gradient">ресурсы</span></>
              ) : (
                <><span className="text-gradient">Our</span> resources</>
              )}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('resources.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('resources.whatWeProvide').includes('предоставляем') ? (
                  <>Что мы <span className="text-gradient">предоставляем</span></>
                ) : (
                  <>What we <span className="text-gradient">provide</span></>
                )}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('resources.whatWeProvideDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="border-0 shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-1 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('resources.workWith').includes('работаем') ? (
                  <>С кем мы <span className="text-gradient">работаем</span></>
                ) : (
                  <>Who we <span className="text-gradient">work with</span></>
                )}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('resources.workWithDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <Card key={partner.name} className="border-0 shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-1 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                {t('resources.partnersSoon')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant gradient-subtle">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">{t('resources.howCanHelp')}</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {t('resources.howCanHelpDesc')}
                </p>
                <div className="space-y-4">
                  <Button size="xl" className="gradient-primary border-0 shadow-elegant hover:shadow-glow" asChild>
                    <Link to="/apply">{t('nav.apply')}</Link>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    <Button variant="link" size="sm" asChild>
                      <Link to="/contact">{t('hero.title').includes('школьников') ? 'Есть вопросы? Свяжитесь с нами' : 'Have questions? Contact us'}</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}