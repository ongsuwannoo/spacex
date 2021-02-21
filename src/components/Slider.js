import { useEffect } from "react";
import '../styles/Slider.css';

export default (props) => {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = process.env.PUBLIC_URL + "/spacex/JSslider.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div class="slideshow-container">
      {
        props.images.map(image => (
          <div class="mySlides fade">
            <img className="imgslide" src={image} ></img>
          </div>
        ))
      }
    </div >
  )
}
