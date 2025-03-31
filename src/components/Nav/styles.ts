import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Nav = styled.nav`
  background: linear-gradient(145deg, ${V.color1}, #16213e);
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 20px 0;
    box-shadow: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  text-align: center;

  h1 {
    color: ${V.color5};
    font-family: 'Blade Runner Movie Font', sans-serif;
    font-size: 24px;
    margin-bottom: 12px;
  }

  h2 {
    color: ${V.color4};
    font-size: 18px;
    margin-top: 6px;
  }

  p {
    color: ${V.color2};
    font-size: 15px;
    margin-top: 6px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;

  li {
    display: flex;
    align-items: center;
    margin: 10px 0;

    a {
      text-decoration: none;
      font-size: 17px;
      font-weight: 600;
      color: ${V.color2};
      padding: 10px 15px;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: ${V.color1};
        background-color: ${V.color4};
        transform: scale(1.07);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 25px;
  width: 100%;

  a {
    color: ${V.color4};
    font-size: 26px;
    transition: color 0.3s ease;

    &:hover {
      color: ${V.color5};
    }
  }

  @media (max-width: 768px) {
    margin-top: 25px;
    width: 100%;
    justify-content: center;
  }
`;
