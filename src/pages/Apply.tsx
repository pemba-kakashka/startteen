import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ExternalLink, FileText, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Apply() {
  const { t } = useLanguage();
  
  const requirements = t('hero.title').includes('школьников') ? [
    'ФИО, возраст/класс/вуз, город',
    'Контакты (email + Telegram)',
    'Описание идеи: проблема, решение, целевая аудитория',
    'Текущий статус проекта',
    'Имеющиеся ресурсы и команда',
    'Необходимая помощь',
    'Готовность к публичному кейсу',
  ] : [
    'Full name, age/grade/university, city',
    'Contacts (email + Telegram)',
    'Idea description: problem, solution, target audience',
    'Current project status',
    'Available resources and team',
    'Required assistance',
    'Readiness for public case study',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('apply.title')} <span className="text-gradient">{t('hero.title').includes('школьников') ? 'заявку' : ''}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('apply.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="border-accent/20 bg-accent/5">
              <AlertTriangle className="h-4 w-4 text-accent" />
              <AlertDescription className="text-accent-foreground">
                <strong>{t('apply.important')}</strong> {t('apply.readGuideFirst')}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    {t('apply.processTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</div>
                    <p className="text-muted-foreground">{t('apply.step1')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</div>
                    <p className="text-muted-foreground">{t('apply.step2')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</div>
                    <p className="text-muted-foreground">{t('apply.step3')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</div>
                    <p className="text-muted-foreground">{t('apply.step4')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="w-6 h-6 text-accent mr-3" />
                    {t('apply.requiredData')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('apply.readyToStart')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('apply.readyToStartDesc')}
            </p>
            <div className="space-y-4">
              <Button 
                size="xl" 
                className="gradient-primary border-0 shadow-elegant hover:shadow-glow" 
                asChild
              >
                <a 
                  href="https://forms.yandex.ru/u/687359ecf47e73d6ca62de31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('apply.openForm')}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/docs">
                    <FileText className="w-4 h-4 mr-2" />
                    {t('apply.readGuideFirst2')}
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/contact">
                    {t('apply.hasQuestions')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}