import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rockets() {
  {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://api.spacexdata.com/v3/rockets',
        );

        setData(result.data);
        console.log(result.data);
      };

      fetchData();
    }, []);

    return (
      <ul>
        {data.map(rockets => (
          <li key={rockets.id}>
            {rockets.rocket_name}
          </li>
        ))}
      </ul>
    )
  }
}

export default Rockets;
