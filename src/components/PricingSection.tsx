import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const plans = [
    {
      name: "Базовый",
      price: "990",
      period: "месяц",
      description: "Идеально для небольшой квартиры",
      features: [
        "До 10 устройств",
        "5 локаций серверов",
        "Базовая поддержка",
        "Скорость до 100 Мбит/с",
      ],
      popular: false,
    },
    {
      name: "Семейный",
      price: "1590",
      period: "месяц",
      description: "Лучший выбор для семьи",
      features: [
        "Безлимитное количество устройств",
        "30+ локаций серверов",
        "Приоритетная поддержка",
        "Скорость до 500 Мбит/с",
        "Родительский контроль",
        "Блокировка рекламы",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "2490",
      period: "месяц",
      description: "Для максимальной производительности",
      features: [
        "Безлимитное количество устройств",
        "50+ локаций серверов",
        "VIP поддержка 24/7",
        "Скорость до 1 Гбит/с",
        "Выделенный IP",
        "Двойное шифрование",
        "Защита от DDoS",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Выберите ваш тариф
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Все тарифы включают настройку роутера и техническую поддержку
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 hover:shadow-lg ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> ₽/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Icon
                        name="Check"
                        size={20}
                        className="text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Оплатить {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            <Icon name="Shield" size={16} className="inline mr-1" />
            30 дней гарантии возврата средств
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
