import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('maxsud1984@gmail.com');

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Привет, меня зовут Максим</p>
              <p className="grid-subtext">
                Я изучаю веб-работку уже более 4 лет. Имею опыт в разработке
                frontend и backend на языке JavaScript. Это веб-приложение
                демонстрации работы с 3D моделями и анимацией на Three.js.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Мои навыки</p>
              <p className="grid-subtext">
                Я разрабатывал приложения на языке JavaScript/TypeScript с
                использованием фреймворков React, NextJS и Three.js. И backend
                части приложений на Node.js и NestJS.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)" // "#000000"
                backgroundImageOpacity={0.5}
                showGraticules
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 55,
                    lng: 37,
                    text: "I'm in Moscow",
                    color: '#ffffaa',
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">Контакты</p>
              <p className="grid-subtext">Мои контакты: +7 (999) 999-99-99</p>
              <Button
                name="Связаться со мной"
                isBeam
                containerClass="mt-10 w-full"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 md:grid-cols-1">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Мои интересы</p>
              <p className="grid-subtext">
                Я стремлюсь развиватся и изучать новые технологии. Интересуюсь
                архитектурными подходами к построению веб-приложений и
                интересными дизайн-проектами фронтенд части приложений.
                Стремлюсь понять в каких задачах можно применить увиденные
                подходы и приемы.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Моя почта:</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  className="w-6 h-6"
                />
                <p className="lg:text-2xl md:text-xl font-medium tex-gray_gradient text-white">
                  maxsud1984@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
