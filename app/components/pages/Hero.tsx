"use client";
import { useTranslation } from "react-i18next";
import AnimatedBtn from "../shared/AnimatedBtn";


const Hero = () => {
    const {t} = useTranslation()


    return (
        <section className='page py-8 md:py-0 flex items-center relative overflow-hidden'>

            <div className="container mx-auto z-0 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full lg:w-11/12 mx-auto">
                    <div className="order-2 lg:order-1 px-4 md:px-16 lg:px-0">
                        <div className="space-y-6">
                            <div className='font-tech'>
                                <p className="text-primary text-lg mb-2 font-tech">
                                    <span className="inline-block">&lt;</span>{t('hero.hello')}<span className="inline-block animate-neon-flicker">/&gt;</span>
                                </p>
                                {/* <h1 className="cyber-glitch w-full text text-xl  md:text-5xl lg:text-5xl font-cyber font-bold tracking-tighter my-3 md:my-6" data-text={t('hero.title')}>
                                    {t('hero.title')}
                                </h1> */}

                                <div className="content">
                                    <h2 className="text text-3xl  md:text-6xl lg:text-6xl font-bold tracking-tighter my-3 md:my-6" data-text={t('hero.title')}>
                                        {t('hero.title')}
                                    </h2>
                                </div>
                                <h2 className="text-xl sm:text-2xl text-gray/80">
                                    <span className="text-primary">{t('hero.subtitle.design')}</span> • <span className="text-secondary">{t('hero.subtitle.code')}</span> • <span className="text-highlight">{t('hero.subtitle.level')}</span>
                                </h2>
                            </div>

                            <p className="text-gray/80 w-full md:max-w-xl md:text-lg border-l-2 font-tech border-primary pl-4 py-2">
                                {t('hero.description')}
                            </p>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-4 pt-1.5 md:pt-4">
                                {/* <IoIosCode className="ml-2" size={26} /> */}
                                <AnimatedBtn text={t('hero.connect')} href="/contact" className="text-xl font-digital w-full md:text-xl md:w-1/3 relative cursor-pointer inline-flex items-center justify-center px-4 py-2 md:px-4 md:py-2 overflow-hidden  font-bold text-dark bg-highlight border-2 border-highlight transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-highlight focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50" textColor="text-black" />
                                <AnimatedBtn text={t('hero.view_projects')} href="/projects" className="text-xl font-digital w-full md:text-xl md:w-1/3 relative cursor-pointer inline-flex items-center justify-center px-4 py-2 md:px-4 md:py-2 overflow-hidden  font-bold text-white bg-transparent border-2 border-white transform transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 hover:shadow-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" textColor="text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 w-full lg:order-2">                        
                            {/* Pre-sized WebP variants avoid an image resize on the first server request. */}
                            <img
                            src="/zouhairRobot-640.webp"
                            srcSet="/zouhairRobot-384.webp 384w, /zouhairRobot-640.webp 640w, /zouhairRobot-849.webp 849w"
                            sizes="(min-width: 768px) 532px, 355px"
                            alt="Glitched Avatar"
                            width={849}
                            height={959}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="w-auto h-[400px] mx-auto md:w-auto md:h-[600px]"
                            />
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Hero
