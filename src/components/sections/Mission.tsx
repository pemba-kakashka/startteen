import { useLanguage } from '@/contexts/LanguageContext';

export function Mission() {
  const { language, t } = useLanguage();
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            {language === 'ru' ? (
              <>Наша <span className="text-gradient">миссия</span></>
            ) : (
              <>Our <span className="text-gradient">Mission</span></>
            )}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('mission.description')}
          </p>
        </div>
      </div>
    </section>
  );
}