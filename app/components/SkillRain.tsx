import SkillItem from './SkillItem';
import { motion, Variants } from 'framer-motion';

// Random height between 200 and 400 px
const randomHeight = () => {
  return Math.floor(Math.random() * 200) + 200;
};

// Random rotate between -40 and 40
const randomRotate = () => {
  return Math.floor(Math.random() * 80) - 40;
};

// Random scale between 0.8 and 1
const randomScale = () => {
  return Math.random() * 0.2 + 0.8;
};

const itemVariants: Variants = {
  itemDrop: (i) => ({
    y: randomHeight(),
    rotate: randomRotate(),
    scale: randomScale(),
    transition: {
      type: 'spring',
      damping: 11,
      mass: 1.5,
    },
  }),
};

export default function SkillRain() {
  return (
    <motion.div
      variants={itemVariants}
      className={`w-full
      absolute right-0
      [&>*:nth-child(1)]:left-[10%]
      sm:[&>*:nth-child(1)]:left-[5%]

      [&>*:nth-child(2)]:left-[20%] 
      sm:[&>*:nth-child(2)]:left-[15%] 

      [&>*:nth-child(3)]:left-[30%] 
      sm:[&>*:nth-child(3)]:left-[40%] 

      [&>*:nth-child(4)]:right-[10%] 
      sm:[&>*:nth-child(4)]:right-[5%] 

      [&>*:nth-child(5)]:right-[20%] 
      sm:[&>*:nth-child(5)]:right-[15%] 

      [&>*:nth-child(6)]:right-[30%]
      sm:[&>*:nth-child(6)]:right-[45%]
       -top-52 sm:top-0 sm:px-4 brightness-[0.6] -z-10`}
    >
      <SkillItem variant={itemVariants} customVal={-3} image='Astro' />
      <SkillItem variant={itemVariants} customVal={-2} image='Javascript' />
      <SkillItem variant={itemVariants} customVal={-1} image='Next' />
      <SkillItem variant={itemVariants} customVal={1} image='CSS' />
      <SkillItem variant={itemVariants} customVal={2} image='Tailwind' />
      <SkillItem variant={itemVariants} customVal={3} image='React' />
    </motion.div>
  );
}
