import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        seterror(true);
        setloading(false);
      }
      setloading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setloading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      setloading(false);
    } catch (err) {
      seterror(true);
      setloading(false);
    }
    setloading(false);
  };

  return {
    data, loading, error, reFetch,
  };
};

export default useFetch;
