import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-4 text-gradient">404</h1>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Страница не найдена</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Похоже, эта страница отправилась в космос раньше нас. Но не переживайте — 
              мы поможем вам вернуться на правильный курс!
            </p>
            <Button size="lg" className="gradient-primary border-0 shadow-elegant hover:shadow-glow" asChild>
              <a href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Вернуться на главную
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
