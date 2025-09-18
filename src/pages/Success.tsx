import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Trophy, Rocket, Mail, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Success() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('success.title').includes('успеха') ? (
                <>Истории <span className="text-gradient">успеха</span></>
              ) : (
                <><span className="text-gradient">Success</span> Stories</>
              )}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('success.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon State */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
              <div className="relative">
                <Rocket className="w-16 h-16 text-white" />
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">{t('success.comingSoon')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('success.comingSoonDesc')}
            </p>

            {/* Newsletter Signup */}
            <Card className="border-0 shadow-elegant max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  {t('success.stayUpdated')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input placeholder={t('success.emailPlaceholder')} type="email" />
                  <Button variant="default">
                    {t('success.subscribe')}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('success.subscribeDesc')}
                </p>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <TrendingUp className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold">{t('success.projectGrowth')}</h3>
                <p className="text-sm text-muted-foreground">{t('success.projectGrowthDesc')}</p>
              </div>
              <div className="space-y-2">
                <Trophy className="w-8 h-8 text-accent mx-auto" />
                <h3 className="font-semibold">{t('success.achievements')}</h3>
                <p className="text-sm text-muted-foreground">{t('success.achievementsDesc')}</p>
              </div>
              <div className="space-y-2">
                <Rocket className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold">{t('success.launches')}</h3>
                <p className="text-sm text-muted-foreground">{t('success.launchesDesc')}</p>
              </div>
            </div>

            <div className="mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/apply">
                  {t('success.createSuccess')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}