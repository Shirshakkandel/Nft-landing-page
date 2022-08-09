import React, { useContext } from 'react';

import { SectionContext } from '../util/ContextProvider/CurrentSectionContextProvider';
import { motion } from 'framer-motion';
import { boxVariant, fadeInUp, pageAnimation, photoAnim, reveal, sectionAnimation, stagger } from '../util/animation';
import { useScroll } from '../hooks/useScroll';

const Collection = () => {
  const { currentSection, setCurrentSection } = useContext(SectionContext);

  const { ref, inView, controls } = useScroll();

  if (inView) {
    setCurrentSection('home');
  }

  const collectionImage = [
    '/images/collection/collection1.png',
    '/images/collection/collection2.png',
    '/images/collection/collection3.png',
    '/images/collection/collection4.png',
    '/images/collection/collection5.png',
  ];
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      //@ts-ignore
      animate={controls}
      initial="hidden"
      className="flex flex-wrap items-center justify-center flex-shrink section-wrapper mt-section collection"
    >
      <motion.div variants={fadeInUp} className="w-[206px] h-[421px] ">
        <img src="/images/collection/collection1.png" alt="collection 1" className="object-cover w-full h-full" />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <img src="/images/collection/collection2.png" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <img src="/images/collection/collection3.png" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <img src="/images/collection/collection4.png" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div variants={fadeInUp} className="w-[206px] h-[421px]">
        <img src="/images/collection/collection5.png" alt="" className="w-full h-full" />
      </motion.div>
    </motion.section>
  );
};

export default Collection;
