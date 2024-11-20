import Logo from "@/assets/ete_header.svg";
function Footer() {
  return (
    <footer className="w-full px-4 flex items-center justify-between">
      <div className="w-3/5 md:w-1/3 flex items-center  justify-center">
        <img src={Logo} className="md:size-44 size-24" />
      </div>
      <div className="text-sm space-y-2 text-right md:px-12">
        <p className="md:text-2xl font-semibold">
          Sistema de monitoramento de estações meteorológicas
        </p>
        <p className="md:text-xl">
          Desenvolvido por <strong>alunos</strong> da ETE José David Gil
          Rodrigues
        </p>
        <span className="text-xs md:text-base">
          ETE Jose David Gil Rodrigues - 2024 &reg;
        </span>
      </div>
    </footer>
  );
}

export default Footer;
