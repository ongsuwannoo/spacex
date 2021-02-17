import { useParams } from 'react-router-dom';

export default () => {
    let { rocketId } = useParams();
    
    return (
        <h1>Detail {rocketId}</h1>
    )
}
