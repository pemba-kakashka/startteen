import { Link } from 'react-router-dom';
import { Rocket, Mail, MessageCircle, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const navigation = {
    main: [
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.apply'), href: '/apply' },
      { name: t('nav.mentors'), href: '/mentors' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    support: [
      { name: t('nav.docs'), href: '/docs' },
      { name: 'FAQ', href: '/#faq' },
      { name: t('hero.title').includes('школьников') ? 'Политика конфиденциальности' : 'Privacy Policy', href: '/privacy' },
      { name: t('hero.title').includes('школьников') ? 'Условия использования' : 'Terms of Use', href: '/terms' },
    ],
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">StarTTeen</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@starteen.ru"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/startteen"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/starteen"
                className="text-muted-foreground hover:text-foreground transition-smooth"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.main')}</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t('footer.supportHours')}</p>
              <a
                href="mailto:info@starteen.ru"
                className="block hover:text-foreground transition-smooth"
              >
                {t('footer.email')}
              </a>
              <a
                href="https://t.me/startteen"
                className="block hover:text-foreground transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.telegram')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}