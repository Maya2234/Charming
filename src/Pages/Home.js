import hug2 from './Pics/hug2.JPG'
import corsage from './Pics/corsage.JPG'
import cum from './Pics/cum.jpg'
import dumplings from './Pics/dumplings.jpg'
import kiss2 from './Pics/kiss2.JPG'
import tweezers from './Pics/tweezers.JPG'
import towels from './Pics/towels.jpg'
import pole from './Pics/pole.jpg'
import photoshoot from './Pics/photoshoot.JPG'
import jb from './Pics/jb.jpg'
import btea from './Pics/btea.jpg'
import bondage from './Pics/bondage.JPG'

function Home(){

    return(
        <html>
            <head>
            
            </head>
            <body>
                <div id="02/11-03/05">
                    <p style={{fontSize:25,height:50}}>02/11-03/05</p>
                    <div style={{ marginleft:100,display: 'flex', flexdirection: 'row' }}>

                    <div style={{ padding: '20px', justifyContent: "center", alignItems: "center" }}>
                        <img src={pole} alt="pic broken;(;(" height={400} width={300} />
                    </div>

                    <div style={{ padding: '20px', display: "flex", justifyContent: "center" }}>
                        <img src={kiss2} alt="pic broken;(;(" height={300} width={400} />
                    </div>

                    <div style={{ padding: '20px', display: "flex", justifyContent: "center" }}>
                        <img src={towels} alt="pic broken;(;(" height={400} width={300} />
                    </div>

                    <div style={{ padding: '20px', justifyContent: "center", alignItems: "center" }}>
                        <img src={dumplings} alt="pic broken;(;(" height={300} width={400} />
                    </div>
                    <div style={{ padding: '20px', display: "flex" }}>
                        <img src={btea} alt="pic broken;(;(" height={400} width={300} />
                    </div>
                    <div style={{ padding: '50px', display: "flex", marginleft:20 }}>
                        <img src={tweezers} alt="pic broken;(;(" height={300} width={400} />
                    </div>

                    <div style={{ padding: '20px', justifyContent: "center", alignItems: "center" }}>
                        <img src={photoshoot} alt="pic broken;(;(" height={400} width={300} />
                    </div>
                    <div style={{ padding: '20px', display: "flex" }}>
                        <img src={jb} alt="pic broken;(;(" height={400} width={300} />
                    </div>

                    <div style={{ padding: '20px', display: "flex", justifyContent: "center" }}>
                        <img src={bondage} alt="pic broken;(;(" height={400} width={300} />
                    </div>

                    
                </div>
                    
                </div>
            </body>
        </html>
    );   
}
export default Home;