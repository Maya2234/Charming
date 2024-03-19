import './AnimalShow.css';
import { useState } from 'react';

//import heart from './Pics/heart.png'
import fisheye from './Pages/Pics/fisheye.jpg';
import deal from './Pages/Pics/deal.JPG'
import dance from './Pages/Pics/dance.JPG'
import hug from './Pages/Pics/hug.JPG'
import hug2 from './Pages/Pics/hug2.JPG'
import kiss from './Pages/Pics/kiss.JPG'
import cpr from './Pages/Pics/cpr.JPG'
import tanu from './Pages/Pics/tanu.JPG'
import headshot from './Pages/Pics/headshot.JPG'
import heart from './svg/heart.svg';
import btea from './svg/btea.jpg';
import daves from './Pages/Pics/daves.jpg'

// const svgMap = {
//   "fisheye","daves","deal","dance","hug","hug2","kiss","cpr","tanu","headshot", "btea"
// };
const captions = ["1","2","3","4","5","6","7","8","9","10","11"]


function CaptionShow({ type, index }) {

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="broke" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
