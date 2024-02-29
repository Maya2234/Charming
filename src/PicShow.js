//import './AnimalShow.css';
import { useState } from 'react';
import fisheye from './Pages/Pics/fisheye.jpg';
import daves from './Pages/Pics/daves.jpg'
import deal from './Pages/Pics/deal.JPG'
import dance from './Pages/Pics/dance.JPG'
import hug from './Pages/Pics/hug.JPG'
import hug2 from './Pages/Pics/hug2.JPG'
import kiss from './Pages/Pics/kiss.JPG'
import cpr from './Pages/Pics/cpr.JPG'
import tanu from './Pages/Pics/tanu.JPG'
import headshot from './Pages/Pics/headshot.JPG'

const Smap={ fisheye,daves,deal,dance,hug,hug2,kiss,cpr,tanu,headshot};


function PicShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="Pic-show" onClick={handleClick}>
      <img className="Pic" alt="animal" src={Smap[type]} />
      <img
        // className="heart"
        // alt="heart"
        // src={heart}
        // style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default PicShow;
