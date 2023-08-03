import React from "react";
import {
  NavLink
} from "react-router-dom";
import '../styles/Card.css';

export default (props) => {

  return (
    <>
      <div className="card">
        <div className="content">
          <h2 className="title">{props.rocket.rocket_name}</h2>
          <p className="copy">{props.rocket.description}</p>
          <NavLink className="btn" to={`./detail/${props.rocket.rocket_id}`} exact={true}>View</NavLink>
        </div>
        <style>
          {`\
              .card:nth-child(${props.rocket.id}):before {\
                  background-image: url(${props.rocket.id === 1 ? props.rocket.flickr_images[0] : props.rocket.flickr_images[1]});\
                  background-position: 50% 0;
              }\
          `}
        </style>
      </div>
    </>
  )
}
