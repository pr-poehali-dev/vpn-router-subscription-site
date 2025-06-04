import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Router",
      title: "Простая настройка",
      description:
        "Подключите роутер, и все устройства автоматически получат VPN защиту. Никаких приложений на каждом устройстве.",
    },
    {
      icon: "Smartphone",
      title: "Все устройства защищены",
      description:
        "Телефоны, планшеты, ноутбуки, умные телевизоры, игровые консоли — всё работает через VPN автоматически.",
    },
    {
      icon: "Gauge",
      title: "Высокая скорость",
      description:
        "Специально оптимизированные серверы обеспечивают стабильную скорость без задержек для стриминга и игр.",
    },
    {
      icon: "MapPin",
      title: "Обход блокировок",
      description:
        "Получите доступ к заблокированным сайтам и сервисам. Смотрите контент из любой страны мира.",
    },
    {
      icon: "Eye",
      title: "Защита от слежки",
      description:
        "Интернет-провайдер и сайты не смогут отслеживать вашу активность. Полная анонимность в сети.",
    },
    {
      icon: "Users",
      title: "Родительский контроль",
      description:
        "Контролируйте доступ детей к интернету, блокируйте нежелательный контент и устанавливайте время использования.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Почему VPN роутер?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Забудьте о настройке VPN на каждом устройстве. Один роутер защищает
            весь ваш дом.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Icon
                      name={feature.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
          <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
            Защитите свой дом уже сегодня. Настройка займет всего 5 минут.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-2" />
              Быстрая настройка
            </div>
            <div className="flex items-center">
              <Icon name="Headphones" size={16} className="mr-2" />
              Поддержка 24/7
            </div>
            <div className="flex items-center">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Гарантия возврата
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
