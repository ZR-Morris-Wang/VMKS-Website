import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Panel, PanelResizeHandle } from "react-resizable-panels";
import "../../assets/vmks_dusk_ui_v1.png";
import "../../assets/vmks_dusk_ui_bg_v2.png";

export const GlobalStyles = createGlobalStyle`
  body, html {
    font-family: "Cabin", sans-serif;
    //line-height: 5.5;
    //background-color: #000000;
    color: white;
    //color-scheme: dark;
    height: 100%;
    margin: 0;
    background-image: url("../../assets/vmks_dusk_ui_bg_v2.png");
    background-size: cover;
    background-position: center center;
    z-index: -1;
  }
`;

export const StyledImg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1; // Ensure it's behind your content
  object-fit: cover; // This ensures the image covers the entire viewport
`;

export const StyledPanel = styled(Panel)`
  height: 60vh;
  //background-color: #f5f5f5; // Light grey background
  //border: 100px solid #e0e0e0; // Grey border
  padding: 10px; // Some padding for content inside
  overflow: auto; // For scrolling if content gets too big
  transition: background-color 0.3s; // Transition effect for hover

  &:hover {
    background-color: #2b2929; // Slightly darker grey on hover
  }
`;

export const StyledPanelContainer = styled(Panel)`
  //a container without hover effects

  height: 85vh;
  //background-color: #f5f5f5; // Light grey background
  //border: 100px solid #e0e0e0; // Grey border
  padding: 10px; // Some padding for content inside
  overflow: auto; // For scrolling if content gets too big
  transition: background-color 0.3s; // Transition effect for hover
`;

export const StyledPanelResizeHandleHorizontal = styled(PanelResizeHandle)`
  cursor: ew-resize; /* horizontal resize cursor */
  background-color: rgba(116, 113, 113, 0.2); /* semi-transparent black */
  width: 5px; /* adjust as needed */
  //height: 5px;
  z-index: 1000; /* bring to the front */
`;

export const StyledPanelResizeHandleVertical = styled(PanelResizeHandle)`
  cursor: ns-resize; /* horizontal resize cursor */
  background-color: rgba(116, 113, 113, 0.2); /* semi-transparent black */
  height: 5px; /* adjust as needed */
  //height: 5px;
  z-index: 1000; /* bring to the front */
`;
