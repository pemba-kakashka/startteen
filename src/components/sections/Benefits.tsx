import { Card, CardContent } from '@/components/ui/card';
import { Users, Lightbulb, TrendingUp, DollarSign, MessageSquare, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Benefits() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Users,
      title: t('benefits.support.title'),
      description: t('benefits.support.description'),
    },
    {
      icon: Lightbulb,
      title: t('hero.title').includes('школьников') ? 'От идеи до реализации' : 'From idea to implementation',
      description: t('hero.title').includes('школьников') ? 'Полное сопровождение проекта: уточним идею, выделим уникальность, поможем с запуском' : 'Full project support: clarify idea, highlight uniqueness, help with launch',
    },
    {
      icon: TrendingUp,
      title: t('benefits.consultation.title'),
      description: t('benefits.consultation.description'),
    },
    {
      icon: DollarSign,
      title: t('benefits.funding.title'),
      description: t('benefits.funding.description'),
    },
    {
      icon: MessageSquare,
      title: t('benefits.community.title'),
      description: t('benefits.community.description'),
    },
    {
      icon: Target,
      title: t('hero.title').includes('школьников') ? 'Практический результат' : 'Practical results',
      description: t('hero.title').includes('школьников') ? 'Не просто теория, а реальные проекты с измеримыми результатами и кейсами' : 'Not just theory, but real projects with measurable results and cases',
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('benefits.title').includes('получаете') ? (
              <>Что вы <span className="text-gradient">получаете</span></>
            ) : (
              <><span className="text-gradient">What You</span> Get</>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.title').includes('школьников') ? 
              'Мы предоставляем всё необходимое для успешного запуска вашего проекта' :
              'We provide everything necessary for the successful launch of your project'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="border-0 shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-1 animate-slide-up" 
                    style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}