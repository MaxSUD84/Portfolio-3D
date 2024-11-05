import { Canvas } from '@react-three/fiber';
import { HackerRoom } from '../components/HackerRoom';
import { Suspense } from 'react';
import { CanvasLoader } from '../components/CanvasLoader';
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const Hero = () => {
  //   const controls = useControls('HackerRoom', {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: -8,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 0.1,
  //       min: 0.01,
  //       max: 10,
  //     },
  //   });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Добро пожаловать, мой друг <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient font-extralight text-center">
          Создание продуктов и брендов
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <perspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                //   position={[
                //     controls.positionX,
                //     controls.positionY,
                //     controls.positionZ,
                //   ]}
                //   rotation={[
                //     controls.rotationX,
                //     controls.rotationY,
                //     controls.rotationZ,
                //   ]}

                //   position={[2, -7, -11]}
                //   rotation={[0, -Math.PI, 0]}
                //   scale={isMobile ? 0.07 : 0.1}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button name="Связаться" isBeam containerClass="w-full" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
