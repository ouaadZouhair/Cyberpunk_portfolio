"use client";

import { useTranslation } from "react-i18next";
import { FaDocker, FaNodeJs, FaPalette, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoLaravel } from "react-icons/io5";
import { SiBootstrap, SiExpress, SiGit, SiJavascript, SiMongodb, SiPhp, SiTailwindcss, SiTypescript, SiWordpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "Laravel", icon: <IoLogoLaravel className="text-red-500" /> },
  { name: "MySql", icon: <GrMysql className="text-blue-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Wordpress", icon: <SiWordpress className="text-gray-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-red-400" /> },
  { name: "Canva", icon: <FaPalette className="text-sky-400" /> },
];

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-secondary shadow-lg shadow-secondary/20">
      <h2 className="text-2xl md:text-4xl font-cyber text-center text-secondary mb-6">{t("skills")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-3 bg-dark-700/50 rounded-lg hover:bg-secondary/10 transition-all duration-300">
            <div className="text-4xl mb-2" aria-hidden="true">{skill.icon}</div>
            <span className="text-lg mb-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
