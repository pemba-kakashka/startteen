import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('hero.title').includes('школьников') ? 'Можно ли участвовать командой?' : 'Can I participate as a team?',
      answer: t('hero.title').includes('школьников') ? 'Да, мы приветствуем командные заявки. Главное — чтобы все участники команды соответствовали возрастным требованиям и были готовы к активному участию.' : 'Yes, we welcome team applications. The main thing is that all team members meet the age requirements and are ready to actively participate.'
    },
    {
      question: t('hero.title').includes('школьников') ? 'Что если моя идея ещё не до конца сформирована?' : 'What if my idea is not fully formed yet?',
      answer: t('hero.title').includes('школьников') ? 'Это нормально! Наши менторы помогут вам проработать и структурировать идею. Главное — иметь представление о проблеме, которую вы хотите решить.' : 'That\'s normal! Our mentors will help you work through and structure your idea. The main thing is to have an understanding of the problem you want to solve.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('faq.title').includes('задаваемые') ? (
                <>Часто задаваемые <span className="text-gradient">вопросы</span></>
              ) : (
                <><span className="text-gradient">Frequently Asked</span> Questions</>
              )}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('hero.title').includes('школьников') ? 
                'Ответы на самые популярные вопросы о программе StarTTeen' :
                'Answers to the most popular questions about the StarTTeen program'
              }
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth rounded-lg"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-200",
                      openItems.includes(index) && "transform rotate-180"
                    )} />
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 pt-0 animate-slide-up">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}