import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, Search, ExternalLink, MessageCircle, Linkedin, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Mock data - в реальном проекте будет подгружаться из JSON
const mentors = [
  {
    id: 1,
    name: 'Example',
    role: 'Product Manager',
    company: 'Яндекс',
    bio: 'Опыт запуска продуктов с нуля. Помогаю с MVP и продуктовой стратегией.',
    expertise: ['Product Management', 'MVP', 'UX/UI'],
    avatar: '/placeholder-avatar-1.jpg',
    linkedin: 'https://linkedin.com/in/anna-smirnova',
    telegram: '@anna_pm',
  },
  // Добавить больше менторов по мере развития проекта
];

export default function Mentors() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.expertise.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('mentors.title').includes('менторы') ? (
                <>Наши <span className="text-gradient">менторы</span></>
              ) : (
                <><span className="text-gradient">Our</span> mentors</>
              )}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('mentors.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder={t('mentors.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {filteredMentors.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor, index) => (
                  <Card key={mentor.id} className="border-0 shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-1 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{mentor.name}</h3>
                          <p className="text-sm text-muted-foreground">{mentor.role}</p>
                          <p className="text-sm text-muted-foreground">{mentor.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{mentor.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={`https://t.me/${mentor.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Telegram
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-16">
                <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-50">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('mentors.comingSoon')}</h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                  {t('mentors.comingSoonDesc')}
                </p>
                <Button size="lg" variant="default" asChild>
                  <a href="https://forms.yandex.ru/u/68b323e6f47e731ccb27d32d" target="_blank" rel="noopener noreferrer">
                    {t('mentors.becomeMentor')}
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('mentors.becomeMentorTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('mentors.becomeMentorDesc')}
            </p>
            <Button size="xl" variant="default" asChild>
              <a href="https://forms.yandex.ru/u/68b323e6f47e731ccb27d32d" target="_blank" rel="noopener noreferrer">
                {t('mentors.fillApplication')}
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}