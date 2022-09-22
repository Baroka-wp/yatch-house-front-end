// import logo from '../../img/Yatch-House.png';
import React, { useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import SideNavbar from '../MainNavBar';
import MobileNavbar from '../MobileNavBar';
import yatches from '../dummydata/joydata';
import './newreservation.css';

// import { AuthContext } from '../../context/AuthContext';

const NewReservation = () => {
  // const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const user = { id: 1, name: 'John Doe', email: 'john@do.co' };

  const [reservation, setReservation] = useState({});

  const { id } = useParams();
  const house = yatches[id - 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    setReservation({
      ...reservation,
      house_id: house.id,
      user_id: user.id,
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
    });
    console.log(reservation);
    // axios.post('http://localhost:3000/reservations', reservation)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    // });
  };
  return (
    <div className='main_page'>
      <div className='mainNavBar'>
        <SideNavbar />
      </div>
      <div className='wrapper reservation-container'>
        <div className='mobile_menu_background'>
          <MobileNavbar />
        </div>
        <div className='clearfix' />
        <div className='container reservation'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={house.image} alt='yatch' className='img-fluid image' />
            </div>
            <div className='col reserve-infos'>
              <h3> Reservation Infos </h3>
              <table>
                <tr>
                  <th>House Name: </th>
                  <td>{house.name}</td>
                </tr>
                <tr>
                  <th>Description: </th>
                  <td>{house.description}</td>
                </tr>
                <tr>
                  <th>Price: </th>
                  <td>$13</td>
                </tr>
                <tr>
                  <th>Start Date: </th>
                  <td>{startDate.toISOString().split("T")[0]}</td>
                </tr>
                <tr>
                  <th>End Date: </th>
                  <td>{endDate.toISOString().split("T")[0]}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className='row date-range'>
            <h3> Choose date range </h3>
            <hr />
            <div className='col-md-12 '>
              <form onSubmit={handleSubmit}>
                <div className='date-fields'>
                  <div className='start-date'>
                    <p>Start Date</p>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className='end-date'>
                    <p>End Date</p>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>
                </div>
                <div className='submit'>
                  <button type='submit' className='btn-sub mt-5'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='main_page_footer'>
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default NewReservation;
