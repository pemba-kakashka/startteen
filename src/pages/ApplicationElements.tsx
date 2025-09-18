import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  User, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  School, 
  Lightbulb, 
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ApplicationElements() {
  const { t } = useLanguage();

  const applicationElements = [
    {
      icon: User,
      title: t('applicationElements.fullName'),
      description: t('applicationElements.fullNameDesc'),
      required: true
    },
    {
      icon: Calendar,
      title: t('applicationElements.age'),
      description: t('applicationElements.ageDesc'),
      required: true
    },
    {
      icon: GraduationCap,
      title: t('applicationElements.grade'),
      description: t('applicationElements.gradeDesc'),
      required: true
    },
    {
      icon: MapPin,
      title: t('applicationElements.city'),
      description: t('applicationElements.cityDesc'),
      required: true
    },
    {
      icon: School,
      title: t('applicationElements.school'),
      description: t('applicationElements.schoolDesc'),
      required: true
    }
  ];

  const ideaQuestions = [
    {
      number: 1,
      title: t('applicationElements.problem'),
      description: t('applicationElements.problemDesc'),
      tip: t('hero.title').includes('школьников') ? 
        'Нужны конкретные примеры для убеждения в актуальности проекта' :
        'Concrete examples are needed to convince of project relevance'
    },
    {
      number: 2,
      title: t('applicationElements.solution'),
      description: t('applicationElements.solutionDesc'),
      tip: t('hero.title').includes('школьников') ? 
        'Фокус на пользе и уверенности в решении' :
        'Focus on benefits and confidence in the solution'
    },
    {
      number: 3,
      title: t('applicationElements.howCameUp'),
      description: t('applicationElements.howCameUpDesc'),
      tip: t('hero.title').includes('школьников') ? 
        'Покажите свой мыслительный процесс' :
        'Show your thought process'
    },
    {
      number: 4,
      title: t('applicationElements.uniqueness'),
      description: t('applicationElements.uniquenessDesc'),
      tip: t('hero.title').includes('школьников') ? 
        'Если не можете придумать уникальность — честно признайтесь' :
        'If you can\'t think of uniqueness — honestly admit it'
    },
    {
      number: 5,
      title: t('applicationElements.profitability'),
      description: t('applicationElements.profitabilityDesc'),
      tip: t('hero.title').includes('школьников') ? 
        'Покажите понимание ценности проекта' :
        'Show understanding of project value'
    }
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
              <span className="text-gradient">{t('applicationElements.title')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('applicationElements.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-center">{t('applicationElements.personalInfo')}</h2>
              <p className="text-lg text-muted-foreground text-center">
                {t('applicationElements.personalInfoDesc')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {applicationElements.map((element, index) => {
                const Icon = element.icon;
                return (
                  <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth animate-slide-up" 
                        style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="flex items-center">
                            {element.title}
                            {element.required && (
                              <Badge variant="secondary" className="ml-2 text-xs">
                                {t('applicationElements.required')}
                              </Badge>
                            )}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{element.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('applicationElements.ideaTitle')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('applicationElements.ideaDesc')}
              </p>
            </div>

            <div className="space-y-6">
              {ideaQuestions.map((question, index) => (
                <Card key={question.number} className="border-0 shadow-elegant animate-slide-up" 
                      style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{question.number}</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{question.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{question.description}</p>
                        {question.tip && (
                          <Alert className="mt-4 border-primary/20 bg-primary/5">
                            <Target className="h-4 w-4 text-primary" />
                            <AlertDescription className="text-primary-foreground">
                              <strong>{t('hero.title').includes('школьников') ? 'Совет:' : 'Tip:'}</strong> {question.tip}
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant gradient-subtle">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">{t('applicationElements.requirements')}</CardTitle>
                <p className="text-muted-foreground">
                  {t('hero.title').includes('школьников') ? 
                    'Дополнительный вопрос (не обязательный, но важный)' :
                    'Additional question (not mandatory, but important)'
                  }
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {t('applicationElements.requirementsDesc')}
                </p>
                <Badge variant="outline" className="text-accent border-accent/20">
                  {t('applicationElements.optional')}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('applicationElements.readyToApply')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('applicationElements.readyToApplyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/docs">
                  <FileText className="w-5 h-5 mr-2" />
                  {t('applicationElements.readGuide')}
                </Link>
              </Button>
              <Button size="lg" className="gradient-primary border-0 shadow-elegant hover:shadow-glow" asChild>
                <Link to="/apply">
                  {t('applicationElements.submitApplication')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}