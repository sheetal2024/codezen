import Image from "next/image";
import Link from "next/link";
import logo from "../public/logoapp.png";
import GithubIcon from "./github-icon";

export default function Header() {
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-center px-2 pb-7 sm:px-4">
      <Link href="/" className="absolute mt-5 flex items-center gap-3">
        <Image alt="header text" src={logo} className="h-20 w-auto" />
      </Link>
      {/* <a
        href="https://github.com/nutlope/llamacoder"
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      > 
        <GithubIcon className="h-4 w-4" />
        <span>GitHub Repo</span>
      </a> */}
    </header>
  );
}
