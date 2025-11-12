import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-aseer-purple/30 to-aseer-purple/30 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7f3e562a2c31a7773b005c44fadf30a0f2009df6?width=298"
            alt="Aseer Logo"
            className="h-5 sm:h-6 lg:h-7"
          />
          <div className="flex flex-wrap justify-center sm:justify-end gap-3">
            {[
              { Icon: Twitter, label: 'Twitter', url: 'https://x.com/Aseercompany?t=vgIo7JbUUtqlupCHA-WrbA&s=08' },
              { Icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/aseercompany.sa?igsh=MTZsazIyM3Jhd2xpbA==' },
              { Icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/aseer-company/' },
            ].map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 font-inter text-xs sm:text-sm">
            All Rights Reserved Aseer
          </p>
        </div>
      </div>
    </footer>
  );
}
