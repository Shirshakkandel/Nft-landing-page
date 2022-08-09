import React, { useContext } from 'react';

import { Fixed, Flex, FlexCol } from '../util/styledComponents';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionContext } from '../util/ContextProvider/CurrentSectionContextProvider';
import { fade, photoAnim, sectionAnimation, titleAnim } from '../util/animation.js';
import { useScroll } from '../hooks/useScroll';
const Hero = () => {
  //@ts-ignore
  const { currentSection, setCurrentSection } = useContext(SectionContext);
  const { ref, inView } = useScroll();

  if (inView) {
    setCurrentSection('home');
  }

  return (
    <section className="bg-secondary " ref={ref}>
      <Flex
        variants={sectionAnimation}
        initial="hidden"
        animate="show"
        id="home"
        className="flex justify-between items-center h-[calc(100vh-5rem)] max-h-[800px] overflow-hidden section-wrapper"
      >
        {/* Left image part hidden in Mobile */}
        <motion.div variants={photoAnim} className="flex-1 hidden w-auto h-full mt-4   lg:block basis-[45%] self-end">
          <img src="images\heroImage.png" alt="Nft Image" className="object-cover w-full h-full" />
          {/* <div className="w-full h-full bg-center bg-cover bg-hero" /> */}
        </motion.div>

        {/* Right Part  */}
        <FlexCol variants={sectionAnimation} initial="hidden" animate="show" className="flex flex-col items-center flex-1 gap-10 basis-[55%] lg:mr-[10%]">
          <motion.h1
            variants={titleAnim}
            style={{ WebkitTextStroke: '2px white' }}
            className=" font-[400] text-7xl md:text-[136px]  tracking-[1.275px] font-Futura text-secondary"
          >
            Sayuri
          </motion.h1>
          <motion.div variants={titleAnim} className="w-[75%] h-[7px] bg-primary mt-[-20px] rounded-sm" />
          <motion.p variants={titleAnim} className="items-start self-start w-11/12 mx-auto text-center paragraph text-[14px] font-poppins">
            A collection of anime style Nft. 777 NFT collection. Connect yor wallet and get the NFT before the hype up.
          </motion.p>
        </FlexCol>
      </Flex>
    </section>
  );
};

export default Hero;
