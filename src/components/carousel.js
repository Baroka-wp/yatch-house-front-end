import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CircleIcon from '@mui/icons-material/Circle';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Socials from './socials';
import '@splidejs/react-splide/css';
import yatches from './dummydata/joydata';
import './mainpage.css';

const Carousel = () => (
  <div>
    <Splide
      options={{
        perPage: 3,
        arrows: true,
        pagination: false,
        drag: 'free',
        gap: '1.5rem',
      }}
    >
      {yatches.map((item) => (
        <SplideSlide key={item.id}>
          <div className="yatch">
            <div className="card">
              <img src={item.image} alt={item.name} />
              <div className="yatch_name">
                <h4>{item.name}</h4>
              </div>
              <div className="dots">
                {[...Array(15)].map(() => (
                  <div key={uuidv4()}>
                    <CircleIcon
                      color="disabled"
                      sx={{ fontSize: '0.7rem' }}
                    />
                  </div>
                ))}
              </div>
              <p>{item.description}</p>
              <div className="social">
                <Socials />
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
);

export default Carousel;
