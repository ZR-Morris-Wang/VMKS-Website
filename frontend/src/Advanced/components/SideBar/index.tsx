import React from "react";
import {
  SideBarContainer,
  ProfileContainer,
  Styledh3,
  Styledimg,
  Styledp,
  Styleda,
  Styledspan,
  SectionContainer,
  LeftNavContainer,
  NavA,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <>
      <SideBarContainer>
        <ProfileContainer>
          <Styledimg
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="profile_picture"
          />
          <Styledh3>Anamika Roy</Styledh3>
          <Styledp>Designer</Styledp>
          <div>
            {" "}
            <ul>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-home"></i>
                  </Styledspan>
                  <span className="item">Home</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-desktop"></i>
                  </Styledspan>
                  <span className="item">My Dashboard</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-user-friends"></i>
                  </Styledspan>
                  <span className="item">People</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-tachometer-alt"></i>
                  </Styledspan>
                  <span className="item">Perfomance</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-database"></i>
                  </Styledspan>
                  <span className="item">Development</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-chart-line"></i>
                  </Styledspan>
                  <span className="item">Reports</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-user-shield"></i>
                  </Styledspan>
                  <span className="item">Admin</span>
                </Styleda>
              </li>
              <li>
                <Styleda>
                  <Styledspan>
                    <i className="fas fa-cog"></i>
                  </Styledspan>
                  <span className="item">Settings</span>
                </Styleda>
              </li>
            </ul>
          </div>
        </ProfileContainer>
      </SideBarContainer>

      <SectionContainer>
        <LeftNavContainer>
          <div className="hamburger">
            <NavA href="#">
              <i className="fas fa-bars"></i>
            </NavA>
          </div>
        </LeftNavContainer>
      </SectionContainer>
    </>
  );
};

export default SideBar;
