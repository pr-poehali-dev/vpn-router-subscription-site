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
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Простая цена
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            VPN подписка
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Защитите свое интернет-соединение с помощью надежного VPN сервиса
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <Card className="relative overflow-hidden border-2 border-blue-200 shadow-xl">
            <div className="absolute top-0 right-0 -mr-1 -mt-1">
              <Badge className="bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                Популярный выбор
              </Badge>
            </div>

            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">
                VPN Защита
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Полная защита на 30 дней
              </CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">300</span>
                <span className="text-xl font-medium text-gray-500 ml-2">
                  ₽
                </span>
                <div className="text-sm text-gray-500 mt-1">за 30 дней</div>
              </div>
            </CardHeader>

            <CardContent className="px-8">
              <ul className="space-y-4">
                {[
                  "Безлимитное количество устройств",
                  "30+ серверов по всему миру",
                  "Скорость до 500 Мбит/с",
                  "Круглосуточная поддержка",
                  "Блокировка рекламы",
                  "Защита от вирусов",
                  "Без логов активности",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-8 px-8 pb-8">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                onClick={() => {
                  document
                    .getElementById("payment")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon name="Shield" size={20} className="mr-2" />
                Оформить подписку
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            30-дневная гарантия возврата денег • Отменить можно в любое время
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
