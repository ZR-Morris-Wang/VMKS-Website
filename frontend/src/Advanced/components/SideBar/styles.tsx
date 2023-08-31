import styled from "styled-components";

export const SideBarContainer = styled.div`
  background: rgb(0, 0, 0);
  position: fixed;
  top: 10%;
  left: 0;
  width: 225px;
  height: 100%;
  padding: 20px 0;
  transition: all 0.5s ease;
`;

export const ProfileContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Styledimg = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Styledh3 = styled.h3`
  color: #ffffff;
  margin: 10px 0 5px;
`;

export const Styledp = styled.p`
  color: rgb(206, 240, 253);
  font-size: 14px;
`;

export const Styleda = styled.a`
  display: block;
  padding: 13px 30px;
  border-bottom: 1px solid #10558d;
  color: rgb(241, 237, 237);
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: #444;
  }
`;

export const Styledspan = styled.span`
  color: #dee4ec;
  width: 30px;
  display: inline-block;
`;

export const SectionContainer = styled.div`
  width: calc(100% - 225px);
  margin-left: 225px;
  transition: all 0.5s ease;
`;

export const LeftNavContainer = styled.div`
  background: rgb(7, 105, 185);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const NavA = styled.a`
  font-size: 28px;
  color: #f4fbff;

  &:hover {
    background-color: #444;
  }
`;
