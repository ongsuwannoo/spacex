import { useParams } from 'react-router-dom';
import { useLauncheId } from '../utils/useAPIs';
import { NavLink } from "react-router-dom";
import Slider from '../components/Slider';

export default () => {

  const { rauncheId } = useParams();

  const [detail, error] = useLauncheId(rauncheId);

  return (
    <div>
      {error !== null || detail === null
        ? <p>Error fetching Info: {error}</p>
        : detail.links.flickr_images.length == 0
          ? <>
            <Slider images={[detail.links.mission_patch_small]} />
            <h3>{detail.rocket_name}</h3>
          </>
          : <>
            <Slider images={detail.links.flickr_images} />
            <NavLink to={`/rockets/detail/${detail.rocket.rocket_id}`}>
              <h3>{detail.rocket.rocket_name}</h3>
            </NavLink>
          </>
      }

      <pre style={{ maxWidth: '100px' }}>
        <code>Detail {JSON.stringify(detail, null, 2)}</code>
      </pre>
    </div>
  )
}
