import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'KSTV',
      position: 'Facebook Admin and Ads',
      startDate: 'June 2021',
      endDate: 'January 2022',
      duration: '6 Months',
      location: 'Surakarta',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'UNS Hospital',
      position: 'Input Data',
      startDate: 'June 2022',
      endDate: 'July 2022',
      duration: '1 Months',
      location: 'Surakarta',
    },
    {
      id: 3,
      image: '/vite.svg',
      name: 'BPS Surakarta (WFH)',
      position: 'Backend Developer',
      startDate: 'February 2023',
      endDate: 'June 2023',
      duration: '3 Months',
      location: 'Karanganyar',
    },
    {
      id: 3,
      image: '/vite.svg',
      name: 'PT Oemah Solution Indonesia',
      position: 'Mobile Developer',
      startDate: 'Agustus 2023',
      endDate: 'Now',
      duration: '',
      location: 'Yogyakarta',
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
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
