/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <Div>
      <Navbar />

      <div className="about_hero">
        <h1>Projects</h1>
        <p>Some of the projects we have done so for</p>
      </div>

      <div className="projects">
        <h1 className="project-heading">Some Of Our Outstanding Project</h1>

        <div className="project-1">
          <div className="project-text">
            <h1>Lan 4 Vote</h1>

            <p>
              Under the project name "LAN 4 VOT," a Sierra Leonean parliament
              aspirant sought Peculiar Labs' expertise to create a pro-bono
              digital tool. This tool aimed to educate constituents on avoiding
              invalid votes. Despite the challenges of testing new team skills,
              we successfully crafted a mobile app simulating the voting
              process. Users could log in, imprint their thumb beside their
              preferred candidate, submit their vote, and receive real-time
              feedback on vote validity. Despite losing contact with the sponsor
              post-launch, the project served as a valuable learning experience
              for our team, marking the successful launch of our inaugural app.
            </p>
          </div>
          <img src="assets/lan4vote.png" alt="" />
        </div>

        <div className="project-1">
          <img src="assets/dele.png" alt="" />
          <div className="project-text">
            <h1>Dele School</h1>

            <p>
              Following the LAN 4 VOT project, Peculiar Labs took on the task of
              building a website for a prominent Primary and Secondary school in
              Sierra Leone, the "DELE SCHOOL WEBSITE." Though the compensation
              was not substantial, viewing it as a chance to refine our skills,
              we delivered a website that met the client's satisfaction.
            </p>
          </div>
        </div>

        <div className="project-1">
          <div className="project-text">
            <h1>Techbiz Database</h1>

            <p>
              The journey continued with the "TECHBIZ DATABASE" project, where
              Techbiz sought Peculiar Labs to create a comprehensive database of
              goods and services available in Sierra Leone. This initiative
              aimed to make this database accessible to the local population,
              contributing to the technological advancement of the region.
            </p>
          </div>
          <img src="assets/techbiz.png" alt="" />
        </div>

        <div className="project-1">
          <img src="assets/wire.jpg" alt="" />
          <div className="project-text">
            <h1> AIIAC </h1>

            <p>
              In mid-2023, a significant breakthrough occurred as Associates In
              Infrastructure and Consultancies (AIIAC SL LTD) engaged Peculiar
              Labs as their IT consultants on a retainer basis. This
              partnership, with an initial trial arrangement of Le 110,000 per
              annum, marked a significant milestone for Peculiar Labs. The
              collaboration has exceeded expectations, showcasing the depth of
              our expertise and commitment to delivering exceptional IT
              consultancy services. As we reflect on the challenges and
              triumphs, we remain dedicated to our mission. The year 2023 has
              been transformative, positioning Peculiar Labs as a dynamic force
              in the technological landscape. We are excited about the
              opportunities ahead and grateful for the continued support of our
              team and partners.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Div>
  );
};

export default Projects;

const Div = styled.div`
  .about_hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-image: url("assets/pklabs-5.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 60px;
  }

  .about_hero h1 {
    color: white;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }

  .about_hero p {
    color: white;
    text-align: center;
    font-family: poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .project-heading {
    color: #192bc2;
    text-align: center;
    font-family: "Conthrax", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 35.2px; /* 110% */
    text-transform: uppercase;
  }

  .project-1 {
    display: flex;
    justify-content: center;
    gap: 70px;
  }

  .project-1 img {
    object-fit: cover;
    max-width: 600px;
    height: 500px;

    border-radius: 20px;
  }

  .project-1 div {
    max-width: 600px;
    box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: -3px 5px 19px -3px rgba(0, 0, 0, 0.66);
    border-radius: 20px;
    padding: 10px;
  }

  .project-text h1 {
    color: black;
    text-align: left;
    font-family: "Conthrax", sans-serif;
    font-size: 25x;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
  }
  .project-text p {
    color: black;
    text-align: left;
    font-family: poppins;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 auto;
    padding: 0;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    .project-1 img {
      display: none;
    }
  }
`;
