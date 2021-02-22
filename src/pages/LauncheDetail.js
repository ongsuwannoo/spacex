import { useParams } from 'react-router-dom';
import { useLauncheId } from '../utils/useAPIs';
import { NavLink } from "react-router-dom";
import Slider from '../components/Slider';
import '../styles/Detail.css';
import YouTube from 'react-youtube' 
export default () => {

  const { rauncheId } = useParams();

  const [detail, error] = useLauncheId(rauncheId);

  const opts = {
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>


      <div className="container">
        <div className="launche-name-box">
          {error !== null || detail === null
            ? <p>Error fetching Info: {error}</p>
            : detail.links.flickr_images.length == 0
              ? <>
                <p className="f-3">{detail.mission_name} - Mission <span style={{color:"var(--cl4)"}}>{detail.launch_success ? 'Success' : 'Failed'}</span></p>
                <p>{detail.details}</p>
                <div className="img-tag"><img src={[detail.links.mission_patch_small]}></img></div>

              </>
              : <>
                <p className="f-3">{detail.mission_name} - Mission <span style={{color:"var(--cl4)"}}>{detail.launch_success ? 'Success' : 'Failed'}</span></p>
                <p>{detail.details}</p>
                <div className="img-tag"><Slider images={detail.links.flickr_images} /></div>

              </>
          }

        </div>
        <div className="launche-detail-box">
          {error !== null || detail === null
            ? <p>Error fetching Info: {error}</p>
            : <>
              {/* <div><Slider images={detail.links.flickr_images} /></div>  */}
              <YouTube videoId={detail.links.youtube_id} opts={opts}></YouTube>
              <div className="launch-detail-table">
                <table className="launch-detail">
                  <tr>
                    <td>{detail.rocket.rocket_name}</td>
                    <td>{detail.rocket.rocket_type}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Rocket name</td>
                    <td>Rocket type</td>
                  </tr>
                  {/* <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr> */}
                  <tr>
                    <td>{detail.launch_date_utc}</td>
                    <td>{detail.launch_site.site_name_long}</td>
                  </tr>
                  <tr>
                    <td>Launch date</td>
                    <td>Site name</td>
                  </tr>
                </table>
              </div>
              <div className="launch-detail-link">
                <a href={detail.links.article_link} target="_blank">
                  <p>ARTICLE</p>
                </a>
                <a href={detail.links.wikipedia} target="_blank">
                  <p>WIKIPEDIA</p>
                </a>
                <div className="link-to-rocket">
                  <NavLink to={`/rockets/detail/${detail.rocket.rocket_id}`}>
                    <p className="f-4">{detail.rocket.rocket_name} <img src={`${process.env.PUBLIC_URL}/spacex/icon/first.svg`} style={{ transform: "rotate(180deg)" }}></img></p>
                  </NavLink>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      {/* <pre style={{ maxWidth: '100px' }}>
        <code>Detail {JSON.stringify(detail, null, 2)}</code>
      </pre> */}
    </div>
  )
}
