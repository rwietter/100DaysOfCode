import React, { FC } from 'react';

import ISSDockingImage from '../../assets/asset 0.jpeg';
import Falcon from '../../assets/asset 1.webp';
import Astronaut from '../../assets/asset 2.webp';
import Starship from '../../assets/asset 3.webp';
import logo from '../../assets/asset 4.svg';
import ISSdocking from '../../assets/videos/iss_docking_sim.mp4';
import * as S from './styles';

const Home: FC = () => (
  <>
    <S.Container id="primary">
      <S.HeaderWrapper>
        <S.Ul>
          <S.Link to="/">
            <S.Logo src={logo} />
          </S.Link>
          <S.Li>
            <S.Link to="#">FALCON 9</S.Link>
          </S.Li>
          <S.Li>
            <S.Link to="#">FALCON HEAVY</S.Link>
          </S.Li>
          <S.Li>
            <S.Link to="#">DRAGON</S.Link>
          </S.Li>
          <S.Li>
            <S.Link to="#">STARSHIP</S.Link>
          </S.Li>
          <S.Li>
            <S.Link to="#">HUMAN SPACE</S.Link>
          </S.Li>
          <S.Li>
            <S.Link to="#">RIDESHARE</S.Link>
          </S.Li>
        </S.Ul>
        <S.Hamburguer />
      </S.HeaderWrapper>
      <S.CardLeft id="primary">
        <h3>RECENT LAUNCH</h3>
        <h1>STARLINK MISSION</h1>
        <S.Button type="button">
          <S.Link to="#">WATCH REPLAY</S.Link>
        </S.Button>
      </S.CardLeft>
      <S.Img alt="falcon nine by spacex" id="image" src={Falcon} />
    </S.Container>

    <S.Container id="secondary">
      <S.CardRight id="secondary">
        <h1>RETURNING HUMAN SPACEFLIGHT TO THE UNITED STATES</h1>
        <S.Button type="button">
          <S.Link to="/">LEARN MORE</S.Link>
        </S.Button>
      </S.CardRight>
      <S.Img alt="nasa astronaut" id="image" src={Astronaut} />
    </S.Container>

    <S.Container id="third">
      <S.ContainerVideo id="third">
        <S.Picture>
          <img src={ISSDockingImage} alt="iss docking test" />
        </S.Picture>
        <S.Video>
          <video autoPlay loop muted width="100%" height="80%" preload="auto">
            <source src={ISSdocking} type="video/mp4" />
          </video>
        </S.Video>
      </S.ContainerVideo>
      <S.CardVideo id="third">
        <h1>CREW DRAGON DOCKING SIMULATOR</h1>
        <p>
          Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the
          crew can take manual control of the spacecraft if necessary.
        </p>
        <S.Button type="button">
          <S.Link to="#">TRY IT</S.Link>
        </S.Button>
      </S.CardVideo>
    </S.Container>

    <S.Container id="fourth">
      <S.CardRight id="fourth">
        <p>05/01/20</p>
        <h1>NASA SELECTS LUNAR OPTIMIZED STARSHIP</h1>
        <p>
          NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the
          surface of the Moon as part of NASA’s Artemis program.
        </p>
        <S.Button type="button">
          <S.Link to="/">LEARN MORE</S.Link>
        </S.Button>
      </S.CardRight>
      <S.Img src={Starship} alt="starship partnership nasa and spacex" />
    </S.Container>
    <S.Footer>
      <ul>
        <li>
          <S.Link to="/">SPACEX © 2020</S.Link>
        </li>
        <li>
          <S.Link to="/">TWITTER</S.Link>
        </li>
        <li>
          <S.Link to="/">YOUTUBE</S.Link>
        </li>
        <li>
          <S.Link to="/">INSTAGRAM</S.Link>
        </li>
        <li>
          <S.Link to="/">FLICKR</S.Link>
        </li>
        <li>
          <S.Link to="/">LINKEDIN</S.Link>
        </li>
        <li>
          <S.Link to="/">PRIVACY POLICY</S.Link>
        </li>
      </ul>
    </S.Footer>
  </>
);
export default Home;
