import { useNavigate } from "react-router-dom";

import { XCircle } from "phosphor-react";

export function HeaderMobile({ showMenu, active }) {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  function handleArticles() {
    navigate("/artigos");
  }

  function handleAbout() {
    navigate("/sobre");
  }

  function handlePortfolio() {
    navigate("/portfolio");
  }

  function handleProjects() {
    navigate("/projetos");
  }

  return (
    <div
      className={
        active
          ? "flex left-1/2 w-1/2 flex-col items-start z-10 fixed backdrop-blur-md inset-0 justify-center lg:hidden"
          : "hidden"
      }
    >
      <div className="flex justify-end p-4 w-full">
        <button onClick={showMenu} className="">
          <XCircle size={40} color="#FFFFFF" className="hover:text-[#715f87]" />
        </button>
      </div>
      <button
        className="text-xl text-white sm:w-full transition-colors p-4 rounded-lg hover:bg-[#715f87] hover:text-white"
        onClick={handleHome}
      >
        Início
      </button>
      <button
        className="text-xl text-white sm:w-full transition-colors p-4 rounded-lg hover:bg-[#715f87] hover:text-white"
        onClick={handleAbout}
      >
        Sobre
      </button>
      <button
        className="text-xl text-white sm:w-full transition-colors p-4 rounded-lg hover:bg-[#715f87] hover:text-white"
        onClick={handleProjects}
      >
        Projetos
      </button>
      <button
        className="text-xl text-white sm:w-full transition-colors p-4 rounded-lg hover:bg-[#715f87] hover:text-white"
        onClick={handlePortfolio}
      >
        Portfolio
      </button>
      <button
        className="text-xl text-white sm:w-full transition-colors p-4 rounded-lg hover:bg-[#715f87] hover:text-white"
        onClick={handleArticles}
      >
        Artigos
      </button>
    </div>
  );
}
