import hug2 from './Pics/hug2.JPG'
import { useState } from 'react';
import AnimalShow from '../AnimalShow';
import "../App.css";
//import Caption from '../Caption';
import fisheye from './Pics/fisheye.jpg';
import deal from './Pics/deal.JPG'
import dance from './Pics/dance.JPG'
import hug from './Pics/hug.JPG'
import kiss from './Pics/kiss.JPG'
import cpr from './Pics/cpr.JPG'
import tanu from './Pics/tanu.JPG'
import headshot from './Pics/headshot.JPG'
import heart from '../svg/heart.svg';
import btea from './Pics/btea.jpg';
import daves from './Pics/daves.jpg'


var AnimalIndex=0;
function getRandomAnimal() {
  const animals = ['daves','hug','hug2','kiss','cpr','headshot','btea'];

  const captions = ["1","2","3","4","5","6","7","8","9","10","11"]
  AnimalIndex=Math.floor(Math.random() * animals.length);
  return animals[AnimalIndex];
}

function Test(){
  
    const [animals, setAnimals] = useState(["daves"]);

    const handleClick = () => {
      setAnimals(getRandomAnimal());
    };

    return(
    <div>
        <div className="app">
            <button onClick={handleClick}></button>
            <div className="animal-list">
        <AnimalShow type={animals} index={AnimalIndex} />
      </div>
            
        </div>
        <html>
            <head>
            </head>
            <body>

            </body>
        </html>
    </div>
    );   
}
export default Test;