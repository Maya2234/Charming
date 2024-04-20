import Link from './Pages/Link.js'
import Route from'./Pages/Route.js';
import Timeline from './Pages/timeline.js';
import MainPage from './MainPage.js';
import Valentines from './Pages/Valentines.js';
import Home from './Pages/Home.js';
import React from 'react';
import chair from './Pages/Pics/chair.png'
import maya from './Pages/Pics/maya.png'
import sarisha from './Pages/Pics/sarisha.png'


const App=()=>{
    return(
        <div>
        <div style={{'fontSize': '22px','font':'georgia', display: "flex", justifyContent: "center", height:30 }}>
            <div style={{marginTop:-60}}> <img src={maya} alt="" height={220} width={130}  /> </div>

            <i>Celebrating Sarisha Praveen Shetty & Maya Francesca Tomarchio</i> 
            <div style={{marginTop:-35}}><img src={sarisha} alt="" height={180} width={130}  /></div>

        </div>
            <div style={{'fontSize': '25px', display: "flex", justifyContent: "center",height:60 }}>
                
                    <Link to="/">Home&nbsp;&nbsp;|</Link>
                    
                
                <div>
                    <Link to="/ForYourBirthday">&nbsp;&nbsp;Love Letter&nbsp;&nbsp;|</Link>
                   
                </div>
                

                <div>
                    <Link to="/timeline">&nbsp;&nbsp;Timeline&nbsp;&nbsp;|</Link>
                </div>
                <div>
                    <Link to="/Valentines">&nbsp;&nbsp;So Many Things.</Link>
                    <mainPage/>
                </div>
            </div>
            <div>
                <Route path="/"> <Home/> </Route>
                <Route path="/timeline"> <Timeline/> </Route>
                <Route path="/ForYourBirthday"> <MainPage/> </Route>
                <Route path="/Valentines"> <Valentines/> </Route>
            </div>
            <div style={{height:600,display: "flex", justifyContent: "center", alignItems: "center"}}>
             <img src={chair} alt="pic broken;(;(" height={50} width={50} /> 

            </div>
        </div> 
    );    
}
export default App;
