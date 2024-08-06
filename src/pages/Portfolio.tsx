import { motion } from "framer-motion";
import { IconBrandCodepen } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = "List of my portfolio projects";
  const portfolios = [
    {
      id: 1,
      name: "BPS Desa Cantik",
      description: "Project with BPS use framework Laravel - BPS",
      image: "/desacantik.jpg",
      link: "",
    },
    {
      id: 2,
      name: "Project Data Security System",
      description: "My project Reservation Restaurant use framework Laravel",
      image: "/skd.jpg",
      link: "https://github.com/mjoserizal/Reservation",
    },
    {
      id: 3,
      name: "Sistem Profile Project",
      description: "My Project Crud use framework Laravel",
      image: "/sp.jpg",
      link: "https://github.com/mjoserizal/SistemProfile_UTS",
    },
    {
      id: 4,
      name: "MyTsel Clone Project",
      description: "My Project Mobile App use Flutter",
      image: "/telkomsel.jpg",
      link: "https://github.com/mjoserizal/telkomsel-mobile",
    },
    {
      id: 5,
      name: "Inventory Apoteker Project",
      description: "My Project Apoteker use Framework Laravel",
      image: "/OIP.jpeg",
      link: "https://github.com/mjoserizal/Web-Apoteker",
    },
    {
      id: 6,
      name: "Aplikasi Pajak dan Retribusi Online - Frontend",
      description: "Projek Aplikasi Pajak dan Retribusi Online - PKIT",
      image: "/apk-pajak.png",
      link: "",
    },
    {
      id: 7,
      name: "Aplikasi Perlengkapan Jalan - Frontend",
      description: "Projek Aplikasi Perlengkapan Jalan - PKIT",
      image: "/On Boarding.png",
      link: "",
    },
    {
      id: 8,
      name: "Aplikasi Kependudukan Rajalebong - Frontend",
      description: "Projek Aplikasi Kependudukan - PKIT",
      image: "/prisca (2).png",
      link: "",
    },
    {
      id: 9,
      name: "PRISCA APPS - Frontend",
      description: "Projek Aplikasi Manajemen Vendor - Integra Solusi Mandiri",
      image: "/aplikasi_kependudukan.png",
      link: "",
    },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6">
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
