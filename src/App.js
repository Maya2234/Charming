import Link from './Pages/Link.js'
import Route from'./Pages/Route.js';
import Timeline from './Pages/timeline.js';
import MainPage from './MainPage.js';
import Valentines from './Pages/Valentines.js';
import Test from './Pages/Test.js';
import Home from './Pages/Home.js';
import React from 'react';
import tennis from './Pages/Pics/tennis.jpg'


const App=()=>{
    return(
        <div>
        <div style={{'fontSize': '20px','font':'georgia', display: "flex", justifyContent: "center", height:30 }}>
           <i>Celebrating Sarisha Praveen Shetty & Maya Francesca Tomarchio</i> 
        </div>
            <div style={{'fontSize': '25px', display: "flex", justifyContent: "center",height:60 }}>
                
                    <Link to="/">Home&nbsp;&nbsp;|</Link>
                    
                
                <div>
                    <Link to="/ForYourBirthday">&nbsp;&nbsp;Love Letter&nbsp;&nbsp;|</Link>
                   
                </div>
                <div>
                
                    <Link to="/ILoveYou">&nbsp;&nbsp;Test&nbsp;&nbsp;|</Link>
                    
                </div>

                <div>
                    <Link to="/timeline">&nbsp;&nbsp;Timeline&nbsp;&nbsp;|</Link>
                </div>
                <div>
                    <Link to="/Valentines">&nbsp;&nbsp;Valentines</Link>
                    <mainPage/>
                </div>
            </div>
            <div>
                <Route path="/"> <Home/> </Route>
                <Route path="/timeline"> <Timeline/> </Route>
                <Route path="/ILoveYou"> <Test/> </Route>
                <Route path="/ForYourBirthday"> <MainPage/> </Route>
                <Route path="/Valentines"> <Valentines/> </Route>
            </div>
            <div>
            {/* <img src={tennis} alt="pic broken;(;(" height={400} width={300} /> */}

            </div>
        </div> 
    );    
}
export default App;
