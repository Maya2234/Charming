import './AnimalShow.css';
import { useState } from 'react';
import auto from './Pages/Pics/auto2.jpg'
import canoe from './Pages/Pics/canoe.JPG'
import car from './Pages/Pics/car.JPG'
import car2 from './Pages/Pics/car2.jpg'
import flex from './Pages/Pics/flex.JPG'
import lake from './Pages/Pics/lake.JPG'
//import heart from './Pics/heart.png'
import fisheye from './Pages/Pics/fisheye.jpg';
import deal from './Pages/Pics/deal.JPG'
import dance from './Pages/Pics/dance.JPG'
import hug from './Pages/Pics/hug.JPG'
import hug2 from './Pages/Pics/hug2.JPG'
import kiss from './Pages/Pics/kiss.JPG'
import bondage from './Pages/Pics/bondage.JPG'
import cpr from './Pages/Pics/cpr.JPG'
import tanu from './Pages/Pics/tanu.JPG'
import headshot from './Pages/Pics/headshot.JPG'
import heart from './svg/heart.svg';
import btea from './svg/btea.jpg';
import daves from './Pages/Pics/daves.jpg'
import haircut from './Pages/Pics/haircut.PNG'
import homeless from './Pages/Pics/homeless.JPG'
import cake from './Pages/Pics/cake.JPG'
import cook from './Pages/Pics/cook.jpg'

const svgMap = {
  daves,hug,hug2,kiss,cpr,headshot,bondage,haircut,cook,cake,homeless
};
const captions = ["...the day we started dating, this is how in love we are. So in love we have no clue that anybody is watching us.",
                  "...even in any crowded room, any big group, you keep me feeling close ",
                  "...we get drunk together like this, and I held     you on the dance floor in the club on your birthday",
                  
                  
                  
                  "...you like to kiss me all over my face & body & everywhere",
                  "...u r always the body and fucking soul of the party",
                  "...you love my linkedin profile picture so damn much",
                  "...we play together ;)",
                  "...you trust me with things I've never been trusted with before, and give me room to grow",
                  "...you deserve 3 michellin stars, & you still appreciate my baking (and sometimes cooking)",
                  "...you go above and beyond with your special secret planning",
                  "...you have never judged me shallowly, and took this picture because I looked like U"

                  ]


function AnimalShow({ type,index }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick} >
      <img className="animal" alt="broke" src={svgMap[type]}style={{alignItems:'center'}} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
      <div className = "caption" > {captions[index]}</div>
    </div>
  );
}


export default AnimalShow;
