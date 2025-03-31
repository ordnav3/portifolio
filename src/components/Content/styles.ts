import styled from 'styled-components';
import * as V from '../../styles/variables';
import { Container } from '../../styles/GlobalStyle';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 50px;
  background-color: ${V.color1};
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

export const SectionContent = styled(Container)`
  margin-bottom: 40px;
  padding: 60px;
  border-radius: 16px;
  background: ${V.color4};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  max-width: 1100px;

  h2 {
    font-size: 38px;
    color: ${V.color5};
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Blade Runner Movie Font', sans-serif;
    letter-spacing: 2px;
  }

  h2::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: ${V.color3};
    display: block;
    margin: 12px auto 0;
    border-radius: 4px;
  }

  h3 {
    margin-top: 30px;
    color: ${V.color2};
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 3px solid transparent;
    transition: border-color 0.3s ease-in-out;
  }

  h3:hover {
    border-color: ${V.color3};
  }

  p {
    font-size: 20px;
    color: ${V.color2};
    line-height: 32px;
    margin-bottom: 30px;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    max-width: 100%;
    overflow: hidden;

    li {
      background-color: ${V.color1};
      border-radius: 12px;
      padding: 25px;
      margin: 25px 0;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
      color: ${V.color2};
      word-wrap: break-word;
    }

    li:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    strong {
      font-size: 1.6rem;
      color: ${V.color5};
      display: block;
      margin-bottom: 12px;
    }

    span {
      font-size: 1.1rem;
      color: ${V.color2};
      display: block;
      margin-bottom: 15px;
    }

    small {
      font-size: 1rem;
      color: ${V.color3};
      display: block;
      margin-top: 12px;
    }
  }

  form {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

    input,
    textarea {
      border-radius: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      margin-bottom: 16px;
      width: 100%;
      max-width: 1000px;
      height: 50px;
      font-size: 16px;
      background-color: ${V.color2};
      color: ${V.color1};
    }

    textarea {
      height: 200px;
      resize: none;
    }

    button {
      background-color: ${V.color1};
      color: ${V.color5};
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      width: 100%;
      max-width: 300px;
      font-weight: bolder;

      &:hover {
        background-color: ${V.color5};
        color: ${V.color1};
      }
    }
  }
`;
