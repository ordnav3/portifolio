import React from 'react';
import * as S from './styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Nav() {
  return (
    <S.Nav>
      <S.NavContainer>
        <h1>Evandro Santos Afonso</h1>
        <h2>Desenvolvedor Full-Stack</h2>
        <p>
          Crio experiências digitais unindo design e funcionalidade em soluções
          integradas, simples e envolventes.
        </p>
        <S.NavList>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </S.NavList>
        <S.SocialIcons>
          <a
            href="https://github.com/ordnav3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ordnav3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </S.SocialIcons>
      </S.NavContainer>
    </S.Nav>
  );
}

export default Nav;
