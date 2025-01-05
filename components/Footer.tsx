import { data } from '@/data';

import { getCurrentYear } from '@/lib/utils';
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm py-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Links Social */}
        <div className="flex gap-6">
          <a
            href={data.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="GitHub"
          >
            <GitHubLogoIcon />
          </a>
          <a
            href={data.social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInLogoIcon />
          </a>
          <a
            href={`mailto:${data.email}`}
            className="hover:text-white"
            aria-label="Email"
            target="_blank"
          >
            <EnvelopeClosedIcon />
          </a>
        </div>
        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {getCurrentYear()} {data.name}. Tutti i diritti riservati.
        </p>
        <span className="flex gap-2">
          <a
            href="https://www.iubenda.com/privacy-policy/67997868"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
            title="Privacy Policy "
          >
            Privacy Policy
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/67997868/cookie-policy"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
