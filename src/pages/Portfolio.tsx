import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';
  const portfolios = [
    {
      id: 1,
      name: 'BPS Desa Cantik',
      image: '/desacantik.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'Sistem Keamanan Data Project',
      image: '/skd.jpg',
      link: 'https://github.com/mjoserizal/SKD_V3421062',
    },
    {
      id: 12,
      name: 'Sistem Profile Project',
      image: '/sp.jpg',
      link: 'https://github.com/mjoserizal/SistemProfile_UTS',
    },
    // {
    //   id: 13,
    //   name: 'Portfolio Project',
    //   image: '/portfolio.webp',
    //   link: 'https://codebayu.com',
    // },
    // {
    //   id: 15,
    //   name: 'Portfolio Project',
    //   image: '/portfolio.webp',
    //   link: 'https://codebayu.com',
    // },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label="Portfolio"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
