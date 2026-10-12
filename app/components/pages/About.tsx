"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SkillsSection from './SkillsSection';

const AboutPage = () => {
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="page min-h-screen text-gray-200 font-tech p-4 pt-9 md:p-9">


      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 mb-7">
        {/* Developer Profile */}
        <div className="lg:col-span-2">
          <section className="bg-black/30 backdrop-blur-lg p-6 border-2 border-highlight shadow-lg shadow-highlight/20 h-full">
            <h2 className="text-2xl md:text-4xl w-full font-cyber  text-center text-highlight mb-4">
              {t('about.title')}
            </h2>
            <div className="space-y-4 text-lg text-justify">
              <p>
                <span className="text-secondary text-2xl text-justify">#</span> {t('about.intro')}
              </p>
               <p>
                <span className="text-secondary text-2xl text-justify">#</span> {t('about.education')}
              </p>
              
              <p>
                <span className="text-secondary text-2xl text-justify">#</span> {t('about.philosophy')}
              </p>
             
            </div>
          </section>

          
        </div>

       
        <div className="hidden lg:block space-y-8 lg:grid-cols-1">
            <div className="relative group border-2 border-white shadow-white/50 overflow-hidden">
              {!isAvatarLoaded && (
                <div className="absolute inset-0 bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
              <Image
                src="/zouhair_picture.webp"
                alt="Mohammed Zouhair Ouaad avatar"
                width={896}
                height={1152}
                sizes="(min-width: 1024px) 33vw, 100vw"
                onLoad={() => setIsAvatarLoaded(true)}
                className={`w-full object-cover transition-opacity duration-500 ${
                  isAvatarLoaded ? "h-auto opacity-100" : "h-[400px] opacity-0"
                }`}
              />
            </div>
        </div>



      </div>

      <div className="max-w-6xl mx-auto">
        <SkillsSection />
      </div>
    </div>
  );
};

export default AboutPage;
