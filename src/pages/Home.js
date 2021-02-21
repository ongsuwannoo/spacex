import React from 'react';
import { useInfo } from '../utils/useAPIs';
import '../styles/Home.css';
import { numberWithCommas } from '../utils/functions';

const Home = () => {

  const [info, error] = useInfo();
  
  if (info === null) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }

  return (
    <>
      {error !== null || info === null
        ? <p>{error}</p>
        :
        <div className="box">
          <div className="box-bg">
            <div style={{ position: "relative" }}>
              <div className="home-bg-content-1">
                <p>
                  <label className="f-5">
                    {info.coo}
                  </label>
                  <br />
              COO
              </p>
                <p></p>
                <p>
                  <label className="f-5">
                    {info.ceo}
                  </label>
                  <br />
                Founder / CEO / CTO
              </p>
              </div>
              <div className="home-bg-content-2">
                <p>
                  <label className="f-5">
                    {numberWithCommas(info.employees)}
                  </label>
                  <br />
                Employees
              </p>
                <p></p>
                <p>
                  <label className="f-5">
                    {numberWithCommas(info.valuation)}
                  </label>
                  <br />
                  Valuation
              </p>
                <p></p>
                <p>
                  <label className="f-5">
                    {info.headquarters.city} / {info.headquarters.state}
                  </label>
                  <br />
                  Headquarters
              </p>
              </div>
            </div>

            <img className="home-bg" src='/spacex/media/bg-home.jpg' />
          </div>
          <div className="home-content">
            <div className="home-box-elon">
              <img className="home-elon" src='/spacex/media/Elon_Musk.jpg' />
            </div>
            <div className="home-box-info">
              <div className="home-info-detail">
                <p>{info.summary}</p>
              </div>
              <div className="home-info-contact">
                <a href={info.links.flickr} target="_blank">
                  <img src="/spacex/icon/flickr.png" />
                </a>
                <a href={info.links.website} target="_blank">
                  <img src="/spacex/icon/globe.png" />
                </a>
                <a href={info.links.twitter} target="_blank">
                  <img src="/spacex/icon/twitter.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Home;
