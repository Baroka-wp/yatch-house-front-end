import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import yatches from './dummydata/joydata';

const Search = () => {
  const [search, setSearch] = useState('');
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

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
          {yatches.map((yatch) => (
            <option
              key={yatch.id}
              value={yatch.id}
              style={{ fontSize: '12px' }}
            >
              {yatch.name}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default Search;
