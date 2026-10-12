"use client";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {t} = useTranslation()
  
  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t-2 border-primary/60">
      <div className="max-w-6xl mx-auto py-4 px-6">
        <p className="text-center text-gray-400 font-tech text-sm">
          <span className="text-primary">&lt;</span> © {currentYear} {t('footer')}<span className="text-primary">/&gt;</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
