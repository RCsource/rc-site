import { BsTelegram } from "react-icons/bs";
import Logo from "../assets/logo.png";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="bg-gray-900 border-gray-200 px-2 mt-4 sm:px-4 py-2.5 rounde">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="RubyCats Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            RubyCats
          </span>
        </a>
        <div className="mx-auto"></div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Открыть меню</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border max-md:gap-2 border-gray-800 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {children}
            <a
              href="https://t.me/rubycoding"
              type="button"
              className="flex justify-center text-white bg-gradient-to-r from-pink-600 to-pink-400 border border-pink-500 hover:bg-pink-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0"
            >
              <BsTelegram className="mt-[5px]" />
              <p className="pl-1 pt-[4px]">Telegram</p>
            </a>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
