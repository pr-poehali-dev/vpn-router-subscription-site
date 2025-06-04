import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Icon name="Shield" size={16} className="mr-2" />
            Защищенный интернет для всего дома
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            VPN роутер для{" "}
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              максимальной защиты
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
            Защитите все устройства в доме одним роутером. Никаких настроек на
            каждом устройстве — просто подключитесь к Wi-Fi и наслаждайтесь
            анонимным интернетом.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-purple-50 text-lg px-8 py-4"
            >
              <Icon name="Zap" size={20} className="mr-2" />
              Выбрать тариф
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Icon name="Wifi" size={32} />
              </div>
              <h3 className="text-lg font-semibold">Все устройства</h3>
              <p className="text-purple-200">Телефоны, ноутбуки, телевизоры</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Icon name="Globe" size={32} />
              </div>
              <h3 className="text-lg font-semibold">Любая страна</h3>
              <p className="text-purple-200">50+ серверов по всему миру</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Icon name="Lock" size={32} />
              </div>
              <h3 className="text-lg font-semibold">Полная анонимность</h3>
              <p className="text-purple-200">Без логов и отслеживания</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
