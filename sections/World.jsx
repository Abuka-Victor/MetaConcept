'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, WorldCard } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

import styles from '../styles';
import { Fragment } from 'react';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People in the worlds" textStyles="text-center" />
      <TitleText
        title={
          <Fragment>
            Track friends around the you and invite them to play together in the
            same world
          </Fragment>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="Map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-orange-500">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-pink-400">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-cyan-100">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-[65%] w-[220px] h-[155px] p-[6px] rounded-3xl bg-[#5d6680] shadow-2xl shadow-indigo-700 sm:block hidden">
          <WorldCard
            imgUrl={'/planet-06.png'}
            cardStyles={'rounded-3xl'}
            title={'Hawkins Labs'}
          />
        </div>
        <div className="absolute bottom-36 left-40 w-[220px] h-[155px] p-[6px] rounded-3xl bg-[#5d6680] shadow-2xl shadow-violet-700 sm:block hidden">
          <WorldCard
            imgUrl={'/planet-09.png'}
            cardStyles={'rounded-3xl'}
            title={'Outer Space'}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
