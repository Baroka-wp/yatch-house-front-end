import { Link, useParams } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import yatches from '../dummydata/joydata';
import './house.css';

const House = () => {
  const { id } = useParams();
  const house = yatches[id - 1];

  return (
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
  );
};

export default House;
