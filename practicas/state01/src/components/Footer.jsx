import { FacebookIcon } from "../icons/svg/FacebookIcon.jsx";
import { InstagramIcon, InstagramIcon2 } from "../icons/svg/InstagramIcon.jsx";
import { LinkedinIcon } from "../icons/svg/LinkedinIcon.jsx";
import { GithubIcon } from "../icons/svg/GithubIcon.jsx";
import { YoutubeIcon, YoutubeIconCircle } from "../icons/svg/YoutubeIcon.jsx";
import { XIcon } from "../icons/svg/XIcon.jsx";

const iconStyle =
  "transition duration-300 ease-in-out transform hover:scale-110";

export function Footter() {
  return (
    <footer className="relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 px-8 md:flex-row md:justify-between md:pt-16 bg-slate-950	">
      {/* <hr className="absolute top-0 h-[2px] w-full min-w-[11rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9 left-1/2 -translate-x-1/2"></hr> */}
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:items-center w-full lg:gap-6">
        <span tabIndex="0" className="text-xl text-neutral-300 text-center">
          © Codenity v2.0 <p className="hidden lg:inline">|</p>
          <br className="inline lg:hidden" />
          <span> Comunidad de desarrollo.</span>
        </span>
        <ul className="flex flex-row items-center gap-x-2">
          <li className={iconStyle}>
            <a
              target="_blank"
              rel="noopener"
              aria-label="Instagram de Codenity, se abrirá en una nueva pestaña"
              href="https://www.instagram.com/codenity1/"
              className={iconStyle}
            >
              <InstagramIcon width={48} height={48} fill="white" />
            </a>
          </li>
          <li className={iconStyle}>
            <a
              target="_blank"
              rel="noopener"
              aria-label="GitHub de Codenity, se abrirá en una nueva pestaña"
              href="https://github.com/CodenityOrg"
              className={iconStyle}
            >
              <GithubIcon width={48} height={48} fill="white" />
            </a>
          </li>
          <li className={iconStyle}>
            <a
              target="_blank"
              rel="noopener"
              aria-label="Linkedin de Codenity, se abrirá en una nueva pestaña"
              href="https://www.linkedin.com/company/codenity-org/"
              className={iconStyle}
            >
              <LinkedinIcon width={48} height={48} fill="white" />
            </a>
          </li>
          <li className={iconStyle}>
            <a
              target="_blank"
              rel="noopener"
              aria-label="Youtube de Codenity, se abrirá en una nueva pestaña"
              href="https://www.youtube.com/@codenity9515"
            >
              <YoutubeIcon width={48} height={48} fill="white" />
            </a>
          </li>
          <li className={iconStyle}>
            <a
              target="_blank"
              rel="noopener"
              aria-label="Facebook de Codenity, se abrirá en una nueva pestaña"
              href="https://www.facebook.com/codenity19"
              className={iconStyle}
            >
              <FacebookIcon width={48} height={48} fill="white" />
            </a>
          </li>
          <li className={iconStyle}>
            <a
              target="_blank"
              rel="noopener"
              aria-label="X de Codenity, se abrirá en una nueva pestaña"
              href="https://x.com/Codenity19"
              className={iconStyle}
            >
              <XIcon width={47} height={47} fill="white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
