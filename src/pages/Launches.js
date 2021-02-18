import React, { useState } from 'react';
import { useLaunches } from '../utils/useAPIs';
import Loading from '../components/Loading';
import '../styles/Launches.css'
function Rockets() {
  {
    const [option, setOption] = useState({ limit: 10 });

    const [launches, error] = useLaunches(option);

    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState("flight_number");
    const [order, setOrder] = useState("asc");

    const [launch_year, setLaunch_year] = useState("");
    const [rocket_name, setRocket_name] = useState("");
    const [launch_success, setLaunch_success] = useState("");

    const handleChangeSort = (e) => {
      setSort(e.target.value);
    }

    const handleChangeOrder = (e) => {
      setOrder(e.target.value);
    }

    const handleChangeSuccess = (e) => {
      setLaunch_success(e.target.value);
    }

    const HandleSubmit = (evt) => {
      evt.preventDefault();
      setOption({
        limit: limit,
        sort: sort,
        order: order,
        launch_year: launch_year,
        rocket_name: rocket_name,
        launch_success: launch_success
      })
    }

    return (
      <div>
        <form onSubmit={HandleSubmit}>
          <table>
            <tr>
              <td>limit:</td>
              <td>
                <input
                  type="text"
                  value={limit}
                  onChange={e => setLimit(e.target.value)}
                  placeholder="10"
                />
              </td>
              <td>Year:</td>
              <td>
                <input
                  type="text"
                  value={launch_year}
                  onChange={e => setLaunch_year(e.target.value)}
                  placeholder="2008"
                />
              </td>
            </tr>
            <tr>
              <td>sort:</td>
              <td>
                <select
                  value={sort}
                  onChange={handleChangeSort}
                >
                  <option value="flight_number">ID</option>
                  <option value="mission_name">Mission</option>
                  <option value="launch_year">Year</option>
                </select>
              </td>
              <td>Rocket name:</td>
              <td>
                <input
                  type="text"
                  value={rocket_name}
                  onChange={e => setRocket_name(e.target.value)}
                  placeholder="Falcon 1"
                />
              </td>
            </tr>

            <tr>
              <td>order:</td>
              <td>
                <select
                  value={order}
                  onChange={handleChangeOrder}
                >
                  <option value="asc">Ascending </option>
                  <option value="desc">Descending</option>
                </select>
              </td>
              <td>Success</td>
              <td>
                <select
                  value={launch_success}
                  onChange={handleChangeSuccess}
                >
                  <option value=""></option>
                  <option value="true">Success</option>
                  <option value="false">Failed</option>
                </select>
              </td>
            </tr>
          </table>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <tr>
            <th>ID</th>
            <th>Mission</th>
            <th>Rocket name</th>
            <th>Year</th>
            <th>Success</th>
          </tr>

          {error !== null
            ? <p>Error fetching Info: {error}</p>
            : launches === null
              ? <Loading />
              :
              launches.map(launche => (
                <tr>
                  <td>{launche.flight_number}</td>
                  <td>{launche.mission_name}</td>
                  <td>{launche.rocket.rocket_name}</td>
                  <td>{launche.launch_year}</td>
                  <td>{launche.launch_success ? 'Success' : 'Failed'}</td>
                </tr>
              ))
          }

        </table>
      </div>
    )
  }
}

export default Rockets;
