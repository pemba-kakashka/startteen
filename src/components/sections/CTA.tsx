import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTA() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant gradient-primary text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
            
            <CardContent className="p-12 text-center relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('cta.title')}
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="xl" 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90 shadow-elegant"
                  asChild
                >
                  <Link to="/apply">
                    {t('nav.apply')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://forms.yandex.ru/u/68b323e6f47e731ccb27d32d" target="_blank" rel="noopener noreferrer">
                    <Users className="w-5 h-5 mr-2" />
                    {t('nav.becomeMentor')}
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                  <span>{t('cta.applications')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2" />
                  <span>{t('cta.free')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                  <span>{t('cta.online')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}