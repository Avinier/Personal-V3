import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Avinier' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/avinier/' },
    { icon: Twitter, href: 'https://x.com/avinierx' },
  ];

  return (
    <footer className="bg-background py-4">
      <div className="w-[75%] my-[40px] mx-auto flex justify-around items-center">
        <div>
          <p className="text-[15px] font-heading text-text">
            Copyright © {currentYear}{' '}
            <span className="underline">Avinier</span>
          </p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:bg-accent rounded-full p-2 transition-colors"
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;