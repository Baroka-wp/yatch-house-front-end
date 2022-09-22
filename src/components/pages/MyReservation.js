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
              <tr>
                <th class="table-item">House name</th>
                <th class="table-item">Start date</th>
                <th class="table-item">End date</th>
                <th class="table-item">Number of days</th>
                <th class="table-item">Total cost</th>
              </tr>
              {items.map((item) => (
                <tr>
                  <td class="table-item">{item.house_name}</td>
                  <td class="table-item tbl_center">{item.start_date}</td>
                  <td class="table-item tbl_center">{item.end_date}</td>
                  <td class="table-item tbl_center">{item.number_of_days}</td>
                  <td class="table-item tbl_center">$ {item.total_cost}</td>
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
