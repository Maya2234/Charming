// import image1 from './Pics/image1.JPG';
// import sound from './Pics/Senorita.mp3'
import React from 'react';
import PicShow from '../PicShow';
// import auto from './Pics/auto2.jpg'
// import canoe from './Pics/canoe.JPG'
// import car from './Pics/car.JPG'
// import car2 from './Pics/car2.jpg'
// import flex from './Pics/flex.JPG'
// import lake from './Pics/lake.JPG'
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


// eslint-disable-next-line
function getRandomPic({}){
    const pics = ['fisheye','daves','deal','dance','hug','hug2','kiss','cpr','tanu','headshot',];
    
    var random = Math.floor(Math.random()*pics.length);
    var image = pics[random]
    document.getElementById('image_shower').src = `./src/Pics/${image}`; 

};
function Main({  }) {
// eslint-disable-next-line
const [pics,setPics]=useState([]);

const handleClick = () => {  
    setPics([...pics,getRandomPic()]);
};

const Renderedpics = pics.map((pic,index)=>{
    return <PicShow key={index} type = {pic}/>
});


  return (
    <div>
        <div style={{ padding: '20px' }}>
            
            <div classname='App'>
                <div style={{ padding: 60, width: 1300, border: '1px solid black', 'fontSize': '70px', display: "flex", justifyContent: "center" }}>
                   Happy valentines beautiful! 
                   <div style={{ padding: '20px', display: "flex" }}>
                        <img src={heart} alt="pic broken:(" height={50} width={50} />
                    </div>
                </div>
            
        
            </div>                

                <div>

                    <div style={{ height: 350, fontColor: 'black', padding: '100 px', display: "flex", justifyContent: "center", margintop: 'auto', alignItems: "flex-start", flexdirection: 'column' }}>
                        <div style={{ height: 300, width: 500 ,'fontSize': '30px'}}>
                            
                            <br />
                            To celebrate this special day, 
                            <br />
                            <br />
                            I want to show you just how much
                            <br />
                            <br />
                            मुझे तुमसे बहुत बाप्यार है|
                            <br />
                            <br />
                            with all the reasons that I love you. 
                            <br />
                        </div>
                    </div>
                </div>
                <div>
                <div div id="img-container" style={{ display: "flex", justifyContent: "center", alignItems: "center",fontisze:'100px'}}>
                    
                        <button onClick={getRandomPic} style={{height:30,width:100,background:'green'}}></button> 

                </div>
                </div>
                <div style={{height:500}}>

                </div>

                {/* first row of pics
                <div style={{ display: 'flex', flexdirection: 'row', justifyContent: "center" }}>

                    <div style={{ padding: '20px', display: "flex" }}>
                        <img src={lake} alt="pic broken;(;(" height={290} width={520} />
                    </div>

                    <div style={{ padding: '20px', display: "flex", justifyContent: "center" }}>
                        <img src={canoe} alt="pic broken;(;(" height={400} width={300} />
                    </div>

                    <div style={{ padding: '20px', justifyContent: "center", alignItems: "center" }}>
                        <img src={auto} alt="pic broken;(;(" height={300} width={400} />
                    </div>
                </div>

                
                <div style={{ display: 'flex', flexdirection: 'row', justifyContent: "center" }}>
                    <div style={{ padding: '20px', display: "flex" }}>
                        <img src={image1} alt="pic broken;(;(" height={380} width={280} />
                    </div>
                    <div style={{ padding: '20px', justifyContent: "center", alignItems: "center" }}>
                        <img src={car} alt="pic broken;(;(" height={280} width={360} />
                    </div>
                    <div style={{ padding: '20px', display: "flex", justifyContent: "center" }}>
                        <img src={flex} alt="pic broken;(;(" height={400} width={300} />
                    </div>

                    <div style={{ padding: '20px', display: "flex", justifyContent: "center" }}>
                        <img src={car2} alt="pic broken;(;(" height={260} width={350} />
                </div>
            </div>  */}
        </div> 
  </div>            
  );
}

export default Main;
