"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Project } from "../../types";
import styles from "./Card.module.css";

const Modal = dynamic(() => import("./Modal"), { ssr: false });

const Card = ({ project, index }: { project: Project; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoadModal, setShouldLoadModal] = useState(false);
  const prepareModal = () => setShouldLoadModal(true);

  return (
    <>
      <button
        type="button"
        aria-label={`View details for ${project.title}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={`${styles.card} block w-full text-left cursor-pointer relative bg-black/30 backdrop-blur-lg border-4 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          !project.featured
            ? "border-secondary/50 hover:border-secondary hover:shadow-secondary/40"
            : "border-highlight/50 hover:border-highlight hover:shadow-highlight/60"
        }  hover:shadow-lg transition-all duration-500`}
        onMouseEnter={prepareModal}
        onFocus={prepareModal}
        onTouchStart={prepareModal}
        onClick={() => {
          prepareModal();
          setIsOpen(true);
        }}
      >
        <div
          className="relative w-full overflow-hidden aspect-video"
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

          <div className={styles.preview}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1280px) 588px, (min-width: 640px) 46vw, 94vw"
              onLoad={() => setIsLoaded(true)}
              className={`object-cover object-center transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>
      </button>

      {shouldLoadModal && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          project={project}
          index={index + 1}
        />
      )}
    </>
  );
};

export default Card;
