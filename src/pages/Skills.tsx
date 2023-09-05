import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandLaravel,
  IconBrandBootstrap,
  IconBrandFigma,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // mockup skills data
  const skills = [
    { label: 'Laravel', icon: <IconBrandLaravel /> },
    { label: 'Next Js', icon: <IconBrandNextjs /> },
    { label: 'Tailwind CSS', icon: <IconBrandTailwind /> },
    { label: 'Bootstrap CSS', icon: <IconBrandBootstrap /> },
    { label: 'Bootstrap CSS', icon: <IconBrandFigma /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
