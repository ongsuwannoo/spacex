import React, { useState, useMemo } from 'react';
import { useLaunches } from '../utils/useAPIs';
import '../styles/Launches.css'
import TableLaunches from '../components/TableLaunches';

function Rockets() {
  {
    const [option, setOption] = useState({ limit: 10 });
    const [isLoading, setIsLoading] = useState(false);

    const [launches, error] = useLaunches(option);

    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState("flight_number");
    const [order, setOrder] = useState("asc");

    const [launch_year_start, setLaunch_year_start] = useState("");
    const [launch_year_end, setLaunch_year_end] = useState("");
    const [rocket_name, setRocket_name] = useState("");
    const [launch_success, setLaunch_success] = useState("");
    const [page, setPage] = useState({ offset: 0 });
    const [handlePage, setHandlePage] = useState(0);

    useMemo(() => {
      setIsLoading(false);
    }, [launches]);

    const handleChangeSort = (e) => {
      setSort(e.target.value);
    }

    const handleChangeOrder = (e) => {
      setOrder(e.target.value);
    }

    const handleChangeSuccess = (e) => {
      setLaunch_success(e.target.value);
    }

    const handleChangeRocketname = (e) => {
      setRocket_name(e.target.value);
    }

    const handleChangePage = async (evt) => {
      evt.preventDefault();
      setIsLoading(true);

      if (handlePage !== 0 && handlePage !== 110) {
        setOption({
          ...option,
          offset: page.offset + handlePage * 10,
        })
      }

      else {
        setOption({
          ...option,
          offset: handlePage,
        })
      }

      if (handlePage === 0) {
        setPage({
          offset: handlePage
        })
      }

      else if (handlePage === 110) {
        setPage({
          offset: handlePage
        })
      }

      else {
        setPage({
          offset: page.offset + handlePage * 10
        })
      }
    }

    const HandleSubmit = (evt) => {
      setIsLoading(true);
      evt.preventDefault();
      setOption({
        sort: sort,
        order: order,
        limit: limit,
        offset: page.offset,
        start: launch_year_start,
        end: launch_year_end + '-12-31',
        rocket_name: rocket_name,
        launch_success: launch_success
      })
    }

    return (
      <div>
        <form onSubmit={HandleSubmit} className="tableInput">
          <table>
            <tr>
              <td>
                <label>Sort</label>
                <select
                  value={sort}
                  onChange={handleChangeSort}
                >
                  <option value="flight_number">ID</option>
                  <option value="mission_name">Mission</option>
                  <option value="launch_year">Year</option>
                </select>
              </td>
              {/* <td>order:</td>
              <td>
                <select
                  value={order}
                  onChange={handleChangeOrder}
                >
                  <option value="asc">Ascending </option>
                  <option value="desc">Descending</option>
                </select>
              </td> */}
              <td>
                <label>Rocket Name</label>
                <select
                  value={rocket_name}
                  onChange={handleChangeRocketname}
                >
                  <option value="" selected="selected">All</option>
                  <option value="Falcon 1">Falcon 1</option>
                  <option value="Falcon 9">Falcon 9</option>
                  <option value="Falcon Heavy">Falcon Heavy</option>
                  <option value="Starship">Starship</option>
                </select>
              </td>
              <td>
                <label>Success</label>
                <select
                  value={launch_success}
                  onChange={handleChangeSuccess}
                >
                  <option value="" selected="selected">Success or Failed</option>
                  <option value="true">Success</option>
                  <option value="false">Failed</option>
                </select>
              </td>
              <td>
                <label>Year</label>
                <input
                  className="filter"
                  type="text"
                  value={launch_year_start}
                  onChange={e => setLaunch_year_start(e.target.value)}
                  placeholder="2008"
                /> </td><td><label>to</label> <input
                  type="text"
                  value={launch_year_end}
                  onChange={e => setLaunch_year_end(e.target.value)}
                  placeholder="2009"
                />
              </td>
              <td>
                <label>Limit</label>
                <input
                  type="number"
                  value={limit}
                  onChange={e => setLimit(e.target.value)}
                  placeholder="10"
                />
              </td>
              <td><input className="btn" type="submit" value="View"  /></td>
            </tr>
          </table>
        </form>
        <TableLaunches
          isLoading={isLoading}
          launches={launches}
          error={error}
        />
        <form onSubmit={handleChangePage} className="f-4 page">
          <div className="page">
            <button name="first" type="submit" disabled={page.offset == 0} onClick={() => setHandlePage(0)}><b>FIRST</b></button>
            <button name="pre" type="submit" disabled={page.offset == 0} onClick={() => setHandlePage(-1)}>
              <img alt="pre"  src={`/spacex/icon/back.svg`} style={{ width: "50%" }} />
            </button>
            {' ' + ((page.offset / 10) + 1) + ' '}
            <button name="next" type="submit" disabled={page.offset == 110} onClick={() => setHandlePage(1)}>
              <img alt="next" src={`/spacex/icon/back.svg`} style={{ width: "50%", transform: "rotate(180deg)" }} />
            </button>
            <button name="last" type="submit" disabled={page.offset == 110} onClick={() => setHandlePage(110)}><b>LAST</b></button>
          </div>
        </form>
      </div>
    )
  }
}

export default Rockets;
