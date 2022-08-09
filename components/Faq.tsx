import React, { useContext, useState } from 'react';
import { FlexCol, FlexWrap } from '../util/styledComponents';
import { useInView } from 'react-intersection-observer';
import { SectionContext } from '../util/ContextProvider/CurrentSectionContextProvider';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, staggerLate } from '../util/animation';
import { useScroll } from '../hooks/useScroll';
const Faq = () => {
  const { ref, controls, inView } = useScroll();
  const { currentSection, setCurrentSection } = useContext(SectionContext);
  if (inView) {
    setCurrentSection('faq');
  }
  return (
    <motion.section variants={staggerLate} animate={controls} initial="hidden" className="w-full bg-primary py-36 " ref={ref} id="faq">
      <FlexCol variants={fadeInUp} className="flex flex-col items-center gap-3 pb-10">
        <h2 className="text-center text-white heading">FAQ'S</h2>
        <img src="/images/underlinkfaq.png" alt="" />
      </FlexCol>

      <FlexCol className="flex flex-col gap-7 lg:gap-10 section-wrapper">
        {/* <SingleFaq
          question="1. What is a Sayuri? What is the story behind it?"
          answer="Sayuri is an anime with a modern twist and a dark past. All girl modern"
        /> */}
        <SingleFaq
          question="1. What is Sayuri details:"
          answer="The Sayuri NFT is the representation of a female collective which features 777 unique Modern Sukebans personified in the Stories of Sayuri. "
        />
        <SingleFaq
          question="2.What is Sayuri?"
          answer="Sayuri encapsulates the essence of modern women who are breaking stereotypical barriers for pursuing freedom in self expression while dedicating to career goals and aspiring females to be self-reliant. 
          They exude confidence, individualistic and professional persona in solid colored outfit with dyed hair and sharp appearances. 
          Modern Sukebans are mature, ambitious and realistic towards their career goals and are open to possibilities of learning and growth. Sayuri’s are on a journey towards building progressive societies and are always challenging traditional norms and gender identities with poise and conviction."
        />

        <SingleFaq
          question="3 . What is Redverse?"
          answer=" Redverse is a space where different anime based characters can play games and interact with each other. More details coming soon."
        />

        <SingleFaq
          question="4 . How many Sayuris will be there in the collection?"
          answer="There will be 777 total Sayuris available to mint for this release. We will also release a second version with a full story in future. We will also airdrop to Red Saint holders a special version of Sayuri."
        />

        <SingleFaq question="5 . What is the price of one Sayuri?" answer=" One Sayuri cost 499 Cro." />

        <SingleFaq question="6 . Where can I mint Sayuri?" answer=" You will be able to mint Sayuri in Ebisusbay. " />

        <SingleFaq question="7 . What is the legal right of owning Sayuri?" answer=" You have limited commercial rights." />

        <SingleFaq question="8 . Is there a limit on how many Sayuris we can mint?" answer="You can mint as many as you would like." />

        <SingleFaq
          question="9 . What is the relationship between RedSaints and Sayuris?"
          answer="All we can say now is they are both related and fight for the same cause."
        />
      </FlexCol>
    </motion.section>
  );
};

export default Faq;

export const SingleFaq: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  //   const [open, setOpen] = useState(false);
  //   const ref = React.useRef(null);
  return (
    <FlexCol variants={fadeInUp} className="flex flex-col w-full gap-3 lg:gap-5">
      <div className="text-lg font-extrabold cursor-pointer font-raleway question text-secondary">{question}</div>
      <div className="flex items-center gap-2 text-base font-bold text-white answer">
        <span className="self-start  h-2 mt-2 min-w-[10px] bg-secondary max-w-[8px]"></span>
        {answer}
      </div>
    </FlexCol>
  );
};
