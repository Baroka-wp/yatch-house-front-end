// import logo from '../../img/Yatch-House.png';
import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate, useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import SideNavbar from '../MainNavBar';
import MobileNavbar from '../MobileNavBar';
import './newreservation.css';

import { AuthContext } from '../../context/AuthContext';

const NewReservation = () => {
  let date = new Date();
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(date.setDate(date.getDate() + 1));

  const [reservation, setReservation] = useState({
    start_date: startDate.toISOString().split('T')[0],
    end_date: new Date(endDate).toISOString().split('T')[0],
  });

  const yatches = useSelector((state) => state.houses);
  const { id } = useParams();

  const house = yatches.filter((yatch) => yatch.id === parseInt(id, 10));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setReservation({
      ...reservation,
      house_id: house[0].id,
      status: 'pending',
      user_id: user.data.id,
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
    });
    console.log(reservation);
    await axios.post('http://localhost:3001/api/v1/reservations', { reservation })
      .then((response) => {
        console.log(response);
          <Navigate to="/my_reservation" />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [totalPrice, setTotalPrice] = useState(Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) * house[0].price);

  const calculateTotalPriceFromEnd = (date) => {
    const firstDate = date.toISOString().split('T')[0];
    const secondDate = startDate.toISOString().split('T')[0];
    const days = Math.floor((new Date(firstDate) - new Date(secondDate)) / (1000 * 60 * 60 * 24));

    setTotalPrice(days * house[0].price);
  };

  const calculateTotalPriceFromStart = (date) => {
    const firstDate = endDate.toISOString().split('T')[0];
    const secondDate = date.toISOString().split('T')[0];
    const days = Math.floor((new Date(firstDate) - new Date(secondDate)) / (1000 * 60 * 60 * 24));
    
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
            <div className="col-md-4">
              <img src={house[0].image} alt="yatch" className="img-fluid image" />
            </div>
            <div className="col reserve-infos">
              <h3> Reservation Infos </h3>
              <table>
                <tr>
                  <th>House location: </th>
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
                <tr>
                  <th>Start Date: </th>
                  <td>{reservation.start_date}</td>
                </tr>
                <tr>
                  <th>End Date: </th>
                  <td>{reservation.end_date}</td>
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
                      onChange={(date) => {setStartDate(date); calculateTotalPriceFromStart(date)}}
                      minDate={new Date()}
                      maxDate={new Date(endDate)}
                    />
                  </div>
                  <div className="end-date">
                    <p>End Date</p>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => {setEndDate(date); calculateTotalPriceFromEnd(date)}}
                      minDate={new Date()}
                    />
                  </div>
                </div>
                <div className="total-price" style={{ paddingLeft: '4%', marginTop: '25px' }}>
                  <p>Total amount: <b>$ {totalPrice}</b></p>
                </div>
                <div className="submit">
                  <button type="submit" className="btn-sub">
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
