import { useParams } from 'react-router-dom';
import { useRocketsId } from '../utils/useAPIs';
import Slider from '../components/Slider';
import { numberWithCommas } from '../utils/functions';

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
              <div style={{ position: "relative" }}>
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
                    <label className="f-5 detail-rocket">
                      Detail
                    </label>
                  </p>
                  <p>
                    <label className="f-5 detail-descript">
                      <label>HEIGHT</label>
                      <label>
                        {details.second_stage.payloads.composite_fairing.height.meters} m /
                        {details.second_stage.payloads.composite_fairing.height.feet} ft
                      </label>
                    </label>
                    <br />
                  </p>
                  <p></p>
                  <p>
                    <label className="f-5 detail-descript">
                      DIAMETER {details.diameter.meters} m / {details.diameter.feet} ft
                </label>
                    <br />
                  </p>
                  <p></p>
                  <p>
                    <label className="f-5 detail-descript">
                      MASS {details.mass.kg} kg / {details.mass.lb} lb
                    </label>
                    <br />
                  </p>
                  <p></p>
                  <p>
                    <label className="f-5 detail-descript">
                      PAYLOAD WEIGHTS
                    </label>
                    <br />
                  </p>
                  <p className="payload-detail">
                    {details.payload_weights.map(payload => (
                      <>
                        <label className="f-5">
                          {payload.name} {payload.kg} kg / {payload.lb} lb
                        </label>
                        <br />
                      </>
                    ))}
                  </p>
                </div>
              </div>

              <img className="home-bg rocket-detail" src={details.flickr_images[1]} />
              <div className="home-content rocket">
                <div className="home-info-detail stage-rocket">
                  <div className="f-4">First Stage</div>
                  <div className="detail-stage">
                    <div>Number Of Engunes</div>
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
                <div className="home-info-detail stage-rocket">
                  <div className="f-4">Second Stage</div>
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
