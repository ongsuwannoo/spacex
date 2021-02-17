import React, { useState } from 'react';
import useRockets from '../utils/useRockets';
import Card from '../components/Card';

function Rockets() {
  {
    const [rockets, error] = useRockets();

    return (
      <>
        <main className="page-content">
          {error !== null
            ? <p>Error fetching Info: {error}</p>
            :
            rockets.map(rocket => (
              <Card rocket={rocket} />
            ))
          }
        </main>
      </>
    )
  }
}

export default Rockets;
