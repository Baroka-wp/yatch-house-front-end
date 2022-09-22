import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';
import reservationsList from '../dummydata/reservation_report';

const MyReservation = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const data = reservationsList.filter((res) => res.user_id === 2);
    setItem(data);
  }, []);

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
              {items.map((item) => (
                <tr>
                  <td>{item.house_name}</td>
                  <td>{item.start_date}</td>
                  <td>{item.end_date}</td>
                  <td>{item.number_of_days}</td>
                  <td>{item.total_cost}</td>
                </tr>
              ))}
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
