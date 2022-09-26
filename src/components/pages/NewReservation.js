// import logo from '../../img/Yatch-House.png';
import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import SideNavbar from '../MainNavBar';
import MobileNavbar from '../MobileNavBar';
import './newreservation.css';

import { AuthContext } from '../../context/AuthContext';

const NewReservation = () => {
  const date = new Date();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(date.setDate(date.getDate() + 1));

  const yatches = useSelector((state) => state.houses);
  const { id } = useParams();

  const house = yatches.filter((yatch) => yatch.id === parseInt(id, 10));

  const daysNumber = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  const [totalPrice, setTotalPrice] = useState(daysNumber * house[0].price);

  const [isLoading, setShow] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    const reservation = {
      start_date: startDate.toISOString().split('T')[0],
      end_date: new Date(endDate).toISOString().split('T')[0],
      house_id: house[0].id,
      status: 'booked',
      user_id: user.data.id,
      total: totalPrice,
    };

    await axios
      .post('http://localhost:3001/api/v1/reservations', { reservation })
      .then(() => {
        const url = `${process.env.PUBLIC_URL}/my_reservation`;
        history(url);
      })
      .catch((error) => {
        console.log(error);
        setShow(false);
      });
  };

  const calculateTotalPriceFromEnd = (date) => {
    const firstDate = date.toISOString().split('T')[0];
    const secondDate = startDate.toISOString().split('T')[0];
    const days = Math.floor(
      (new Date(firstDate) - new Date(secondDate)) / (1000 * 60 * 60 * 24),
    );

    setTotalPrice(days * house[0].price);
  };

  const calculateTotalPriceFromStart = (date) => {
    const firstDate = endDate.toISOString().split('T')[0];
    const secondDate = date.toISOString().split('T')[0];
    const days = Math.floor(
      (new Date(firstDate) - new Date(secondDate)) / (1000 * 60 * 60 * 24),
    );

    setTotalPrice(days * house[0].price);
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
        <div className="container reservation">
          <div className="row">
            <div className="col-md-4" style={{ alignSelf: 'flex-end' }}>
              <img
                src={house[0].image}
                alt="yatch"
                className="img-fluid image"
              />
            </div>
            <div className="col reserve-infos">
              <h3> Reservation Infos </h3>
              <table>
                <tr>
                  <th>Name: </th>
                  <td>{house[0].name}</td>
                </tr>
                <tr>
                  <th>Location: </th>
                  <td>{house[0].location}</td>
                </tr>
                <tr>
                  <th>Description: </th>
                  <td>{house[0].description}</td>
                </tr>
                <tr>
                  <th>Price: </th>
                  <td>
                    $
                    {house[0].price}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="row date-range">
            <h3> Choose date range </h3>
            <hr />
            <div className="col-md-12 ">
              <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
                <div className="date-fields">
                  <div className="start-date">
                    <p>Start Date</p>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => {
                        setStartDate(date);
                        calculateTotalPriceFromStart(date);
                      }}
                      minDate={new Date()}
                      maxDate={new Date(endDate)}
                    />
                  </div>
                  <div className="end-date">
                    <p>End Date</p>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {
                        setEndDate(date);
                        calculateTotalPriceFromEnd(date);
                      }}
                      minDate={new Date()}
                    />
                  </div>
                </div>
                <div
                  className="total-price"
                  style={{ paddingLeft: '4%', marginTop: '25px' }}
                >
                  <input type="hidden" name="total" value={totalPrice} />
                  <p>
                    Total amount:
                    <b>
                      $
                      {totalPrice}
                    </b>
                  </p>
                </div>
                <div className="submit">
                  <button
                    type="submit"
                    className="btn-sub"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Booking...' : 'Submit'}
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
