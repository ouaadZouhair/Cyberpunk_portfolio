"use client";

import { useState, type ChangeEvent, type FormEvent, type MouseEvent } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiChevronDown, FiClock, FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

type ContactForm = {
  name: string;
  email: string;
  projectType: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  projectType: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const { t } = useTranslation();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<ContactForm>(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = event.target.name as keyof ContactForm;
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.form?.reportValidity()) setStep(2);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (step !== 1) return;
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setStep(2);
  };

  const mainChannels = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ouaadzouhair", icon: <FaLinkedin aria-hidden="true" /> },
    { label: "GitHub", href: "https://github.com/ouaadzouhair", icon: <FaGithub aria-hidden="true" /> },
    { label: "Instagram", href: "https://www.instagram.com/zouhair_od.ma/", icon: <FaInstagram aria-hidden="true" /> },
  ];

  return (
    <section className={`page-container page-section ${styles.page}`}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <h1 className={styles.title}>
            {t("contact.headingLead")} <span>{t("contact.headingAccent")}</span>
          </h1>
          <p>{t("contact.intro")}</p>
        </header>

        <div className={styles.columns}>
          <section className={`${styles.panel} ${styles.formPanel}`} aria-labelledby="transmission-heading">
            <div className={styles.panelHeader}>
              <h2 id="transmission-heading">{t("contact.newTransmission")}</h2>
              <span aria-label={`${step} of 2`}>{String(step).padStart(2, "0")} / 02</span>
            </div>

            <form action="https://formsubmit.co/ouaadzouhair11@gmail.com" method="POST" onSubmit={handleSubmit} className={styles.form}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {step === 1 ? (
                <>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">{t("contact.fullName")}</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.placeholder.name")}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email">{t("contact.email")}</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.placeholder.email")}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-project-type">{t("contact.projectType")}</label>
                    <div className={styles.selectWrap}>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>{t("contact.selectService")}</option>
                        <option value="Website / landing page">{t("contact.services.website")}</option>
                        <option value="Web application">{t("contact.services.webApp")}</option>
                        <option value="E-commerce">{t("contact.services.ecommerce")}</option>
                        <option value="Collaboration">{t("contact.services.collaboration")}</option>
                        <option value="Other">{t("contact.services.other")}</option>
                      </select>
                      <FiChevronDown aria-hidden="true" />
                    </div>
                  </div>
                  <button type="button" onClick={handleNext} className={styles.primaryButton}>
                    {t("contact.continue")} <FiArrowRight aria-hidden="true" />
                  </button>
                </>
              ) : (
                <>
                  <input type="hidden" name="name" value={formData.name} />
                  <input type="hidden" name="email" value={formData.email} />
                  <input type="hidden" name="project_type" value={formData.projectType} />
                  <div className={styles.field}>
                    <label htmlFor="contact-subject">{t("contact.subject")}</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t("contact.placeholder.subject")}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-message">{t("contact.message")}</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.placeholder.message")}
                      required
                    />
                  </div>
                  <div className={styles.stepActions}>
                    <button type="button" onClick={() => setStep(1)} className={styles.backButton}>
                      <FiArrowLeft aria-hidden="true" /> {t("contact.back")}
                    </button>
                    <button type="submit" className={styles.primaryButton}>
                      {t("contact.sendMessage")} <FiArrowRight aria-hidden="true" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </section>

          <div className={styles.rightColumn}>
            <section className={`${styles.panel} ${styles.channelsPanel}`} aria-labelledby="channels-heading">
              <h2 id="channels-heading" className={styles.channelsHeading}>{t("contact.communicationChannels")}</h2>
              <div className={styles.channelGrid}>
                {mainChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={styles.channel}
                  >
                    {channel.icon}
                    <span>{channel.label}</span>
                  </a>
                ))}
              </div>
              <div className={styles.extraChannels}>
                <span>
                  <FaEnvelope aria-hidden="true" /> ouaadzouhair11@gmail.com
                </span>
                <span>
                  <FaPhone aria-hidden="true" /> +212 763 835 972
                </span>
              </div>
            </section>

            <section className={`${styles.panel} ${styles.statusPanel}`} aria-labelledby="status-heading">
              <h2 id="status-heading" className={styles.statusHeading}>{t("contact.developerStatus")}</h2>
              <ul className={styles.statusList}>
                <li><span className={styles.onlineDot} aria-hidden="true" />{t("contact.statusAvailable")}</li>
                <li><FiMapPin aria-hidden="true" />{t("contact.statusLocation")}</li>
                <li><FiClock aria-hidden="true" />{t("contact.statusResponse")}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
