import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: '01',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
    },
    {
      number: '02',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
    },
    {
      number: '03',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('howItWorks.title').includes('работает') ? (
              <>Как это <span className="text-gradient">работает</span></>
            ) : (
              <><span className="text-gradient">How It</span> Works</>
            )}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.title').includes('школьников') ? 
              'Простой и понятный процесс от идеи до успешного проекта' :
              'Simple and clear process from idea to successful project'
            }
          </p>
        </div>

        {/* Horizontal Steps Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col lg:flex-row items-center lg:flex-1">
                {/* Step Content */}
                <div className="text-center lg:text-left max-w-xs animate-slide-up" 
                     style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Circle with number */}
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center shadow-elegant mx-auto lg:mx-0 mb-6">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Only show if not last step */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center lg:mx-8 my-6 lg:my-0 animate-slide-up"
                       style={{ animationDelay: `${index * 200 + 100}ms` }}>
                    {/* Mobile: Down arrow */}
                    <div className="lg:hidden">
                      <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                    </div>
                    
                    {/* Desktop: Right arrow with line */}
                    <div className="hidden lg:flex items-center">
                      <div className="w-16 h-px bg-gradient-to-r from-primary to-accent"></div>
                      <ArrowRight className="w-6 h-6 text-primary ml-2" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}