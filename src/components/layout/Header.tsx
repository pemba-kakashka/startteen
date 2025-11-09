import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.mentors'), href: '/mentors' },
    { name: t('nav.success'), href: '/success' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.docs'), href: '/docs' },
    { name: t('nav.applicationElements'), href: '/application-elements' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div>className="container flex h-16 items-center justify-between px-4"</div> 
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">StarTTeen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-smooth ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          >
            <Globe className="w-4 h-4 mr-1" />
           {language === 'ru' ? 'EN' : 'RU'}
</Button>

<Button variant="ghost" size="sm" asChild>
  <a
    href={
      language === 'ru'
        ? 'https://forms.yandex.ru/u/68b323e6f47e731ccb27d32d' 
        : 'https://forms.yandex.ru/u/english-form-link' 
    }
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('nav.becomeMentor')}
  </a>
</Button>

<Button variant="default" size="sm" asChild>
  <Link to="/apply">{t('nav.apply')}</Link>
</Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setLanguage(language === 'ru' ? 'en' : 'ru');
                  setIsMenuOpen(false);
                }}
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === 'ru' ? 'EN' : 'RU'}
              </Button>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a 
                  href="https://forms.yandex.ru/u/68b323e6f47e731ccb27d32d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.becomeMentor')}
                </a>
              </Button>
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/apply" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.apply')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}