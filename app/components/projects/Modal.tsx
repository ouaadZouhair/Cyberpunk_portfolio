"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiTerminal, FiX } from "react-icons/fi";
import type { Project } from "../../types";
import styles from "./Modal.module.css";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.96, y: 12, transition: { duration: 0.2, ease: "easeIn" } },
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  index: number;
};

export default function Modal({ isOpen, onClose, project, index }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const recordNumber = String(index).padStart(3, "0");
  const launchLink = project.liveLink ?? project.githubLink;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className={styles.window}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.inner}>
              <div className={styles.header}>
                <div className={styles.headerLabel}>
                  <FiTerminal aria-hidden="true" />
                  <span>PROJECT DATABASE / {recordNumber}</span>
                </div>
                <div className={styles.headerActions}>
                  <span className={styles.status}><span className={styles.statusDot} />SYSTEM ONLINE</span>
                  <button ref={closeButtonRef} type="button" onClick={onClose} className={styles.closeButton} aria-label="Close project details">
                    <FiX aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className={styles.imagePanel}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 720px) 648px, calc(100vw - 48px)"
                  loading="eager"
                  className={styles.image}
                />
                <div className={styles.imageCaption}>
                  <span>PROJECT PREVIEW / DESKTOP</span>
                  <span className={styles.captionSignal}><span className={styles.statusDot} />VISUAL FEED</span>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <div>
                    <p className={styles.eyebrow}>[ FEATURED PROJECT_{recordNumber} ]</p>
                    <h2 id={titleId} className={styles.title}>{project.title}</h2>
                  </div>
                  {launchLink && (
                    <a
                      href={launchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.launchButton}
                      aria-label={`Open ${project.title} in a new tab`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}
                </div>

                <div className={styles.detailsPanel}>
                  <p id={descriptionId} className={styles.description}>{project.description}</p>
                  {project.technologies?.length > 0 && (
                    <div className={styles.technologies} aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.technology}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>

                {(project.liveLink || project.githubLink) && (
                  <div className={styles.actions}>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={`${styles.action} ${styles.primaryAction}`}>
                        <FaExternalLinkAlt aria-hidden="true" /> LIVE DEMO
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.action} ${styles.secondaryAction}`}>
                        <FaGithub aria-hidden="true" /> SOURCE CODE
                      </a>
                    )}
                  </div>
                )}

                <div className={styles.footer}>
                  <span>SYS.PORTFOLIO / PROJECT ARCHIVE</span>
                  <span>END_OF_RECORD_</span>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
