import React from "react";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";
import { ContenedorLogo, LogoHeader, TituloLogo } from "../Header";
import logo from "../../assets/images/logo.svg";

const FooterEstilos = styled.footer`
  background-color: ${colorPrimario};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  row-gap: 5px;
  @media (min-width: 550px) {
    padding-top: 15px;
    padding-bottom: 0px;
  }
`;

const LiEstilos = styled.li`
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    outline-style: auto;
  }
`;

const ContenedorRedesSociales = () => {
  return (
    <>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <LiEstilos>
            <a
              href="https://www.linkedin.com/in/waldo-hidalgo-oyarce/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/clouds/100/linkedin.png"
                alt="linkedin"
                title="LinkedIn de Waldo"
              />
            </a>
          </LiEstilos>
          <LiEstilos>
            <a
              href="https://github.com/Waldo-analista/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/clouds/100/github.png"
                alt="github"
                title="GitHub de Waldo"
              />
            </a>
          </LiEstilos>
          <LiEstilos>
            <a
              href="https://www.instagram.com/clasestutoriaswaldo/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/bubbles/50/instagram-new--v2.png"
                alt="instagram-new--v2"
                title="Instagram de Waldo"
              />
            </a>
          </LiEstilos>
          <LiEstilos>
            <a
              href="https://www.facebook.com/waldohidalgooyarcej"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/bubbles/50/facebook-new.png"
                alt="facebook-new"
                title="Facebook de Waldo"
              />
            </a>
          </LiEstilos>
        </ul>
      </div>
    </>
  );
};

const ContenedorDatosDesarrollador = styled.div`
  text-align: center;
  color: white;
  padding: 15px 5vw;
  border-top: 2px solid white;
  background-color: black;
  @media (min-width: 550px) {
    padding-top: 20px;
    padding-right: 30vw;
    padding-left: 30vw;
    padding-bottom: 20px;
  }
`;

const DatosDesarrollador = () => {
  return (
    <>
      <ContenedorDatosDesarrollador>
        Página Web desarrollada por{" "}
        <span
          style={{
            textDecoration: "underline",
            color: "yellow",
            fontWeight: 700,
          }}
        >
          <a
            href="https://www.waldohidalgo.cl/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            Waldo Hidalgo
          </a>
        </span>{" "}
        vía Cursos de AluraLatam usando{" "}
        <span style={{ color: "#0077b6", fontWeight: "700" }}>React</span>
        {" ("}
        <span>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/officel/16/react.png"
            alt="react"
            style={{ marginBottom: "-4px" }}
          />
        </span>
        {") "}y{" "}
        <span style={{ color: "#e4087d", fontWeight: "700" }}>
          Styled Components
        </span>
        {" ("}
        <span>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/styled-components.png"
            alt="styled-components"
          />
        </span>
        {") "}
      </ContenedorDatosDesarrollador>
    </>
  );
};

const ContenedorLogoRedesSociales = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15;
  @media (min-width: 550px) {
    padding-right: 15vw;
    padding-left: 15vw;
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <FooterEstilos>
      <ContenedorLogoRedesSociales>
        <ContenedorLogo>
          <LogoHeader
            src={logo}
            alt="Logo Smart Bank"
            title="Aplicación Smart Bank"
            href="/"
          />
          <TituloLogo title="Aplicación Smart Bank">
            <a href="/" style={{ color: "white" }}>
              Smart Bank App
            </a>
          </TituloLogo>
        </ContenedorLogo>
        <ContenedorRedesSociales />
      </ContenedorLogoRedesSociales>
      <DatosDesarrollador />
    </FooterEstilos>
  );
};

export default Footer;
