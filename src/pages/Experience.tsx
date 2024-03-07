import { motion } from "framer-motion";
import { IconClockPlay } from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { CommonCard } from "../components/CommonCard";

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = "My proffesional career journey";
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: "/kstv.png",
      name: "KSTV",
      position: "Facebook Admin dan Ads",
      startDate: "June 2021",
      endDate: "January 2022",
      duration: "6 Bulan",
      location: "Surakarta",
    },
    {
      id: 2,
      image: "/rsuns.png",
      name: "Rumah Sakit UNS",
      position: "Input Data",
      startDate: "June 2022",
      endDate: "July 2022",
      duration: "1 Bulan",
      location: "Surakarta",
    },
    {
      id: 3,
      image: "/bps.jpeg",
      name: "BPS Surakarta (WFH)",
      position: "Backend Developer",
      startDate: "Februari 2023",
      endDate: "Juli 2023",
      duration: "5 Bulan",
      location: "Karanganyar",
    },
    {
      id: 4,
      image: "/vite.svg",
      name: "PT Oemah Solution Indonesia",
      position: "Mobile Developer",
      startDate: "Agustus 2023",
      endDate: "Januari 2024",
      duration: "5 Bulan",
      location: "Yogyakarta",
    },
    {
      id: 5,
      image: "/ism.jpeg",
      name: "PT Integra Solusi Mandiri",
      position: "Mobile Developer",
      startDate: "Januari 2024",
      endDate: "Sekarang",
      duration: "5 Bulan",
      location: "Jakarta",
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6">
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
