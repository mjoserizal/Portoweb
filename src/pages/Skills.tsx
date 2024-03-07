import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconBrandTailwind,
  IconBrandLaravel,
  IconBrandBootstrap,
  IconBrandFigma,
  IconBrandVue,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { SkillCard } from "../components/SkillCard";
import { IconBrandFlutter } from "@tabler/icons-react";

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = "List of my skills";
  // mockup skills data
  const skills = [
    { label: "Laravel", icon: <IconBrandLaravel /> },
    { label: "Flutter", icon: <IconBrandFlutter /> },
    { label: "Tailwind CSS", icon: <IconBrandTailwind /> },
    { label: "Bootstrap CSS", icon: <IconBrandBootstrap /> },
    { label: "Figma", icon: <IconBrandFigma /> },
    { label: "Vue", icon: <IconBrandVue /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6">
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
