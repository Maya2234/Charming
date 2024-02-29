import image1 from './Pics/image1.JPG';
import sound from './Pics/Senorita.mp3'
import React from 'react';
import auto from './Pics/auto2.jpg'
import canoe from './Pics/canoe.JPG'
import car from './Pics/car.JPG'
import car2 from './Pics/car2.jpg'
import flex from './Pics/flex.JPG'
import lake from './Pics/lake.JPG'
import {BsFillPlayCircleFill} from 'react-icons/bs';
// import crouton from './Pics/crouton.jpg'
// import family from './Pics/family.JPG'
// import bar from './Pics/bar.jpg'
// import beach from './Pics/beach.JPG'
// import beach2 from './Pics/beach2.JPG'
// import beer from './Pics/beer.JPG'
// import reactDOM from 'react-dom/client'

// eslint-disable-next-line
function main({  }) {
  const AudioClick = () => {  
    alert("I love you")
    new Audio(sound).play();
};

  return (
    <div>
        <div style={{ padding: '20px' }}>
            
            <div style={{ height: 190, display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                <div style={{ padding: 60, width: 1300, border: '1px solid black', 'fontSize': '150px', display: "flex", justifyContent: "center", alignitems: 'center', textalign: 'center' }}>
                    S A R I S H A 
                </div>
            </div>
            
            <div style={{ height: 130 }}></div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" , 'fontSize': '40px'}}>
                    <BsFillPlayCircleFill onClick={AudioClick}></BsFillPlayCircleFill>
                </div>

                <div style={{ height: 30 }}></div>
                <div>

                    <div style={{ height: 350, fontColor: 'black', padding: '100 px', display: "flex", justifyContent: "center", margintop: 'auto', alignItems: "flex-start", flexdirection: 'column' }}>
                        <div style={{ height: 300, width: 500 ,'fontSize': '30px'}}>
                            मेरा जान, जब से मैं आपसे मिला हूं, आपने मुझे कई तरह से आगे बढ़ने की चुनौती दी है।
                            लेकिन कोई भी चुनौती हमारे प्यार की सकारात्मकता को छीन नहीं सकती। आपके लिए मैं
                            एक हजार भाषाएं सीखूंगा, एक हजार मील दौड़ूंगा। मुझे उम्मीद है कि हम साथ मिलकर गलतियाँ
                            करते रहेंगे और उनसे सीखते रहेंगे। मैं आपको जानने के लिए एक बेहतर इंसान हूं।
                            इससे अधिक सुंदर कोई नहीं है, इससे अधिक योग्य कोई नहीं है। मुझे आपके शरीर को छूना,
                            आपकी आंखों में घूरना पसंद है। हमारे पास एक पवित्र ऊर्जा है, मैं हमेशा तुममें रहूंगी और तुम
                            हमेशा मुझमें रहोगे। आपके प्यार के लिए धन्यवाद, आप मुझे पा सकते हैं।
                            <br />
                            <br />
                            मुझे तुमसे बहुत बाप्यार है,
                            <br />
                            <br />        माया
                            <br />
                            <br />
                        </div>
                    </div>
                    <div style={{ height: 420}}></div>
                </div>
                {/* first row of pics */}
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

                {/* ROW 2 */}
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
            </div>
        </div>
    </div>                
  );
}

export default main;
