import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-3 mt-5 flex h-16 w-full flex-col items-center justify-between space-y-3 px-3 pt-4 text-center sm:mb-0 sm:h-20 sm:flex-row sm:pt-2">
      {/*  <div>
        <div className="font-medium">
          Built with{" "}
          <a
            href="https://dub.sh/together-ai"
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
          >
            Llama 3.1 405B
          </a>{" "}
          and{" "}
          <a
            href="https://dub.sh/together-ai"
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
          >
            Together AI
          </a>
          .
        </div>
      </div> */}
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://www.linkedin.com/in/sheetal-sharma-815267257"
          target="_blank"
          className="group"
          aria-label=""
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z"></path>
          </svg>
        </Link>
      </div>
    </footer>
  );
}
