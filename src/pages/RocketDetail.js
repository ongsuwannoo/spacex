import { useParams } from 'react-router-dom';
import { useRocketsId } from '../utils/useAPIs';
import Slider from '../components/Slider';

export default (props) => {

  let { rocketId } = useParams();

  const [details, error] = useRocketsId(rocketId);

  return (
    <div>
      {error !== null || details === null
        ? <p>Error fetching Info: {error}</p>
        : (
          <div className="box rocket-detail-box">
            <div className="box-bg">
              <div style={{ position: "relative" }}>
                <div className="home-bg-content-1">
                  <p>
                    <label className="f-5">
                      No data
                    </label>
                    <br />
                    COO
                    </p>
                  <p></p>
                  <p>
                    <label className="f-5">
                      No data
                    </label>
                    <br />
                    Founder / CEO / CTO
                  </p>
                </div>
                <div className="home-bg-content-2">
                  <p>
                    <label className="f-5">
                      No data
                </label>
                    <br />
                Employees
              </p>
                  <p></p>
                  <p>
                    <label className="f-5">
                      No data
                </label>
                    <br />
                  Valuation
              </p>
                  <p></p>
                  <p>
                    <label className="f-5">
                      No data
                </label>
                    <br />
                  Headquarters
              </p>
                </div>
              </div>

              <img className="home-bg rocket-detail" src={details.flickr_images[2]} />
              <div className="home-content">
                <div className="home-box-elon">
                  <img className="home-elon" src='/spacex/media/Elon_Musk.jpg' />
                </div>
                <div className="home-box-info">
                  <div className="home-info-detail">
                    <p>No data</p>
                  </div>
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
