import Link from './Pages/Link.js'
import Route from'./Pages/Route.js';
import Timeline from './Pages/timeline.js';
import MainPage from './MainPage.js';
import Valentines from './Pages/Valentines.js';
import Test from './Pages/Test.js';
import React from 'react';

const App=()=>{
    return(
        <div>
            <div style={{'fontSize': '20px', display: "flex", justifyContent: "center"  }}>
                <div>
                    <Link to="/main">Home&nbsp;&nbsp;|</Link>
                    <mainPage/>
                </div>
                <div>
                    <Link to="/Test">&nbsp;&nbsp;Test&nbsp;&nbsp;|</Link>
                    <mainPage/>
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
                <Route path="/timeline"> <Timeline /> </Route>
                <Route path="/Test"> <Test /> </Route>
                <Route path="/main"> <MainPage/> </Route>
                <Route path="/Valentines"> <Valentines/> </Route>
            </div>
        </div> 
    );    
}
export default App;
