import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SplideSlide } from '@splidejs/react-splide';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { getAllItems } from '../redux/house/houseReducer';
import Socials from './socials';
import '@splidejs/react-splide/css';
import './pages/mainpage.css';

const Carousel = () => {
  const yatches = useSelector((state) => state.houses);
  const [itemId, setItemId] = useState(0);
  const [item, setItem] = useState(yatches[itemId]);
  console.log(`yatches: ${yatches}`);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  useEffect(() => {
    setItem(yatches[itemId]);
  }, [itemId, yatches]);

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
        item ? (
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
        ) : (
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="rectangular" width={310} height={250} />
            <Skeleton variant="rounded" width={310} height={100} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          </Stack>
        )
      }
      <button type="button" className="next-btn" onClick={() => setItemId(itemId + 1)}>
        <ArrowRightIcon />
      </button>
    </div>

  );
};

export default Carousel;
