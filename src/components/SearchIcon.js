import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getAllItems } from "../redux/house/houseReducer";


const Search = () => {
  const houses = useSelector((state) => state.houses);
  const [search, setSearch] = useState('');
  const [showInput, setShowInput] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  const onClick = () => {
    setShowInput(!showInput);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    navigate(`/houses/${e.target.value}`);
  };

  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} onClick={onClick} />

      {showInput ? (
        <select
          value={search}
          onChange={handleChange}
          style={{ fontSize: '12px' }}
        >
          {houses.map((house) => (
            <option key={house.id} value={house.id}>
              {house.location}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default Search;
