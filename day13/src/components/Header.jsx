import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderMobile } from "./HeaderMobile";

export function Header() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  function showHeader() {
    setActive(!active);
  }

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
    <div className="">
      <div className="flex pt-1 justi lg:hidden sm:absolute">
        <button
          className="p-2 pl-4 pr-4 transparent transition-colors ring-1 shadow-md ring-white text-white rounded-xl"
          onClick={showHeader}
        >
          <p className="text-lg">Menu</p>
        </button>
      </div>
      <div className="hidden lg:flex fixed flex-row items-center justify-center w-full">
        <button
          className="text-xl text-white p-2 rounded-lg hover:bg-[#715f87] hover:text-white"
          onClick={handleHome}
        >
          INÍCIO
        </button>
        <button
          className="text-xl text-white p-2 rounded-lg hover:bg-[#715f87] hover:text-white"
          onClick={handleAbout}
        >
          SOBRE
        </button>
        <button
          className="text-xl text-white p-2 rounded-lg hover:bg-[#715f87] hover:text-white"
          onClick={handleProjects}
        >
          PROJETOS
        </button>
        <button
          className="text-xl text-white p-2 rounded-lg hover:bg-[#715f87] hover:text-white"
          onClick={handlePortfolio}
        >
          PORTFOLIO
        </button>
        <button
          className="text-xl text-white p-2 rounded-lg hover:bg-[#715f87] hover:text-white"
          onClick={handleArticles}
        >
          ARTIGOS
        </button>
      </div>
      <HeaderMobile showMenu={showHeader} active={active} />
    </div>
  );
}
