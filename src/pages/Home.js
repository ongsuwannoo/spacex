import React from 'react';
import { useInfo } from '../utils/useAPIs';
import '../styles/Home.css'

const Home = () => {

  const [info, error] = useInfo();

  return (
    <>
      {error !== null || info === null
        ? <p>Error fetching Info: {error}</p>
        :
        <>
          <div className="sec1">
            <img className="homeImg" src="https://pbs.twimg.com/profile_banners/34743251/1596331248/1500x500"></img>
            <div className="homeInfo1">
              <div>
                <b className="fs-25">{info.coo}</b>
                <p className="fs-20">COO</p>
              </div>
              <div style={{marginTop:"1vw"}}>
                <b className="fs-25">{info.ceo}</b>
                <p className="fs-20">Founder / CEO /CTO</p>
              </div>
            </div>
            <div className="homeInfo2">
              <div> 
                <b className="fs-25">{info.employees}</b>
                <p className="fs-20">Employees</p>
              </div>
              <div style={{marginTop:"1vw"}}>
                <b className="fs-25">{info.valuation}</b>
                <p className="fs-20">Valuation</p>
              </div>
              <div style={{marginTop:"1vw"}}>
                <b className="fs-25">{info.headquarters.city} ,{info.headquarters.state}</b>
                <p className="fs-20">Headquarters</p> 
              </div>           
            </div>
          </div>
          <div className="sec2">
            <div>
              <img className="elonImg" src={'/ElonMusk.jpg'}></img>
            </div>
            <div className="homeInfo3">
              <p className="fs-30">{info.summary}</p>
              <br></br>
              <img className="contact" src={'/flickr.png'}></img>
              <img className="contact" src={'/web.png'}></img>
              <img className="contact" src={'/twitter.png'}></img>
            </div>            
            
            {/* <p>website: {info.links.website}</p>
            <p>flickr: {info.links.flickr}</p>
            <p>twitter: {info.links.twitter}</p> */}
          </div>

        </>
      }
    </>
  )
}

export default Home;
