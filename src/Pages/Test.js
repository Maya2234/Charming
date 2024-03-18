import hug2 from './Pics/hug2.JPG'
import { useState } from 'react';
import AnimalShow from '../AnimalShow';
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

function getRandomAnimal() {
  const animals = ['fisheye','daves','deal']
  //,'dance','hug','hug2','kiss','cpr','tanu','headshot','btea'];

  // var pairs = ["1","2","3","4","5","6","7","8","9","10","11"]

  return animals[Math.floor(Math.random() * animals.length)];
}

function Test(){
  var pairs = ["1","2","3","4","5","6","7","8","9","10","11"]
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    };
  
    const renderedAnimals = animals.map((animal, index) => {
        return(<html> <AnimalShow key={index} type={animal}/></html>);
  });
    return(
    <div>
        <div className="app">
            <button onClick={handleClick}></button>
            <div>{renderedAnimals}</div>
            
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