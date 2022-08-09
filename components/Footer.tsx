import React from 'react';
import { useScroll } from '../hooks/useScroll';
import { fadeInDown, fadeInUp, stagger } from '../util/animation';
import { FlexCol, FlexWrap } from '../util/styledComponents';
import { motion } from 'framer-motion';

const Footer = () => {
  const { ref, controls, inView } = useScroll();
  return (
    <section className="grid py-[35px] section-wrapper place-items-center" ref={ref}>
      <FlexWrap variants={stagger} animate={controls} initial="hidden" className="flex flex-wrap justify-center w-full gap-5 py-10">
        <FlexCol variants={fadeInDown} className="w-full md:w-[47%] lg:w-[32%]  items-center">
          <img src="images/team/bloodsaint.png" alt="blod saint" className="w-[206px] h-[206px]" />
          <h3 className="text-[22px] lg:text-[30px] leading-[25px] lg:leading-[37px] font-bold text-secondary ">Blood Saint</h3>
          <p className="text-[18px] leading-[20px] text-secondary">Artist</p>
        </FlexCol>

        <FlexCol variants={fadeInDown} className="w-full md:w-[47%] lg:w-[32%] items-center">
          <img src="images/team/mastersaint.png" alt="blod saint" className="w-[206px] h-[206px]" />
          <h3 className="text-[22px] lg:text-[30px] leading-[25px] lg:leading-[37px] font-bold text-secondary ">Master Saint</h3>
          <p className="text-[18px] leading-[20px] text-secondary">Developer</p>
        </FlexCol>

        <FlexCol variants={fadeInDown} className="w-full md:w-[47%] lg:w-[32%] items-center">
          <img src="images/team/bigsaint.png" alt="blod saint" className="w-[206px] h-[206px]" />
          <h3 className="text-[22px] lg:text-[30px] leading-[25px] lg:leading-[37px] font-bold text-secondary ">Tim Saint</h3>
          <p className="text-[18px] leading-[20px] text-secondary">Marketer</p>
        </FlexCol>
      </FlexWrap>

      <motion.h2 variants={fadeInUp} className="paragraph text-secondary">
        JOIN OUR COMMUNITY
      </motion.h2>
      <div className="flex gap-[30px] md:gap-[50px] lg:gap-[140px] mt-[16px]">
        <a href="">
          <img src="/images/social/instagram.png" alt="Instragram" />
        </a>
        <a href="">
          <img src="/images/social/facebook.png" alt="Facebook" />
        </a>
        <a href="">
          <img src="/images/social/twitter.png" alt="Twitter" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
