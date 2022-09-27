import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import axios from 'axios';
import { SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { deleteHouse, getAllItems } from '../redux/house/houseReducer';
import Socials from './socials';
import '@splidejs/react-splide/css';
import './pages/mainpage.css';

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

      <div className="d-flex yatchCarousel">
        {
          handlePrev()
        }
        {
          item ? (
            <SplideSlide>
              <div className="yatch">
                <div className="card">
                  <img src={item.image} alt={item.name} />
                  <div className="yatch_name">
                    <h4>{item.name}</h4>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '20px',
                      alignItems: 'center',
                      marginBottom: '0',
                    }}
                    className="yatch_location"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ width: '25px', height: '10px', color: '#97bf0f' }}
                    />
                    <span
                      style={{
                        fontSize: '1rem',
                        fontFamily: 'Niconne, cursive',
                        marginLeft: '-20px',
                      }}
                    >
                      {item.location}
                    </span>
                  </div>
                  <p>{item.description}</p>
                  <div className="social">
                    <Socials />
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDeleteHouse(item.id)}
                disabled={isLoading}
                type="button"
                className="btn btn-danger"
                style={{ marginTop: '20px' }}
              >
                {isLoading ? 'Deleting...' : 'Delete this house'}
              </button>
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
        {
          handleNext()
        }

      </div>
    </>
  );
};

export default CarouselDelete;
