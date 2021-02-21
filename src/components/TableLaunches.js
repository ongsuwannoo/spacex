import React, { useState } from "react";
import {
  NavLink,
  useRouteMatch
} from "react-router-dom";
import Loading from '../components/Loading';

export default ({ launches, error, isLoading }) => {
  let { path, url } = useRouteMatch();

  return (
    <table className="tableOutput">
      <tr>
        <th>ID</th>
        <th>Mission</th>
        <th>Rocket</th>
        <th>Year</th>
        <th>Success</th>
        <th>Detail</th>
      </tr>
      {error !== null
        ? <p>Error fetching Info: {error}</p>
        : launches === null || isLoading
          ? <Loading />
          :
          launches.map(launche => (
            <tr className="trhover">
              <td>{launche.flight_number}</td>
              <td>{launche.mission_name}</td>
              <td>{launche.rocket.rocket_name}</td>
              <td>{launche.launch_year}</td>
              <td>{launche.launch_success ? 'Success' : 'Failed'}</td>
              <td><NavLink className="" to={`${url}/detail/${launche.flight_number}`}><img style={{width:"20px",}} src={`${process.env.PUBLIC_URL}/spacex/icon/information.png`} /></NavLink></td>
            </tr>
          ))
      }
    </table>
  )
}