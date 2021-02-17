import React from "react";
import {
  NavLink,
  useRouteMatch
} from "react-router-dom";
import '../styles/Card.css';

export default (props) => {

  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="card">
        <div className="content">
          <h2 className="title">{props.rocket.rocket_name}</h2>
          <p className="copy">{props.rocket.description}</p>
          <NavLink className="btn" to={`${url}/detail/${props.rocket.rocket_id}`}>View</NavLink>
        </div>
        <style>
          {`\
              .card:nth-child(${props.rocket.id}):before {\
                  background-image: url(${props.rocket.flickr_images[0]});\
              }\
          `}
        </style>
      </div>
    </>
  )
}
