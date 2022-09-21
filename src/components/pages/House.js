import { Link, useParams } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import yatches from '../dummydata/joydata';
import './house.css';

import SideNavbar from '../MainNavBar';
import MobileNavbar from '../MobileNavBar';

const House = () => {
  const { id } = useParams();
  const house = yatches[id - 1];

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
        <div className="container house_container">
          <div className="house">
            <div className="house_image">
              <Link to="/reservation" style={{ alignSelf: 'flex-end' }} className="housse-prev-btn">
                <ArrowLeftIcon />
              </Link>
              <img src={house.image} alt={house.name} />
            </div>
            <div className="house_info">
              <div className="house_name">
                <h2>{house.name}</h2>
                <p>{house.description}</p>
              </div>
              <Link to={`/reservation/${id}/new`} style={{ textDecoration: 'none' }}>
                <button type="button" className="reserve-btn">
                  Book now
                </button>
              </Link>
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

export default House;
