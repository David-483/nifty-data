// use-fetch-data.js
import { useEffect, useState} from 'react';
import axios from 'axios';

function FetchData (){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    if (localStorage.getItem('profile')) {
      var authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    useEffect(() => {
      axios.get("http://localhost:3001/gurus/warren", {headers:{"Authorization": authorization}}).then(response => {
          setData(response.data);
          setLoading(false);
      });
    }, []);

  return {
    data,
    isLoading,
  };
};

export default FetchData;