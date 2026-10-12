"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Modal from "./Modal";
import type { Project } from "../../types";

const imageVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, transition: { duration: 0.6, ease: "easeOut" } },
};

const Card = ({ project, index }: { project: Project; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        aria-label={`View details for ${project.title}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`block w-full text-left cursor-pointer relative bg-black/30 backdrop-blur-lg border-4 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          !project.featured
            ? "border-secondary/50 hover:border-secondary hover:shadow-secondary/40"
            : "border-highlight/50 hover:border-highlight hover:shadow-highlight/60"
        }  hover:shadow-lg transition-all duration-500`}
        initial="initial"
        whileHover="hover"
         onClick={() => setIsOpen(true)}
      >
        <div
          className="relative w-full overflow-hidden h-[180px] md:h-[260px]"
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-white/5 overflow-hidden">
              <div
                className={`absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent ${
                  project.featured ? "via-highlight/10" : "via-secondary/10"
                } to-transparent`}
              />
            </div>
          )}

          <motion.div className="relative w-full h-full" variants={imageVariants}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 550px, (min-width: 768px) 50vw, 100vw"
              onLoad={() => setIsLoaded(true)}
              className={`object-cover object-center transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>
        </div>
      </motion.button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={project}
        index={index + 1}
      />
    </>
  );
};

export default Card;
