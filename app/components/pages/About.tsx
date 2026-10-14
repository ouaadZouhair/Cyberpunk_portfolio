"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SkillsSection from './SkillsSection';

const AboutPage = () => {
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="page-container page-section text-gray-200 font-tech">
      <section
        aria-labelledby="about-story-heading"
        className="mb-6 sm:mb-8 bg-black/30 backdrop-blur-lg p-4 sm:p-6 lg:p-8 border-2 border-highlight shadow-lg shadow-highlight/20"
      >
        <h2 id="about-story-heading" className="text-[clamp(1rem,3.2vw,2.25rem)] leading-relaxed wrap-anywhere font-cyber text-center text-highlight mb-5 sm:mb-6">
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 lg:gap-8">
          <div className="min-w-0 md:col-span-2 space-y-4 text-base lg:text-lg leading-relaxed text-left lg:text-justify wrap-break-word">
            <p>
              <span className="text-secondary text-2xl">#</span> {t('about.intro')}
            </p>
            <p>
              <span className="text-secondary text-2xl">#</span> {t('about.education')}
            </p>
            <p>
              <span className="text-secondary text-2xl">#</span> {t('about.philosophy')}
            </p>
          </div>
          <div className="relative aspect-[7/9] w-full max-w-xs md:max-w-full justify-self-center overflow-hidden">
            {!isAvatarLoaded && (
              <div className="absolute inset-0 bg-white/5 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            )}
            <Image
              src="/zouhair_picture.webp"
              alt="Mohammed Zouhair Ouaad avatar"
              fill
              sizes="(min-width: 1280px) 368px, (min-width: 768px) 30vw, (min-width: 384px) 320px, 100vw"
              onLoad={() => setIsAvatarLoaded(true)}
              className={`object-cover object-top transition-opacity duration-500 ${
                isAvatarLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      <SkillsSection />
    </div>
  );
};

export default AboutPage;
