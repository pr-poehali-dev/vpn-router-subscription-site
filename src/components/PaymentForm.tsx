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
  const [selectedPlan, setSelectedPlan] = useState("family");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const plans = {
    basic: { name: "Базовый", price: 990 },
    family: { name: "Семейный", price: 1590 },
    premium: { name: "Премиум", price: 2490 },
  };

  const paymentMethods = [
    { id: "card", name: "Банковская карта", icon: "CreditCard" },
    { id: "sbp", name: "СБП", icon: "Smartphone" },
    { id: "yandex", name: "Яндекс.Деньги", icon: "Wallet" },
    { id: "qiwi", name: "QIWI", icon: "Coins" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Оформить подписку
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Выберите тариф и способ оплаты
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* План и способ оплаты */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Package" size={20} className="mr-2" />
                  Выберите тариф
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(plans).map(([key, plan]) => (
                  <label
                    key={key}
                    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedPlan === key
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="plan"
                        value={key}
                        checked={selectedPlan === key}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">{plan.name}</div>
                        <div className="text-sm text-gray-500">
                          {plan.price} ₽/месяц
                        </div>
                      </div>
                    </div>
                    {key === "family" && (
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-700"
                      >
                        Популярный
                      </Badge>
                    )}
                  </label>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Способ оплаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <Icon
                      name={method.icon as any}
                      size={20}
                      className="mr-3 text-gray-600"
                    />
                    <span className="font-medium">{method.name}</span>
                  </label>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Форма оплаты */}
          <Card>
            <CardHeader>
              <CardTitle>Данные для оплаты</CardTitle>
              <CardDescription>
                Введите ваши данные для оформления подписки
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Иван" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Фамилия
                  </label>
                  <Input placeholder="Иванов" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="ivan@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <Input type="tel" placeholder="+7 (999) 123-45-67" />
              </div>

              {paymentMethod === "card" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Номер карты
                    </label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Срок действия
                      </label>
                      <Input placeholder="MM/ГГ" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        CVV
                      </label>
                      <Input placeholder="123" type="password" maxLength={3} />
                    </div>
                  </div>
                </>
              )}

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">Итого к оплате:</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {plans[selectedPlan as keyof typeof plans].price} ₽
                  </span>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                  <Icon name="Lock" size={20} className="mr-2" />
                  Оплатить подписку
                </Button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Нажимая кнопку, вы соглашаетесь с условиями использования и
                  политикой конфиденциальности
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
