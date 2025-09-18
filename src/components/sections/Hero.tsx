import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import rocketHero from '@/assets/rocket-hero.png';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                {t('hero.title').includes('школьников') ? 'Стартап-академия' : 'startup academy'}
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}. {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary border-0 shadow-elegant hover:shadow-glow" asChild>
                <Link to="/apply">
                  {t('nav.apply')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://forms.yandex.ru/u/68b323e6f47e731ccb27d32d" target="_blank" rel="noopener noreferrer">
                  {t('nav.becomeMentor')}
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <span>{t('cta.free')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>{t('cta.online')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                  <span>{t('hero.title').includes('школьников') ? 'Поддержка 24/7' : 'Support 24/7'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up lg:animate-float">
            <div className="relative">
              <img
                src={rocketHero}
                alt="StarTTeen Rocket"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-accent rounded-full" />
              </div>
              <div className="absolute top-1/3 -left-8 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center animate-pulse delay-300">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="absolute bottom-1/4 -right-6 w-4 h-4 bg-accent/30 rounded-full animate-pulse delay-700" />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 gradient-primary rounded-full opacity-20 blur-3xl scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
}