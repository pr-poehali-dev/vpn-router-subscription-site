import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    { id: "card", name: "Банковская карта", icon: "CreditCard" },
    { id: "sbp", name: "СБП", icon: "Smartphone" },
    { id: "yandex", name: "ЮMoney", icon: "Wallet" },
    { id: "qiwi", name: "QIWI", icon: "Coins" },
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    // Здесь будет логика обработки платежа
    setTimeout(() => {
      setIsProcessing(false);
      alert("Спасибо за покупку! Доступы отправлены на email.");
    }, 2000);
  };

  return (
    <section id="payment" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Оплата подписки
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Всего несколько шагов до защищенного интернета
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Детали заказа */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Ваш заказ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">VPN Защита</h3>
                  <p className="text-sm text-gray-600">30 дней доступа</p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  300 ₽
                </Badge>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    300 ₽
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  За 30 дней полного доступа
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Icon
                    name="Shield"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  <span className="text-sm text-green-800 font-medium">
                    Безопасная оплата
                  </span>
                </div>
                <p className="text-xs text-green-700 mt-1">
                  Все платежи защищены SSL шифрованием
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Форма оплаты */}
          <Card>
            <CardHeader>
              <CardTitle>Способ оплаты</CardTitle>
              <CardDescription>Выберите удобный способ оплаты</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full flex items-center p-4 border rounded-lg transition-colors ${
                      paymentMethod === method.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <Icon name={method.icon} size={20} className="mr-3" />
                    <span className="font-medium">{method.name}</span>
                    {paymentMethod === method.id && (
                      <Icon
                        name="Check"
                        size={16}
                        className="ml-auto text-blue-600"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email для получения доступов
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button
                  onClick={handlePayment}
                  disabled={!email || isProcessing}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                >
                  {isProcessing ? (
                    <>
                      <Icon
                        name="Loader2"
                        size={20}
                        className="mr-2 animate-spin"
                      />
                      Обработка...
                    </>
                  ) : (
                    <>
                      <Icon name="Lock" size={20} className="mr-2" />
                      Оплатить 300 ₽
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Нажимая "Оплатить", вы соглашаетесь с условиями использования
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
