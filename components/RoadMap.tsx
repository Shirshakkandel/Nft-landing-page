import React, { useContext } from 'react';
import { Flex, FlexCol, MobileHidden } from '../util/styledComponents';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { SectionContext } from '../util/ContextProvider/CurrentSectionContextProvider';

import { fade, fadeInUp, photoAnim, stagger, staggerLate } from '../util/animation';
import { useScroll } from '../hooks/useScroll';

const RoadMap = () => {
  const { setCurrentSection } = useContext(SectionContext);
  // const { ref, inView, entry } = useInView({ threshold: 0.1 });
  const { ref, controls, inView } = useScroll();

  if (inView) {
    setCurrentSection('roadmap');
  }
  return (
    <section id="roadmap" className=" text-primary bg-secondary pt-[85px]" ref={ref}>
      <FlexCol className="flex flex-col items-center gap-3 pb-10">
        <h2 className="text-center heading">Roadmap</h2>
        <img src="/images/underline.png" alt="" />
      </FlexCol>

      <Flex className="flex pb-10 section-wrapper">
        <motion.div variants={fade} className="basis-[100%] lg:basis-[40%] ">
          <motion.div variants={staggerLate} animate={controls} initial="hidden" className="container relative mt-[80px]">
            <FlexCol
              variants={fadeInUp}
              className="relative first-roadmap pl-10  py-2 roadmap min-h-[300px] w-[80%] flex flex-col justify-center   border-primary border-t-[7px]  border-l-[7px] "
            >
              <h2 className="heading">Goal One:</h2>
              <p className="roadmap-subheading">List it on marketplace</p>
            </FlexCol>

            <FlexCol
              variants={fadeInUp}
              className="relative second-roadmap pl-10 py-2 roadmap min-h-[250px] w-[60%] flex flex-col justify-center  border-primary border-t-[7px]  border-l-[7px]"
            >
              <h2 className="heading">Goal Two:</h2>
              <p className="roadmap-subheading">Collaboration with other anime project</p>
            </FlexCol>

            <FlexCol
              variants={fadeInUp}
              className="relative third-roadmap pl-10  py-2 roadmap min-h-[250px] w-[60%] flex flex-col justify-center  border-primary border-t-[7px]  border-l-[7px]"
            >
              <h2 className="heading">Goal Three:</h2>
              <p className="roadmap-subheading">Second version of Sayuri with dark past reveal, airdrop and mint. TBD.</p>
            </FlexCol>

            <FlexCol
              variants={fadeInUp}
              className="relative roadmap py-2  min-h-[250px] w-[80%] flex flex-col justify-center pl-10  border-primary border-y-[7px]  border-l-[7px]"
            >
              <div className="absolute bottom-[-20px] right-[-20px] rounded-full bg-primary w-[40px] h-[40px] "></div>
              <div className="absolute bottom-[-20px] left-[-20px] rounded-full bg-primary w-[40px] h-[40px] "></div>
              <h2 className="heading">Goal Four:</h2>
              <p className="roadmap-subheading w-[100%]">Integrate Sayuri on Redverse. Details coming soon.</p>
            </FlexCol>
          </motion.div>
        </motion.div>

        <MobileHidden className=" hidden lg:block lg:basis-[60%] object-cover ">
          <div className="w-auto h-[calc(100%+2.5rem)] bg-right-bottom bg-cover bg-roadmap" />
        </MobileHidden>
      </Flex>
    </section>
  );
};

export default RoadMap;
