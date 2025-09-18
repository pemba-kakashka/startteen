import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, FileText, Users, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Условия <span className="text-gradient">использования</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Правила и условия участия в программе StarTTeen. Пожалуйста, внимательно 
              ознакомьтесь с документом перед подачей заявки.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">1. Общие положения</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Настоящие Условия использования (далее — «Условия») регулируют отношения между 
                    StarTTeen (далее — «Мы», «Организаторы») и пользователями платформы (далее — «Участники», «Вы»).
                  </p>
                  <p>
                    Используя наш сайт или подавая заявку на участие в программе, вы подтверждаете, 
                    что прочитали, поняли и согласны соблюдать настоящие Условия.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">2. Участие в программе</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">2.1 Требования к участникам</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Возраст: школьники (14-18 лет) и студенты (до 25 лет)</li>
                    <li>Наличие идеи или проекта, готовность к развитию</li>
                    <li>Мотивация и готовность активно участвовать в программе</li>
                    <li>Соблюдение сроков и требований программы</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">2.2 Обязанности участников</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Предоставлять достоверную информацию о себе и проекте</li>
                    <li>Активно участвовать в менторских сессиях</li>
                    <li>Выполнять задания и рекомендации менторов</li>
                    <li>Соблюдать конфиденциальность и этические нормы</li>
                    <li>Своевременно информировать о изменениях в проекте</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">3. Права и обязанности сторон</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">3.1 Мы предоставляем:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Доступ к менторам и экспертам</li>
                    <li>Образовательные материалы и ресурсы</li>
                    <li>Возможность участия в мероприятиях и воркшопах</li>
                    <li>Техническую поддержку платформы</li>
                    <li>Помощь в поиске партнёров и инвесторов (при возможности)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">3.2 Мы НЕ гарантируем:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Коммерческий успех вашего проекта</li>
                    <li>Привлечение инвестиций или финансирования</li>
                    <li>Создание готового продукта или услуги</li>
                    <li>Трудоустройство или стажировки</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">4. Интеллектуальная собственность</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Все права на ваш проект и интеллектуальную собственность остаются за вами
                    </li>
                    <li>
                      Мы не претендуем на права собственности на ваши идеи и разработки
                    </li>
                    <li>
                      При согласии участника мы можем использовать информацию о проекте 
                      для создания кейсов и маркетинговых материалов
                    </li>
                    <li>
                      Все материалы программы защищены авторским правом StarTTeen
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent mr-3" />
                  <h2 className="text-2xl font-bold">5. Ограничения и исключения</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">5.1 Запрещается:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Использование платформы в коммерческих целях без разрешения</li>
                    <li>Распространение спама или нежелательной информации</li>
                    <li>Нарушение прав других участников</li>
                    <li>Передача доступа к аккаунту третьим лицам</li>
                    <li>Попытки взлома или нарушения работы системы</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">5.2 Исключение ответственности:</h3>
                  <p>
                    StarTTeen не несёт ответственности за прямые или косвенные убытки, 
                    связанные с участием в программе, за исключением случаев, 
                    предусмотренных законодательством РФ.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Scale className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">6. Прекращение участия</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-foreground">6.1 Участник может:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Прекратить участие в любое время, уведомив организаторов</li>
                    <li>Запросить удаление своих данных</li>
                    <li>Приостановить участие по уважительным причинам</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground">6.2 Мы можем исключить участника при:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Нарушении настоящих Условий</li>
                    <li>Неактивном участии в программе более 30 дней</li>
                    <li>Предоставлении ложной информации</li>
                    <li>Неэтичном поведении по отношению к другим участникам</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">7. Заключительные положения</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Настоящие Условия могут изменяться. Участники уведомляются 
                      об изменениях по email или через сайт
                    </li>
                    <li>
                      Все споры решаются путём переговоров, при невозможности — 
                      в судебном порядке по законодательству РФ
                    </li>
                    <li>
                      Если какое-либо положение признано недействительным, 
                      остальные положения сохраняют силу
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm">
                      <strong>Дата вступления в силу:</strong> 30 декабря 2024<br />
                      <strong>Контакт для вопросов:</strong> legal@starteen.ru<br />
                      <strong>Адрес:</strong> Москва, Россия
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}