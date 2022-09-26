import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';
import { getAllReservations } from '../../redux/reservation/reservationReducer';
import { getAllItems } from '../../redux/house/houseReducer';

import { AuthContext } from '../../context/AuthContext';

const MyReservation = () => {
  const yatches = useSelector((state) => state.houses);
  const reservationsList = useSelector((state) => state.reservations);

  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReservations(user.data.id));
    dispatch(getAllItems());
  }, [dispatch, user.data.id]);

  const house = (r) => {
    const h = yatches.filter((y) => parseInt(y.id, 10) === parseInt(r.house_id, 10));
    return h[0];
  };

  return (
    <div className="main_page">
      <div className="mainNavBar">
        <SideNavbar />
      </div>
      <div className="wrapper">
        <div className="mobile_menu_background">
          <MobileNavbar />
        </div>
        <div className="clearfix" />
        <h3> Your reservation report</h3>
        <div className="reservation_report">
          <table>
            <tbody>
              <tr>
                <th className="table-item">Name</th>
                <th className="table-item">Location</th>
                <th className="table-item">Start date</th>
                <th className="table-item">End date</th>
                <th className="table-item">Total</th>
              </tr>
              {
                reservationsList.map((item) => (
                  <tr key={item.id}>
                    {house(item) && (<td className="table-item">{house(item).name}</td>)}
                    {house(item) && (<td className="table-item">{house(item).location}</td>)}
                    <td className="table-item tbl_center">{item.start_date.split('T')[0]}</td>
                    <td className="table-item tbl_center">{item.end_date.split('T')[0]}</td>
                    <td className="table-item tbl_center">
                      $
                      {item.total}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="main_page_footer">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
