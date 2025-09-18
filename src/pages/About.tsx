import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Heart, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('about.title').includes('проекте') ? (
                <>О <span className="text-gradient">проекте</span></>
              ) : (
                <><span className="text-gradient">About</span> Project</>
              )}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('about.whoWeAre')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.founderText')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.teamText')}
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary/50" />
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-elegant mb-16">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Heart className="w-8 h-8 text-accent mr-3" />
                  {t('about.history')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.historyText')}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{t('about.whyUs')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.whyUsText')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardContent className="p-6">
                  <Rocket className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{t('about.howToParticipate')}</h3>
                   <p className="text-muted-foreground">
                     {t('about.howToParticipateText')}
                   </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-elegant gradient-subtle">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">{t('about.thanks')}</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}