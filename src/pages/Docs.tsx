import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, Download, ExternalLink, Book, Users, Target, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Docs() {
  const { t } = useLanguage();
  
  const documents = [
    {
      id: 'participant-guide',
      titleKey: 'docs.documents.participantGuide.title',
      descriptionKey: 'docs.documents.participantGuide.description',
      type: 'PDF',
      size: '74.6 KB',
      featured: true,
      downloadUrl: '/participant-guide.pdf'
    },
    {
      id: 'team-guide',
      titleKey: 'docs.documents.teamGuide.title',
      descriptionKey: 'docs.documents.teamGuide.description',
      type: 'PDF',
      size: '2.1 MB',
      featured: true,
      downloadUrl: '/team-guide.pdf'
    },
    {
      id: 'mentor-handbook',
      titleKey: 'docs.documents.mentorHandbook.title',
      descriptionKey: 'docs.documents.mentorHandbook.description',
      type: 'PDF',
      size: '1.8 MB',
      featured: false,
      downloadUrl: '/docs/mentor-handbook.pdf'
    },
    {
      id: 'expert-handbook',
      titleKey: 'docs.documents.expertHandbook.title',
      descriptionKey: 'docs.documents.expertHandbook.description',
      type: 'PDF',
      size: '1.5 MB',
      featured: false,
      downloadUrl: '/docs/expert-handbook.pdf'
    },
    {
      id: 'project-template',
      titleKey: 'docs.documents.projectTemplate.title',
      descriptionKey: 'docs.documents.projectTemplate.description',
      type: 'DOCX',
      size: '456 KB',
      featured: false,
      downloadUrl: '/docs/project-template.docx'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Book className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">{t('docs.title')}</span> {t('docs.subtitle')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('docs.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="border-accent/20 bg-accent/5">
              <AlertTriangle className="h-4 w-4 text-accent" />
              <AlertDescription className="text-accent-foreground">
                <strong>{t('docs.importantNotice')}</strong> {t('docs.noticeText')}
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {documents.map((doc, index) => {
                const Icon = doc.type === 'PDF' ? FileText : FileText;
                return (
                  <Card key={doc.id} className={`border-0 shadow-elegant hover:shadow-glow transition-smooth animate-slide-up ${
                    doc.featured ? 'ring-2 ring-primary/20' : ''
                  }`} style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            doc.featured ? 'gradient-primary' : 'bg-muted'
                          }`}>
                            <Icon className={`w-6 h-6 ${doc.featured ? 'text-white' : 'text-muted-foreground'}`} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl flex items-center">
                              {t(doc.titleKey)}
                              {doc.featured && (
                                <span className="ml-3 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                  {t('docs.recommended')}
                                </span>
                              )}
                            </CardTitle>
                            <div className="flex items-center space-x-3 mt-2 text-sm text-muted-foreground">
                              <span>{doc.type}</span>
                              <span>•</span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{t(doc.descriptionKey)}</p>
                      <div className="flex items-center justify-between">
                        <Button 
                          size="lg" 
                          className={doc.featured ? 'gradient-primary border-0 shadow-elegant hover:shadow-glow' : ''} 
                          asChild
                        >
                          <a href={doc.downloadUrl} download>
                            <Download className="w-5 h-5 mr-2" />
                            {t('docs.download')} {doc.type}
                          </a>
                        </Button>
                        {doc.featured && (
                          <div className="text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Target className="w-4 w-4 mr-1" />
                              {t('docs.requiredBefore')}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant gradient-subtle">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">{t('docs.helpTitle')}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('docs.helpText')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      {t('docs.askQuestion')}
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" className="gradient-primary border-0 shadow-elegant hover:shadow-glow" asChild>
                    <Link to="/apply">
                      {t('nav.apply')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Document Updates */}
      <section className="py-12">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              {t('docs.lastUpdate')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}