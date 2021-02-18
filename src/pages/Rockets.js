import React, { useState } from 'react';
import { useRockets } from '../utils/useAPIs';
import Card from '../components/Card';
import Loading from '../components/Loading';

function Rockets() {
  {
    const [rockets, error] = useRockets();

    return (
      <>
        <main className="page-content">
          {error !== null
            ? <p>Error fetching Info: {error}</p>
            : rockets === null
              ? <Loading />
              :
              rockets.map(rocket => (
                <Card rocket={rocket} key={rocket.rocket_id} />
              ))
          }
        </main>
      </>
    )
  }
}

export default Rockets;
