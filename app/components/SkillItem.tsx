import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

type Prop = {
  image: string;
  variant?: Variants;
  customVal?: number;
};

// Factory function to generate different logo components
const LogoFactory = ({ image }: Partial<Prop>) => {
  console.log('LOG', image);

  switch (image) {
    case 'Astro':
      return (
        <Image
          src={'/images/icons/Astro.svg'}
          alt='Astro logo'
          width={50}
          height={50}
        />
      );

    case 'Javascript':
      return (
        <Image
          src={'/images/icons/JavaScript.svg'}
          alt='Javascript logo'
          width={50}
          height={50}
        />
      );
    case 'Next':
      return (
        <Image
          src={'/images/icons/NextJS-Dark.svg'}
          alt='Next logo'
          width={50}
          height={50}
        />
      );
    case 'CSS':
      return (
        <Image
          src={'/images/icons/CSS.svg'}
          alt='CSS logo'
          width={50}
          height={50}
        />
      );
    case 'HTML':
      return (
        <Image
          src={'/images/icons/HTML.svg'}
          alt='HTML logo'
          width={50}
          height={50}
        />
      );
    case 'React':
      return (
        <Image
          src={'/images/icons/React-Dark.svg'}
          alt='React logo'
          width={50}
          height={50}
        />
      );
    case 'Tailwind':
      return (
        <Image
          src={'/images/icons/TailwindCSS-Dark.svg'}
          alt='Astro logo'
          width={50}
          height={50}
        />
      );
    default:
      return <p>No icon!</p>;
  }
};

export default function SkillItem({ image, variant, customVal }: Prop) {
  return (
    <motion.div
      className={`absolute top-0 border-2 border-[--clr-primary-02] rounded-2xl shadow-lg`}
      animate='itemDrop'
      variants={variant}
      custom={customVal}
      // initial={{ x: (customVal as number) * 50 + 35 }}
    >
      <LogoFactory image={image} />
    </motion.div>
  );
}
