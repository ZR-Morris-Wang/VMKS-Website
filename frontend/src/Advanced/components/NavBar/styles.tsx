import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledProps {
  tmp: boolean;
}

export const NavContainer = styled.nav<StyledProps>`
  width: 100%;
  height: ${(props) => (props.tmp ? "100vh" : "80px")};
  background-color: #000000;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  //background-color: salmon;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //background-color: red;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  //flex-wrap: wrap;
`;

export const NavbarLinkContainer = styled.div`
  //display: flex;
  //justify-content: ;
`;

export const NavbarLink = styled(Link)`
  /* width: ; */
  /*height: 50px; */
  color: white;
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  /* border-width: 1px; */
  padding: 17px;
  border: 1px solid #99efea;
  margin: 10px;

  @media (max-width: 772px) {
    display: none;
  }
  &:hover {
    background-color: #22002f; // Slightly darker grey on hover
  }
`;

export const NavbarLinkExtended = styled(Link)`
  /* width: ; */
  /*height: 50px; */
  color: white;
  font-size: 125%;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  /* border-width: 1px; */
  padding: 20px;
  //border: 1px solid #99efea;
  //margin: 10px;
`;

export const Logo = styled.img`
  background: none;
  border: none;
  margin: 10px;
  width: 310px;
  position: relative;
  height: auto;

  @media (max-width: 820px) {
    width: 125%;
  }
  @media (max-width: 772px) {
    width: 285px;
  }
  /* @media (max-width: 721px) {
      width: px;
  } */
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  //margin-top: 28px;
  cursor: pointer;

  @media (min-width: 772px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 772px) {
    display: none;
  }
`;

export const ClosedLinkButton = styled.button`
  width: 100%;
  //height: 25%;
  padding: 20px;
  opacity: 0.98;
  //border: 1px solid white;
`;
