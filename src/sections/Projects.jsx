import { Suspense, useState } from 'react';
import { myProjects } from '../constants';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import DemoComputer from '../components/DemoComputer';
import { CanvasLoader } from '../components/CanvasLoader';

const projectCount = myProjects.length;

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const handleNavigation = (direction) => {
    setCurrentProjectIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">Проекты</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-black-200 shadow-2xl">
          <div className="absolute top-0 right-0">
            <img
              src={myProjects[currentProjectIndex].spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={myProjects[currentProjectIndex].logoStyle}
          >
            <img
              src={myProjects[currentProjectIndex].logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white font-semibold animatedText">
              {myProjects[currentProjectIndex].title}
            </p>
            <p className="animatedText">
              {myProjects[currentProjectIndex].desc}
            </p>
            <p className="animatedText">
              {myProjects[currentProjectIndex].subdesc}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {myProjects[currentProjectIndex].tags.map((tag, index) => (
                <div className="tech-logo" key={'tech-logo' + index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={myProjects[currentProjectIndex].href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Посмотреть</p>
              <img src="assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => {
                handleNavigation('left');
              }}
            >
              <img
                src="assets/left-arrow.png"
                alt="arrow-left"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => {
                handleNavigation('right');
              }}
            >
              <img
                src="assets/right-arrow.png"
                alt="arrow-right"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-xl h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer
                    texture={myProjects[currentProjectIndex].texture}
                  />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
