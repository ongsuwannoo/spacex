import React, { useState } from "react";
import {
  NavLink,
  useRouteMatch
} from "react-router-dom";
import Loading from '../components/Loading';

export default ({ launches, error }) => {
  let { path, url } = useRouteMatch();

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Mission</th>
        <th>Rocket name</th>
        <th>Year</th>
        <th>Success</th>
        <th></th>
      </tr>

      {error !== null
        ? <p>Error fetching Info: {error}</p>
        : launches === null
          ? <Loading />
          :
          launches.map(launche => (
            <tr className="trhover">
              <td>{launche.flight_number}</td>
              <td>{launche.mission_name}</td>
              <td>{launche.rocket.rocket_name}</td>
              <td>{launche.launch_year}</td>
              <td>{launche.launch_success ? 'Success' : 'Failed'}</td>
              <NavLink className="" to={`${url}/detail/${launche.flight_number}`}>...</NavLink>
            </tr>
          ))
      }
    </table>
  )
}