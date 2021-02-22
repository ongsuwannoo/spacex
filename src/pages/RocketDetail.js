import { useParams } from 'react-router-dom';
import { useRocketsId } from '../utils/useAPIs';
import Slider from '../components/Slider';
import { numberWithCommas } from '../utils/functions';
import { NavLink } from "react-router-dom";
import '../styles/Home.css';

export default (props) => {

  let { rocketId } = useParams();

  const [details, error] = useRocketsId(rocketId);

  return (
    <div>
      {error !== null || details === null
        ? <p>Error fetching detail: {error}</p>
        : (
          <div className="box rocket-detail-box">
            <div className="box-bg">
              <div style={{ position: "relative", textShadow: "2px 4px rgba(0, 0, 0, .08)" }}>
                <div className="home-bg-content-1 detail">
                  <p>
                    <label className="f-3 rocket-name">
                      {details.rocket_name}
                    </label>
                  </p>
                  <p>
                    <label className="f-5">
                      {details.first_flight}
                    </label>
                    <br />
                    First Flight
                    </p>
                  <p></p>
                  <p>
                    <label className="f-5">
                      {numberWithCommas(details.cost_per_launch)}
                    </label>
                    <br />
                    Cost / Launch
                  </p>
                  <p></p>
                  <p>
                    <label className="f-5">
                      {details.country}
                    </label>
                    <br />
                    Country
                  </p>
                </div>
                <div className="home-bg-content-2 detail">
                  <p>
                    <div className="f-4 detail-rocket">
                      Detail
                    </div>
                  </p>
                  <div className="f-5 detail-descript">
                    <div>HEIGHT</div>
                    <div>
                      {details.second_stage.payloads.composite_fairing.height.meters} m /
                      {details.second_stage.payloads.composite_fairing.height.feet} ft
                    </div>
                  </div>
                  <div className="f-5 detail-descript">
                    <div>
                      DIAMETER
                    </div>
                    <div>
                      {details.diameter.meters} m / {details.diameter.feet} ft
                    </div>
                  </div>
                  <div className="f-5 detail-descript">
                    <div>
                      MASS
                    </div>
                    <div>
                      {details.mass.kg} kg / {details.mass.lb} lb
                    </div>
                  </div>
                  <div className="f-5 detail-descript">
                    PAYLOAD WEIGHTS
                  </div>
                  <div className="payload-detail">
                    {details.payload_weights.map(payload => (
                      <>
                        <div className="f-5 detail-descript">
                          <div>
                            {payload.name}
                          </div>
                          <div>
                            {payload.kg} kg / {payload.lb} lb
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <img className="home-bg rocket-detail" src={details.flickr_images[1]} />
              <div className="home-content rocket">
                <div className="home-info-detail stage-rocket">
                  <div className="f-3">First Stage</div>
                  <div className="detail-stage">
                    <div>Number Of Engines</div>
                    <div>
                      {details.first_stage.engines}
                    </div>
                  </div>

                  <div className="detail-stage">
                    <div>Fuel</div>
                    <div>
                      {details.first_stage.fuel_amount_tons} tons
                    </div>
                  </div>

                  <div className="detail-stage">
                    <div>Thrust Sea Level</div>
                    <div>
                      {details.first_stage.thrust_sea_level.kN} kN / {details.first_stage.thrust_sea_level.lbf} lbf
                    </div>
                  </div>

                  <div className="detail-stage">
                    <div>Thrust Sea Level</div>
                    <div>
                      {details.first_stage.thrust_vacuum.kN} kN / {details.first_stage.thrust_sea_level.lbf} lbf
                    </div>
                  </div>
                </div>
                <div className="line-tall">
                </div>
                <div className="home-info-detail stage-rocket">
                  <div className="f-3">Second Stage</div>
                  <div className="detail-stage">
                    <div>Number Of Engines</div>
                    <div>
                      {details.first_stage.engines}
                    </div>
                  </div>

                  <div className="detail-stage">
                    <div>Fuel</div>
                    <div>
                      {details.second_stage.fuel_amount_tons} tons
                    </div>
                  </div>

                  <div className="detail-stage">
                    <div>Thrust</div>
                    <div>
                      {details.second_stage.thrust.kN} kN / {details.second_stage.thrust.lbf} lbf
                    </div>
                  </div>
                  {/* <div className="detail-stage"> */}
                    <div className="link-to-rocket" style={{ display: "flex", flexDirection: "row-reverse", paddingRight: "100px"}}>
                      <NavLink to={`/rockets`}>
                        <p className="f-4"><img src={`${process.env.PUBLIC_URL}/spacex/icon/first.svg`}></img> BACK</p>
                      </NavLink>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        )
      }


      {/* {error !== null || details === null
        ? <p>Error fetching Info: {error}</p>
        : <Slider images={details.flickr_images} />
      }
      <pre>
        <code>Detail {JSON.stringify(details, null, 2)}</code>
      </pre> */}
    </div>

  )
}
