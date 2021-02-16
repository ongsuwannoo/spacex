import React from 'react';
import useInfo from '../utils/useInfo';

const Home = () => {

  const [info, error] = useInfo();

  return (
    <>
      {error !== null
        ? <p>Error fetching Info: {error}</p>
        :
        <>
          <p>ชื่อ: {info.name}</p>
          <p>ผู้ก่อตั้ง: {info.founder}</p>
          <p>ก่อตั้งเมื่อ: {info.founded}</p>
          <p>มีพนักงาน: {info.employees}</p>
          <p>ceo/cto: {info.ceo}</p>
          <p>coo: {info.coo}</p>
          <p>มูลค่าบริษัท: {info.valuation}</p>
          <p>สำนักงานใหญ่: {info.headquarters.city} / {info.headquarters.state}</p>
          <p>website: {info.links.website}</p>
          <p>flickr: {info.links.flickr}</p>
          <p>twitter: {info.links.twitter}</p>
        </>
      }
    </>
  )
}

export default Home;
