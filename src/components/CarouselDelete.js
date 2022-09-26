import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SplideSlide } from '@splidejs/react-splide';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { deleteHouse, getAllItems } from '../redux/house/houseReducer';
import Socials from './socials';
import '@splidejs/react-splide/css';
// import yatches from './dummydata/joydata';
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

  const handleDeleteHouse = async (id) => {
    try {
      setShow(true);
      await axios.delete(`http://localhost:3001/api/v1/houses/${id}`).then(() => {
        setNotif('House deleted');
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

  return (
    <>
      {
        diplayNotif ? (
          <div style={{
            textAlign: 'center', color: 'green', fontSize: '20px', fontWeight: 'bold',
          }}
          >
            {deleteNotif}
          </div>
        )
        :
        (
          <div style={{
            textAlign: 'center', color: 'red', fontSize: '20px', fontWeight: 'bold',
          }}
          >
            {deleteNotif}
          </div>
        )
      }
      
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
        <button type="button" className="next-btn" onClick={() => setItemId(itemId + 1)}>
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
};

export default CarouselDelete;
