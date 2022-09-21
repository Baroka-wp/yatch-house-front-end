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
    <div className="main_page">
      <div className="mainNavBar">
        <SideNavbar />
      </div>
      <div className="wrapper reservation-container">
        <div className="mobile_menu_background">
          <MobileNavbar />
        </div>
        <div className="clearfix" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={house.image} alt="yatch" className="img-fluid" />
            </div>
            <div className="col-8">
              <h4> Reservation Infos : </h4>
              <p>
                <strong>
                  House name :
                  {house.name}
                </strong>
              </p>
              <p>
                <strong>
                  House description :
                </strong>
                {'  '}
                {house.description}
              </p>
              <p><strong>House price : $13</strong></p>
              <p>
                <strong>
                  From:
                  {'  '}
                </strong>

                {startDate.toISOString().split('T')[0]}
              </p>
              <p>
                <strong>
                  To:
                  {' '}
                  {'   '}
                </strong>

                {endDate.toISOString().split('T')[0]}
              </p>
            </div>
          </div>
          <div className="row">
            <hr />
            <h3> Choose date range </h3>
            <hr />
            <div className="col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <p>Date de début</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <br />
                  <p>Date de fin</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
                <div className="">
                  <button type="submit" className="btn-sub mt-5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="main_page_footer">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default NewReservation;
