import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import { fetchPinnedRepos } from '../../services/api';

import * as S from './styles';

interface PinnedRepo {
  name: string;
  description: string | null;
  url: string;
}

function Content() {
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);

  useEffect(() => {
    const loadPinnedRepos = async () => {
      try {
        const repos = await fetchPinnedRepos('ordnav3');
        setPinnedRepos(repos);
      } catch (error) {
        console.error('Erro ao carregar repositórios:', error);
      }
    };
    loadPinnedRepos();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_tumxbnl',
        'template_jrvdvkj',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '3m4Uqqfp3mO34q_wm'
      );

      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Erro ao enviar. Tente novamente.');
      console.error('Erro:', error);
    }
  };
  return (
    <S.Content>
      <S.SectionContent id="sobre">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor apaixonado por criar interfaces de usuário
          acessíveis e visualmente perfeitas, que combinam design cuidadoso com
          uma engenharia sólida. Meu trabalho favorito está na interseção de
          design e desenvolvimento, criando experiências que não apenas são
          agradáveis aos olhos, mas também meticulosamente construídas para
          garantir desempenho e usabilidade.
        </p>
        <p>
          Atualmente, estou em transição para Desenvolvedor Full Stack, com foco
          em aprimorar minhas habilidades em tecnologias tanto no front-end
          quanto no back-end. Estou cursando Desenvolvimento Full Stack Java na
          EBAC. Meu objetivo é criar soluções completas e de alta qualidade,
          otimizadas para performance e com uma experiência de usuário refinada.
        </p>
        <p>
          Ao longo da minha trajetória, tive a oportunidade de trabalhar em
          diversos projetos, desenvolvendo soluções personalizadas intuitivos e
          de fácil navegação.
        </p>
        <p>
          Nos meus momentos livres, gosto de explorar novas tecnologias,
          aprender continuamente e me envolver em projetos que ampliem meus
          horizontes técnicos.
        </p>
        <p>
          Estou sempre aberto a novas conexões e oportunidades para colaborar em
          projetos inovadores.
        </p>
      </S.SectionContent>

      <S.SectionContent id="cursos">
        <h2>Formação Acadêmica & Cursos</h2>

        <h3>Formação Acadêmica</h3>
        <ul>
          <li>
            <strong>Ensino Médio</strong>
            <span>Escola Estadual Benedito Calixto</span>
            <small>Conclusão: 2021</small>
          </li>
        </ul>

        <h3>Cursos</h3>
        <ul>
          <li>
            <strong>Desenvolvimento Full Stack Java</strong>
            <span>EBAC - Escola Britânica de Artes Criativas e Tecnologia</span>
            <small>Mai 2023 - Dez 2024</small>
            <small>
              <strong>Competências:</strong> JavaScript, React.js, Git,
              Bootstrap, GruntJS, SASS, JSON, TypeScript, Redux.js, React Hooks,
              Vue.js, CSS, JQuery, Webpack, HTML5, GitHub, LESS
            </small>
          </li>

          <li>
            <strong>Desenvolvedor JavaScript e TypeScript</strong>
            <span>Udemy</span>
            <small>Certificado em: 2025</small>
            <small>
              <strong>Competências:</strong> JavaScript, TypeScript,
              Desenvolvimento de Software
            </small>
          </li>

          <li>
            <strong>EF Level 3 Beginner CEFR Level A1</strong>
            <span>EF English Live</span>
            <small>Emitido em Mai 2023</small>
            <small>
              <strong>Competências:</strong> Inglês
            </small>
          </li>

          <li>
            <strong>EF Nível 1 Iniciante CEFR Nível A1</strong>
            <span>EF English Live</span>
            <small>Emitido em Mai 2023</small>
            <small>
              <strong>Competências:</strong> Inglês
            </small>
          </li>

          <li>
            <strong>EF Nível 2 Iniciante CEFR Nível A1</strong>
            <span>EF English Live</span>
            <small>Emitido em Mai 2023</small>
            <small>
              <strong>Competências:</strong> Inglês
            </small>
          </li>

          <li>
            <strong>Lógica de Programação</strong>
            <span>Chroma Tecnologia e Educação Profissional</span>
            <small>Emitido em Ago 2018</small>
            <small>
              <strong>Competências:</strong> Lógica de Programação
            </small>
          </li>
        </ul>
      </S.SectionContent>

      <S.SectionContent id="projetos">
        <h2>Meus Projetos</h2>
        {pinnedRepos.length > 0 ? (
          <ul>
            {pinnedRepos.map((repo) => (
              <li key={repo.name}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  <strong>{repo.name}</strong>
                </a>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Carregando projetos...</p>
        )}
      </S.SectionContent>

      <S.SectionContent id="contato">
        <h2>Contato</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </S.SectionContent>
    </S.Content>
  );
}

export default Content;
