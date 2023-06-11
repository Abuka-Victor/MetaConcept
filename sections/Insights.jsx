'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, InsightCard } from '../components';
import { staggerContainer } from '../utils/motion';

import { insights } from '../constants';

import styles from '../styles';
import { Fragment } from 'react';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText title="Insights About Metaverse" textStyles="text-center" />

      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, idx) => (
          <InsightCard key={`insight-${idx}`} {...insight} index={idx + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
