import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Mail, Lock, Eye, FileText, Clock } from 'lucide-react';

export default function Privacy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-subtle">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Политика <span className="text-gradient">конфиденциальности</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы серьёзно относимся к защите ваших персональных данных и прозрачности 
              в их использовании.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Общие положения</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                  и меры по обеспечению безопасности персональных данных в StarTTeen (далее — «Мы», «Наш сайт») 
                  в целях исполнения требований Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Какие данные мы собираем</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>При подаче заявки:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>ФИО, возраст, класс/курс обучения</li>
                    <li>Город проживания</li>
                    <li>Контактные данные (email, Telegram)</li>
                    <li>Информация о проекте/идее</li>
                    <li>Данные об образовании и опыте</li>
                  </ul>
                  <p><strong>При использовании сайта:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP-адрес и данные браузера</li>
                    <li>Файлы cookie для улучшения работы сайта</li>
                    <li>Статистика посещений (анонимно)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Как мы используем ваши данные</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Рассмотрение заявок на участие в программе</li>
                    <li>Связь с участниками и менторами</li>
                    <li>Организация менторских сессий</li>
                    <li>Отправка важных уведомлений о программе</li>
                    <li>Создание анонимной статистики для улучшения сервиса</li>
                    <li>Подготовка кейсов успеха (только с согласия участника)</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Мы НЕ передаём ваши данные третьим лицам</strong> без вашего явного согласия, 
                    за исключением случаев, предусмотренных законодательством РФ.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Защита данных</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Мы применяем современные технические и организационные меры для защиты ваших данных:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Шифрование данных при передаче (SSL/TLS)</li>
                    <li>Ограниченный доступ к персональным данным</li>
                    <li>Регулярное резервное копирование</li>
                    <li>Мониторинг безопасности систем</li>
                    <li>Обучение сотрудников принципам работы с персональными данными</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Срок хранения данных</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Данные участников:</strong> 3 года с момента завершения программы</li>
                    <li><strong>Данные заявок:</strong> 1 год для неуспешных заявок</li>
                    <li><strong>Технические данные:</strong> до 1 года для аналитики</li>
                    <li><strong>Email для рассылки:</strong> до отзыва согласия</li>
                  </ul>
                  <p className="mt-4">
                    По истечении указанных сроков данные удаляются или обезличиваются.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Ваши права</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Вы имеете право:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Получить информацию о обработке ваших данных</li>
                    <li>Требовать уточнения, блокирования или удаления данных</li>
                    <li>Отозвать согласие на обработку в любое время</li>
                    <li>Обратиться с жалобой в Роскомнадзор</li>
                    <li>Получить копию ваших данных в машиночитаемом формате</li>
                  </ul>
                  <p className="mt-4">
                    Для реализации ваших прав обращайтесь по адресу: 
                    <a href="mailto:privacy@starteen.ru" className="text-primary hover:underline ml-1">
                      privacy@starteen.ru
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Изменения в политике</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Мы можем обновлять данную Политику конфиденциальности. О существенных изменениях 
                    мы уведомим вас по email или через уведомление на сайте.
                  </p>
                  <p className="text-sm">
                    <strong>Дата последнего обновления:</strong> 30 декабря 2024<br />
                    <strong>Контакт для вопросов:</strong> privacy@starteen.ru
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}