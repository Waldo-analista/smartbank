import React from "react";
import ampolletaOn from "../../assets/images/themeOn.svg";
import ampolletaOff from "../../assets/images/themeOff.svg";
import { ImageIcon } from "../UI";

const AmpolletaIcon = ({ tema, handleSwitchTheme }) => {
  const claro = (
    <ImageIcon
      src={ampolletaOn}
      alt="Tema Claro"
      onClick={handleSwitchTheme}
      title="Apagar la Luz"
    />
  );
  const oscuro = (
    <ImageIcon
      src={ampolletaOff}
      alt="Tema Oscuro"
      onClick={handleSwitchTheme}
      title="Encender la Luz"
    />
  );
  return <>{tema ? oscuro : claro}</>;
};

export default AmpolletaIcon;
