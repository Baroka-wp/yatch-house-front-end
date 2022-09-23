import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SplideSlide } from '@splidejs/react-splide';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { getAllItems } from '../redux/house/houseReducer';
import Socials from './socials';
import '@splidejs/react-splide/css';
// import yatches from './dummydata/joydata';
import './pages/mainpage.css';

const Carousel = () => {
  const yatches = useSelector((state) => state.houses);

  const [itemId, setItemId] = useState(0);
  const [item, setItem] = useState(yatches[itemId]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
    setItem(yatches[itemId]);
  }, [dispatch, itemId]);

  if (yatches.length > 0) {
    if (itemId > yatches.length - 1) {
      setItemId(0);
    } else if (itemId < 0) {
      setItemId(yatches.length - 1);
    }
  }

  return (
    <div className="d-flex yatchCarousel">
      <button type="button" className="prev-btn" onClick={() => setItemId(itemId - 1)}>
        <ArrowLeftIcon />
      </button>
      {
        yatches.length > 0 && (
          <SplideSlide>
            <Link to={`/houses/${item.id}`} style={{ textDecoration: 'none' }}>
              <div className="yatch">
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
              </div>
            </Link>
          </SplideSlide>
        )
      }
      <button type="button" className="next-btn" onClick={() => setItemId(itemId + 1)}>
        <ArrowRightIcon />
      </button>
    </div>

  );
};

export default Carousel;
