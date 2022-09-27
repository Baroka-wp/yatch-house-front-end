import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Socials from './socials';
import '@splidejs/react-splide/css';
import './pages/mainpage.css';
import Link from '@mui/material/Link';


function CarrouselCard(props) {

    const { item, admin, handleDeleteHouse, handleNext, handlePrev, isLoading } = props;
    
    const deleleBtn = (admin, handleDeleteHouse, isLoading, item) => {    
        if(admin){
            return <button
            onClick={() => handleDeleteHouse(item.id)}
            disabled={isLoading}
            type="button"
            className="btn btn-danger"
            style={{ marginTop: '20px' }}
          >
            {isLoading ? 'Deleting...' : 'Delete this house'}
          </button>
        }
    }
    
  return (
   
    <div className="d-flex yatchCarousel">
    {
      handlePrev()
    }
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
            </Link>
            {
                         deleleBtn(admin, handleDeleteHouse, isLoading, item)
              }
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
  )
}

export default CarrouselCard