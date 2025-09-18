import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    wantsTelegram: false,
    telegramUsername: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: t('contact.messageSent'),
      description: t('contact.responseTime'),
    });
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        wantsTelegram: false,
        telegramUsername: ''
      });
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('contact.title').includes('нами') ? (
                <>Свяжитесь <span className="text-gradient">с нами</span></>
              ) : (
                <><span className="text-gradient">Contact</span> us</>
              )}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <MessageCircle className="w-6 h-6 text-primary mr-3" />
                      {t('contact.contactInfo')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.emailSupport')}</h3>
                        <p className="text-muted-foreground mb-2">infostartteen@gmail.com</p>
                        <p className="text-sm text-muted-foreground">{t('contact.emailSupportDesc')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.telegram')}</h3>
                        <p className="text-muted-foreground mb-2">@startteen_support</p>
                        <p className="text-sm text-muted-foreground">{t('contact.telegramDesc')}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.workingHours')}</h3>
                        <p className="text-muted-foreground mb-2">{t('contact.workingHoursValue')}</p>
                        <p className="text-sm text-muted-foreground">{t('contact.responseTime')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('contact.writeUs')}</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{t('contact.messageSent')}</h3>
                      <p className="text-muted-foreground">
                        {t('contact.thankYou')}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t('contact.name')} *</Label>
                          <Input
                            id="name"
                            placeholder={t('contact.namePlaceholder')}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{t('contact.email')} *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t('contact.emailPlaceholder')}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">{t('contact.subject')}</Label>
                        <Select onValueChange={(value) => setFormData({...formData, subject: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('contact.selectSubject')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="application">{t('contact.subjectApplication')}</SelectItem>
                            <SelectItem value="mentoring">{t('contact.subjectMentoring')}</SelectItem>
                            <SelectItem value="partnership">{t('contact.subjectPartnership')}</SelectItem>
                            <SelectItem value="technical">{t('contact.subjectTechnical')}</SelectItem>
                            <SelectItem value="other">{t('contact.subjectOther')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.message')} *</Label>
                        <Textarea
                          id="message"
                          placeholder={t('contact.messagePlaceholder')}
                          className="min-h-[120px]"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="telegram"
                            checked={formData.wantsTelegram}
                            onCheckedChange={(checked) => 
                              setFormData({...formData, wantsTelegram: checked as boolean})
                            }
                          />
                          <Label htmlFor="telegram" className="text-sm">
                            {t('contact.wantTelegram')}
                          </Label>
                        </div>
                        
                        {formData.wantsTelegram && (
                          <Input
                            placeholder={t('contact.telegramUsername')}
                            value={formData.telegramUsername}
                            onChange={(e) => setFormData({...formData, telegramUsername: e.target.value})}
                          />
                        )}
                      </div>

                      <Button type="submit" size="lg" className="w-full gradient-primary border-0 shadow-elegant hover:shadow-glow">
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.sendMessage')}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}