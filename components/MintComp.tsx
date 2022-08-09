import React, { useContext } from 'react';
import { FlexCol, Relative } from '../util/styledComponents';
import { Progress } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SectionContext } from '../util/ContextProvider/CurrentSectionContextProvider';
import { useScroll } from '../hooks/useScroll';
import { fade, fadeInUp, stagger } from '../util/animation';

const MintComp = () => {
  const { setCurrentSection } = useContext(SectionContext);
  const { ref, inView, controls } = useScroll(0.4);

  if (inView) {
    setCurrentSection('mint');
  }

  return (
    <section className="w-full bg-primary py-[100px] py:mt-[130px] " id="mint" ref={ref}>
      <FlexCol variants={stagger} animate={controls} initial="hidden" className="flex flex-col items-center gap-5 overflow-hidden text-white section-wrapper">
        {/* Image */}
        <Relative className="relative ">
          {/* {[20, 40, 60, 80].map((number, i) => {
            return <img src="/images/mintline.png" key={number} alt="line" className={`absolute  top-[${number}%]  scale-[3]`} />;
          })} */}
          <img src="/images/mintline.png" alt="line" className={`absolute  top-[20%]  scale-[3]`} />
          <img src="/images/mintline.png" alt="line" className={`absolute  top-[40%]  scale-[3]`} />
          <img src="/images/mintline.png" alt="line" className={`absolute  top-[60%]  scale-[3]`} />
          <img src="/images/mintline.png" alt="line" className={`absolute  top-[80%]  scale-[3]`} />

          <motion.img src="/images/mintspiral.png" alt="background" className="absolute scale-x-[1.8] scale-y-[1.2] h-[120%] z-[5] " />
          <motion.img src="/images/mint.png" alt="Mint page" className="relative w-full h-full z-[10]" />
        </Relative>
        {/* Mint  */}

        <motion.div variants={fadeInUp} className="space-y-2 mt-[-4px] text-center">
          <p className="text-lg paragraph">Mint Price</p>
          <p className="paragraph text-[30px] font-extrabold text-secondary">499 CRO</p>
        </motion.div>

        <a
          href="https://app.ebisusbay.com/collection/red-saint"
          className="px-4 py-3 text-base text-center transition rounded-full cursor-pointer lg:text-lg bg-secondary hover:scale-110"
        >
          Mint on CroRare
        </a>

        <motion.div variants={fadeInUp} animate={controls} initial="hidden" className="w-3/4 space-y-2 text-center max-w-[500px]">
          <motion.p className="paragraph text-secondary">26.2% minted</motion.p>

          <Progress value={26.5} colorScheme="red" />
        </motion.div>

        <motion.div
          variants={fade}
          className="flex justify-around w-[77%] max-w-[500px] px-2 border-[5px] border-secondary rounded-[50px] h-[76px] items-center"
        >
          <div className="left paragraph text-secondary"> Minted: 210</div>
          <div className=" w-[2px] md:w-[3px] rotate-[20deg]  bg-secondary h-4/6 " />
          <div className="right paragraph text-secondary ">Total: 799</div>
        </motion.div>
      </FlexCol>
    </section>
  );
};

export default MintComp;
