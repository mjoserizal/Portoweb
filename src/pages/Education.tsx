import { motion } from 'framer-motion';
import { IconBallpen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';
  // mockup education data
  const educations = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'Senior High School',
      position: 'MIPA',
      startDate: 'June 2018',
      endDate: 'June 2021',
      duration: '3 years',
      location: 'Surakarta',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'UNS University',
      position: 'Informatics Engineering',
      startDate: 'June 2021',
      endDate: 'Now',
      duration: '3 years',
      location: 'Surakarta',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBallpen />}
        label="Education"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {educations.map((education) => (
          <CommonCard key={education.id} {...education} />
        ))}
      </div>
    </motion.section>
  );
};
