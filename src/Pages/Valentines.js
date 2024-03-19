// import sound from './Pics/Senorita.mp3'
import React from 'react';
import heart from './Pics/heart.png'
import fisheye from './Pics/fisheye.jpg';
import deal from './Pics/deal.JPG'
import dance from './Pics/dance.JPG'
import hug from './Pics/hug.JPG'
import hug2 from './Pics/hug2.JPG'
import kiss from './Pics/kiss.JPG'
import cpr from './Pics/cpr.JPG'
import tanu from './Pics/tanu.JPG'
import headshot from './Pics/headshot.JPG'
import {useState} from 'react';
import '../App.css';
import AnimalShow from '../AnimalShow';

var AnimalIndex=0;
function getRandomAnimal() {
    const animals = ['daves','hug','hug2','kiss','cpr','headshot','bondage'];


  AnimalIndex=Math.floor(Math.random() * animals.length);
  return animals[AnimalIndex];
}

function Main({  }) {
    const [animals, setAnimals] = useState(["daves"]);

    const handleClick = () => {
      setAnimals(getRandomAnimal());
    };


  return (
    <div>
        <div style={{ padding: '20px' }}>
            
            <div classname='App' style={{'fontsize':'50px'}}>
                 Among other things,
                <div style={{ padding: 40, width: 1300,height:40, border: '1px solid black', 'fontSize': '40px', display: "flex", justifyContent: "center" }}>
                   HAPPY TWO MONTHS
                   <div style={{ padding: '20px', display: "flex" }}>
                        <img src={heart} alt="pic broken:(" height={50} width={50} />
                    </div>
                </div>
            
            </div>                

                <div>
                    <div style={{ height: 350, fontColor: 'black', padding: '100 px', display: "flex", justifyContent: "center", margintop: 'auto', alignItems: "flex-start", flexdirection: 'column' }}>
                        <div style={{ height: 300, width: 500 ,'fontSize': '30px'}}>
                            <br />
                            To celebrate our wonderful, sparkling, & radiant love, 
                            I'd like to give you just a little taste of some of the reasons why मुझे तुमसे बहुत बाप्यार है|
                            <br />
                            <br />
                            <br />
                            Click for more↓
                        </div>
                    </div>
                </div>
                <div>
                <div div id="img-container" style={{ fontisze:'100px'}}>
                
                <div className="app" style={{height:70}}>
                    <button id="pubgButton" onClick={handleClick}></button>
                </div>
                <div className="animal-list">
                    <AnimalShow type={animals} index={AnimalIndex} />
                </div>

        </div>
    </div>
        <div style={{height:500}}>

        </div>
        
    </div> 
</div>    
);}

export default Main;
