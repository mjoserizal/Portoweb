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
      image: "/osi.jpeg",
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
      position: "Web Developer",
      startDate: "Januari 2024",
      endDate: "Maret 2024",
      duration: "3 Bulan",
      location: "Jakarta",
    },
    {
      id: 6,
      image: "/pkit.png",
      name: "PKIT",
      position: "Fullstack Developer",
      startDate: "Maret 2024",
      endDate: "Mei 2024",
      duration: "3 Bulan",
      location: "Bengkulu",
    },
    {
      id: 7,
      image: "/gmedia.png",
      name: "GMEDIA PT. MEDIA SARANA DATA",
      position: "Front-End Developer",
      startDate: "Desember 2024",
      endDate: "Sekarang",
      duration: "3 Bulan",
      location: "Yogyakarta",
    }
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
