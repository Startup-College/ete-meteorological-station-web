import Logo from "../assets/ete_header.svg";
import clsx from "clsx";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex w-full flex-col items-center justify-between bg-white/40 py-4 lg:flex-row lg:px-[150px]">
      <a
        href="/"
        className="flex items-center justify-center hover:cursor-pointer lg:w-1/4"
      >
        <img src={Logo} alt="Ete Logo" className="h-20 w-20" />
      </a>
      <nav className="flex w-full items-center justify-center space-x-6 lg:w-2/4 lg:space-x-12">
        <a
          href="/"
          className={clsx(
            "border-b-2 border-transparent pb-[2px] hover:border-red-500"
          )}
        >
          Início
        </a>
        <a
          href="#escola"
          className={clsx(
            "border-b-2 border-transparent pb-[2px] hover:border-red-500"
          )}
        >
          Escola
        </a>
        <a
          href="#contato"
          className={clsx(
            "border-b-2 border-transparent pb-[2px] hover:border-red-500"
          )}
        >
          Contato
        </a>
        <a href="#" className="rounded-full bg-rainbow px-4 py-1 text-white">
          Secretaria
        </a>
      </nav>
      <div className="hidden lg:flex lg:w-1/4 lg:items-center lg:justify-center"></div>
    </div>
  );
}

export default Header;
