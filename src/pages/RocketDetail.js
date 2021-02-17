import { useParams } from 'react-router-dom';
import useRocketsId from '../utils/api/useRocketsId';
import Slider from '../components/Slider';
import '../styles/Slider.css'

export default () => {

  let { rocketId } = useParams();

  const [details, error] = useRocketsId(rocketId);

  return (
    <div>
      {error !== null
        ? <p>Error fetching Info: {error}</p>
        : <Slider images={details.flickr_images} />
      }
      <pre>
        <code>Detail {JSON.stringify(details, null, 2)}</code>
      </pre>
    </div>
  )
}
