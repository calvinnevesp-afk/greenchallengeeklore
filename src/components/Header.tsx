import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <h1>Green Challenge</h1>
      <nav>
        <button onClick={() => handleScroll("features")}>Fonctionnalités</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
