import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import axios from 'axios';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { deleteHouse, getAllItems } from '../redux/house/houseReducer';
import '@splidejs/react-splide/css';
import './pages/mainpage.css';
import CarrouselCard from './CarrouselCard'

const CarouselDelete = () => {
  const yatches = useSelector((state) => state.houses, shallowEqual);
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

  const [deleteNotif, setNotif] = useState('');
  const [isLoading, setShow] = useState(false);
  const [canDisplay, diplayNotif] = useState(false);
  const timeOut = () => {
    const timer = setTimeout(() => {
      setNotif('');
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleDeleteHouse = async (id) => {
    try {
      setShow(true);
      await axios.delete(`http://localhost:3001/api/v1/houses/${id}`).then(() => {
        setNotif('House deleted');
        timeOut();
        dispatch(deleteHouse(id));
        setShow(false);
        diplayNotif(true);
      });
    } catch (err) {
      console.log(err);
      setNotif('House not deleted, please try again');
      setShow(false);
      diplayNotif(false);
    }
  };

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
    <>
      <div style={{ height: '1rem', marginBottom: '1rem' }}>
        {canDisplay ? (
          <div
            id="notif"
            style={{
              textAlign: 'center',
              color: 'green',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            {deleteNotif}
          </div>
        ) : (
          <div
            id="notif"
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            {deleteNotif}
          </div>
        )}
      </div>

      <CarrouselCard
        item={item}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleDeleteHouse={handleDeleteHouse}
        isLoading={isLoading}
        admin={true}
      />
    </>
  );
};

export default CarouselDelete;
