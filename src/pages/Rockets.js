import React, { useState } from 'react';
import useRockets from '../utils/useRockets';

function Rockets() {
  {
    const [rockets, error] = useRockets();

    return (
      <ul>
        {error !== null
          ? <p>Error fetching Info: {error}</p>
          :
          rockets.map(rocket => (
            <li key={rocket.id}>
              {rocket.rocket_name}
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Rockets;
