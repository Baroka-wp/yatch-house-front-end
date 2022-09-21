import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Socials from '../socials';
import 'react-slideshow-image/dist/styles.css';
import yatches from '../dummydata/joydata';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';

// const indicators = (index) => (<div className="indicator">{index + 1}</div>);

const Example = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(yatches);
  }, []);

  return (
    <div className="main_page">
      <div className="mainNavBar">
        <SideNavbar />
      </div>
      <div className="wrapper">
        <div className="mobile_menu_background">
          <MobileNavbar />
        </div>
        <div className="clearfix" />
        <h3> Select your desired destination</h3>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators
          autoplay={false}
          responsive={[{
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          }, {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          }]}
        >
          {item.map((item) => (
            <div
              key={item.id}
              style={{
                textAlign: 'center',
                fontSize: '30px',
                margin: '30px',
              }}
            >
              <Link key={item.id} to={`/reservation/${item.id}`} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <img src={item.image} alt={item.name} />
                  <div className="yatch_name">
                    <h4>{item.name}</h4>
                  </div>
                  <p>{item.description}</p>
                  <div className="social">
                    <Socials />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slide>
        <div className="main_page_footer">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
