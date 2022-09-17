import React from 'react';
import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import yatches from './dummydata/joydata';
import './mainpage.css';

const MainPage = () => (
  <div>
    <Wrapper>
      <h2>Popular Destinations</h2>
      <h3> Select your desired destination</h3>
      <div className="dots">
        {[...Array(15)].map((el, i) => (
          <div>
            <CircleIcon
              key={i}
              color="disabled"
              sx={{ fontSize: '0.5rem' }}
            />
          </div>
        ))}
      </div>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '1rem',
        }}
      >
        {yatches.map((item) => (
          <SplideSlide key={item.id}>
            <Card>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="yatch_name">
                    <h4>{item.name}</h4>
                  </div>
                <div className="dots">
                    {[...Array(15)].map((el, i) => (
                      <div>
                        <CircleIcon
                          key={i}
                          color="disabled"
                          sx={{ fontSize: '0.7rem' }}
                        />
                      </div>
                    ))}
                  </div>
                <p>{item.description}</p>
                <div className="social">
                    <FacebookRoundedIcon
                      sx={{
                        fontSize: '1.5rem',
                        color: 'rgb(0, 0, 0, 0.26)',
                        marginRight: '1rem',
                      }}
                    />
                    <InstagramIcon
                      sx={{
                        fontSize: '1.5rem',
                        color: 'rgba(0, 0, 0, 0.26)',
                        marginRight: '1rem',
                      }}
                    />
                    <TwitterIcon
                      sx={{ fontSize: '1.5rem', color: 'rgb(0, 0, 0, 0.26)' }}
                    />
                  </div>
              </div>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  </div>
);

const Wrapper = styled.div`
  margin: 4rem 0;
  font-family: 'Montserrat', sans-serif;

  h2{
    text-align: center;
    margin-bottom: 2rem;
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
  }
    h3{
    text-align: center;
    margin-bottom: 1rem;
    color: #bbbbc3;
    font-weight: 600;
`;

const Card = styled.div`
  background: var(--clr-white);
  width: 350px;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h4 {
    padding: 0.5rem;
  }

  p {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    text-align: center;
    font-size: 14px;
  }
`;

export default MainPage;
