/* istanbul ignore file */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { SplideSlide } from '@splidejs/react-splide';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { getAllItems } from '../redux/house/houseReducer';
import Socials from './socials';
import '@splidejs/react-splide/css';
import './pages/mainpage.css';
import CarrouselCard from './CarrouselCard';

const Carousel = () => {
  const yatches = useSelector((state) => state.houses);
  const [itemId, setItemId] = useState(0);
  const [item, setItem] = useState(yatches[itemId]);
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

  const handlePrev = () => {
    if (itemId === 0) {
      return (
        <button
          type="button"
          className="prev-btn"
        >
          <ArrowLeftIcon />
        </button>
      );
    }
    return (
      <button
        type="button"
        className="next-btn"
        onClick={() => {
          console.log(itemId);
          setItemId(itemId - 1);
        }}
      >
        <ArrowLeftIcon />
      </button>
    );
  };

  const handleNext = () => {
    if (itemId === yatches.length - 1) {
      return (
        <button
          type="button"
          className="prev-btn"
        >
          <ArrowRightIcon />
        </button>
      );
    }
    return (
      <button
        type="button"
        className="next-btn"
        onClick={() => {
          console.log(itemId);
          setItemId(itemId + 1);
        }}
      >
        <ArrowRightIcon />
      </button>
    );
  };

  return (
    <CarrouselCard
    item={item}
    handlePrev={handlePrev}
    handleNext={handleNext}
    handleDeleteHouse={'handleDeleteHouse'}
    isLoading={'isLoading'}
    admin={false}
  />
     
  );
};

export default Carousel;
